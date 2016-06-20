#!/bin/bash
NAMTV=receiver;COUNT_RECEIVER=$(sudo -u namnd /home/namnd/namtv-$NAMTV.sh follow check | wc | awk '{print $2}'); COUNT_RECEIVER=$(expr $COUNT_RECEIVER - 5)
NAMTV=encoder;COUNT_ENCODER=$(sudo -u namnd /home/namnd/namtv-$NAMTV.sh follow check | wc | awk '{print $2}'); COUNT_ENCODER=$(expr $COUNT_ENCODER - 5)
echo "COUNT_RECEIVER:$COUNT_RECEIVER - COUNT_ENCODER:$COUNT_ENCODER"
COUNT_PID=0
while read LIST_CONFIG
do
	echo $LIST_CONFIG
	PID=$(cat $LIST_CONFIG)
	echo "PID:$PID"
	RESULT_PID=$(ps xua | grep -v grep | grep $PID)
	if [ ! -z "$RESULT_PID" ]; then
		echo "Ok"
	else
		echo "STOPPED"
	fi
	let COUNT_PID=$COUNT_PID+1
done <<< "$(find /var/run/namtv/ -name "*.pid")"
let COUNT_ENCODE=($COUNT_ENCODER*2)+2
DEVICE_ID=$(/bin/cat /sys/class/net/eth0/address)
MODULE_ID=6
if [ $COUNT_ENCODE -eq $COUNT_PID ]; then
	echo "namtv is running normal"
	STATUS="namtv is running normal"
else
	if [ $COUNT_ENCODER -lt $COUNT_RECEIVER ]; then
		echo "namtv is missing. ENCODER is stopped"
		STATUS="namtv is missing. ENCODER is stopped"
	elif [ $COUNT_ENCODER -gt $COUNT_RECEIVER ]; then
		echo "namtv is missing. RECEIVER is stopped"
		STATUS="namtv is missing. RECEIVER is stopped"
	fi
fi
REV=`/usr/bin/stat -c "%y" /home/namnd/namtv-receiver.sh`
CHECK_NAMTV_VERSION=$(echo "namtv-${REV:0:10}-${REV:11:2}${REV:14:2}")
wget -qO /dev/null "http://cp.cam9.tv:3000/module?action=updateLastUpdateModule&module_id=$MODULE_ID&device_id_server=$DEVICE_ID&module_status=$STATUS"
echo "http://cp.cam9.tv:3000/module?action=updateLastUpdateModule&module_id=$MODULE_ID&device_id_server=$DEVICE_ID&module_status=$STATUS"
echo "ENCODER:$COUNT_ENCODER;RECEIVER:$COUNT_RECEIVER"
echo "namtv:$CHECK_NAMTV_VERSION"