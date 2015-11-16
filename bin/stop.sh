#!/usr/bin/env bash

basename=`dirname $0`/..

kill -TERM `cat $basename/var/httpd.pid`
