function now(txt) {
    console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' ' + txt);
}

function wait(fn, miliSeconds){
    var startTime = new Date().getTime();
    while (new Date().getTime()< startTime + miliSeconds);
    fn();
}

now('> start to wait');
setTimeout(function() {now('> Finish waiting');}, 5000);
now('> di choi di');

