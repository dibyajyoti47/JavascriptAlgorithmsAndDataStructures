// O(n)
function maxSubarraySum_Naive(arr, num) {
  if ( num > arr.length){
    return null;
  }
  let max = -Infinity;
  let maxArr = [];
  for (let i = 0; i < arr.length - num; i ++){
    let temp = arr[i] + arr[i+1] + arr[i+2];
    if (temp > max) {
      max = temp;
      maxArr = [arr[i], arr[i+1], arr[i+2]];
    }
  }
  console.log(maxArr);
  return max;
}
console.log(maxSubarraySum_Naive([2,6,9,2,1,8,5,6,3],3));
/////////////////////////////////////////////////////////
function maxSubarraySum_Fast (arr, num) {
  if ( num > arr.length){
    return null;
  }
  let maxSum  = 0;
  let tempSum = 0;
  for (let i=0; i<num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i=num; i<arr.length; i++) {
    tempSum = tempSum - arr[i-num] + arr[i];
    if(tempSum > maxSum){
      maxSum = Math.max(maxSum, tempSum);
    }      
  }
  return maxSum;
}
console.log(maxSubarraySum_Fast([2,6,9,2,1,8,5,6,3],3));