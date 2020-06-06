---
templateKey: note
title: Migrating Wordpress
date: 2020-06-06T21:45:05.554Z
path: /2020-06-06-migrating-wordpress
---

Migrating Wordpress hosts is something I rarely do and generally procrastinated since messing with moving wordpress files, migrating mySQL DBs, and grep-ing to change domains all sounded like a pain.

Thankfully, with this [Cloudron forum post][forum] and the [All-In-One WP Migration plugin][plugin], it was painless and worked first try!

## Steps

* Use the [All-In-One WP Migration plugin][plugin] to export the site, being sure to check the boxes in advanced section that say `"Do not export must-use plugins"` (if you don't do this it will overwrite the must-used plugins for LDAP authentication in the Cloudron implementation of WordPress)
* Setup a new base WordPress site in Cloudron, and add in the same [All-In-One WP Migration plugin][plugin]. Now import the site file that was created in step one above.
* To import, you might need to increase the PHP upload size limits with the following changes to `htaccess` file to increase upload file size and execution time so it doesn't timeout. Alternatively you can update `wp-config.php`.

  ```
  php_value upload_max_filesize 4096M
  php_value post_max_size 128M
  php_value memory_limit 512M
  php_value max_execution_time 900
  php_value max_input_time 900
  ```

* After it's done importing, restart the WordPress site in Cloudron so that it can re-connect it's must-use plugins (initially I find access is lost to the main LDAP admin user until a restart).
* Once in using your LDAP admin user, remove any old admin user and replace with the new one if you wish, and clean-up any unnecessary plugins and themes that are there by default.

[forum]: https://forum.cloudron.io/topic/1854/how-to-move-wordpress
[plugin]: https://wordpress.org/plugins/all-in-one-wp-migration/
