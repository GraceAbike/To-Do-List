import addTask from './src/modules/addTask.js';
import itemsArray from './src/modules/itemsArray.js';
import editT from './src/modules/edit.js';
import completedClear from './src/modules/completedClear.js';
import completed from './src/modules/completedUpdate.js';

describe('test edit and clear completed', () => {
  test('test edit task function', () => {
    addTask('First task');
    addTask('Second task');
    editT('changed', 0);
    expect(itemsArray[0].description).toBe('changed');
  });

  test('test completed function', () => {
    completed(0, true);
    expect(itemsArray[0].description).toBe(true);
  });

  test('test clear completed task function', () => {
    itemsArray[0].completed = true;
    completedClear();
    expect(itemsArray).toHaveLength(1);
  });
});
