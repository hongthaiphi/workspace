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
. cameraDetector.sh
function checkDisk(){
    	echo -ne "Check Disk: "
		SOC=$(uname -m)
		if [ "$SOC" != "armv7l" ]; then
			PARTITION=/dev/sda3
		else
			PARTITION='/dev/mmcblk0p2'
		fi
    	threshold="30"
    	SIZE=$(df -h | grep "$PARTITION" | awk '{print $2}')
    	USED=$(df -h | grep "$PARTITION" | awk '{print $3}')
    	AVAIL=$(df -h | grep "$PARTITION" | awk '{print $2}')
    	PERCENT_USED=$(df -h | grep "$PARTITION" | awk '{print $5}' | sed 's/%//g')
    	PERCENT_AVAIL=`expr 100 - $PERCENT_USED`
    	echo "partition:$PARTITION;size:$SIZE;used:$USED;avail:$AVAIL;percent_used:${PERCENT_USED}%;percent_avail:${PERCENT_AVAIL}%" 
}
function checkTemperature(){
	#timestamp=`date +"%H:%M:%S"`
	TEMP_WARNING=80
	TEMP_DEAD=90
	architecture=$(uname -m)
	if [ $architecture = "armv7l" ]; then
		temp1=$(cat /sys/devices/virtual/hwmon/hwmon1/temp1_input)
	elif [ $architecture = "x86_64" ]; then
		str=$(sensors | grep "Core 0:")
  		TEMP_WARNING=${str:32:2}
		i=0
		temp1=0
		while IFS='' read -r line || [[ -n "$line" ]]; do
			i=`expr $i + 1`
			temp1=`expr $(echo "$line" | cut -d \+ -f2 | cut -c1-2) + $temp1` 
		done <<< "$(sensors | grep 'Core')"
		let temp1=$temp1/$i
	fi
	if [ $temp1 -ge $TEMP_WARNING ] && [ $temp1 -lt $TEMP_DEAD ]; then
		echo "Warning: Temperature : $HOSTNAME : $temp1"
	fi
	if [ $temp1 -ge $TEMP_DEAD ]; then
		echo "DEAD!: Temperature : $HOSTNAME : $temp1"
	fi
	if [ $temp1 -lt $TEMP_WARNING ]; then
		echo "Current temperature: $temp1. TEMP_WARNING: $TEMP_WARNING"
	fi
}
. lib.sh
count=0
while true
do
	if [ $count -eq 0 ]; then
		echo "First time!"
		writeLog "First time!"
		count=$[$count+1]
		checkDisk
		checkTemperature
		cameraDetector
	elif [ $count -eq 10 ]; then
 		count=1
 		echo "Do something!"
 		checkDisk
 		checkTemperature
 		cameraDetector
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