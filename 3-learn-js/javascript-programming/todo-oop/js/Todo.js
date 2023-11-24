class Todo {
  constructor() {
    this.tasks = [];
  }

  addTask(text) {
    this.tasks.push(text);
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  getTasks() {
    return this.tasks;
  }
}

export default Todo;
