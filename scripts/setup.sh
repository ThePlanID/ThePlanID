#! /bin/bash
#
# @summary Initial configs
# @usage: ./setup.sh


# Make it easier to override Nginx configuration
ln -sf /conf/site.conf /etc/nginx/sites-enabled/default

# Prepares folder for deploying apps
chown -R www-data:www-data /app
chown -R www-data:www-data /conf
chmod 755 /start.sh

