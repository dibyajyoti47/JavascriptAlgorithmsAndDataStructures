function bubleSort (arr = []) {
  let npSwap = true;
  for (let i=arr.length-1; i >= 0; i--) {
    npSwap = true;
    for (let j=0; j<= arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
        npSwap = false;
      }
    }
    if(npSwap) break;
  }
  return arr;
}

console.log(bubleSort([4,7,2,9,5,7,6]));