# /bin/bash
RUN_COMMAND2='nohup source/1.1.3.sh > /dev/null sleep 0.5 & echo $! > run/1.pid'
eval $RUN_COMMAND2