class TaskList {
  constructor() {
    this.tasks = [];
    this.cod = 0;
    this.observers = [];
  }

  add(description, observation) {
    this.tasks.push(new Task(description, this.cod, observation));
    this.cod++;
    this.notifyAll();
  }

  finishTask(cod) {
    let task = this.tasks.find((task) => {
      return task.id == cod;
    });
    task.finishTask();
    this.notifyAll();
  }

  remove(cod) {
    let index = this.tasks.findIndex((task) => {
      return task.id == cod;
    });
    if (index != -1) this.tasks.splice(index, 1);
    this.notifyAll();
  }

  notifyAll() {
    console.log("Observadores sendo notificados");
    for (var i = 0; i < this.observers.length; i++) {
      this.observers[i]();
    }
  }

  register(observer) {
    this.observers.push(observer);
  }

  getList() {
    return this.tasks;
  }
}
