function insertionSort (arr = [2,1,9,76,4]) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let currentVal = arr[i];
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j+1] = currentVal;
  }
  return arr;
}
console.log(insertionSort());