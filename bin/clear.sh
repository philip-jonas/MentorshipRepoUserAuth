#! #!/usr/bin/env bash
REPO_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
cd "$REPO_ROOT"

echo "Clearing user_auth"
cd "$REPO_ROOT/user_auth" && rm -rf node_modules package-lock.json build

echo "Clearing auth"
cd "$REPO_ROOT/auth" && rm -rf node_modules package-lock.json dist