var has_started = false;
var has_paused = false;
var time_element;
var lap_list;
var ms, sec, min;
var clrInterval;

document.getElementById('start').addEventListener('click',start);
document.getElementById('pasPly').addEventListener('click',pausPlay);
document.getElementById('reset').addEventListener('click',resetClock);
document.getElementById('lap').addEventListener('click',noteLap);

function resetClock() {
    has_started = false;
    has_paused = false;
    time_element = document.getElementById('time');
    document.getElementById('lap-box').removeChild(document.getElementById('lap-list'));
    time_element.innerHTML = '00 : 00 : 00';
    var lap_Box = document.getElementById('lap-box');

    
    var ul =  document.createElement('ul');
    ul.setAttribute('id','lap-list');
    lap_Box.appendChild(ul);
 
    ms = 0;
    sec = 0;
    min = 0;
    clearInterval(clrInterval);

    
}

function pausPlay() {
    console.log(has_paused);
    has_paused = has_paused ? false : true;

}

function print() {
    var msc, mn, sc;
    if (ms < 10)
        msc = "0" + ms;
    else
        msc = ms;
    if (min < 10)
        mn = "0" + min;
    else
        mn = min;
    if (sec < 10)
        sc = "0" + sec;
    else
        sc = sec;
    time_element.innerHTML = mn + " : " + sc + " : " + msc;
    return mn + " : " + sc + " : " + msc;
}


function noteLap() {

    console.log(lap_list);
    if (has_started){
        list = document.createElement('li');
        var text = document.createTextNode(print());
        list.appendChild(text);
        console.log(list);
         document.getElementById('lap-list').appendChild(list);
    }
}

function start() {
    resetClock();
    has_started = true;
    if (has_started) {
        clrInterval = setInterval(function () {
            if (!has_paused) {
                print();
                ms += 1;
                if (ms > 8) {
                    ms = 0;
                    sec += 1;
                }
                if (sec > 59) {
                    sec = 0;
                    min += 1;
                }
            }
        }, 100);
    }
}