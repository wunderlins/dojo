#!/usr/bin/env bash

cd `dirname $0`/../htdocs

ip="0.0.0.0"
port=8000
nohup python -m SimpleHTTPServer $port >> ../var/httpd.log 2>/dev/null &
pid=$!
echo "Running at 0.0.0.0:$port, pid: $pid"
echo $pid > ../var/httpd.pid

