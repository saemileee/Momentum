const clock = document.querySelector("h2#clock");
const todayContainer = document.querySelector("h2#date");

function getClock(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth());
    const day = String(date.getDay());
    const getDate = String(date.getDate());
    const hours = String(date.getHours()).padStart(2,"0"); // getHours는 number이기 때문에 string으로 변환해주어야함
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`)
    todayContainer.innerText = (`${year} ${month} ${getDate} ${day}`)

}

getClock(); // 페이지가 로드되면 바로 시계가 작동될 수 있게함
setInterval(getClock, 1000);

console.dir(date);