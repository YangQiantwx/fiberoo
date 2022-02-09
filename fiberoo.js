function fib() {
  const arr = [0, 1];
  for (let i = 2; i < 50; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fib());

function numsToStrings(arr) {
  return _.map(arr, function (num) { return `${num}`; });
}
const arr1 = [1, 2, 3, 4];
console.log(numsToStrings(arr1));

function numEvenNums(arr) {
  const output = _.filter(arr, function (num) { return num % 2 === 0; });
  return output.length;
}

console.log(numEvenNums(fib()));
