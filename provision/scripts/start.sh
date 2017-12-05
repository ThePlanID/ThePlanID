#! /bin/bash

echo Starting supervisord and its minions...
/usr/bin/supervisord -n -c /etc/supervisord.conf
