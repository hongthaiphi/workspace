#!/bin/bash

HOME_PATH="/home/sysadmin/"
	
. $HOME_PATH/cam9/lib.sh
FILE_NAME="$HOME_PATH/cam9/log/runModulesInFile.log"
PREFIX="[runModulesInFile.sh]"

while IFS='' read -r i || [[ -n "$i" ]]; do
		writeAllLog $FILE_NAME $PREFIX "$i"
		MODULE_ID=$(echo $i | awk -F';' '{print $1}')
		COMMAND=$(echo $i | awk -F';' '{print $2}')
		MODULE_NAME=$(echo $i | awk -F';' '{print $3}')
		MODULE_VERSION=$(echo $i | awk -F';' '{print $4}')
		MODULE_URL=$(echo $i | awk -F';' '{print $6}')
		writeAllLog $FILE_NAME $PREFIX "MODULE_ID: $MODULE_ID - COMMAND: $COMMAND"
		if [[ $MODULE_ID ]]; then	
			IFS='/' read -ra array <<< "$MODULE_URL" 
			mkdir /home/sysadmin/cam9/source/$MODULE_ID/
			wget $MODULE_URL -O /home/sysadmin/cam9/source/$MODULE_ID/${array[last_index-1]}
			chmod +x /home/sysadmin/cam9/source/$MODULE_ID/${array[last_index-1]}
			
			#copy module id=1 to file cam/UpdateServerModule
			if [ $MODULE_ID == 1 ]; then
				cp  /home/sysadmin/cam9/source/$MODULE_ID/${array[last_index-1]} /home/sysadmin/cam9/updateServerModules.sh
			fi
			#copy module id=2 to file cam/UpdateServerStatus
			if [ $MODULE_ID == 2 ]; then
				cp  /home/sysadmin/cam9/source/$MODULE_ID/${array[last_index-1]} /home/sysadmin/cam9/updateServerStatus.sh
			fi
			
			#get length of array
			last_index=${#array[@]} 	
				#kill pid before run 
			PID=$(/bin/cat /home/sysadmin/cam9/run/$MODULE_ID.pid)
			writeAllLog $FILE_NAME $PREFIX "pid:  $PID"
			sudo kill $PID
			sleep 1
			#run .sh file in folder source
			RUN_COMMAND="nohup /home/sysadmin/cam9/source/$MODULE_ID/${array[last_index-1]} &> /dev/null sleep 1 & echo \$! > /home/sysadmin/cam9/run/$MODULE_ID.pid &"
			
			writeAllLog $FILE_NAME $PREFIX $RUN_COMMAND
			eval $RUN_COMMAND
		fi
done <<< "$(/bin/cat /home/sysadmin/cam9/run/install.module.version.txt)"
	



