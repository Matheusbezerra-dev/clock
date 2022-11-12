"use strict";
const MAGICNUMBER = 10;
const clockDigital = document.querySelector('.digital');
const secondElement = document.querySelector('.p_s');
const minuteElement = document.querySelector('.p_m');
const hoursElement = document.querySelector('.p_h');
const updateClock = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    clockDigital.innerHTML = `${formatedTime(hour)}:${formatedTime(minute)}:${formatedTime(second)}`;
};
const formatedTime = (time) => time < MAGICNUMBER ? `0${time}` : time;
setInterval(updateClock, 1000);
