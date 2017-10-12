var sys_hr;
var sys_mt;
var sys_sc;
var audio;
var sys_tm;
(function () {
    curntTime();
    checkBrowser();
    audio = new Audio('apple_ring.mp3');
   
})();

function curntTime() {
    var crunt_time = new Date();
    sys_hr = crunt_time.getHours();
    sys_mt = crunt_time.getMinutes();
    sys_sc = crunt_time.getSeconds();
    sys_tm = crunt_time.getTime();
    console.log(sys_hr, sys_mt, sys_sc, sys_tm);
}

var hr = sys_hr > 12 ? sys_hr - 12 : sys_hr;
var mt = sys_mt;
var sec = sys_sc;
var dayOrNight = sys_hr > 12 ? 'pm' : 'am';
var alrm_hr = 0;
var alrm_mt = 0;

function ring(clintr) {
    curntTime();
    clearInterval(clintr);
    console.log("Riingingggggg");
    audio.play();

}

function startAlarm(val) {
    val = (val * 60);
    val = val - sec - 12;
    
    console.log(new Date(val*1000),  val);
    var clrIntr = setInterval(function () {
        if (val == 0)
            ring(clrIntr);
        else
            val--;
    }, 1000);
}

function setAlarm(event) {
    curntTime();
    var al_dy =  parseInt(document.getElementById('alrm_day').value);
    var al_hr = parseInt(document.getElementById('alrm_hour').value);
    var al_min = parseInt(document.getElementById('alrm_minute').value);
    var al_time = document.getElementById('am_pm').value;
    var days = al_dy > 1 ? (al_dy) * 24 * 60 : 0;

    if (al_time == dayOrNight) {
        if (al_hr >= hr) {
            alrm_mt = (al_hr - hr) * 60;
            alrm_mt = (alrm_mt - mt) + al_min ;
        } else {
            alrm_hr = 24 - (hr - al_hr);
            alrm_mt = (alrm_hr * 60) + al_min ;
        }
    } else {
        alrm_hr = (12 - hr) + al_hr;
        alrm_mt = (alrm_hr * 60);

    }
console.log(alrm_mt ,days);
    startAlarm((alrm_mt) + days);

}

function isIE () {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
  }

  function checkBrowser(){
      if(isIE() && isIE() < 9){
        document.getElementById('set').attachEvent('onclick',startAlarm);
    }else{
        document.getElementById('set').addEventListener('click',setAlarm);
    }
}