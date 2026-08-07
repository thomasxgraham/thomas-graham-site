#!/usr/bin/env bash
set -euo pipefail

test_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd "$test_dir/../.." && pwd)"

test_python="python3"
if ! "$test_python" -c 'import yaml' >/dev/null 2>&1; then
  test_env="$(mktemp -d "${TMPDIR:-/tmp}/pm-agent-tests.XXXXXX")"
  trap 'rm -rf "$test_env"' EXIT
  "$test_python" -m venv "$test_env/venv"
  "$test_env/venv/bin/python" -m pip install --quiet --requirement "$test_dir/requirements-test.txt"
  test_python="$test_env/venv/bin/python"
fi

"$test_python" "$test_dir/test_product_agent.py"
git -C "$repo_root" diff --check
