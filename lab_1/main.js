const task = require('./1-6/index');

task.strFunc('one two three');

task.findStr('one', 'one two three four');

console.log(`Task 3\nResult: ${task.factorial(3)}`);

const number = 5;
const numArr = [1,3,5,8,9];
console.log(`Task 4\nThe position of ${number} in array is ${task.binarySearch(numArr, number)}`);

const a = [4,5,8,1,9,10,17];
console.log(`Task 6\n${task.bubbleSort(a)}`);