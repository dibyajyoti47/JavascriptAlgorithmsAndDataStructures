//multiple pointers pattern
//given a sorted array of intergers, find pair of two integers which sum to 0.

function sumZero (arr = [-4, -3, -2, -1, 0, 1, 5, 5, 5]) {
  let left  = 0;
  let right = arr.length-1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero());