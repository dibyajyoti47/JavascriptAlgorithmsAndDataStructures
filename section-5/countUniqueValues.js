// fn([1,1,2,4,3,4,5,6,6,7,7,8, 11])   -> 9

function countUniqueValues(arr = [1, 1, 2, 1, 3, 3, 5]) {
  const props = {};
  for (let num of arr) {
    props[num] = props[num] || 1;
  }
  return Object.keys(props).length;
}

//console.log(countUniqueValues());

/////////////////////////////////////////////////////

// below function should only accepts sorted array
function countUniqueValues_MultiPointerSolution(arr = [1, 1, 2, 3, 3, 5]) {
  let i = 0;
  for (let j=1; j<arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i+1;
}

console.log(countUniqueValues_MultiPointerSolution());