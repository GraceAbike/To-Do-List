import itemsArray from './itemsArray.js';

const addTask = (newTask) => {
  const input = document.querySelector('input');
  if (newTask) {
    const newTodo = {
      description: newTask,
      completed: false,
      index: itemsArray.length + 1,
    };
    itemsArray.push(newTodo);
  } else {
    input.classList.add('inputError');
    setTimeout(() => {
      input.classList.remove('inputError');
    }, 1000);
  }
};

export default addTask;