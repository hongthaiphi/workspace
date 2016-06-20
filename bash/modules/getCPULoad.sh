#!/bin/bash
#CPU_THRESHOLD="10"
function cpuLoad(){
	NPROCESSOR=$(getconf _NPROCESSORS_ONLN)
	LOADAVG=$(cat /proc/loadavg | awk '{print $1}')
	if [ $(echo "$LOADAVG<$NPROCESSOR" | bc) = 1 ]; then
		echo "Ok.LOADAVG:$LOADAVG"
	else
		echo "Overload: $LOADAVG"
	fi
	cpuLoad=$LOADAVG
}