import itemsArray from './itemsArray.js';

const removeT = (task) => {
  itemsArray.splice(task, 1);
};

export default removeT;