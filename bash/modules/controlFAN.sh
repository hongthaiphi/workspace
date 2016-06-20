#!/bin/bash
# Start FAN echo 0 > /sys/class/gpio_sw/PD14/data
# Turn ON LED echo 1 > /sys/class/gpio_sw/normal_led/data
function controlFAN(){
SYS_DIR="/home/sysadmin/cam9"
. $SYS_DIR/modules/getTemperature.sh
RESULT=$(checkTemperature)
echo "RESULT:$RESULT"
INFO=$(echo "$RESULT" | awk -F';' '{print $1}')
TEMP=$(echo "$RESULT" | awk -F';' '{print $2}')
ARCHITECTURE=$(uname -m)
if [ $ARCHITECTURE = "armv7l" ]; then
	FAN_STATUS=$(cat /sys/class/gpio_sw/PD14/data)
	if [ "$INFO" = "warning" ] || [ "$INFO" = "dead" ]; then
	    sudo sh -c 'echo 0 > /sys/class/gpio_sw/PD14/data'
	    sudo sh -c 'echo 1 > /sys/class/gpio_sw/normal_led/data'
	    echo "Turn ON FAN;$TEMP"
	else
		if [ "$FAN_STATUS" = "0" ]; then
			sudo sh -c 'echo 1 > /sys/class/gpio_sw/PD14/data'
			sudo sh -c 'echo 0 > /sys/class/gpio_sw/normal_led/data'
			echo "Turn OFF FAN;$TEMP"
		else
			echo "Still ON;$TEMP"
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
#	echo "DEAD"
#fi