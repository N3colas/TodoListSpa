var currentPage = window.location.hash || "#home";
document.querySelector(currentPage).className = "";

function changePage(page) {
  document.querySelector(currentPage).className = "hidden";
  currentPage = page;
  document.querySelector(currentPage).className = "";
}

var TasksElement = document.querySelector("#tasks");
function drawList() {
  TasksElement.innerHTML = "";
  let tasks = taskList.getList();
  for (var i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    if (task.isDone) {
      TasksElement.innerHTML += `<li class="feito">${task.description}
      <input type="button" value="Remover" data-cod="${task.id}" /></li>`;
    } else {
      TasksElement.innerHTML += `<li>${task.description} 
      <input type="checkbox" class="input" data-cod="${task.id}" /></li>`;
    }
  }
}

var taskList = new TaskList();
taskList.register(drawList);
var controller = new TaskController(taskList);
