const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDoShowBtn = document.getElementById("todo-show");
const checkShowBtn = document.getElementById("check-show");

const TODOS_KEY = "todos";

console.log(toDoInput);

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function toDoShow(event){
    let toDoItem = document.querySelectorAll("#todo-list li");
    event.preventDefault();
    console.log(toDoItem);
    for(let i=0; i<toDoItem.length; i++){
        toDoItem[i].style.display = "block";
        if(toDoItem[i].classList.contains("todo-check")){
            toDoItem[i].style.display = "none";
        }
    }
}

function checkShow(event){
    let toDoItem = document.querySelectorAll("#todo-list li");
    event.preventDefault();
    console.log(toDoItem);
    for(let i=0; i<toDoItem.length; i++){
        toDoItem[i].style.display = "none";
        if(toDoItem[i].classList.contains("todo-check")){
            toDoItem[i].style.display = "block";
        }
    }
}

function deleteTodo(event){
    let li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function checkTodo(event){
    let li = event.target.parentElement; 
    toDos.filter((toDo) => 
    {
        if(parseInt(li.id) == toDo.id){
             toDo.isComplete = true;
             li.classList.add("todo-check")
        }
    });
    saveToDos();
    event.preventDefault();
    console.log();
}


function paintToDo(newTodo){
    let li = document.createElement("li");
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
checkShowBtn.addEventListener("click", checkShow)

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
