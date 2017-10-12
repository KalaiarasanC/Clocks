var hr = 0;
var mn = 0;
var sc = 0;
var time = 0;
var isPause = false;

document.getElementById('startBtn').addEventListener('click',start);
document.getElementById('pausPly').addEventListener('click',pausPlay);

function getTime() {

    hr = parseInt(document.getElementById('hr').value);
    mn = parseInt(document.getElementById('min').value);
    sc = parseInt(document.getElementById('sec').value);

    time = (hr * 60 * 60) + (mn * 60) + sc;
    console.log(hr, mn, sc, time);
}

function decHr() {
    if (hr >= 0) {
        hr--;
    }
}

function decMn() {
    if (mn >= 0) {
        mn--;
    }
}

function decSc() {
    if (sc >= 0) {
        sc--;
    }
}

function pausPlay() {

    isPause = isPause ? false : true;

}

function print() {
    var hur, min, sec;
    if (hr < 10)
        hur = "0" + hr;
    else
        hur = hr;
    if (mn < 10)
        min = "0" + mn;
    else
        min = mn;
    if (sc < 10)
        sec = "0" + sc;
    else
        sec = sc;

    document.getElementById('timer').innerHTML = hur + " : " + min + " : " + sec;
}

function start() {
    getTime();
    clrInt = setInterval(function () {
        if (!isPause) {

            if (sc <= 0) {
                sc = 59;
                decMn();
            } else {
                decSc();
            }
            if (mn < 0) {
                mn = 59;
                decHr();
            }
            time--;
            if (time == 0) {
                clearInterval(clrInt);
            }
            print();
        }
    }, 1000);


}