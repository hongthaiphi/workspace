#!/bin/bash
CAM9="/home/sysadmin/cam9"
while IFS='' read -r i || [[ -n "$i" ]]; do
	echo $i
done <<< "$(cat $CAM9/run/updateServerModules.version.txt)"