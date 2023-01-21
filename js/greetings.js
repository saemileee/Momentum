const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "userName" // string이 여러개 사용될 경우 오타 오류를 잡아내기 위해 변수지정

function onLoginSubmit(event){
    event.preventDefault();
    if (loginInput.value !==""){
        const typedUserName = loginInput.value;
        loginForm.classList.add(HIDDEN_CLASSNAME);
        localStorage.setItem(USERNAME_KEY, typedUserName);
        paintGreetings(typedUserName);
        paintLogout();
    } else {alert()}
}


function paintLogout(){
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

function onLogoutSubmit(){
    localStorage.removeItem(USERNAME_KEY, savedUserName);// localSotrage 값 초기화 하기
    window.location.reload()
}

logoutForm.addEventListener("submit", onLogoutSubmit);

function paintGreetings(typedUserName){
    greeting.innerText = `Hello ${typedUserName}`; //"Hello " + userName;
    greeting.classList.remove(HIDDEN_CLASSNAME); // show the greetings
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); // show the form
    loginForm.addEventListener("submit", onLoginSubmit); 
} else {
    paintGreetings(savedUserName);
    paintLogout();
}


