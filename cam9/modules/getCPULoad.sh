#!/bin/bash
#CPU_THRESHOLD="10"
HOME_PATH="/home/sysadmin/"
. $HOME_PATH/cam9/lib.sh
FILE_NAME="$HOME_PATH/cam9/log/updateServerStatus.log"

PREFIX="[getCPULoad.sh]"

function cpuLoad(){
	NPROCESSOR=$(getconf _NPROCESSORS_ONLN)
	LOADAVG=$(cat /proc/loadavg | awk '{print $1}')
	if [ $(echo "$LOADAVG<$NPROCESSOR" | bc) = 1 ]; then
		writeAllLog $FILE_NAME $PREFIX "Ok.LOADAVG:$LOADAVG"
	else
		writeAllLog $FILE_NAME $PREFIX "Overload: $LOADAVG"
	fi
	cpuLoad=$LOADAVG
}