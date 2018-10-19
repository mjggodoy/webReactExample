#!/bin/bash

# How to dump from a Docker container:
#  $ docker exec -it <STRAPI-DB_CONTAINER_ID> bash
#  $ root@<STRAPI-DB_CONTAINER_ID>:/# mongodump -o /dump/
#  $ root@<STRAPI-DB_CONTAINER_ID>:/# exit
#  $ docker cp <STRAPI-DB_CONTAINER_ID>:/dump .

# Restore from dump
# Based on https://github.com/wekan/wekan/wiki/Export-Docker-Mongo-Data
mongorestore --drop --db "strapi" /home/dump