---
title: Synology Raid Expansion
date: 2021-12-28T21:45:05.554Z
slug: tech/synology-raid-expansion
tags:
  - Tech
---

After 5.5 years of faithful service, one of the drives in my Synology DS916+ 4-bay NAS died.

Since I had Synology Hybrid Raid, I could lose one drive and have no data loss. I slotted a new drive in and it rebuilt successfully over a few days.

I got a good deal on some higher capacity drives so I decided to add another drive and switch the RAID mode to SHR-2 which can handle the loss of two drives. This RAID expansion ended up running much more slowly and initially was estimated to take over 2 weeks for ~5-6TB of data in 8TB of total capacity.

In Synology GUI in `Volume Manager > Global Settings`, there's an option in [RAID Resync](https://kb.synology.com/en-us/DSM/help/DSM/StorageManager/storage_pool_adjust_resync_speed?version=6) to allow for faster speed which made a big difference cutting expansion time down to 1 week.

I turned off VMs and other disk heavy services to try and improve throughput but it didn't seem to make much of a difference.

Then, I came across [this great script](https://gist.github.com/fbartho/2cb998dc1f10d13c124bf736286fd757#file-2-accelerate_expansion-sh) that allows much more fine tweaking of RAID resync settings than the Synology GUI reveals. Using the script as provided cut resync time from a week to 13 hours.

```
# Prepare
sudo su -

cat /sys/block/md2/md/stripe_cache_size
cat /proc/sys/dev/raid/speed_limit_min
cat /sys/block/md2/queue/read_ahead_kb

cat /proc/mdstat

# Accelerate RAID Expansion
echo 32768 > /sys/block/md2/md/stripe_cache_size
echo 50000 > /proc/sys/dev/raid/speed_limit_min
echo 32768 > /sys/block/md2/queue/read_ahead_kb

# Cleanup
echo 4096 > /sys/block/md2/md/stripe_cache_size
echo 10000 > /proc/sys/dev/raid/speed_limit_min
echo 512 > /sys/block/md2/queue/read_ahead_kb
```

In the `cat /proc/mdstat` readout, the speed change from initial was ~4000K/sec before Synology GUI change to ~20000K/sec with the faster resync to over ~48000K/sec with the script refinements.

Speeding up resync was a big win to reduce the amount of time the RAID volume was in a rebuilding/expanding state.

This might not always be the case but while the faster rebuild/expansion was running, my Synology DSM from browser was unavailable which was not ideal but since the expansion was supposed to finish in 13 hours and be done the next day, I decided to let it run.

In the case where the DSM browser GUI isn't available, I [learned](https://www.zarino.co.uk/post/synology-package-start-stop/) you can start and stop packages from SSH with the following commands.

```
$ /usr/syno/bin/synopkg start zerotier
$ /usr/syno/bin/synopkg stop zerotier
$ /usr/syno/bin/synopkg list
...
zerotier-1.1.1: An Ethernet switch for Earth. Create flat virtual networks of almost unlimited size...
# The package name is everything before the dash and the version number.
```
