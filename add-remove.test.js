import addTask from './src/modules/addTask.js';
import itemsArray from './src/modules/itemsArray.js';
import removeTast from './src/modules/remove.js';

describe('test addTask and removeTask', () => {
  test('test add task function', () => {
    addTask('first task');
    addTask('second task');
    expect(itemsArray).toHaveLength(2);
  });

  test('test remove task function', () => {
    removeTast(0);
    expect(itemsArray).toHaveLength(1);
  });
});
