# /bin/bash
HOME_PATH="/home/sysadmin"	
. $HOME_PATH/cam9/modules/getCPULoad.sh
. $HOME_PATH/cam9/modules/getTemperature.sh
. $HOME_PATH/cam9/modules/getDisk.sh
. $HOME_PATH/cam9/modules/getRAM.sh

function updateServerStatistic(){
	echo "start updateServerStatistic"
	cpuLoad
	checkTemperature
	checkDisk
	getRAMInfo
	DEVICE_ID=$(/bin/cat /sys/class/net/eth0/address)
	wget -qO /dev/null "http://cp.cam9.tv:3000/lastupdatetime?device_id=$DEVICE_ID"
	wget -qO /dev/null "http://cp.cam9.tv:3000/updateServerStatistic?device_id_server=$DEVICE_ID&ram=$getRAMInfo&free_space=$checkDisk&cpu_tem=$checkTemperature&cpu_load=$cpuLoad"
	echo "http://cp.cam9.tv:3000/updateServerStatistic?device_id_server=$DEVICE_ID&ram=$getRAMInfo&free_space=$checkDisk&cpu_tem=$checkTemperature&cpu_load=$cpuLoad"
}
