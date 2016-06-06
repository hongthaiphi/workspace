#!/bin/bash
	#a- Chương trình này chạy trên servers CCTV 3.0, và sau đó là CCTV 2.0.
	#b- Tự động chạy khi box khởi động.
	#c- Định kỳ 1 phút (đổi sau) phải liên lạc với CMS để lấy cập nhật modules. Khi gửi lệnh đi thì luôn gửi kèm các thông tin về module hiện tại. Khi nhận về sẽ là các thông tin về module cần cập nhật hoặc cài mới.
	#d- Khi nhận được trả lời từ CMS, nếu module nào bị bắt phải nâng cấp thì tải phiên bản mới về, module nào chưa thấy có trên server thì tải nó về cài.
	#e- Lấy đường dẫn chương trình các module theo lệnh của CMS tải chương trình về server.
	#f- Chương trình này cũng có thể phải cập nhật lại chính nó như một module bình thường.
	#g- Thực hiện khởi động lại chương trình ở mục 5 nếu có cập nhật phiên bản
version_updateServerModules="0.0.1"
. lib.sh
updateServerModulesItself(){
	echo "updateServerModules"
	CAM9="/home/sysadmin/cam9"
	CONF=$1
	#COMMAND=$(cat command.txt)
	#if [ "$COMMAND" = "1" ]; then
	#	echo "update"
	#else
	#	echo "no-update"
	#fi
	#PID=`/bin/cat $CAM9/run/updateServerModules.pid`
	#cp /home/sysadmin/cam9/source/update.sh  /home/sysadmin/archive/update.sh
	#wget -q http://cp.monitor.cam9.tv/scripts/update.sh -O /home/sysadmin/cam9/source/update.sh
	#/home/sysadmin/source/update.sh $CONF
}
updateServerModules()
{
	echo "updateServerModules"
	#echo "Get latest updateServerModules"
	INTERFACE="eth0"
	HOSTNAME=$(/bin/cat /sys/class/net/$INTERFACE/address)
	echo $HOSTNAME
	#LATEST_MODULE=$(wget -q "http://cp.cam9.tv:3000/module?action=get_module&device_id_server=$HOSTNAME" -O-)
	#echo $LATEST_MODULE > /home/sysadmin/cam9/run/updateServerModules.version.txt
	#VERSION=$(echo "$LATEST_MODULE" | awk -F';' '{print $1}')
	#echo "VERSION: $VERSION"
	#URL=$(echo "$LATEST_MODULE" | awk -F';' '{print $2}')
	#echo "URL: $URL"
	echo "get latest all Modules"
	CAM9="/home/sysadmin/cam9"
	#cp $CAM9/version_updateServerModules.version.txt cp $CAM9/version_updateServerModules.old.version.txt
	# STRING=""
	# while IFS='' read -r i || [[ -n "$i" ]]; do
	# 	MODULE_ID=$(echo $i | grep -F';' '{print $1}')
	# 	OLD_COMMAND=$(echo $i | grep -F';' '{print $2}')
	# 	OLD_MODULE_NAME=$(echo $i | grep -F';' '{print $3}')
	# 	OLD_MODULE_VERSION=$(echo $i | grep -F';' '{print $4}')
	# 	OLD_MODULE_URL=$(echo $i | grep -F';' '{print $5}')
	# 	echo "MODULE_ID: $MODULE_ID - COMMAND: $OLD_COMMAND - OLD_MODULE_NAME: $OLD_MODULE_NAME - OLD_MODULE_VERSION: $OLD_MODULE_VERSION - OLD_MODULE_URL: $OLD_MODULE_URL"
	# 	if [ -z "$STRING" ]; then
	# 		STRING=${MODULE_ID}-${MODULE_VERSION}
	# 	else
	# 		STRING=${STRING}";"${MODULE_ID}-${MODULE_VERSION}
	# 	fi
	# done <<< "$(cat $CAM9/run/updateServerModules.old.version.txt)"
	#wget -q "http://cp.cam9.tv:3000/module?action=get_latest_version&device_id_server=$HOSTNAME&module_id=$STRING"
	LATEST_ALL_MODULE=$(wget -q "http://cp.cam9.tv:3000/module?action=get_latest_version&device_id_server=00:26:2d:4a:2a:d4" -O $CAM9/run/updateServerModules.version.txt)
	while IFS='' read -r i || [[ -n "$i" ]]; do
		echo "$i"
		MODULE_ID=$(echo $i | awk -F';' '{print $1}')
		COMMAND=$(echo $i | awk -F';' '{print $2}')
		MODULE_NAME=$(echo $i | awk -F';' '{print $3}')
		MODULE_VERSION=$(echo $i | awk -F';' '{print $4}')
		MODULE_URL=$(echo $i | awk -F';' '{print $5}')
		echo "MODULE_ID: $MODULE_ID - COMMAND: $COMMAND"
	done <<< "$(cat $CAM9/run/updateServerModules.version.txt)"
	echo "Send version of Module"
}
#main
CAM9="/home/sysadmin/cam9"
if [ ! -d $CAM9/cam9/run ] || [ ! -d $CAM9/source ] || [ ! -d $CAM9/archive ] || [ ! -d $CAM9/cam9/log ]; then
	mkdir $CAM9/run; mkdir $CAM9/source; mkdir $CAM9/archive; mkdir $CAM9/log
fi
if [ "$1" = "info" ]; then
	infoChannel2 info
	exit 0;
fi
if [ "$1" = "version" ]; then
	getVersion
	exit 0;
fi
if [ "$1" = "update" ]; then
	updateServerModulesItself
	exit 0;
fi
count=0
while true
do
	if [ $count -eq 0 ]; then
		echo "First time!"
		count=$[$count+1]
		updateServerModules
		updateServerModulesItself
	elif [ $count -eq 50 ]; then
 		count=1
 		echo "Do something!"
 		updateServerModules
		updateServerModulesItself
 	else
 		count=$[$count+1]
 	fi
 	echo $count
 	sleep 1
done
