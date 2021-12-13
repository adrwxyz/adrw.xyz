---
title: Cloudron Migration
date: 2021-12-13T21:45:05.554Z
slug: tech/cloudron-migration
tags:
  - Tech
---

My initial Cloudron VPS didn't last forever (shocking, I know). My new architecture would have two Cloudron instances, one on my home server for all data intensive apps (see Nextcloud) and one on a smaller, cheaper VPS for higher availability and port sensitive apps like email, contacts, calendar, and Bitwarden.

The new cheaper VPS had a smaller disk so I couldn't do a full restore of the original Cloudron to it. Instead I had to move each piece over manually which had some unexpected hiccups along the way.

Thanks to the maintainers and other folks at the Cloudron Forums who helped with this migration ([post 1](https://forum.cloudron.io/topic/6137/sharding-cloudron-or-partial-restores?_=1639434906166), [post 2](https://forum.cloudron.io/topic/6162/sogo-contacts-export)).

## Bitwarden

By far the easiest was Bitwarden. Not using LDAP and being entirely self-contained meant I could install a vanilla Bitwarden app on the new VPS, then in settings for that Bitwarden Cloudron app, use "Restore from Backup" from the original Cloudron's backup. Type in the backup and encryption credentials, wait a few minutes, and all the data was restored as expected. Then I flipped the DNS over to the new VPS and clients started using the new Bitwarden without any settings changes. _chef kiss_

## Email

Each existing Cloudron user and mailbox was manually created, then DNS records were created (specifically MX records) to point at the cheaper VPS. This flipped all new traffic over to these new mailboxes.

I updated the existing MX records pointing to the old server to a very low priority (255) to leave them accessible manually as email servers for the backfill but keep them from taking any new messages.

To backfill the existing emails, I used [imapsync](https://imapsync.lamiral.info/) as recommended in the [Cloudron docs](https://docs.cloudron.io/guides/import-email/#imapsync). The local tool didn't work for some reason on my machine but their [in-browser offering](https://imapsync.lamiral.info/X/) worked well and in an afternoon 6 mailboxes were synced over. The sync includes replicating file structure (directories) and all messages which made the process surprisingly pain free

## Contacts & Calendar in SOGo

I used SOGo for Contacts & Calendar and it is still the most problematic.

First, Cloudron can't fully restore from backup without manually tweaking the DB since the SOGo DB keeps records of the installation directory which makes it brittle to restores.

Instead, what was [recommended](https://forum.cloudron.io/topic/6137/sharding-cloudron-or-partial-restores?_=1639434906166) was to manually export from the old SOGo instance, then import into the new ones through the SOGo GUI.

Easy enough.

But unfortunately I encountered a strange limitation of SOGo's Exchange ActiveSync implementation that truncates saved phone numbers and email addresses to only 2 per contact entry. Though it initially looked like the import was successful, I soon noticed when my phone synced that many contacts had missing phone numbers or emails and apps like Signal weren't matching up conversations with my contacts anymore.

I'm probably going to have to go the even more manual route of syncing both instances to the same Mac or iPhone and then manually dragging the old contacts to the new instance and let macOS handle moving them with all the existing fields.

If anyone has a better solution, I'm [all ears](mailto:hello@adrw.xyz).
