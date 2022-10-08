import itemsArray from './itemsArray.js';
import checked from './checked.js';

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

  const removeTask = () => {
    const removeBtnsEl = [...document.getElementsByClassName('dltTaskBtn')];
    removeBtnsEl.forEach((item) => {
      item.addEventListener('click', (e) => {
        itemsArray.splice(e.target.id, 1);
        let i = 1;
        itemsArray.forEach((item) => {
          item.index = i;
          i += 1;
        });
        localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
        renderToDoItems();
      });
    });
  };

  const editTask = () => {
    const editTaskBtns = [...editTaskBtnEl];
    editTaskBtns.forEach((item) => {
      item.addEventListener('click', () => {
        const taskID = item.id;
        const editTaskEls = [...editTaskEl];
        const currentTask = editTaskEls[taskID];
        const currentTaskEdit = currentTask.childNodes[1];
        toDoTask[taskID].classList.add('hide');
        currentTask.classList.remove('hide');
        currentTaskEdit.value = itemsArray[taskID].description;
        currentTask.childNodes[3].addEventListener('click', () => {
          const editedTask = currentTask.childNodes[1].value;
          if (editedTask) {
            itemsArray[taskID].description = editedTask;
            localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
            renderToDoItems();
          } else {
            currentTaskEdit.classList.add('inputError');
            setTimeout(() => {
              currentTaskEdit.classList.remove('inputError');
            }, 1000);
          }
        });
      });
    });
  };
  
  toDoItemsEl.innerHTML = markup;
  checked();
};

export default renderToDoItems;