const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if (loadToDos !== null) {
        const paresdToDos = JSON.parse(loadToDos);
        // 문자열을 객체로 변환
        paresdToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        // forEach는 각 요소마다 해당 함수를 한번씩 실행하도록 함
        // 저장되어있는 리스트가 있다면 출력하도록 하기 위함
    }
}

function paintToDo(text) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span"); // div는 박스, span는 한 문장 단위로 보통 사용
    const newId = toDos.length + 1;

    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteToDo);
    span.innerText = text;

    li.id = newId;
    li.appendChild(deleteButton);
    li.appendChild(span);
    

    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : newId
    }
    toDos.push(toDoObj);
    saveToDos();
}
// 비어있는 li을 만들고, 필요한 요소를 li에 삽입, 이후 이를 ul에 넣는 방식

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
//JSON.stringify : 객체는 스트링 형태로 저장!
// js는 LS에 있는 모든 데이터를 스트링으로 저장하려고 하기 째문에 스트링으로 변환해야함
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;

    paintToDo(currentValue);
    toDoInput.value = ""
}

function deleteToDo(event){
    const btn =  event.target;
    const li = btn.parentNode;
    // 해당 버튼의 부모노드를 찾을 수 있음
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    //해당 함수의 리턴값인 true인 요소만으로 이루어진 리스트를 만듬
    // li가 지워졌으므로 id가 존재하지 않을 것!

    toDos = cleanToDos
    saveToDos();
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();