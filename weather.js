const weather = document.querySelector(".js-weather");

const API_KEY = "d8d02844accc5f9bea11da312d3919fd";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(responsee){
            return responsee.json(); // 응답 내의 데이터를 가져옴
        }).then(function(json){
            const tem = json.main.temp;
            const placse = json.name;
            weather.innerText = `${tem}°C, ${placse}`;
            console.log(json);
        });
    //데이터가져오기
    //then은 데이터가 우리한테 완전히 들어온다음 지정한 함수 호출. 어떤 데이터는 가져오는데 시간이 걸리니까!
}

function handleGeoSucess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, longitude
    }; // 속성명과 변수면이 같으면 이렇게 작성가능!
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    getWeather(latitude, longitude);
}

function handleGeoError(position){

}

function ackForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
    // 위치 잡기 성공 시 호출 함수, 실패시 호출 함수 두개를 인자로!
}

function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords === null){ ackForCoords(); }
    else {
        paresCoords = JSON.parse(loadCoords);
        getWeather(paresCoords.latitude, paresCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();