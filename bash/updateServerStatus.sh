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
. /home/sysadmin/cam9/updateServerStatistic.sh
. /home/sysadmin/cam9/modules/cameraDetector.sh	

. /home/sysadmin/cam9/lib.sh
count=0
while true
do
	if [ $count -eq 0 ]; then
		echo "First time!"
		writeLog "First time!"
		count=$[$count+1]
		updateServerStatistic
		cameraDetector
		update updateStatusServer
		update updateModuleStatus 2
		/home/sysadmin/cam9/modules/getNAMTV.sh
	elif [ $count -eq 10 ]; then
 		count=1
 		echo "Do something!"
 		updateServerStatistic
 		cameraDetector
		update updateStatusServer
		update updateModuleStatus 2
		/home/sysadmin/cam9/modules/getNAMTV.sh
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