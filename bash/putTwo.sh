# /bin/bash
logfile="/home/vp9/workspace/put.log"
while true; do
    echo "putTwo:" $(date) >> $logfile
    sleep 1
done