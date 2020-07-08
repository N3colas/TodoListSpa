class TaskController {
  constructor(taskList) {
    this.taskList = taskList;
    document.querySelector("#addform").onsubmit = (e) => {
      this.addTask(e);
    };
    this.taskList.register(this.bindActions.bind(this));
  }

  bindActions() {
    document
      .querySelector("#tasks")
      .querySelectorAll("li")
      .forEach((element) => {
        this.bindCompleteAction(element);
        this.bindRemoveAction(element);
      });
  }

  bindCompleteAction(element) {
    let checkbox = element.querySelector("input[type=checkbox]");
    if (checkbox)
      checkbox.addEventListener("click", (e) => {
        this.taskList.finishTask(checkbox.dataset.cod);
      });
  }

  bindRemoveAction(element) {
    let button = element.querySelector("input[type=button]");
    if (button)
      button.addEventListener("click", (e) => {
        this.taskList.remove(button.dataset.cod);
      });
  }

  addTask(e) {
    e.preventDefault();
    let form = e.target;
    let description = form.children.description.value;
    let observation = form.children.observation.value;
    this.taskList.add(description, observation);
  }
}
