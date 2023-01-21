const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

getClock(); // 페이지가 로드되면 바로 시계가 작동될 수 있게함
setInterval(getClock, 1000);