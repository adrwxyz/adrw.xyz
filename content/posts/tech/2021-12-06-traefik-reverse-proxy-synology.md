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
