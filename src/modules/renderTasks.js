import itemsArray from './itemsArray.js';
import checked from './completedUpdate.js';

const toDoItemsEl = document.querySelector('.to-do-items');

const renderToDoItems = () => {
  let markup = '';

  itemsArray.forEach((elem, index) => {
    markup += `<section class="to-do-item  border-bottom" id=${index}>
    <form class="to-do-edit hide flex-row border-bottom">
    <input type="text" class="to-do-input" placeholder="Input a task or use delete button...">
    <button>
    <span class="material-symbols-outlined to-do-addTask">add_task</span>
    </button>
    </form>
    <div class="flex-row to-do-task">
    <input class='checkbox' type="checkbox" ${elem.completed && 'checked'}>
    <p class='description'>${elem.description}</p>
    <span class="to-do-item-icons">
    <span class="material-symbols-outlined dltTaskBtn" id=${index}>delete</span>
    <span class="material-symbols-outlined editTaskBtn" id=${index}>edit_note</span>
    </span>
    </div>
  </section>`;
  });

  toDoItemsEl.innerHTML = markup;
  checked();
};
export default renderToDoItems;