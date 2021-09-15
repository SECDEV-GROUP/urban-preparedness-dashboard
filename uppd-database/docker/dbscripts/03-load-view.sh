#!/bin/sh

# initial variables
timestamp=$(date +%Y%m%d%H%M)
logPath=/usr/local/log
logSchema=$logPath/$timestamp-load-schema.log

# exit immediately when a command exits with a non-zero status
set -e

echo "Load views..." 2>&1 | tee -a $logSchema

for f in $(ls /usr/local/data/dbviews/*.sql); do
    echo "  loading view $f..." 2>&1 | tee -a $logSchema
    psql $DB -c "\i $f" 2>&1 | tee -a $logSchema
done

echo "done loading views." 2>&1 | tee -a $logSchema
