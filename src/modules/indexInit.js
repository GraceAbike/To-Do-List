import renderToDoItems from './renderTasks.js';
import itemsArray from './itemsArray.js';

const editTaskBtnEl = document.getElementsByClassName('editTaskBtn');
const editTaskEl = document.getElementsByClassName('to-do-edit');
const toDoTask = document.getElementsByClassName('to-do-task');

const indexInit = () => {
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
        currentTask.childNodes[3].addEventListener('click', (e) => {
          e.preventDefault();
          const editedTask = currentTask.childNodes[1].value;
          if (editedTask) {
            itemsArray[taskID].description = editedTask;
            localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
            renderToDoItems();
            indexInit();
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

  const removeTask = () => {
    const removeBtnsEl = [...document.getElementsByClassName('dltTaskBtn')];
    removeBtnsEl.forEach((item) => {
      item.addEventListener('click', (e) => {
        itemsArray.splice(e.target.id, 1);
        localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
        renderToDoItems();
        indexInit();
      });
    });
  };

  removeTask();
  editTask();
};

export default indexInit;