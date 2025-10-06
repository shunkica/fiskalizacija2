log() {
    echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] entrypoint: $1"
}

# Parameters:
# $1 - file path
# $2 - property name
# $3 - property value
# $4 - optional - if set, then empty property value is allowed
set_config() {
    if [ -z "$1" ] || [ -z "$2" ]; then
        log "set_config: Missing parameters."
        return 1
    fi
    if [ -z "$3" ] && [ -z "$4" ]; then
        log "set_config: [$2] Property value is empty and not allowed."
        return 1
    fi

    file="$1"
    key="$2"
    value="$3"

    # Trim whitespace from value
    value=$(echo "$value" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')

    if grep -qE "^[[:space:]]*${key}[[:space:]]*=" "$file"; then
        # Key exists uncommented, update first occurrence only
        awk -v key="$key" -v val="$value" '
            !done && /^[[:space:]]*'"$key"'[[:space:]]*=/ { print key"="val; done=1; next }
            { print }
        ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        log "Updated existing property: $key=$value"
    elif grep -qE "^[[:space:]]*#[[:space:]]*${key}[[:space:]]*=" "$file"; then
        # Key exists commented, uncomment and update first occurrence only
        awk -v key="$key" -v val="$value" '
            !done && /^[[:space:]]*#[[:space:]]*'"$key"'[[:space:]]*=/ { print key"="val; done=1; next }
            { print }
        ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        log "Uncommented and updated property: $key=$value"
    else
        # Key does not exist, will append it
        echo "$key=$value" >> "$file"
        log "Added new property: $key=$value"
    fi
}
