# /bin/bash
PDI=12
ABC="kill $PID"
CCC='&& ./testKill.sh & echo $! > run/testKill.pid'
CEF=$ABC$CCC
echo $CEF
echo $ABC
