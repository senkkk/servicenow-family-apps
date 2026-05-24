#!/usr/bin/env bash
set -Eeuo pipefail

# ============================================================
# ServiceNow SDK 開発用の Codex Cloud セットアップ
# - Codex Cloud で事前設定された Node.js 22 を使用します
# - プロジェクトの依存関係をインストールします
# - ServiceNow SDK CLI をインストールします
# - 開発時の検証として now-sdk build を実行します
# - ServiceNow への認証は行いません
# - ServiceNow へのデプロイまたはインストールは行いません
# ============================================================

log() {
  printf '\n\033[1;34m[codex-setup]\033[0m %s\n' "$*"
}

warn() {
  printf '\n\033[1;33m[codex-warn]\033[0m %s\n' "$*" >&2
}

fail() {
  printf '\n\033[1;31m[codex-error]\033[0m %s\n' "$*" >&2
  exit 1
}

has_command() {
  command -v "$1" >/dev/null 2>&1
}

SN_SDK_VERSION="${SN_SDK_VERSION:-latest}"
SN_RUN_BUILD_CHECK="${SN_RUN_BUILD_CHECK:-1}"

log "事前設定された Node.js を確認しています"
if ! has_command node; then
  fail "Node.js がインストールされていません。Codex Cloud の環境設定で Node.js 22 を設定してください。"
fi

if ! has_command npm; then
  fail "npm がインストールされていません。Node.js 22 とあわせて npm を設定してください。"
fi

log "Node / npm のバージョン"
node -v
npm -v

log "npm のプロキシ設定を削除しています"
npm config delete proxy >/dev/null 2>&1 || true
npm config delete http-proxy >/dev/null 2>&1 || true
npm config delete https-proxy >/dev/null 2>&1 || true

log "プロジェクトの依存関係をインストールしています"
if [ -f package-lock.json ]; then
  npm ci
elif [ -f package.json ]; then
  npm install
else
  warn "package.json が見つかりません。npm 依存関係のインストールをスキップします。"
fi

log "ServiceNow SDK CLI をインストールしています: @servicenow/sdk@${SN_SDK_VERSION}"
npm install --global "@servicenow/sdk@${SN_SDK_VERSION}"

log "ServiceNow SDK のバージョン"
now-sdk --version

if [ "${SN_RUN_BUILD_CHECK}" = "1" ]; then
  log "ServiceNow SDK のビルドチェックを実行しています"
  now-sdk build .
else
  warn "SN_RUN_BUILD_CHECK が 1 ではありません。now-sdk build をスキップします。"
fi

log "Codex セットアップが完了しました。"
