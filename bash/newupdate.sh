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
echo ok
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
	exit 0;
fi
count=0