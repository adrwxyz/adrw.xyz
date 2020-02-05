---
templateKey: note
title: NextCloud
date: 2019-12-30T21:45:05.554Z
path: /2019-12-30-nextcloud
---
# Kimsufi Install Steps

## Context

- Freshly provisioned Kimsufi dedicated server with Ubuntu 18.04 installed

## SSH

- Kimsufi will send email with ssh password for `root@IP`
- Your local computer may complain when you try to login with a `Permission denied(publickey,password)` error. 
  * To fix, you will need to edit your local SSH config to allow `ChallengeResponseAuthentication` and `PasswordAuthentication`. Be sure to turn these back off once server SSH setup is done.
* Once on the server, follow these steps to add the ssh keys from your computer to the `~/.ssh/authorized_keys` file on the server: [guide](https://www.cyberciti.biz/faq/how-to-set-up-ssh-keys-on-linux-unix/)
* Once you've confirmed login works with keys and not password, disable `PasswordAuthentication` in server SSH config (likely in `/etc/ssh/sshd_config`).

## Nextcloud

* Install using Ubuntu Snap `snap install nextcloud --edge`. We're install edge to get the latest Nextcloud version (18) since Snap stable is still on 16.X.




# AWS Install Steps

* Install on AWS: <https://medium.com/@n.moretto/nextcloud-on-aws-ad244739c586>
* Create second EC2 instance for OnlyOffice
* SSH in and use snap to install `onlyoffice-ds`
* Use EFF certbot instructions to get SSL certificate for `onlyoffice-ds` server <https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx>
