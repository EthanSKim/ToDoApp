const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.addEventListener("click", (e)=>{
        const li = e.target.parentElement;
        li.remove();
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
        saveToDos();
    })
    button.innerText = "X";
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo.text;
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
})

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}