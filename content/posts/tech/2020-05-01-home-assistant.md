---
title: Home Assistant
date: 2020-05-01T13:43:39.822Z
slug: tech/2020-05-01-home-assistant
tags:
  - Tech
---

I've been curious about ways to do IoT and smart home without accepting the surveillance, hacking, and privacy intrusion of suspect companies like Nest or potentially incompetent implementations from legacy thermostat or camera manufacturers.

I think [Home Assistant](https://www.home-assistant.io/) might be the trick. Self hosted smart home server with a huge community of maintained integrations for cameras, themostats, and more.

## Adding Z-Wave USB to Synology

- Find the USB path corresponding to `cp210x`, there should be two for the GoControl HUSBZB-1, one for Z-Wave and one for Zigbee
  ```
  $ dmesg | grep tty
  [186337.625263] usb 3-1: cp210x converter now attached to ttyUSB0
  [186337.640052] cp210x ttyUSB0: cp210x converter now disconnected from ttyUSB0
  [186339.975206] usb 3-1: cp210x converter now attached to ttyUSB0
  [186339.982087] usb 3-1: cp210x converter now attached to ttyUSB1
  ```
- Add the Z-Wave integration in HASS UI and the `/dev/ttyUSB0` path

## Remote Access with Synology Reverse Proxy

Remember to set the [WebSocket Custom Header](https://github.com/home-assistant/core/issues/24750) on the rules for login to work.

Follow instructions on [duckdns.org](https://duckdns.org) to create a DDNS account (preferably using Github login) and then reserve a `*.duckdns.org` subdomain that will redirect to your external IP. It has instructions on how to configure Synology DDNS client to keep duckdns.org updated if (and when) the external IP is changed by the internet provider.

## Other Resources

- [Setting up Z-Wave or Zigbee stick with Synology](https://khaz.me/using-a-z-wave-or-zigbee-stick-on-synology-dsm-for-use-with-homeassistant-and-docker/): Get the benefits of a smart home without using insecure wi-fi IoT devices
- [Home Assistant on Synology NAS with Docker](https://philhawthorne.com/installing-home-assistant-io-on-a-synology-diskstation-nas/) – Phil Hawthorne
- [Rented Automated Apartment Kit](https://kit.co/philhawthorne/rented-automated-apartment-kit) – Phil Hawthorne
- [Remote Access to Your Home Assistant Using DuckDNS](https://www.youtube.com/watch?v=fNzngoXfxzw)
- [Wi-Fi, Z-Wave, or Zigbee](https://familyelectronics.net/2020/01/18/why-i-prefer-z-wave-and-zigbee-over-wifi-and-bluetooth/)

## Hardware

- [GoControl HUSBZB-1](https://www.amazon.ca/dp/B01GJ826F8/ref=as_li_ss_tl?s=gateway&crid=3T0T3DZ600D87&keywords=HUSBZB-1&sprefix=cob+led+rece,aps,196&language=en_US&sr=8-3&linkCode=gs2&linkId=c29b994e3d8c570f778207624dde39f3&tag=khaz349857-20) USB stick with dual support of Z-Wave/Zigbee
- [Eva Logik Smart Light Dimmer Plug](https://www.amazon.com/gp/product/B07VKKT7X7/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)

- [Aeotec Smart Dimmer 6](https://aeotec.com/z-wave-plug-in-dimmer/): Z-Wave plug in dimmer, unfortunately out of stock everywhere and discontinued
