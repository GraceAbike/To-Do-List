import './style.css';

const toDoItemsEl = document.querySelector('.to-do-items');

const toDoItemsArray = [{
  description: 'Wash the dishes',
  completed: true,
  index: 1,
}, {
  description: 'Take a breack',
  completed: false,
  index: 2,
}, {
  description: 'Code',
  completed: true,
  index: 3,
}];

const renderToDoItems = () => {
  let markup = '';

  toDoItemsArray.forEach((elem) => {
    markup += `<section class="to-do-item flex-row border-bottom">
    <input type="checkbox" ${elem.completed && 'checked'} name="">
    <p>${elem.description}</p>
    <span class="to-do-item-icons">
      <span class="material-symbols-outlined"> delete </span>
      <span class="material-symbols-outlined"> edit_note </span>
    </span>
  </section>`;
  });

  toDoItemsEl.innerHTML = markup;
};

renderToDoItems();
