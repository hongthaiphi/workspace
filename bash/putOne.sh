# /bin/bash
logfile="/home/vp9/workspace/put.log"
while true; do
    echo "putOne:" $(date) >> $logfile
    sleep 1
done