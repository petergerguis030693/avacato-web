#!/usr/bin/env bash
# Soft-deploy avacato static export → /var/www/avacato only (no moussa/hotel/Fiskaly).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOST="${DEPLOY_HOST:-root@81.173.84.89}"
DOCROOT="${DEPLOY_DOCROOT:-/var/www/avacato}"
KNOWN_HOSTS="${KNOWN_HOSTS_FILE:-/tmp/known_hosts_avacato}"

cd "$ROOT"
if [[ ! -d out ]]; then
  echo "out/ missing — run npm run build first" >&2
  exit 1
fi

# Ensure world-readable before pack (Apache www-data must read).
find out -type d -exec chmod 755 {} +
find out -type f -exec chmod 644 {} +

TGZ="$(mktemp /tmp/avacato-soft-XXXXXX.tgz)"
trap 'rm -f "$TGZ"' EXIT
tar -C out -czf "$TGZ" .

SSH=(ssh -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile="$KNOWN_HOSTS")
if [[ -n "${SSHPASS:-}" ]] || [[ -n "${SSH_ROOT_PASSWORD:-}" ]]; then
  export SSHPASS="${SSHPASS:-$SSH_ROOT_PASSWORD}"
  RSH=(sshpass -e "${SSH[@]}")
else
  RSH=("${SSH[@]}")
fi

# Extract + harden ownership/mode so next deploy cannot leave UID 1000 / mode 600.
"${RSH[@]}" "$HOST" "set -euo pipefail
  DOCROOT='$DOCROOT'
  test -d \"\$DOCROOT\"
  # refuse to touch sibling vhosts
  case \"\$DOCROOT\" in
    /var/www/avacato|/var/www/avacato/) ;;
    *) echo \"Refusing non-avacato docroot: \$DOCROOT\" >&2; exit 2 ;;
  esac
  TMP=\$(mktemp -d /tmp/avacato-extract-XXXXXX)
  tar -C \"\$TMP\" -xzf -
  # Replace contents but keep docroot inode
  find \"\$DOCROOT\" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
  cp -a \"\$TMP\"/. \"\$DOCROOT\"/
  rm -rf \"\$TMP\"
  chown -R www-data:www-data \"\$DOCROOT\"
  find \"\$DOCROOT\" -type d -exec chmod 755 {} +
  find \"\$DOCROOT\" -type f -exec chmod 644 {} +
  ls -la \"\$DOCROOT\"/brand/ 2>/dev/null || ls -la \"\$DOCROOT\" | head
" < "$TGZ"

echo "soft-deploy OK → $HOST:$DOCROOT"
