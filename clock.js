const clockContainer = document.querySelector(".js-clock"),
//클래스이므로 . 붙여야함
    clockTitle = clockContainer.querySelector("h1"),
    dateTitle = clockContainer.querySelector("h2") ;   

function getTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    
    dateTitle.innerText = `${year}. ${month< 10 ? `0${month}` : month }. ${day < 10? `0${day}`:day}`;
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
    // 지정된 시간마다 함수를 다시 실햄함.
    // 1초 = 1000 mileseconds
}

init();
