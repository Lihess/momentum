const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
    SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text} !`;
}

function handleSubmit(event){
    event.preventDefault(); // 엔터를 눌러도 새로고침되는 기본기능을 금지
    const currentValue = input.value;

    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){ askForName(); }
    else paintGreeting(currentUser);
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function init(){
    loadName();
}

init();