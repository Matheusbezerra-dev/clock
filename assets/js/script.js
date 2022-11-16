const MAGICNUMBER = 10
const clockDigital = document.querySelector('.digital')
const secondElement = document.querySelector('.p_s')
const minuteElement = document.querySelector('.p_m')
const hoursElement = document.querySelector('.p_h')
const updateClock = () => {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()
  clockDigital.innerHTML = `${formatedTime(hour)}:${formatedTime(minute)}:${formatedTime(second)}`
  // Clock analogic
  const sDeg = ((360 / 60) * second) - 90
  const mDeg = ((360 / 60) * minute) - 90
  const hDeg = ((360 / 12) * hour) - 90
  secondElement.style.transform = `rotate(${sDeg}deg)`
  minuteElement.style.transform = `rotate(${mDeg}deg)`
  hoursElement.style.transform = `rotate(${hDeg}deg)`
}
const formatedTime = (time) => time < MAGICNUMBER ? `0${time}` : time
setInterval(updateClock, 1000)
