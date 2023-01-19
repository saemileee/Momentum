const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event){
    event.preventDefault();
    if (loginInput.value !==""){
        const userName = loginInput.value;
        loginForm.classList.add(HIDDEN_CLASSNAME);
        greeting.innerText = `Hello ${userName}`; //"Hello " + userName;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } else {alert()}
}

loginForm.addEventListener("submit", onLoginSubmit); 