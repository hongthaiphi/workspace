# /bin/bash
#server
# HOME_PATH="/home/sysadmin"
	
HOME_PATH="/home/sysadmin/"
	
. $HOME_PATH/cam9/lib.sh
FILE_NAME="$HOME_PATH/cam9/log/updateServerStatus.log"
PREFIX="[updateServerStatistic.sh]"

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

function checkTemperature(){
	#timestamp=`date +"%H:%M:%S"`
	TEMP_WARNING=78
	TEMP_DEAD=90
	ARCHITECTURE=$(uname -m)
	if [ $ARCHITECTURE = "armv7l" ]; then
		CURRENT_TEMP=$(cat /sys/devices/virtual/hwmon/hwmon1/temp1_input)
	elif [ $ARCHITECTURE = "x86_64" ]; then
		str=$(sensors | grep "Core 0:")
  		TEMP_WARNING=${str:32:2}
		i=0
		CURRENT_TEMP=0
		while IFS='' read -r line || [[ -n "$line" ]]; do
			i=`expr $i + 1`
			CURRENT_TEMP=`expr $(echo "$line" | cut -d \+ -f2 | cut -c1-2) + $CURRENT_TEMP` 
		done <<< "$(sensors | grep 'Core')"
		let CURRENT_TEMP=$CURRENT_TEMP/$i
	fi
	if [ $CURRENT_TEMP -ge $TEMP_WARNING ] && [ $CURRENT_TEMP -lt $TEMP_DEAD ]; then
		writeAllLog $FILE_NAME $PREFIX "warning;$CURRENT_TEMP"
	fi
	if [ $CURRENT_TEMP -ge $TEMP_DEAD ]; then
		writeAllLog $FILE_NAME $PREFIX "dead;$CURRENT_TEMP"
	fi
	if [ $CURRENT_TEMP -lt $TEMP_WARNING ]; then
		writeAllLog $FILE_NAME $PREFIX "normal;$CURRENT_TEMP"
	fi
	checkTemperature=$CURRENT_TEMP
}

function getRAMInfo(){
	threshold="100"
	writeAllLog $FILE_NAME $PREFIX "$(date) Checking RAM ..."
	writeAllLog $FILE_NAME $PREFIX "--------------------------------------------------------------"
	MEMINFO=$(free -m | grep "Mem:")
	SWAPINFO=$(free -m | grep "Swap:")
	# MEMINFO
	MEM_TOTAL=$(echo "$MEMINFO" | awk '{print $2}')
	MEM_USED=$(echo "$MEMINFO" | awk '{print $3}')
	MEM_FREE=$(echo "$MEMINFO" | awk '{print $4}')
	MEM_SHARED=$(echo "$MEMINFO" | awk '{print $5}')
	MEM_BUFFERS=$(echo "$MEMINFO" | awk '{print $6}')
	MEM_CACHED=$(echo "$MEMINFO" | awk '{print $7}')
	writeAllLog $FILE_NAME $PREFIX "MEM_TOTAL:$MEM_TOTAL; MEM_USED:$MEM_USED; MEM_FREE:$MEM_FREE; MEM_SHARED:$MEM_SHARED; MEM_BUFFERS:$MEM_BUFFERS; MEM_CACHED:$MEM_CACHED"
	# SWAPINFO
	SWAP_TOTAL=$(echo "$SWAPINFO" | awk '{print $2}')
	SWAP_USED=$(echo "$SWAPINFO" | awk '{print $3}')
	SWAP_FREE=$(echo "$SWAPINFO" | awk '{print $4}')
	writeAllLog $FILE_NAME $PREFIX "SWAP_TOTAL:$SWAP_TOTAL; SWAP_USED:$SWAP_USED; SWAP_FREE:$SWAP_FREE"
	if (($MEM_FREE < threshold))
	then
        	writeAllLog $FILE_NAME $PREFIX "RAM is nearly full (free:$MEM_FREE)"
	fi
	if [ $SWAP_USED -gt 0 ]; then
        	writeAllLog $FILE_NAME $PREFIX -e "\e[0;31mSWAP used\e[0m"
	fi
	writeAllLog $FILE_NAME $PREFIX "$(date) Checked"
	writeAllLog $FILE_NAME $PREFIX "--------------------------------------------------------------"
	getRAMInfo=$MEM_FREE
}


function updateServerStatistic(){
	# echo "start updateServerStatistic"
	writeAllLog $FILE_NAME $PREFIX "start updateServerStatistic"
	cpuLoad
	checkTemperature
	checkDisk
	getRAMInfo
	DEVICE_ID=$(/bin/cat /sys/class/net/eth0/address)
	wget -qO /dev/null "http://cp.cam9.tv:3000/lastupdatetime?device_id=$DEVICE_ID"
	wget -qO /dev/null "http://cp.cam9.tv:3000/module?action=updateServerStatistic&device_id_server=$DEVICE_ID&ram=$getRAMInfo&free_space=$checkDisk&cpu_tem=$checkTemperature&cpu_load=$cpuLoad"
	writeAllLog $FILE_NAME $PREFIX "http://cp.cam9.tv:3000/module?action=updateServerStatistic&device_id_server=$DEVICE_ID&ram=$getRAMInfo&free_space=$checkDisk&cpu_tem=$checkTemperature&cpu_load=$cpuLoad"
}



count=0
while true 
do
	if [ $count -eq 0 ]; then
		# echo "First time!"
		writeAllLog $FILE_NAME $PREFIX "First time updateServerStatistic!"
		updateServerStatistic
		count=$[$count+1]
	elif [ $count -eq 20 ]; then
 		count=1
 		# echo "Do something!"
		 writeAllLog $FILE_NAME $PREFIX "Do updateServerStatistic!"
 		updateServerStatistic
 	else
 		count=$[$count+1]
 	fi
 	echo $count
 	sleep 1
done