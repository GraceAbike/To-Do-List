import itemsArray from './itemsArray.js';
import renderToDoItems from './renderTasks.js';
import indexInit from './indexInit.js';

const addForm = document.querySelector('.to-do-add');
const input = document.querySelector('input');
const todoinputEl = document.querySelector('.to-do-input');

const addTask = () => {
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = todoinputEl.value;
    if (newTask) {
      const newTodo = {
        description: newTask,
        completed: false,
        index: itemsArray.length + 1,
      };
      itemsArray.push(newTodo);
      localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
      renderToDoItems();
      indexInit();
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