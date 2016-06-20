#!/bin/bash
HOME_PATH="/home/sysadmin/"
. $HOME_PATH/cam9/lib.sh
FILE_NAME="$HOME_PATH/cam9/log/updateServerStatus.log"

PREFIX="[getDisk.sh]"

function checkDisk(){
    	writeAllLog $FILE_NAME $PREFIX "Check Disk: "
		SOC=$(uname -m)
		if [ "$SOC" != "armv7l" ]; then
			PARTITION=/dev/sda3
		else
			PARTITION='/dev/mmcblk0p2'
		fi
    	threshold="30"
    	SIZE=$(df -h | grep "$PARTITION" | awk '{print $2}')
    	USED=$(df -h | grep "$PARTITION" | awk '{print $3}')
    	AVAIL=$(df -h | grep "$PARTITION" | awk '{print $2}')
    	PERCENT_USED=$(df -h | grep "$PARTITION" | awk '{print $5}' | sed 's/%//g')
    	PERCENT_AVAIL=`expr 100 - $PERCENT_USED`
    	writeAllLog $FILE_NAME $PREFIX "partition:$PARTITION;size:$SIZE;used:$USED;avail:$AVAIL;percent_used:${PERCENT_USED}%;percent_avail:${PERCENT_AVAIL}%" 
        checkDisk=$AVAIL
}
checkDisk