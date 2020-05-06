
function merge(left, right) {
  let results = [];
  let i = 0;
  let j = 0;
  while( i<left.length && j<right.length ) {
    if(left[i] < right[j]) {
      results.push(left[i]);
      i++;
    } else {
      results.push(right[j]);
      j++;
    }
  }
  while(i<left.length) {
    results.push(left[i]);
    i++;
  }
  while(j<right.length) {
    results.push(right[j]);
    j++;
  }
  return results;
} 

function mergeSort (arr = []) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  //just for good understanding, I have written extra two lines of code 
  let left = arr.slice(0, mid);
  left = mergeSort(left);
  let right = arr.slice(mid);
  right = mergeSort(right);

  return merge(left, right);

}

console.log(mergeSort([6,3,4,7,4,5,65,23,6,45,765,234,54,23]));