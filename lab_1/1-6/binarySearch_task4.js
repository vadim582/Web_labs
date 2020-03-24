// 4 task
const binarySearch = (arr, item) => {
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;
    let guess = 0;
    while (left <= right) {
       mid = (left + right);
       guess = arr[mid];
       if (guess === item) {
           return mid;
       } else if (guess > item) {
           right = mid - 1;
       } else {
           left = mid + 1;
       }
    }
};

const list = [1,3,5,8,9];
const findNum = 1;
console.log(`The position of ${findNum} in array is ${binarySearch(list, findNum)}`);