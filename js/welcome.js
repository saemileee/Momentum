const welcome = document.querySelector("#welcome");
const date = new Date();
const nowTime = String(date.getHours());

if (6<=nowTime && nowTime < 12){
    welcome.innerText = "good morning."
} else if (6<=nowTime && nowTime < 12){
    welcome.innerText = "good morning."
} else if (12<=nowTime && nowTime < 18){
    welcome.innerText = "good afternoon."
} else if (18<=nowTime && nowTime < 21){
    welcome.innerText = "good evening."
} else if (21<=nowTime && nowTime < 23){
    welcome.innerText = "good night."
} else if (0<=nowTime && nowTime < 6){
    welcome.innerText = "good night."
}