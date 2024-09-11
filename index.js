// First I set the value of hour, minute, second, millisecond to zero. 
// This means that these values ​​will be zero when the countdown starts. 
// With set a constant of the display id.
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timeRef = document.querySelector(".timerDisplay");
let int = null;

// Countdown value is set to 0. The countdown will increase 
// every millisecond when you click on it. the start button is set
document.getElementById("startTimer").addEventListener("click", ()=>{
    if(int !==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

// I have implemented the pause button using these codes. 
// The countdown will stop when you click on this button.
document.getElementById("pauseTimer").addEventListener("click", ()=>{
    clearInterval(int);
});

// I have implemented the reset button using the following codes. 
// when you click on the reset button, the time in the display will return to the previous state, ie zero. 
document.getElementById("resetTimer").addEventListener("click", ()=>{
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timeRef.innerHTML = "00 : 00 : 00: 00";
});

// using if function to set the value of milliseconds, seconds, minutes and hours
function displayTimer(){
    milliseconds+=10;

    if(milliseconds==1000){
        milliseconds = 0;
        seconds ++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++
            }
        }
    }

// using condition, when the time value is less than 10, 
// two zeros will be added. A zero will be added when the value of time is less than 100.    
let h = hours < 10 ? "0" + hours : hours;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;
let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

