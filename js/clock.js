const clock = document.querySelector("h2#clock");
const todayContainer = document.querySelector("h2#date");
const weekArr = new Array(7);
weekArr[0] = "Sun";
weekArr[1] = "Mon";
weekArr[2] = "Tue";
weekArr[3] = "Wed";
weekArr[4] = "Thu";
weekArr[5] = "Fri";
weekArr[6] = "Sat";
const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); // getHours는 number이기 때문에 string으로 변환해주어야함
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`)
}

function getDate(){
    const date = new Date();
    const weekDay = weekArr[(date.getDay())];
    const month = monthArr[(date.getMonth())];
    const getDate = String(date.getDate());
    const year = String(date.getFullYear());
    todayContainer.innerText = (`${getDate} ${month}  ${weekDay} ${year}`);
}

getClock(); // 페이지가 로드되면 바로 시계가 작동될 수 있게함
getDate();
setInterval(getClock, 1000);
setInterval(getDate, 10000);