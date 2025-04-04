// Using iteration, write a function fibs which takes a number and returns an array containing
// that many numbers from the Fibonacci sequence.
// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

const fibs = (num) => {
  let arr = [0, 1];
  while (num > 2) {
    const sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
    num -= 1;
  }

  return arr;
};

// const ans = fibs(8);
// console.log(ans);

//Now write another function fibsRec which solves the same problem recursively.
const fibR = (num, arr = [0, 1]) => {
  if (num <= 2) return arr;
  const [next2Last, last] = arr.slice(-2);
  return fibR(num - 1, [...arr, next2Last + last]);
};

const anser = fibR(8);
console.log(anser);
