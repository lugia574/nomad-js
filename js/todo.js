const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
// const toDoForm = document.querySelector("#todo-form");
// const toDoList = document.querySelector("#todo-list");

const toDoInput = toDoForm.querySelector("input");
// 이거랑 같음  document.querySelector("#todo-form input");

const ToDos = [];

function saveToDo() {
  localStorage.setItem("ToDos", JSON.stringify(ToDos));
}

function deleteToDo(event) {
  const delLi = event.target.parentElement;
  delLi.remove();
}

function paintToDo(newToDo) {
  //console.log("i will paint", newToDo);
  const toDoLi = document.createElement("li");
  const ToDoSpan = document.createElement("span");
  ToDoSpan.innerText = newToDo;

  const ToDoButton = document.createElement("button");
  ToDoButton.innerText = "X";

  ToDoButton.addEventListener("click", deleteToDo);

  toDoLi.append(ToDoSpan);
  toDoLi.appendChild(ToDoButton);

  toDoList.appendChild(toDoLi);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;

  toDoInput.value = "";

  ToDos.push(newToDo);
  paintToDo(newToDo);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
