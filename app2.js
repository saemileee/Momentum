const title = document.querySelector(".hello:first-child h1"); // querySelector는 element를 CSS 방식으로 검색할 수 있다.
const content = document.querySelector(".hello h2"); 

function handleTitleClick(){
    if (content.style.display==="none"){
        content.style.display="block";
        title.innerText="Toggle -";
    }else if (content.style.display==="block"){
        content.style.display="none";
        title.innerText="Toggle +";
    }
}

function handleMouseEnter(){
    title.style.color="green";
}

function handleMouseLeave(){
    title.style.color="black";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOnline(){
    alert("WIFI is connected")
}

function handleWindowOffline(){
    alert("SOS no WIFI")
}
// title.addEventListener("click", handleTitleClick);
// // title.addEventListener("mouseenter", handleMouseEnter)
// title.addEventListener("mouseleave", handleMouseLeave)

title.onclick=handleTitleClick;
title.onmouseenter=handleMouseEnter;
title.onmouseleave=handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);