# /bin/bash
echo begin

while [ -z "$PID" ]; do
	PID=$(cat run/testKill.pid)
	echo wait to PID
	sleep 5
done

echo pid= $PID
ABC="kill $PID"
CCC=' && ./testKill.sh sleep 0.5 & echo $! > run/testKill.pid'
# CCC=' && ./testKill.sh &; sleep 0.5 && echo $! > run/testKill.pid'
CEF=$ABC$CCC
echo $CEF
eval $CEF

echo endfirst
#$testKill

