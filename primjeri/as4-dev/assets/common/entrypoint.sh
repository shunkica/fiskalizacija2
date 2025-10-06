#!/bin/sh
set -e

. "$(dirname "$0")/func.sh"

if [ -z "$PUID" ]; then
    PUID=0
fi
if [ -z "$PGID" ]; then
    PGID=0
fi
if [ "$PUID" -eq 0 ]; then
    PUSER="root"
fi
if [ "$PGID" -eq 0 ]; then
    PGROUP="root"
fi
if [ -z "$PUSER" ]; then
    PUSER="puser"
fi
if [ -z "$PGROUP" ]; then
    PGROUP="pgroup"
fi
if [ -z "$APP_HOME" ]; then
    echo "Error: APP_HOME is not set."
    exit 1
fi
if [ -z "$APP_CMD" ]; then
    echo "Error: APP_CMD is not set."
    exit 1
fi

# Check if a group with PGID exists else create one
if ! getent group "$PGID" > /dev/null 2>&1; then
    if getent group "$PGROUP" > /dev/null 2>&1; then
        log "Changing PGID of existing group $PGROUP to $PGID"
        groupmod -g "$PGID" "$PGROUP"
    else
        log "Group $PGROUP does not exist, creating it with PGID $PGID"
        addgroup -g "$PGID" "$PGROUP"
    fi
fi

# Check if a user with PUID exists else create one
if ! id -u "$PUID" >/dev/null 2>&1; then
    if id -u "$PUSER" >/dev/null 2>&1; then
        log "Changing PUID of existing user $PUSER to $PUID"
        usermod -u "$PUID" -g "$PGID" "$PUSER"
    else
        log "User $PUSER does not exist, creating it with PUID $PUID"
        adduser -u "$PUID" -G "$PGROUP" -D "$PUSER"
    fi
fi

EFFECTIVE_USER=$(getent passwd "$PUID" | cut -d: -f1)
log "Effective user is $EFFECTIVE_USER"

EFFECTIVE_GROUP=$(getent group "$PGID" | cut -d: -f1)
log "Effective group is $EFFECTIVE_GROUP"

# add EFFECTIVE_USER to group EFFECTIVE_GROUP if not already a member
if ! id -nG "$EFFECTIVE_USER" | grep -qw "$EFFECTIVE_GROUP"; then
    log "Adding user $EFFECTIVE_USER to group $EFFECTIVE_GROUP"
    adduser "$EFFECTIVE_USER" "$EFFECTIVE_GROUP"
fi

# Any custom configuration goes in setup.sh #
if [ -f "$(dirname "$0")/setup.sh" ]; then
    log "Executing custom setup script."
    . "$(dirname "$0")/setup.sh"
fi

# Fix ownership
log "Setting ownership of $APP_HOME to $PUID:$PGID."
chown -R "$PUID:$PGID" "$APP_HOME" || { log "error" "Failed to set ownership of $APP_HOME."; exit 1; }

# Handle APP_DIRS (assuming it's a single directory or a space-separated list)
if [ -n "$APP_DIRS" ]; then
    for dir in $APP_DIRS; do
        if [ -n "$dir" ]; then
            log "Ensuring directory $dir exists and has correct ownership."
            mkdir -p "$dir" || { log "error" "Failed to create directory $dir."; exit 1; }
            chown -R "$PUID:$PGID" "$dir" || { log "error" "Failed to set ownership of $dir."; exit 1; }
        fi
    done
fi


# Run as PUSER
log "Running CMD: $APP_CMD"
exec su "$EFFECTIVE_USER" -c "$APP_CMD" || { log "error" "Failed to execute $APP_CMD as $PUSER."; exit 1; }
