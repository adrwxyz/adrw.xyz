---
title: Using Netlify CMS with Github Actions
date: 2019-11-12T18:02:24.125Z
slug: tech/2019-11-12-using-netlify-cms-with-github-actions
tags:
  - Tech
---

# Using Netlify CMS with Github Actions

After enjoying the full Netlify ecosystem for the past year, I've come up against their recent changes in build times for free accounts.

Given the recent progression of Github Actions to broader release, I figured I'd give it a shot to move builds back to Github but maintain support for Netlify CMS as a GUI for editing site content.

This ended up being quite the hassle.

So, I've documented the final fix below. [Example commit](https://github.com/adrwxyz/adrw.xyz/commit/a35277bb6e3cf62c9a9125248201e68d9e5b37f6).

# Github

- Add a file `CNAME` to your repo with your domain (ie. `adrw.xyz`)
- On master branch, create and push a `gh-pages` branch
  ```
  $ gco -b gh-pages
  $ git push --set-upstream origin gh-pages
  ```
- Turn on Github Pages for this branch in repo settings
- Set it to your existing custom domain

# DNS

- Update domain registrar (ie. Namecheap) with the following new DNS records to point at Github Pages instead of Netlify. Note, use subdomain instead of `@` and `www` below if it is a subdomain.

  ```
  A     @     185.199.108.153       TTL(Auto)
  A     @     185.199.109.153       TTL(Auto)
  A     @     185.199.110.153       TTL(Auto)
  A     @     185.199.111.153       TTL(Auto)
  CNAME www   username.github.io.   TTL(Auto)
  ```

# static/admin/config.yml

Update the configuration of Netlify CMS in the repo.

### Before

```yml
backend:
  name: git-gateway
  branch: master
```

### After

```yml
backend:
  name: github
  repo: adrw/cook
  site_domain: cook.alexanders.xyz
  branch: master
```

# Netlify

- Turn off Netlify Identity (if used).
- In `Deploys`, stop auto-publishing to prevent the site instance from contributing to your monthly build minutes.
- In `Settings/Build & Deploy`, in `Deploy contexts`, turn off deploy previews.
- In `Settings/Access Control`, add Github as an OAuth authentication provider. You'll need to set up a new OAuth app in Github settings to get the secret values. Use `https://api.netlify.com/auth/done` as the success url.
- In `Settings/Domain management`, add the value you used for `site_domain` in `static/admin/config.yml` as a custom domain. This will allow Netlify's redirect after auth to correctly redirect to the correct domain.

# Resources

- [Netlify docs](https://www.netlifycms.org/docs/authentication-backends/#external-oauth-clients)
- [Stack Overflow](https://stackoverflow.com/questions/52410225/gatsby-cms-failed-to-load-settings-from-netlify-identity)
- [cnly.github.io](https://cnly.github.io/2018/04/14/just-3-steps-adding-netlify-cms-to-existing-github-pages-site-within-10-minutes.html)
- [tylergaw.com](https://tylergaw.com/articles/netlify-cms-custom-oath-provider/)
