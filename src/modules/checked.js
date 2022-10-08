import itemsArray from './itemsArray.js';

const checkedBoxEls = document.getElementsByClassName('checkbox');

const checked = () => {
  const checkedBoxElsArray = [...checkedBoxEls];
  checkedBoxElsArray.forEach((item) => {
    item.addEventListener('click', () => {
      const itmId = item.parentNode.parentNode.id;
      const { completed } = itemsArray[itmId];

      if (completed) {
        itemsArray[itmId].completed = false;
      } else {
        itemsArray[itmId].completed = true;
      }

      localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
    });
  });
};
export default checked;