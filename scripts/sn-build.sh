#!/usr/bin/env bash
set -Eeuo pipefail

SN_SDK_VERSION="${SN_SDK_VERSION:-latest}"

echo "[sn-build] Node: $(node -v)"
echo "[sn-build] npm:  $(npm -v)"

if ! command -v now-sdk >/dev/null 2>&1; then
  echo "[sn-build] Installing ServiceNow SDK CLI: @servicenow/sdk@${SN_SDK_VERSION}"
  npm install --global "@servicenow/sdk@${SN_SDK_VERSION}"
fi

echo "[sn-build] ServiceNow SDK:"
now-sdk --version

echo "[sn-build] Installing project dependencies"
if [ -f package-lock.json ]; then
  npm ci
elif [ -f package.json ]; then
  npm install
else
  echo "[sn-build] package.json not found. Skipping npm install."
fi

echo "[sn-build] Running now-sdk build"
now-sdk build .