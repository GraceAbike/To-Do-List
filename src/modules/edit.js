import itemsArray from './itemsArray.js';

const editTast = (task, num) => {
  itemsArray[num].description = task;
};

export default editTast;