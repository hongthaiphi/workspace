#!/bin/bash
# Start FAN writeAllLog $FILE_NAME $PREFIX 0 > /sys/class/gpio_sw/PD14/data
# Turn ON LED writeAllLog $FILE_NAME $PREFIX 1 > /sys/class/gpio_sw/normal_led/data
HOME_PATH="/home/sysadmin/"
. $HOME_PATH/cam9/lib.sh
FILE_NAME="$HOME_PATH/cam9/log/updateServerStatus.log"

PREFIX="[controlFAN.sh]"


function controlFAN(){
SYS_DIR="/home/sysadmin/cam9"
. $SYS_DIR/modules/getTemperature.sh
RESULT=$(checkTemperature)
writeAllLog $FILE_NAME $PREFIX "RESULT:$RESULT"
INFO=$(echo "$RESULT" | awk -F';' '{print $1}')
TEMP=$(echo "$RESULT" | awk -F';' '{print $2}')
ARCHITECTURE=$(uname -m)
if [ $ARCHITECTURE = "armv7l" ]; then
	FAN_STATUS=$(cat /sys/class/gpio_sw/PD14/data)
	if [ "$INFO" = "warning" ] || [ "$INFO" = "dead" ]; then
		if [ "$FAN_STATUS" = "1" ]; then
			writeAllLog $FILE_NAME $PREFIX "Turn ON FAN;$TEMP"
		    sudo sh -c 'echo 0 > /sys/class/gpio_sw/PD14/data'
		    sudo sh -c 'echo 1 > /sys/class/gpio_sw/normal_led/data'
		else
			writeAllLog $FILE_NAME $PREFIX "FAN is running;$TEMP"
		fi
	else
		if [ "$FAN_STATUS" = "0" ]; then
			sudo sh -c 'echo 1 > /sys/class/gpio_sw/PD14/data'
			sudo sh -c 'echo 0 > /sys/class/gpio_sw/normal_led/data'
			writeAllLog $FILE_NAME $PREFIX "Turn OFF FAN;$TEMP"
		else
			writeAllLog $FILE_NAME $PREFIX "FAN is OFF;$TEMP"
		fi
	fi
fi
}
while true
do
	controlFAN
	sleep 10
done
#if [ $temp1 -ge $temp_warning ] && [ $temp1 -lt $temp_dead ]; then
#	writeAllLog $FILE_NAME $PREFIX "DEAD"
#fi