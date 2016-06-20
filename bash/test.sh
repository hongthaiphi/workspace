# /bin/bash
INFO_CHANNEL="00:12:13:46:88:43;10.10.28.2;rtsp://10.10.28.2:554/user=admin&password=&channel=1&stream=1.sdp?;rtsp://10.10.28.2:554/user=admin&password=&channel=1&stream=0.sdp?;1280x720
abcdef "
CHANNEL=$(echo "$INFO_CHANNEL" | /usr/bin/awk -F';' '{print $1}')
echo $INFO_CHANNEL

IFS=$'\n' read -rd '' -a ADDR <<< "$INFO_CHANNEL"

for i in "${ADDR[@]}"; do
	echo thang so $i
done
. updateServerStatistic.sh
updateServerStatistic
