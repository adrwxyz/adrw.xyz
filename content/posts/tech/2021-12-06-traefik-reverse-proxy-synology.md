---
title: Traefik Reverse Proxy on Synology DSM
date: 2021-12-06T21:45:05.554Z
slug: tech/traefik-reverse-proxy-synology
tags:
  - Tech
---

Synology DSM is great out of the box with training wheels but eventually you want to do a wheelie and need to free all of the default port bindings so you can run your own reverse proxy.

In my case, I wanted to run Traefik in a Docker container and let it handle routing of HTTPS and other port traffic since editing Traefik YAML files gets to be a bit easier and faster than clicking through Synology's Reverse Proxy UI for every port and service combination.

This [free_ports.sh](https://gist.github.com/hjbotha/f64ef2e0cd1e8ba5ec526dcd6e937dd7) script ended up doing the trick to free Synology's bindings of standard HTTPS, and HTTP ports which then would allow the Traefik container to bind to 80, 443 and others without contention and thus manage reverse proxy and SSL certificates and termination outside of Synology DSM.

```bash
#! /bin/bash

# NEWLY ADDED BACKUP FUNCTIONALITY IS NOT FULLY TESTED YET, USE WITH CARE, ESPECIALLY DELETION
# Developed for DSM 6/7. Not tested on other versions.
# Steps to install
# Save this script in one of your shares
# Backup /usr/syno/share/nginx/ as follows:
# # cd /usr/syno/share/
# # tar cvf ~/nginx.tar nginx
# Run this script as root
# Reboot and ensure everything is still working
# If not, restore the backup and post a comment on this script's gist page
# If it did, schedule it to run at boot
#   through Control Panel -> Task Scheduler

HTTP_PORT=81
HTTPS_PORT=444

BACKUP_FILES=true # change to false to disable backups
BACKUP_DIR=/volume1/apps/free_ports/backup
DELETE_OLD_BACKUPS=false # change to true to automatically delete old backups.
KEEP_BACKUP_DAYS=30
CURRENT_BACKUP_DIR="$BACKUP_DIR/$DATE"

DATE=$(date +%Y-%m-%d-%H-%M-%S)

if [ "$BACKUP_FILES" == "true" ]; then
  mkdir -p "$CURRENT_BACKUP_DIR"
  cp /usr/syno/share/nginx/*.mustache "$CURRENT_BACKUP_DIR"
fi

if [ "$DELETE_OLD_BACKUPS" == "true" ]; then
  find "$BACKUP_DIR/" -type d -mtime +$KEEP_BACKUP_DAYS -exec rm -r {} \;
fi

sed -i "s/^\([ \t]\+listen[ \t]\+[]:[]*\)80\([^0-9]\)/\1$HTTP_PORT\2/" /usr/syno/share/nginx/*.mustache
sed -i "s/^\([ \t]\+listen[ \t]\+[]:[]*\)443\([^0-9]\)/\1$HTTPS_PORT\2/" /usr/syno/share/nginx/*.mustache

echo "Made these changes:"

diff /usr/syno/share/nginx/ $CURRENT_BACKUP_DIR 2>&1 | tee $CURRENT_BACKUP_DIR/changes.log

# Perform nginx reload if running on DSM 7.X
if grep -q 'majorversion="7"' "/etc.defaults/VERSION"; then
  nginx -s reload
fi
# Might need to manually run $ sudo systemctl restart nginx
```
