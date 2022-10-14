import itemsArray from './itemsArray.js';

const completed = (index, complt) => {
  itemsArray[index].description = complt;
};

export default completed;