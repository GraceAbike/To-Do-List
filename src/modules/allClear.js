import itemsArray from './itemsArray.js';
import renderToDoItems from './renderTasks.js';

const allClearEl = document.querySelector('.allClear');

const allClear = () => {
  allClearEl.addEventListener('click', () => {
    allClearEl.classList.add('rotate');
    itemsArray.splice(0);
    localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
    renderToDoItems();
    setTimeout(() => {
      allClearEl.classList.remove('rotate');
    }, 2100);
  });
};

export default allClear;