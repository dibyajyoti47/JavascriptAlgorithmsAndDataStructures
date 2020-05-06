function selectionSort(arr = []) {
  for (let i=0; i < arr.length-1; i++){
    let indexOfMin = i;
    for (let j=i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser; 
    }
  }
  return arr;
}

selectionSort([100, -40, 500, -124, 0, 21, 7]);