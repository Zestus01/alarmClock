const setAlarmBtn = document.getElementById('setAlarm');
const clock = document.querySelector(".clock");
const alarm = document.querySelector(".alarm");
const alarmTime = document.getElementById('timeSet');

let alarmSet = false;
let endDate = new Date();
let startDate = new Date();

setAlarmBtn.addEventListener('click', () => {
   let alarmStr = 'Timer will go off at: ';
   alarmSet = true;
   endDate = new Date();
   if(alarmTime.value === ''){
    endDate.setSeconds(endDate.getSeconds() + 10);
   } else {
    endDate.setSeconds(endDate.getSeconds() + Number(alarmTime.value));
   }
   alarmStr += formatTime(endDate);
   alarm.textContent = alarmStr;
   
});

function checkTime(){
    if(alarmSet && endDate.getSeconds() === startDate.getSeconds()){
        alert('Time has been reached');
        
    }
}

function updateTime(){
    let timeStr = 'The time is ';
    startDate = new Date();
    timeStr += formatTime(startDate);
    clock.textContent = timeStr;
    checkTime();
}

function formatTime(date){
    let timeStr = '';
    if(date.getHours() > 12 ){
        date.setHours(date.getHours() % 12);
        timeStr += '0'+date.getHours()+":";
    }
    if(date.getMinutes() < 10)
        timeStr += '0';
    timeStr += date.getMinutes()+':';
    if(date.getSeconds() < 10)
        timeStr += '0';
    timeStr += date.getSeconds();
    return timeStr;
}

setInterval(updateTime, 100);