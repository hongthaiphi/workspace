# /bin/bash
#server
# HOME_PATH="/home/sysadmin"
	
HOME_PATH="/home/sysadmin"
	
. /home/sysadmin/cam9/lib.sh
FILE_NAME="$HOME_PATH/cam9/log/updateServerStatus.log"
PREFIX="[updateServerStatistic.sh]"


me=`basename "$0"`
echo $me
count=0
while true 
do
	if [ $count -eq 0 ]; then
		# echo "First time!"
		writeAllLog $FILE_NAME $PREFIX "First time updateServerStatistic!"
		# updateServerStatistic
		count=$[$count+1]
	elif [ $count -eq 20 ]; then
 		count=1
 		# echo "Do something!"
		 writeAllLog $FILE_NAME $PREFIX "Do updateServerStatistic!"
 		# updateServerStatistic
 	else
 		count=$[$count+1]
 	fi
 	echo $count
 	sleep 1
done
