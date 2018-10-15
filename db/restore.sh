#!/bin/bash

# Restore from dump
# Based on https://github.com/wekan/wekan/wiki/Export-Docker-Mongo-Data
mongorestore --drop --db "strapi" /home/dump