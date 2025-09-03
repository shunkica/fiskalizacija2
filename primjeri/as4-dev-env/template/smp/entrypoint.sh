#!/bin/sh

PUID=${PUID:-1000}
PGID=${PGID:-1000}
APP_USER=puser
APP_HOME="/opt/smp"
APP_DIRS="${CATALINA_HOME}"
APP_CMD="${CATALINA_HOME}/bin/catalina.sh run"

# Log function
log() {
    echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] entrypoint: $1"
}

# Check if a group with PGID exists else create one
if ! getent group "$PGID" > /dev/null 2>&1; then
    log "Creating group with PGID $PGID"
    addgroup -g "$PGID" "$APP_USER$PGID"
fi

# Check if a user with PUID exists else create one
if ! id -u "$PUID" >/dev/null 2>&1; then
    log "Creating user with PUID $PUID"
    adduser -u "$PUID" -G "$APP_USER$PGID" -D "$APP_USER"
fi

EFFECTIVE_USER=$(getent passwd "$PUID" | cut -d: -f1)
log "Effective user is $EFFECTIVE_USER"

# add EFFECTIVE_USER to group PGID if not already a member
if ! id -nG "$EFFECTIVE_USER" | grep -qw "$(getent group "$PGID" | cut -d: -f1)"; then
    log "Adding user $EFFECTIVE_USER to group with PGID $PGID"
    adduser "$EFFECTIVE_USER" "$(getent group "$PGID" | cut -d: -f1)"
fi

######################################
# Any custom configuration goes here #
######################################


######################################
# End custom configuration           #
######################################


# Fix ownership
log "Setting ownership of $APP_HOME to $PUID:$PGID."
chown -R "$PUID:$PGID" "$APP_HOME" || { log "error" "Failed to set ownership of $APP_HOME."; exit 1; }

# Handle APP_DIRS (assuming it's a single directory or a space-separated list)
for dir in $APP_DIRS; do
    if [ -n "$dir" ]; then
        log "Ensuring directory $dir exists and has correct ownership."
        mkdir -p "$dir" || { log "error" "Failed to create directory $dir."; exit 1; }
        chown -R "$PUID:$PGID" "$dir" || { log "error" "Failed to set ownership of $dir."; exit 1; }
    fi
done

# Run as APP_USER
log "Running CMD: $APP_CMD"
exec su "$EFFECTIVE_USER" -c "$APP_CMD" || { log "error" "Failed to execute $APP_CMD as $APP_USER."; exit 1; }
