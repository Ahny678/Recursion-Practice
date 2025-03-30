const collatz = (n, steps = 0) => {
  if (n === 1) {
    return steps;
  }

  steps += 1;
  if (n % 2 === 0) return collatz(n / 2, steps);
  if (n % 2 !== 0) return collatz(3 * n + 1, steps);
};

// let ans = collatz(50);
// console.log(ans);

const countDown = (n) => {
  if (n <= 0) return;

  console.log(n);

  countDown(n - 1);
};
