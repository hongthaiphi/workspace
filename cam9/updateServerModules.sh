#!/bin/bash
	#a- Chương trình này chạy trên servers CCTV 3.0, và sau đó là CCTV 2.0.
	#b- Tự động chạy khi box khởi động.
	#c- Định kỳ 1 phút (đổi sau) phải liên lạc với CMS để lấy cập nhật modules. Khi gửi lệnh đi thì luôn gửi kèm các thông tin về module hiện tại. Khi nhận về sẽ là các thông tin về module cần cập nhật hoặc cài mới.
	#d- Khi nhận được trả lời từ CMS, nếu module nào bị bắt phải nâng cấp thì tải phiên bản mới về, module nào chưa thấy có trên server thì tải nó về cài.
	#e- Lấy đường dẫn chương trình các module theo lệnh của CMS tải chương trình về server.
	#f- Chương trình này cũng có thể phải cập nhật lại chính nó như một module bình thường.
	#g- Thực hiện khởi động lại chương trình ở mục 5 nếu có cập nhật phiên bản
version_updateServerModules="0.0.1"
HOME_PATH="/home/sysadmin/cam9"	
wget http://cp.cam9.tv/module_upload/constant/runModulesInFile.sh -O $HOME_PATH/runModulesInFile.sh
wget http://cp.cam9.tv/module_upload/constant/lib.sh -O $HOME_PATH/lib.sh
wget http://cp.cam9.tv/module_upload/constant/check_module_before_update.py -O $HOME_PATH/check_module_before_update.py



chmod +x /home/sysadmin/cam9/runModulesInFile.sh
chmod +x /home/sysadmin/cam9/lib.sh

#server:
FILE_NAME="/home/sysadmin/cam9/log/updateServerModules.log"
. /home/sysadmin/cam9/lib.sh

PREFIX="[updateServerModules.sh][$0]"
updateServerModulesItself(){
	# echo "updateServerModulesItself"
	writeAllLog $FILE_NAME $PREFIX "updateServerModulesItself"
	CAM9="/home/sysadmin/cam9"
	CONF=$1

}

updateServerModules()
{
	# echo "updateServerModules"
	writeAllLog $FILE_NAME $PREFIX "updateServerModules"
	#echo "Get latest updateServerModules"
	INTERFACE="eth0"
	HOSTNAME=$(/bin/cat /sys/class/net/$INTERFACE/address)

	writeAllLog $FILE_NAME $PREFIX "get latest all Modules"
	CAM9="/home/sysadmin/cam9"

	LATEST_ALL_MODULE=$(wget -q "http://cp.cam9.tv:3000/module?action=get_latest_version&device_id_server=$HOSTNAME" -O $CAM9/run/updateServerModules.version.txt)
	while IFS='' read -r i || [[ -n "$i" ]]; do
		# echo "$i"
		writeAllLog $FILE_NAME $PREFIX "$i"
		MODULE_ID=$(echo $i | awk -F';' '{print $1}')
		COMMAND=$(echo $i | awk -F';' '{print $2}')
		MODULE_NAME=$(echo $i | awk -F';' '{print $3}')
		MODULE_VERSION=$(echo $i | awk -F';' '{print $4}')
		MODULE_URL=$(echo $i | awk -F';' '{print $5}')
		# echo "MODULE_ID: $MODULE_ID - COMMAND: $COMMAND"
		writeAllLog $FILE_NAME $PREFIX "MODULE_ID: $MODULE_ID - COMMAND: $COMMAND"
	done <<< "$(cat $CAM9/run/updateServerModules.version.txt)"
	# echo "Send version of Module"
	writeAllLog $FILE_NAME $PREFIX "Send version of Module"
	python /home/sysadmin/cam9/check_module_before_update.py && cp /home/sysadmin/cam9/run/updateServerModules.version.txt /home/sysadmin/cam9/run/client.version.txt
	/home/sysadmin/cam9/runModulesInFile.sh
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
		# echo "First time!"
		writeAllLog $FILE_NAME $PREFIX "First time!"
		count=$[$count+1]
		updateServerModules
		updateServerModulesItself
	elif [ $count -eq 60 ]; then
 		count=1
 		# echo "Do something!"
		writeAllLog $FILE_NAME $PREFIX "Do something!"
 		updateServerModules
		updateServerModulesItself
		update updateModuleStatus 1
 	else
 		count=$[$count+1]
 	fi
 	echo $count
 	sleep 1
done
