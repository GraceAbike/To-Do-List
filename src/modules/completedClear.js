import itemsArray from './itemsArray.js';
import indexInit from './indexInit.js';

const completedClear = () => {
  const nonCompletedTasks = itemsArray.filter((item) => item.completed === false);
  itemsArray.splice(0, itemsArray.length, ...nonCompletedTasks);
  indexInit();
};

export default completedClear;