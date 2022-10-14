import './styles.css';
import addTask from './modules/addTask.js';
import itemsArray from './modules/itemsArray.js';
import removeTast from './modules/remove.js';
import renderToDoItems from './modules/renderTasks.js';
import completedClear from './modules/completedClear.js';
import allClear from './modules/allClear.js';
import indexInit from './modules/indexInit.js';

const todoinputEl = document.querySelector('.to-do-input');
const addForm = document.querySelector('.to-do-add');
const footer = document.querySelector('footer');
const updateTasks = () => {
  localStorage.setItem('toDoItemsArray', JSON.stringify(itemsArray));
  renderToDoItems();
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(todoinputEl.value);
  updateTasks();
  todoinputEl.value = '';
  indexInit();
});

renderToDoItems();
footer.addEventListener('click', () => {
  completedClear();
  updateTasks();
});
allClear();

const removeBtnsEl = [...document.getElementsByClassName('dltTaskBtn')];
removeBtnsEl.forEach((item) => {
  item.addEventListener('click', (e) => {
    removeTast(e.target.id);
    updateTasks();
  });
});
