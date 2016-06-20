#!/bin/bash
update(){
echo "updateVersionModule"
}
updateMain(){
	PID=`/bin/cat /home/sysadmin/cam9/run/main.pid`
	echo "PID: $PID"
}
case $1 in
updateMain)
	updateAllow=1
	if [ "$updateAllow" = "0" ]; then
		echo "No need to updateMain"
	else
		echo "Need to update updateMain"
		updateMain
	fi
	;;
updateModule)
	updateModule
	;;
*)
	echo "Nothing to do"
	;;
esac