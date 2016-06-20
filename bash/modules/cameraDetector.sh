update(){
	CONF=$1
	case $CONF in
	updateMain)
		cp /home/sysadmin/cam9/source/update.sh  /home/sysadmin/cam9/archive/update.sh
		wget -q http://cp.cam9.tv/scripts/update.sh -O /home/sysadmin/cam9/source/update.sh
		chmod a+x /home/sysadmin/cam9/source/update.sh
		/home/sysadmin/cam9/source/update.sh $CONF
		;;
	updateStatusServer)
		INTERFACE="eth0"
		HOSTNAME=$(/bin/cat /sys/class/net/$INTERFACE/address)
		RESULT=$(wget -q -O /dev/null "http://cp.cam9.tv:3000/lastupdatetime?device_id=$HOSTNAME" -O-)
		echo "$(date) - $RESULT"
		;;
	updateServerModules)
		echo "updateServerModules"
		;;
		*)
		;;
	esac
}
cameraDetector(){
	# get sefl IP_ADDR /sbin/ifconfig eth0 | grep 'inet addr:' | cut -d: -f2 | awk '{ print $1}'
	# 1010141;10.10.14.1;rtsp://10.10.14.1:554/user=vp9&password=vp9@123&channel=1&stream=1.sdp?;rtsp://10.10.14.1:554/user=vp9&password=vp9@123&channel=1&stream=0.sdp?;1280×720
	SYS_DIR="/home/sysadmin/cam9"
	INTERFACE="eth0"
	IP_ADDR_LIST=""
	MAC_ADDR_LIST=""
	HOSTNAME=$(hostname)
	DEVICE_ID=$(/bin/cat /sys/class/net/eth0/address) # | sed -e 's/://g')
	DEVICE_ID_WITHOUT_COLON=$(/bin/cat /sys/class/net/eth0/address | /bin/sed -e 's/://g')
	cp $SYS_DIR/$DEVICE_ID_WITHOUT_COLON.txt $SYS_DIR/$DEVICE_ID_WITHOUT_COLON.archive.txt
	RESULT=$(wget -q "http://cp.cam9.tv:3000/camera?action=get_all_camera_from_server&device_id_server=$DEVICE_ID" -O $SYS_DIR/$DEVICE_ID_WITHOUT_COLON.txt)
	NUMBER_OF_CAMERA_NVR=$(wget -q "http://cp.cam9.tv:3000/camera?action=get_max_camera&device_id_server=$DEVICE_ID" -O-)
	#echo "NUMBER_OF_CAMERA_NVR: $NUMBER_OF_CAMERA_NVR"
	#DIFF=$(/usr/bin/diff $SYS_DIR/$HOSTNAME_WITHOUT_COLON.txt $SYS_DIR/$HOSTNAME_WITHOUT_COLON.archive.txt)
	#if [ -z "$DIFF" ]; then
		#echo "No Diff"
		#update updateStatusServer
	#else
		while IFS='' read -r line || [[ -n "$line" ]]; do
			MAC_ADDR=$(echo "$line" | /usr/bin/awk -F ';' '{print $1}')
			IP_ADDR=$(echo "$line" | /usr/bin/awk -F ';' '{print $2}')
			RTSP_SUB=$(echo "$line" | /usr/bin/awk -F ';' '{print $3}')
			RTSP_MAIN=$(echo "$line" | /usr/bin/awk -F ';' '{print $4}')
			RESOLUTION=$(echo "$line" | /usr/bin/awk -F ';' '{print $5}')
			wget -qO /dev/null "http://cp.cam9.tv:3000/lastupdatetimecamera?device_id=$MAC_ADDR"
			echo "MAC_ADDR: $MAC_ADDR - IP_ADDR: $IP_ADDR - RTSP_SUB: $RTSP_SUB - RTSP_MAIN: $RTSP_MAIN - RESOLUTION: $RESOLUTION"
			GETIP=$(ip neighbor | grep $MAC_ADDR | awk '{print $1}')
			echo "ip: $GETIP"
			if [ "$GETIP" = "$IP_ADDR" ]; then
				echo "EQ"
			else
				IP_ADDR=$GETIP
			fi
			if [ -z $IP_ADDR_LIST ]; then
				IP_ADDR_LIST=${IP_ADDR}
			else
				IP_ADDR_LIST=${IP_ADDR_LIST}";"${IP_ADDR}
			fi
			if [ -z $MAC_ADDR_LIST ]; then
				MAC_ADDR_LIST=${MAC_ADDR}
			else
				MAC_ADDR_LIST=${MAC_ADDR_LIST}";"${MAC_ADDR}
			fi
			echo "----------------"
			# camera
			architecture=$(uname -m)
			if [ $architecture = "armv7l" ]; then
				PING="sudo /bin/ping"
			else
				PING="/bin/ping"
			fi
			if ($PING -w1 -n -c1 $IP_ADDR &> /dev/null); then
	    		if [ ! -e $SYS_DIR/cameraStatus.$DEVICE_ID_WITHOUT_COLON.txt ]; then
	    			touch $SYS_DIR/cameraStatus.$DEVICE_ID_WITHOUT_COLON.txt
	    		else
		    		GET_CURRENT_BY_IPADDR=$(grep -w "$IP_ADDR" $SYS_DIR/cameraStatus.$DEVICE_ID_WITHOUT_COLON.txt)
		    		echo "GET_CURRENT_BY_IPADDR: $GET_CURRENT_BY_IPADDR"
		    		GET_CURRENT_STATUS=$(echo "$GET_CURRENT_BY_IPADDR" | awk -F';' '{print $3}')
		    		#GET_CURRENT_MACADDR=$(echo "$GET_CURRENT_BY_IPADDR" | awk -F';' '{print $1}')
		    		#echo "GET_CURRENT_MACADDR: $GET_CURRENT_MACADDR"
		    		if [ -z "$GET_CURRENT_BY_IPADDR" ]; then
		    			echo "$MAC_ADDR;$IP_ADDR;Online" >> $SYS_DIR/cameraStatus.$DEVICE_ID_WITHOUT_COLON.txt
		    		else
		    			if [ "$GET_CURRENT_STATUS" != "Online" ]; then
		    				#if [ ! $ACTION ]; then
		    					echo "Changed to Online"
		    					#writeLog "Changed to Online"
		    				#fi
		    				wget -qO /dev/null "http://cp.cam9.tv:3001/toTelegram?sendTo=-128035466
&token=AAGGl69284qM_H4i7fsxCXOkhSEe0OI7i_U&msg=$MAC_ADDR.$IP_ADDR.Online@$HOSTNAME"
		    				/bin/sed -i s#$GET_CURRENT_BY_IPADDR#$MAC_ADDR";"$IP_ADDR";"Online#g $SYS_DIR/cameraStatus.$DEVICE_ID_WITHOUT_COLON.txt
		    			else
		    				#if [ ! $ACTION ]; then
		    					#writeLog "Nothing to change"
		    					echo "Nothing to change"
		    				#fi
		    			fi	
		    		fi
	    		fi
	    		#writeLog "$CHANNEL_NAME;$CHANNEL_MBPS;$IP_ADDR;Online"
	    		echo "$MAC_ADDR;$IP_ADDR;Online"
	    	else
	    		#echo "$CHANNEL_NAME;$CHANNEL_MBPS;$IP_ADDR;Offline"
	    		if [ ! -e $SYS_DIR/cameraStatus.txt ]; then
	    			touch $SYS_DIR/cameraStatus.txt
	    		else
		    		GET_CURRENT_BY_IPADDR=$(grep -w "$IP_ADDR" $SYS_DIR/cameraStatus.$DEVICE_ID_WITHOUT_COLON.txt)
		    		echo "GET_CURRENT_BY_IPADDR: $GET_CURRENT_BY_IPADDR"
		    		#echo "GET_CURRENT_BY_IPADDR: $GET_CURRENT_BY_IPADDR"
		    		GET_CURRENT_STATUS=$(echo "$GET_CURRENT_BY_IPADDR" | awk -F';' '{print $3}')
		    		#GET_CURRENT_MACADDR=$(echo "$GET_CURRENT_BY_IPADDR" | awk -F';' '{print $1}')
		    		#echo "GET_CURRENT_STATUS: $GET_CURRENT_STATUS"
		    		if [ -z "$GET_CURRENT_BY_IPADDR" ]; then
		    			echo "$MAC_ADDR;$IP_ADDR;Online" >> $SYS_DIR/cameraStatus.$HOSTNAME_WITHOUT_COLON.txt
		    		else
		    			if [ "$GET_CURRENT_STATUS" = "Online" ]; then
		    				echo "Changed to Offline"
		    				wget -qO /dev/null "http://cp.cam9.tv:3001/toTelegram?sendTo=-128035466
&token=AAGGl69284qM_H4i7fsxCXOkhSEe0OI7i_U&msg=$MAC_ADDR.$IP_ADDR.Offline@$HOSTNAME"
		    				/bin/sed -i s#$GET_CURRENT_BY_IPADDR#$MAC_ADDR";"$IP_ADDR";"Offline#g $SYS_DIR/cameraStatus.$DEVICE_ID_WITHOUT_COLON.txt
		    			else
		    				#if [ ! $ACTION ]; then
		    					#writeLog "Nothing to change"
		    					echo "Nothing to change"
		    				#fi
		    			fi
		    		fi
	    		fi
	    		echo "-------------Offline-------------"
	    		echo "$MAC_ADDR;$IP_ADDR;Offline"
	    		#writeLog "$MAC_ADDR;$IP_ADDR;Offline"
	    	fi
		done < $SYS_DIR/$DEVICE_ID_WITHOUT_COLON.txt
		echo "Done"
		echo "IP_ADDR: $IP_ADDR_LIST - MAC_ADDR: $MAC_ADDR_LIST"
		RESULT_UPDATE_IP_CAMERA=$(wget -q "http://cp.cam9.tv:3000/camera?action=update_ip_camera&device_id_server=$DEVICE_ID&ip=$IP_ADDR_LIST&device_id_camera=$MAC_ADDR_LIST" -O-)
		echo "$RESULT_UPDATE_IP_CAMERA"
	#fi
}
cameraDetector2(){
	INTERFACE="eth0"
	IP_ADDR_LIST=""
	MAC_ADDR_LIST=""
	HOSTNAME=$(hostname) # | sed -e 's/://g')
	INFO=$1
	# HOSTNAME_WITHOUT_COLON=$(/bin/cat /sys/class/net/eth0/address | /bin/sed -e 's/://g')
	if [ -f $SYS_DIR/${HOSTNAME}-global-config.txt ]; then
		cp $SYS_DIR/${HOSTNAME}-global-config.txt $SYS_DIR/${HOSTNAME}-global-config.archive.txt
	fi
	DOMAIN=$(/bin/cat /home/namnd/domain.conf | /usr/bin/awk -F'=' '{print $2}')
	sudo -u namnd wget -q --tries=2 "http://$DOMAIN/global-config.conf" -O /var/run/namtv/global-config.conf
	RESULT=$(wget -q "http://$DOMAIN/admin/api/channel/?action=startstopchannel&hash=f21fd99bceccdf571a74b450f409b266f82718b630658179c87017618418fc84&secret_id=1" -O $SYS_DIR/$HOSTNAME-global-config.txt)	
	STOP_CHANNEL=$(wget -qO /dev/null "http://$DOMAIN/admin/api/channel/?action=startstopchannel&hash=f21fd99bceccdf571a74b450f409b266f82718b630658179c87017618418fc84&secret_id=1" -O- | /usr/bin/tail -n 3 | /usr/bin/head -n 1)
	START_CHANNEL=$(wget -qO /dev/null "http://$DOMAIN/admin/api/channel/?action=startstopchannel&hash=f21fd99bceccdf571a74b450f409b266f82718b630658179c87017618418fc84&secret_id=1" -O- | /usr/bin/tail -n 2 | /usr/bin/head -n 1)
	if [ "$INFO" = "stop" ]; then
		echo $STOP_CHANNEL
	elif [ "$INFO" = "start" ]; then
		echo $START_CHANNEL
	fi
}
# count=0
# while true
# do
# 	if [ $count -eq 0 ]; then
# 		echo "First time!"
# 		count=$[$count+1]
# 		cameraDetectorcameraDetector
# 		update updateStatusServer
# 	elif [ $count -eq 10 ]; then
#  		count=1
#  		echo "Do something!"
#  		cameraDetector
# 		update updateStatusServer
#  	else
#  		count=$[$count+1]
#  	fi
#  	echo $count
#  	sleep 1
# done