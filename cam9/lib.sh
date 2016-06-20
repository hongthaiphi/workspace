#!/bin/bash
writeLog(){
	CONTENT=$1
	CAM9DIR="/home/sysadmin/cam9"
	LOG="$CAM9DIR/log/cam9-debug.log"
	if [ ! -e $LOG ]; then
		touch $LOG
	fi
	echo -e "$(date): $1" >> $LOG
	GETLINE=$(wc -l $LOG | awk '{print $1}')
	LINE=100
	if [ $GETLINE -gt $LINE ]; then
		#echo "> $LINE line"
		rm -rf $LOG.tmp
		tail -n $LINE $LOG > $LOG.tmp
		cat $LOG.tmp > $LOG
		rm -rf $LOG.tmp
	#else
		#echo "< $LINE line"
	fi
}

writeAllLog(){
	FILE_NAME=$1 #log filename
	PREFIX=$2 #prefix of log content
	CONTENT=$3 #content of log
	if [ ! -e $FILE_NAME ]; then
		touch $FILE_NAME
	fi
	echo -e "$(date): $PREFIX $CONTENT" >> $FILE_NAME	
}



update(){
	CONF=$1
	INTERFACE="eth0"
	HOSTNAME=$(/bin/cat /sys/class/net/$INTERFACE/address)
	CONF2=$2
	case $CONF in
	updateMain)
		cp /home/sysadmin/cam9/source/update.sh  /home/sysadmin/cam9/archive/update.sh
		wget -q http://cp.cam9.tv/scripts/update.sh -O /home/sysadmin/cam9/source/update.sh
		chmod a+x /home/sysadmin/cam9/source/update.sh
		/home/sysadmin/cam9/source/update.sh $CONF
		;;
	updateStatusServer)
		
		RESULT=$(wget -q -O /dev/null "http://cp.cam9.tv:3000/lastupdatetime?device_id=$HOSTNAME" -O-)
		echo "$(date) - $RESULT"
		;;
	updateServerModules)
		echo "updateServerModules"
		;;
	updateModuleStatus)
		RESULT=$(wget -q -O /dev/null "http://cp.cam9.tv:3000/module?action=updateLastUpdateModule&device_id_server=$HOSTNAME&module_id=$CONF2" -O-)
		echo "$(date) - $RESULT"
		;;
	*)
		;;

	esac
}


update