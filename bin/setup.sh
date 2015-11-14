#!/usr/bin/env bash

basedir=`dirname $0`/..

cd "$basedir/htdocs/lib"

for f in *.tar.gz; do
	tar xzf $f
done

for f in *.zip; do
	unzip -o $f
done
