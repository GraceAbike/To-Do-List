import itemsArray from './itemsArray.js';

const editT = (task, num) => {
  itemsArray[num].description = task;
};

export default editT;