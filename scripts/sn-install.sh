#!/usr/bin/env bash
set -Eeuo pipefail

SN_SDK_VERSION="${SN_SDK_VERSION:-latest}"
SN_REINSTALL="${SN_REINSTALL:-false}"
SN_OPEN_BROWSER="${SN_OPEN_BROWSER:-false}"

: "${SN_SDK_INSTANCE_URL:?SN_SDK_INSTANCE_URL is required}"
: "${SN_SDK_USER:?SN_SDK_USER is required}"
: "${SN_SDK_USER_PWD:?SN_SDK_USER_PWD is required}"

export SN_SDK_NODE_ENV="${SN_SDK_NODE_ENV:-SN_SDK_CI_INSTALL}"

echo "[sn-install] Node: $(node -v)"
echo "[sn-install] npm:  $(npm -v)"

if ! command -v now-sdk >/dev/null 2>&1; then
  echo "[sn-install] Installing ServiceNow SDK CLI: @servicenow/sdk@${SN_SDK_VERSION}"
  npm install --global "@servicenow/sdk@${SN_SDK_VERSION}"
fi

echo "[sn-install] ServiceNow SDK:"
now-sdk --version

echo "[sn-install] Installing project dependencies"
if [ -f package-lock.json ]; then
  npm ci
elif [ -f package.json ]; then
  npm install
else
  echo "[sn-install] package.json not found."
  exit 1
fi

echo "[sn-install] Running now-sdk build"
now-sdk build .

echo "[sn-install] Checking ServiceNow API reachability"
HTTP_CODE="$(
  curl -sS -o /tmp/sn-check.json \
    -w "%{http_code}" \
    --connect-timeout 20 \
    --max-time 60 \
    -u "${SN_SDK_USER}:${SN_SDK_USER_PWD}" \
    "${SN_SDK_INSTANCE_URL}/api/now/table/sys_user?sysparm_limit=1&sysparm_fields=sys_id,user_name" || true
)"

echo "[sn-install] ServiceNow API HTTP status: ${HTTP_CODE}"

case "${HTTP_CODE}" in
  200)
    echo "[sn-install] ServiceNow API authentication succeeded."
    ;;
  401)
    echo "::error::ServiceNow authentication failed. Check SN_SDK_USER / SN_SDK_USER_PWD."
    exit 1
    ;;
  403)
    echo "::error::ServiceNow authorization failed. Check roles, ACLs, IP restrictions, or API permissions."
    exit 1
    ;;
  000)
    echo "::error::ServiceNow instance is unreachable from GitHub Actions."
    exit 1
    ;;
  *)
    echo "::warning::Unexpected ServiceNow API status: ${HTTP_CODE}"
    cat /tmp/sn-check.json || true
    ;;
esac

echo "[sn-install] Installing app to ServiceNow"
now-sdk install \
  --source . \
  --reinstall "${SN_REINSTALL}" \
  --open-browser "${SN_OPEN_BROWSER}"