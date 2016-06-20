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
stopChannel2(){
	HOSTNAME=$(hostname) # | sed -e 's/://g')
	DOMAIN=$(/bin/cat /home/namnd/domain.conf | /usr/bin/awk -F'=' '{print $2}')
	NAMTV_ENCODER="/home/namnd/namtv-encoder.sh"
	NAMTV_RECEIVER="/home/namnd/namtv-receiver.sh"
	CHANNEL=$1
	CHANNEL=$(echo "$CHANNEL" | /usr/bin/awk -F'stop-' '{print $2}')
	if [ -z "$CHANNEL" ]; then
		echo "No channel need to STOP!"
	else
		IFS=';' read -ra ADDR <<< "$CHANNEL"
		for i in "${ADDR[@]}"; do
			if [ ! -z "$i" ]; then
			    CHANNEL_NAME=$(echo "$i" | /usr/bin/awk -F'-' '{print $1}')
			    CHANNEL_NVR=$(echo "$i" | /usr/bin/awk -F'-' '{print $3}')
			    IP_ADDR=$(echo "$i" | /usr/bin/awk -F'-' '{print $4}')
			    if [ "$HOSTNAME" = "$CHANNEL_NVR" ]; then
			  	  echo "stop CHANNEL_NAME: $CHANNEL_NAME - CHANNEL_NVR: $CHANNEL_NVR"
			  	  writeLog "stop CHANNEL_NAME: $CHANNEL_NAME - CHANNEL_NVR: $CHANNEL_NVR"
			  	  sudo -u namnd $NAMTV_ENCODER stop $CHANNEL_NAME; sudo -u namnd $NAMTV_RECEIVER stop $CHANNEL_NAME
			  	  #wget -qO /dev/null "http://cp.cam9.tv:3001/toTelegram?sendTo=-128035466&token=AAGGl69284qM_H4i7fsxCXOkhSEe0OI7i_U&msg=STOP.$CHANNEL_NAME.$HOSTNAME"
				fi
			else
				echo "No channel need to STOP!"
			fi
		done
	fi
}
startChannel2(){
	HOSTNAME=$(hostname) # | sed -e 's/://g')
	DOMAIN=$(/bin/cat /home/namnd/domain.conf | /usr/bin/awk -F'=' '{print $2}')
	NAMTV_ENCODER="/home/namnd/namtv-encoder.sh"
	NAMTV_RECEIVER="/home/namnd/namtv-receiver.sh"
	CHANNEL=$1
	CHANNEL=$(echo "$CHANNEL" | /usr/bin/awk -F'start-' '{print $2}')
	IFS=';' read -ra ADDR <<< "$CHANNEL"
	CHANNELLIST=""
	for i in "${ADDR[@]}"; do
	    CHANNEL_NAME=$(echo "$i" | /usr/bin/awk -F'-' '{print $1}')
	    CHANNEL_NVR=$(echo "$i" | /usr/bin/awk -F'-' '{print $3}')
	    IP_ADDR=$(echo "$i" | /usr/bin/awk -F'-' '{print $4}')
	    if [ "$HOSTNAME" = "$CHANNEL_NVR" ]; then
	    	echo "start CHANNEL_NAME: $CHANNEL_NAME - CHANNEL_NVR: $CHANNEL_NVR"
	    	writeLog "start CHANNEL_NAME: $CHANNEL_NAME - CHANNEL_NVR: $CHANNEL_NVR"
	    fi
	    if [ -z "$CHANNELLIST" ]; then
	    	CHANNELLIST=$CHANNEL_NAME
	    else
	    	CHANNELLIST=${CHANNELLIST}";"$CHANNEL_NAME
	    fi
	done
	if [ $CHANNELLIST ]; then
		echo "CHANNELLIST: $CHANNELLIST"
		echo "start"
		sudo -u namnd $NAMTV_ENCODER start; sudo -u namnd $NAMTV_RECEIVER start
		#wget -qO /dev/null "http://cp.cam9.tv:3001/toTelegram?sendTo=-128035466&token=AAGGl69284qM_H4i7fsxCXOkhSEe0OI7i_U&msg=Start.$CHANNELLIST.$HOSTNAME"
	else
		echo "No channel need to START!"
	fi
	if [ -z "$2" ]; then
		wget -qO /dev/null "http://$DOMAIN/admin/api/channel/?action=updatestatuschannel&hash=7b9b0ae8633000a736daebaff05f96c55da30e8ae3ca4b90442549617ff74b24&secret_id=1"
	fi
}
infoChannel2(){
	ACTION=$1
	HOSTNAME=$(/bin/cat /sys/class/net/$INTERFACE/address)
	echo "infoChannel2"
	DOMAIN=$(/bin/cat /home/namnd/domain.conf | /usr/bin/awk -F'=' '{print $2}')
	INFO_CHANNEL=$(wget -qO- /dev/null "http://cp.cam9.tv:3000/camera?action=get_all_camera_from_server&device_id_server=$HOSTNAME")

	echo "INFO_CHANNEL: $INFO_CHANNEL"
	CHANNEL=$(echo "$INFO_CHANNEL" | /usr/bin/awk -F';' '{print $1}')
	echo "CHANNEL: $CHANNEL"
	# echo "CHANNEL: $CHANNEL"
	# startChannel start:VP9HN1-IPC7-05h1;VP9HN2-IPC7-05h1;VP9HN1S-cp480p-05h1;VP9HN6-cp720p-05h1;VP9HN6S-cp480p-05h1;VP9HN8-cp720p-05h1;VP9HN2S-cp480p-05h1;
	#echo "startChannel $CHANNEL"
	IFS=$'\n' read -rd '' -a ADDR <<< "$INFO_CHANNEL"
	echo "ADDR: $ADDR"
	for i in "${ADDR[@]}"; do
		CAMERA_MAC=$(echo "$i" | /usr/bin/awk -F';' '{print $1}')
	    #CHANNEL_NAME=$(echo "$i" | /usr/bin/awk -F'-' '{print $1}')
	    CHANNEL_MBPS=$(echo "$i" | /usr/bin/awk -F'-' '{print $3}')
	    CHANNEL_NVR=$(echo "$i" | /usr/bin/awk -F'-' '{print $4}')
	    IP_ADDR=$(echo "$i" | /usr/bin/awk -F';' '{print $2}')
	    
	    # if [ "$HOSTNAME" = "$CHANNEL_NVR" ]; then
	    	
	    	if (sudo /bin/ping -w1 -n -c1 $IP_ADDR &> /dev/null); then

	    		wget -qO /dev/null "http://cp.cam9.tv:3000/lastupdatetimecamera?device_id=$CAMERA_MAC"
	    		if [ ! -e /home/sysadmin/cam9/cameraStatus.$HOSTNAME.txt ]; then
	    			touch /home/sysadmin/cam9/cameraStatus.$HOSTNAME.txt
	    		else
		    		GET_CURRENT_BY_IPADDR=$(grep -w "$CHANNEL_NAME" /home/sysadmin/cam9/cameraStatus.$HOSTNAME.txt | grep -w "$IP_ADDR")
		    		GET_CURRENT_STATUS=$(echo "$GET_CURRENT_BY_IPADDR" | awk -F';' '{print $4}')
		    		if [ -z "$GET_CURRENT_BY_IPADDR" ]; then
		    			echo "$CHANNEL_NAME;$CHANNEL_MBPS;$IP_ADDR;Online" >> /home/sysadmin/cam9/cameraStatus.$HOSTNAME.txt
		    		else
		    			if [ "$GET_CURRENT_STATUS" != "Online" ]; then
		    				if [ ! $ACTION ]; then
		    					echo "Changed to Online"
		    					writeLog "Changed to Online"
		    				fi
		    				#wget -qO /dev/null "http://cp.cam9.tv:3001/toTelegram?sendTo=-128035466
#&token=AAGGl69284qM_H4i7fsxCXOkhSEe0OI7i_U&msg=$CHANNEL_NAME.$IP_ADDR.Online"
		    				/bin/sed -i s#$GET_CURRENT_BY_IPADDR#$CHANNEL_NAME";"$CHANNEL_MBPS";"$IP_ADDR";"Online#g /home/sysadmin/cam9/cameraStatus.txt
		    			else
		    				if [ ! $ACTION ]; then
		    					writeLog "Nothing to change"
		    					echo "Nothing to change"
		    				fi
		    			fi	
		    		fi
	    		fi
	    		
	    		writeLog "$CHANNEL_NAME;$CHANNEL_MBPS;$IP_ADDR;Online"
	    		echo "$CHANNEL_NAME;$CHANNEL_MBPS;$IP_ADDR;Online"
	    	else
	    		#echo "$CHANNEL_NAME;$CHANNEL_MBPS;$IP_ADDR;Offline"
	    		if [ ! -e /home/sysadmin/cam9/cameraStatus.txt ]; then
	    			touch /home/sysadmin/cam9/cameraStatus.txt
	    		else
		    		GET_CURRENT_BY_IPADDR=$(grep -w "$CHANNEL_NAME" /home/sysadmin/cam9/cameraStatus.$HOSTNAME.txt | grep -w "$IP_ADDR")
		    		#echo "GET_CURRENT_BY_IPADDR: $GET_CURRENT_BY_IPADDR"
		    		GET_CURRENT_STATUS=$(echo "$GET_CURRENT_BY_IPADDR" | awk -F';' '{print $4}')
		    		#echo "GET_CURRENT_STATUS: $GET_CURRENT_STATUS"
		    		if [ -z "$GET_CURRENT_BY_IPADDR" ]; then
		    			echo "$CHANNEL_NAME;$CHANNEL_MBPS;$IP_ADDR;Online" >> /home/sysadmin/cam9/cameraStatus.$HOSTNAME.txt
		    		else
		    			if [ "$GET_CURRENT_STATUS" = "Online" ]; then
		    				echo "Changed to Offline"
		    				#wget -qO /dev/null "http://cp.cam9.tv:3001/toTelegram?sendTo=-128035466
#&token=AAGGl69284qM_H4i7fsxCXOkhSEe0OI7i_U&msg=$CHANNEL_NAME.$IP_ADDR.Offline"
		    				/bin/sed -i s#$GET_CURRENT_BY_IPADDR#$CHANNEL_NAME";"$CHANNEL_MBPS";"$IP_ADDR";"Offline#g /home/sysadmin/cam9/cameraStatus.txt
		    			else
		    				if [ ! $ACTION ]; then
		    					writeLog "Nothing to change"
		    					echo "Nothing to change"
		    				fi
		    			fi
		    		fi
	    		fi
	    		echo "$CHANNEL_NAME;$CHANNEL_MBPS;$IP_ADDR;Offline"
	    		writeLog "$CHANNEL_NAME;$CHANNEL_MBPS;$IP_ADDR;Offline"
	    	fi
	    	#echo "info CHANNEL_NAME: $CHANNEL_NAME - CHANNEL_NVR: $CHANNEL_NVR - CHANNEL_BV: $CHANNEL_BV"
	    # fi
	done
	echo "end infoChannel2"
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
