const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const unsortedLeft = arr.slice(0, middleIndex);
  const unsortedRight = arr.slice(middleIndex);

  let leftSubArr = mergeSort(unsortedLeft);
  let rightSubArr = mergeSort(unsortedRight);
  let i = 0;
  let j = 0;
  let k = 0;
  let finalSet = [];
  while (i < leftSubArr.length && j < rightSubArr.length) {
    if (leftSubArr[i] < rightSubArr[j]) {
      finalSet[k] = leftSubArr[i];
      i += 1;
    } else {
      finalSet[k] = rightSubArr[j];
      j += 1;
    }
    k += 1;
  }
  while (i < leftSubArr.length) {
    finalSet[k] = leftSubArr[i];
    i += 1;
    k += 1;
  }
  while (j < rightSubArr.length) {
    finalSet[k] = rightSubArr[j];
    j += 1;
    k += 1;
  }

  return finalSet;
};

const test = [2, 4, 1, 9, 4, 1, 4, 0, 4, 33];
const answer = mergeSort(test);
console.log(answer);
