const tasks = [];

export const addTask = (text) => {
  tasks.push(text);
};

export const removeTask = (index) => {
  tasks.splice(index, 1);
};

export const getTasks = () => {
  return tasks;
};

export const getTask = (index) => {
  return tasks[index];
};
