#!/usr/bin/env bash
set -Eeuo pipefail

SN_SDK_VERSION="${SN_SDK_VERSION:-4.6.1}"

echo "[sn-build] Installing project dependencies"
if [ -f package-lock.json ]; then
  npm ci
elif [ -f package.json ]; then
  npm install
else
  echo "[sn-build] package.json not found. Skipping npm install."
fi

if [ -x ./node_modules/.bin/now-sdk ]; then
  NOW_SDK="./node_modules/.bin/now-sdk"
elif command -v now-sdk >/dev/null 2>&1; then
  NOW_SDK="now-sdk"
else
  echo "[sn-build] Installing ServiceNow SDK CLI: @servicenow/sdk@${SN_SDK_VERSION}"
  npm install --global "@servicenow/sdk@${SN_SDK_VERSION}"
  NOW_SDK="now-sdk"
fi

echo "[sn-build] Node: $(node -v)"
echo "[sn-build] npm:  $(npm -v)"
echo "[sn-build] ServiceNow SDK:"
"${NOW_SDK}" --version

echo "[sn-build] Running now-sdk build"
"${NOW_SDK}" build .
