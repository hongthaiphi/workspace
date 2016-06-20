function getRAMInfo(){
	threshold="100"
	echo "$(date) Checking RAM ..."
	echo "--------------------------------------------------------------"
	MEMINFO=$(free -m | grep "Mem:")
	SWAPINFO=$(free -m | grep "Swap:")
	# MEMINFO
	MEM_TOTAL=$(echo "$MEMINFO" | awk '{print $2}')
	MEM_USED=$(echo "$MEMINFO" | awk '{print $3}')
	MEM_FREE=$(echo "$MEMINFO" | awk '{print $4}')
	MEM_SHARED=$(echo "$MEMINFO" | awk '{print $5}')
	MEM_BUFFERS=$(echo "$MEMINFO" | awk '{print $6}')
	MEM_CACHED=$(echo "$MEMINFO" | awk '{print $7}')
	echo "MEM_TOTAL:$MEM_TOTAL; MEM_USED:$MEM_USED; MEM_FREE:$MEM_FREE; MEM_SHARED:$MEM_SHARED; MEM_BUFFERS:$MEM_BUFFERS; MEM_CACHED:$MEM_CACHED"
	# SWAPINFO
	SWAP_TOTAL=$(echo "$SWAPINFO" | awk '{print $2}')
	SWAP_USED=$(echo "$SWAPINFO" | awk '{print $3}')
	SWAP_FREE=$(echo "$SWAPINFO" | awk '{print $4}')
	echo "SWAP_TOTAL:$SWAP_TOTAL; SWAP_USED:$SWAP_USED; SWAP_FREE:$SWAP_FREE"
	if (($MEM_FREE < threshold))
	then
        	echo "RAM is nearly full (free:$MEM_FREE)"
	fi
	if [ $SWAP_USED -gt 0 ]; then
        	echo -e "\e[0;31mSWAP used\e[0m"
	fi
	echo "$(date) Checked"
	echo "--------------------------------------------------------------"
	getRAMInfo=$SWAP_FREE
}
getRAMInfo