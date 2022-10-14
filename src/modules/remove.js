import itemsArray from './itemsArray.js';

const removeTast = (task) => {
  itemsArray.splice(task, 1);
};

export default removeTast;