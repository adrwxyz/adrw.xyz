---
templateKey: note
title: NextCloud
date: 2019-12-30T21:45:05.554Z
path: /2019-12-30-nextcloud
---
# Kimsufi Install Steps

## Context

- Freshly provisioned Kimsufi dedicated server with Ubuntu 18.04 installed

## DNS

- Add an A record to your domain provider DNS records pointing to the IP address of the provisioned server. Using a subdomain like `cloud.` is a good pattern. 
  - Example: `A 192.222.162.212 cloud.andrew.fm`

## SSH

- Kimsufi will send email with ssh password for `root@IP`
- Your local computer may complain when you try to login with a `Permission denied(publickey,password)` error. 
  * To fix, you will need to edit your local SSH config to allow `ChallengeResponseAuthentication` and `PasswordAuthentication`. Be sure to turn these back off once server SSH setup is done.
* Once on the server, follow these steps to add the ssh keys from your computer to the `~/.ssh/authorized_keys` file on the server: [guide](https://www.cyberciti.biz/faq/how-to-set-up-ssh-keys-on-linux-unix/)
* Once you've confirmed login works with keys and not password, disable `PasswordAuthentication` in server SSH config (likely in `/etc/ssh/sshd_config`).

## Firewall

* TODO

## Encrypt Nextcloud Folders

* Use [eCryptfs](https://help.ubuntu.com/lts/serverguide/ecryptfs.html) to encrypt the Nextcloud Snap directories to protect user data 

* TODO
* Look into full disk encryption or encrypting the snap directory

## Nextcloud

* Install using Ubuntu Snap `snap install nextcloud --edge`. We're install edge to get the latest Nextcloud version (18) since Snap stable is still on 16.X.
* Set higher memory limits for php `snap set nextcloud php.memory-limit=512M`
* Get HTTPS certificates from Let's Encrypt `nextcloud.enable-https lets-encrypt`
* Go to your domain and create an Admin user, leave checked the box to auto install core apps (Contacts, Calendar, Mail, Talk, OnlyOffice)
  * Note: until all of these core apps are updated for Nextcloud 18, they won't be installed
  * You'll need to manually go and install Contacts, Calendar, ONLYOFFICE from the apps menu, clicking the red button that you are sure you want to install an untested app

# Cloudron

## PTR Record

* Needs to be configured with Kimsufi since it is a reverse lookup. Go to IP from main dashboard, then settings for the primary IP, then add `my.domain.com` as the reverse.

## Namecheap API

* Turn on Namecheap API in your account / settings / tools. You may need to live message support to get them to enable it.
* Cloudron can configure DNS records for you using the API for ease of use.

# AWS Install Steps

* Install on AWS: <https://medium.com/@n.moretto/nextcloud-on-aws-ad244739c586>
* Create second EC2 instance for OnlyOffice
* SSH in and use snap to install `onlyoffice-ds`
* Use EFF certbot instructions to get SSL certificate for `onlyoffice-ds` server <https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx>

# Minio Key Generation

* Use Python REPL and [secrets library](https://docs.python.org/3/library/secrets.html)

```
import secrets
secrets.token_urlsafe(30)
```
