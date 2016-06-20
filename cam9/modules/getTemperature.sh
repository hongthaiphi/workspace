#!/bin/bash
HOME_PATH="/home/sysadmin/"
. $HOME_PATH/cam9/lib.sh
FILE_NAME="$HOME_PATH/cam9/log/updateServerStatus.log"

PREFIX="[getTemperature.sh]"
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
checkTemperature
