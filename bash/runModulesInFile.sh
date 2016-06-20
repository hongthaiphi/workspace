#!/bin/bash

# format file updateServerModules.version.txt
# 1;install;UpdateServerModule;1.1.3;1465338091;http://cp.cam9.tv/module_upload/1/1.1.3.sh;"dùng để chạy update các phiên bản mới";
# 2;install;UpdateServerStatus;1.1.5;1464324363;http://cp.cam9.tv/module_upload/2/1.1.5.sh;"dùng để check server on hay off";
# toi la toi tuyet
while IFS='' read -r i || [[ -n "$i" ]]; do
		echo "$i"
		MODULE_ID=$(echo $i | awk -F';' '{print $1}')
		COMMAND=$(echo $i | awk -F';' '{print $2}')
		MODULE_NAME=$(echo $i | awk -F';' '{print $3}')
		MODULE_VERSION=$(echo $i | awk -F';' '{print $4}')
		MODULE_URL=$(echo $i | awk -F';' '{print $6}')
		echo "MODULE_ID: $MODULE_ID - COMMAND: $COMMAND"
			
		IFS='/' read -ra array <<< "$MODULE_URL" 
		wget $MODULE_URL -O source/${array[last_index-1]}
		chmod +x source/${array[last_index-1]}
		#get length of array
		last_index=${#array[@]} 	
			#kill pid before run 
		PID=$(/bin/cat run/$MODULE_ID.pid)
		kill $PID
	
		#run .sh file in folder source
		RUN_COMMAND="nohup source/${array[last_index-1]} &> /dev/null sleep 1 & echo \$! > run/$MODULE_ID.pid"
		
		echo $RUN_COMMAND
		eval $RUN_COMMAND
done <<< "$(/bin/cat run/updateServerModules.version.txt)"
	



