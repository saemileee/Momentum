const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos"


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

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
