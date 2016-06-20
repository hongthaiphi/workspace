#!/bin/bash
HOME_PATH="/home/sysadmin/"
. $HOME_PATH/cam9/lib.sh
FILE_NAME="$HOME_PATH/cam9/log/updateServerStatus.log"

PREFIX="[getNAMTV.sh]"
function namTV(){
NAMTV=receiver;COUNT_RECEIVER=$(sudo -u namnd /home/namnd/namtv-$NAMTV.sh follow check | wc | awk '{print $2}'); COUNT_RECEIVER=$(expr $COUNT_RECEIVER - 5)
NAMTV=encoder;COUNT_ENCODER=$(sudo -u namnd /home/namnd/namtv-$NAMTV.sh follow check | wc | awk '{print $2}'); COUNT_ENCODER=$(expr $COUNT_ENCODER - 5)
writeAllLog $FILE_NAME $PREFIX "COUNT_RECEIVER:$COUNT_RECEIVER - COUNT_ENCODER:$COUNT_ENCODER"
COUNT_PID=0
while read LIST_CONFIG
do
	writeAllLog $FILE_NAME $PREFIX $LIST_CONFIG
	PID=$(cat $LIST_CONFIG)
	writeAllLog $FILE_NAME $PREFIX "PID:$PID"
	RESULT_PID=$(ps xua | grep -v grep | grep $PID)
	if [ ! -z "$RESULT_PID" ]; then
		writeAllLog $FILE_NAME $PREFIX "Ok"
	else
		writeAllLog $FILE_NAME $PREFIX "STOPPED"
	fi
	let COUNT_PID=$COUNT_PID+1
done <<< "$(find /var/run/namtv/ -name "*.pid")"
let COUNT_ENCODE=($COUNT_ENCODER*2)+2
DEVICE_ID=$(/bin/cat /sys/class/net/eth0/address)
MODULE_ID=6
if [ $COUNT_ENCODE -eq $COUNT_PID ]; then
	writeAllLog $FILE_NAME $PREFIX "namtv is running normal"
	STATUS="namtv is running normal"
else
	if [ $COUNT_ENCODER -lt $COUNT_RECEIVER ]; then
		writeAllLog $FILE_NAME $PREFIX "namtv is missing. ENCODER is stopped"
		STATUS="namtv is missing. ENCODER is stopped"
	elif [ $COUNT_ENCODER -gt $COUNT_RECEIVER ]; then
		writeAllLog $FILE_NAME $PREFIX "namtv is missing. RECEIVER is stopped"
		STATUS="namtv is missing. RECEIVER is stopped"
	fi
fi
REV=`/usr/bin/stat -c "%y" /home/namnd/namtv-receiver.sh`
CHECK_NAMTV_VERSION=$(echo "namtv-${REV:0:10}-${REV:11:2}${REV:14:2}")
wget -qO /dev/null "http://cp.cam9.tv:3000/module?action=updateLastUpdateModule&module_id=$MODULE_ID&device_id_server=$DEVICE_ID&module_status=$STATUS"
writeAllLog $FILE_NAME $PREFIX "http://cp.cam9.tv:3000/module?action=updateLastUpdateModule&module_id=$MODULE_ID&device_id_server=$DEVICE_ID&module_status=$STATUS"
writeAllLog $FILE_NAME $PREFIX "ENCODER:$COUNT_ENCODER;RECEIVER:$COUNT_RECEIVER"
writeAllLog $FILE_NAME $PREFIX "namtv:$CHECK_NAMTV_VERSION"
}


count=0
while true 
do
	if [ $count -eq 0 ]; then
		# echo "First time!"
		writeAllLog $FILE_NAME $PREFIX "First time namTV!"
		namTV
	elif [ $count -eq 20 ]; then
 		count=1
 		# echo "Do something!"
		 writeAllLog $FILE_NAME $PREFIX "Do namTV!"
 		namTV
 	else
 		count=$[$count+1]
 	fi
 	echo $count
 	sleep 1
done