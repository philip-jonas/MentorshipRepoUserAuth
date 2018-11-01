#! #!/usr/bin/env bash
REPO_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
cd "$REPO_ROOT"

echo "Running user_auth";
cd "$REPO_ROOT/user_auth" && npm run start;

echo "Running auth";
cd "$REPO_ROOT/auth" && npm run start;