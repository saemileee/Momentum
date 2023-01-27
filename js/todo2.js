const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos"
const toDoSaying = document.querySelector("#todo-saying");
const toDoSayingText = {
    기본: "열심히 달려보자", //doneToDo가 80%미만 완료 되었을 때
    달성직전: "조금만 더 달려보자", //doneTodo가 80%이상 완료 되었을 때
    달성: "오늘 할 일을 다 완료 했어요.", // doneToDo가 100% 완료 되었을 때
}
// const toDosCount = toDoList.length

//전체 li 개수 대비 li.innerText = "♥" 채워져 있는 갯수

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function doneToDo (){
    const li = event.target.parentElement;
    const liSpan = li.querySelector("span");
    const doneButton = li.querySelector("button");
    if (doneButton.innerText === "♡"){
        doneButton.innerText = "♥"
        liSpan.style.textDecoration="line-through";
    } else{
        doneButton.innerText = "♡"
        liSpan.style.textDecoration="none";
    }
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const doneButton = document.createElement("button");
    doneButton.innerText = "♡";
    doneButton.addEventListener("click", doneToDo) ;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteToDo);
    li.appendChild(doneButton);
    li.appendChild(span);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
}

function handleToDoSubmit (event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; //이 시점에 toDoInput value가 비어있더라도 newToDo도 비어있다고 말할 수 없음
    const newToDoObj = {
        text:newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
const parsedToDos = JSON.parse(savedToDos);

if(savedToDos !== null){
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
