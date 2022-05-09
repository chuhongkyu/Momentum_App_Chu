const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoShowBtn = document.getElementById("todo-show");
const checkShowBtn = document.getElementById("check-show");
const deleteShowBtn = document.getElementById("delete-show");

const TODOS_KEY = "todos";

console.log(toDoInput);

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function toDoShow(event){
    toDos.filter((toDo) => {
        toDo.isComplete == false   
    }
    );
    event.preventDefault();
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function checkTodo(event){
    const li = event.target.parentElement; 
    toDos.filter((toDo) => 
    {
        if(parseInt(li.id) == toDo.id){
             toDo.isComplete = true;
             li.classList.add("todo-check");
        }
    });

    saveToDos();
    event.preventDefault();
    console.log();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑" ;
    const checkBtn = document.createElement("button");
    checkBtn.innerText = "✔" ;
    
    deleteBtn.addEventListener("click", deleteTodo);
    checkBtn.addEventListener("click", checkTodo);
    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        isComplete: false,
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoShowBtn.addEventListener("click", toDoShow);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
