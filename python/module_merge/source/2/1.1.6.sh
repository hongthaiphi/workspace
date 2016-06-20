#!/bin/bash
	# a- Chương trình này chạy trên servers.
	# b- Được tải về bởi chương trình ở mục 4 theo lệnh của server. Cài lần đầu khi box được bật lên.
	# c- Định kỳ 50 giây (đổi sau) phải gửi một lệnh lên CMS để nhận về các lệnh điều hành nghiệp vụ
	# e- Khi gửi lên có thể kèm theo các lệnh yêu cầu cung cấp thông tin về server, modules, cameras, …
	# f- Khi gửi lên có thể kèm các lệnh bắt CMS cập nhật thông tin BÁO CÁO mới của server, modules, cameras….
	# g- Điều khiển các modules khác chạy trên servers.
	# h- Định kỳ thu thập thông tin nhiệt độ CPU gửi về CMS hiển thị trong phần General báo cáo ngay lên CMS.
	# i- Định kỳ thu thập thông tin dung lượng đĩa cứng tổng cộng/đang sử dụng/còn trống báo cáo ngay lên CMS.
	# j- Định kỳ thu thập thông tin về các modules báo cáo ngay lên CMS.
	# k- Định kỳ thu thập thông tin về các cameras và báo cáo ngay lên CMS.
	# m- Lần đầu tiên khi được chạy trở lại phải thực hiện thu thập tất cả các thông tin trên gửi về CMS.
# HOME_PATH="/home/sysadmin/cam9"	
#server:
FILE_NAME="/home/sysadmin/cam9/log/updateServerStatus.log"
. /home/sysadmin/cam9/lib.sh
PREFIX="[updateServerStatus.sh]"

function runAllModule(){
	while IFS='' read -r i || [[ -n "$i" ]]; do
		writeAllLog $FILE_NAME $PREFIX "$i"
		MODULE_ID=$(echo $i | awk -F';' '{print $1}')
		COMMAND=$(echo $i | awk -F';' '{print $2}')
		MODULE_NAME=$(echo $i | awk -F';' '{print $3}')
		MODULE_VERSION=$(echo $i | awk -F';' '{print $4}')
		MODULE_URL=$(echo $i | awk -F';' '{print $6}')
		writeAllLog $FILE_NAME $PREFIX "MODULE_ID: $MODULE_ID - COMMAND: $COMMAND"
			
		IFS='/' read -ra array <<< "$MODULE_URL" 

		#get length of array
		last_index=${#array[@]} 	
			#kill pid before run 
		PID=$(/bin/cat /home/sysadmin/cam9/run/$MODULE_ID.pid)
	
		if ps -p $PID > /dev/null
		then
   			writeAllLog $FILE_NAME $PREFIX "$PID is running"
			update updateModuleStatus $MODULE_ID   
   			# Do something knowing the pid exists, i.e. the process with $PID is running
		else
			#run .sh file in folder source
			RUN_COMMAND="sudo -u sysadmin nohup /home/sysadmin/cam9/source/$MODULE_ID/${array[last_index-1]} &> /dev/null sleep 1 & echo \$! > /home/sysadmin/cam9/run/$MODULE_ID.pid &"
			writeAllLog $FILE_NAME $PREFIX $RUN_COMMAND
			eval $RUN_COMMAND
			update updateModuleStatus $MODULE_ID
		fi
	done <<< "$(/bin/cat /home/sysadmin/cam9/run/updateServerModules.version.txt)"
}


count=0
while true
do
	if [ $count -eq 0 ]; then
		echo "First time!"
		writeAllLog $FILE_NAME $PREFIX "First time!"
		writeLog "First time!"
		count=$[$count+1]
		# updateServerStatistic
		# cameraDetector
		# runAllModule
		update updateStatusServer
		update updateModuleStatus 2
		# /home/sysadmin/cam9/modules/getNAMTV.sh
	elif [ $count -eq 10 ]; then
 		count=1
 		echo "Do something!"
		writeAllLog $FILE_NAME $PREFIX "Do something!"
 		# updateServerStatistic
 		# cameraDetector
		# runAllModule
		update updateStatusServer
		update updateModuleStatus 2
		# /home/sysadmin/cam9/modules/getNAMTV.sh
 	else
 		count=$[$count+1]
 	fi
 	echo $count
 	sleep 1
done
#update updateStatusServer
#infoChannel2
#cameraDetector
#stopChannel2 $(cameraDetector2 stop)
#startChannel2 $(cameraDetector2 start) 0