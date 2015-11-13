#!/usr/bin/env bash

cd `dirname $0`/../htdocs
#pwd

python -m SimpleHTTPServer 8000
