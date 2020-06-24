---
title: NextCloud
date: 2019-12-30T21:45:05.554Z
slug: code/2019-12-30-nextcloud
tags:
  - Code
---

# Kimsufi Install Steps

## Context

- Freshly provisioned Kimsufi dedicated server with Ubuntu 18.04 installed

## DNS

- Add an A record to your domain provider DNS records pointing to the IP address of the provisioned server. Using a subdomain like `cloud.` is a good pattern.
  - Example: `A 192.222.162.212 cloud.your.domain`

## SSH

- Kimsufi will send email with ssh password for `root@IP`
- Your local computer may complain when you try to login with a `Permission denied(publickey,password)` error.
  - To fix, you will need to edit your local SSH config to allow `ChallengeResponseAuthentication` and `PasswordAuthentication`. Be sure to turn these back off once server SSH setup is done.
- Once on the server, follow these steps to add the ssh keys from your computer to the `~/.ssh/authorized_keys` file on the server: [guide](https://www.cyberciti.biz/faq/how-to-set-up-ssh-keys-on-linux-unix/)
- Once you've confirmed login works with keys and not password, disable `PasswordAuthentication` in server SSH config (likely in `/etc/ssh/sshd_config`).

# Cloudron

## PTR Record

- Needs to be configured with Kimsufi since it is a reverse lookup. Go to IP from main dashboard, then settings for the primary IP, then add `my.domain.com` as the reverse.

## Namecheap API

- Turn on Namecheap API in your account / settings / tools. You may need to live message support to get them to enable it.
- Cloudron can configure DNS records for you using the API for ease of use.

## Cloudron Email

- Though Cloudron will recommend using encrypted ports for IMAP and SMTP, the [forum](https://forum.cloudron.io/topic/1319/nextcloud-email-client-cannot-be-setup) recommends using unencrypted port 25 for SMTP since the encrypted port 587 doesn't currently work and communication is internal to VM so it isn't a security concern.
- SMTP Port 25 also lets Cloudron Email be set up with certain pickey mobile phone clients like Microsoft Outlook.
- Using SOGo as front end for email, labels are not available in automatic filtering so use of folders can be an alternative.

## Contacts & Calendar

In testing of Nextcloud (Mail, Contacts, Calendar), SOGo (Mail, Contacts, Calendar), and Rainloop (Mail), SOGo seems to have the best balance of full features (Mail, Contacts, Calendar), robust DAV connectivity integration, and UI (Material Design).

SOGo install and configuration is easy with Cloudron. Install the app and it comes automatically configured. [Cloudron docs](https://cloudron.io/documentation/apps/sogo/) and SOGo app have URLs to assist in setup of mobile and desktop CardDAV and CalDAV clients.

### Migration from Google Calendar/Contacts

**First, do not use the default "Personal" contacts address book or calendar as your SOGO import target.** These can not be deleted so if you mess up the import, you'll need to reinstall the SOGO instance in order to clear the address book / calendar. Very annoying.

Start with creating additional address book / calendars that you can import into without risk of not being able to wipe it.

To migrate from Contacts, download the export vCard VCF file and upload to SOGO in the newly created non-Personal address book.

To migrate from calendar, download the ICS files for all calendars in your Google account. Now open in Sublime Text, VS Code or your text editor of choice. Search for your Gmail email address and replace with your new SOGO one.

Note that you should check a couple variations of your Gmail address because ICS files do manual linewraps. Example below.

```
// Original
ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=johnd
 oe@gmail.com;X-NUM-GUESTS=0:mailto:johndoegmail.com

// Replaced
ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=john@d
 oe.xyz;X-NUM-GUESTS=0:mailto:john@doe.xyz
```

Import into your non-Personal calendar in SOGO and you're done!

### DAV DNS Configuration

Adding additional TXT and SRV records to DNS can make configuring DAV clients (Contacts, Calendar, WebDAV file browsing) easier.

- [Cloudron Forum](https://forum.cloudron.io/topic/1296/add-dns-dav-registring/4)
- I think Cloudron 5.0.5+ has fixed and automated this for `.well-known/*` paths like DAV

## Nextcloud

After installing in Cloudron, the first time you launch it you can login as admin using basic credentials that Cloudron initialized.

- Login and immediately change the admin password for that account.
- Add your named user (your Cloudron login johndoe@) to the admins group so you can administer Nextcloud with your primary Cloudron login.

## Minio Key Generation

- Minio is a S3 API compatible bucket storage app that is available on most platforms including Synology and Cloudron. I use it for now to have a bucket on my Synology that Cloudron uses for backup. To setup, it needs a key (hence the steps below).
- Use Python REPL and [secrets library](https://docs.python.org/3/library/secrets.html)

```
import secrets
secrets.token_urlsafe(30)
```

### Nextcloud

As an alternative to SOGo, Nextcloud can be used by installing their Mail, Contacts, and Calendar apps. They are much less full featured and aspects (clicking on certain icons/functionality, importing contacts) seemed buggy even in initial testing.

- Log in to Contacts (CardDAV) and Calendar (CalDAV) in respective clients with the URL `https://nextcloud.domain/remote.php/dav/`. In testing, iOS with this URL works automatically without any further custom settings.

# Rough Notes (Not used in Production)

## Firewall

- TODO

## Encrypt Nextcloud Folders

- Use [eCryptfs](https://help.ubuntu.com/lts/serverguide/ecryptfs.html) to encrypt the Nextcloud Snap directories to protect user data
- TODO
- Look into full disk encryption or encrypting the snap directory

## Nextcloud Install with Snap

- Install using Ubuntu Snap `snap install nextcloud --edge`. We're install edge to get the latest Nextcloud version (18) since Snap stable is still on 16.X.
- Set higher memory limits for php `snap set nextcloud php.memory-limit=512M`
- Get HTTPS certificates from Let's Encrypt `nextcloud.enable-https lets-encrypt`
- Go to your domain and create an Admin user, leave checked the box to auto install core apps (Contacts, Calendar, Mail, Talk, OnlyOffice)
  - Note: until all of these core apps are updated for Nextcloud 18, they won't be installed
  - You'll need to manually go and install Contacts, Calendar, ONLYOFFICE from the apps menu, clicking the red button that you are sure you want to install an untested app

## AWS Install Steps

- Install on AWS: <https://medium.com/@n.moretto/nextcloud-on-aws-ad244739c586>
- Create second EC2 instance for OnlyOffice
- SSH in and use snap to install `onlyoffice-ds`
- Use EFF certbot instructions to get SSL certificate for `onlyoffice-ds` server <https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx>
