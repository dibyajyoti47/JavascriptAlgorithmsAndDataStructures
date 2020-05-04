function binarySearch(arr=[], element) {
  let left   = 0;
  let right  = arr.length-1;
  let middle = Math.floor(right / 2);
  while (element !== arr[middle] && left <= right) {    
      if(element > arr[middle]) {
          left = middle+1;
      }
      if(element < arr[middle]) {
          right = middle-1;
      }
      middle = Math.floor((left+right) / 2);
  }
  if (arr[middle] === element) return middle;
  return -1; 
}

console.log(binarySearch([0,1,2,3,4,5,7], 7));