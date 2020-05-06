function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k=0; k<maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for(let i=0; i<nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
    
  }
  return nums;
};

//helper methods
function getDigit(num, i) {
  return Math.floor( Math.abs(num) / Math.pow(10, i)) % 10; //i starts with zero
}

function getDigitCount (num) {
  if (num === 0) return 1;
  return Math.ceil(Math.log10(Math.abs(num)));
};

function mostDigits(numArr) {
  let maxDigits = 0;
  for (let i=0; i<numArr.length; i++) {
    maxDigits = Math.max(maxDigits, getDigitCount(numArr[i]));
  }
  return maxDigits;
}

console.log(radixSort(([2133,432,64234,13,56,654,9768])));