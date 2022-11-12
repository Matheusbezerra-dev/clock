const MAGICNUMBER: number = 10;
const clockDigital = document.querySelector('.digital') as HTMLDivElement;
const secondElement = document.querySelector('.p_s') as HTMLDivElement;
const minuteElement = document.querySelector('.p_m') as HTMLDivElement;
const hoursElement = document.querySelector('.p_h') as HTMLDivElement;

const updateClock = (): void => {
  const now: Date = new Date();
  const hour: number = now.getHours();
  const minute: number = now.getMinutes();
  const second: number = now.getSeconds();

  clockDigital.innerHTML = `${formatedTime(hour)}:${formatedTime(minute)}:${formatedTime(second)}`;
}

const formatedTime = (time: number): string | number => time < MAGICNUMBER ? `0${time}` : time;

setInterval(updateClock, 1000);
