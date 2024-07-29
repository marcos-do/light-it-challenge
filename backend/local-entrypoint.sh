#!/bin/sh
set -e

# /app/backend/wait-for-it.sh db:5432 -t 15 -- echo "Database ready!"

npm install

host="$1"
shift
cmd="$@"

if [ "$DEBUG_INIT" != "true" ]; then
  npx prisma generate
fi

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"