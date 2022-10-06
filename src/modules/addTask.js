import itemsArray from './itemsArray.js';
import renderToDoItems from './renderTasks.js';

const addElBtn = document.querySelector('.to-do-addTask');
const input = document.querySelector('input');
const todoinputEl = document.querySelector('.to-do-input');

const addTask = () => {
  addElBtn.addEventListener('click', () => {
    const newTask = todoinputEl.value;
    if (newTask) {
      const newTodo = {
        description: newTask,
        completed: false,
      };
      itemsArray.push(newTodo);
      localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
      renderToDoItems();
      todoinputEl.value = '';
    } else {
      input.classList.add('inputError');
      setTimeout(() => {
        input.classList.remove('inputError');
      }, 1000);
    }
  });
};
export default addTask;