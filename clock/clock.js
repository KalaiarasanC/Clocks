(function () {
    clock();
})();

var crunt_time = new Date();
console.log(crunt_time.getUTCDate());
var sys_hr = crunt_time.getHours();
var sys_mt = crunt_time.getMinutes();
var sys_sc = crunt_time.getSeconds();
document.getElementById('time').innerHTML = sys_hr + ':' + sys_mt + ':' + sys_sc;

var hr = sys_hr;
var mt = sys_mt;
var sec = sys_sc;
var dayOrNight = sys_hr > 12 ? 'pm' : 'am';

function print() {
    var hur, min, sc;
    if (hr < 10)
        hur = "0" + hr;
    else
        hur = hr;
    if (mt < 10)
        min = "0" + mt;
    else
        min = mt;
    if (sec < 10)
        sc = "0" + sec;
    else
        sc = sec;

        document.getElementById('time').innerHTML = hur + ':' + min + ':' + sc;
    // document.getElementById('timer').innerHTML = hur + " : " + min + " : " + sec;
}

function incrementHour() {
    hr++;
}

function incrementMinute() {
    mt++;
    if(mt > 59){
        incrementHour();
    }
}

function incrementSecond() {
    sec++;

}

function clock() {

    setInterval(function () {
        if (sec > 58) {
            sec = 0;
            incrementMinute();
        } else {
            incrementSecond();
        }
        if (mt > 58) {
            mt = 1;
            incrementHour();
        }
        if (hr >= 13) {
            hr = hr-12;
        }
        print();
        
    }, 1000);

}

// function ring(){

// }
// function startAlarm(val){
//     console.log(val);
//     setInterval(function(){
//         if(val == 0)
//             ring();
//          else
//             val--;   
//     },60000);
// }

// function setAlarm(){

//     var al_hr = parseInt(document.getElementById('alrm_hour').value);
//     var al_min = parseInt(document.getElementById('alrm_minute').value);
//     var al_time = document.getElementById('am_pm').value;
//     console.log('hr : '+al_hr,'min : '+al_min, 'am | Pm : '+al_time);

    
//     if(al_time == dayOrNight){
//             if(al_hr > hr){
//                 alrm_hr = al_hr-hr;
//             }else{
//                 alrm_hr = 24 - (hr-al_hr);    
//             }
//     }else{
//         alrm_hr = (12-hr)+al_hr;
//     }

//     startAlarm((alrm_hr * 60) + al_min);
//     // console.log((alrm_hr * 60) + al_min);

// }
