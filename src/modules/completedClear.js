import renderToDoItems from './renderTasks.js';
import itemsArray from './itemsArray.js';
import indexInit from './indexInit.js';

const footer = document.querySelector('footer');

const completedClear = () => {
  footer.addEventListener('click', () => {
    const nonCompletedTasks = itemsArray.filter((item) => item.completed === false);

    itemsArray.splice(0, itemsArray.length, ...nonCompletedTasks);

    localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
    renderToDoItems();
    indexInit();
  });
};

export default completedClear;