let nums = [4, 0, 2, 1, 5];
let n = 5;

// Brute Force Solution

// function Missing(nums) {
//   nums.sort((a, b) => a - b);

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1] + 1) {
//       return nums[i - 1] + 1;
//     }
//   }
// }

function Missing(nums, n) {
  let actualSum = (n * (n + 1)) / 2;
  let arraySum = 0;
  console.log("actual Sum : ", actualSum);

  for (let i = 0; i < n; i++) {
    arraySum = arraySum + nums[i];
  }

  console.log("Array Sum : ", arraySum);
  let missingNo = actualSum - arraySum;
  return missingNo;
}
let res = Missing(nums, n);
console.log(res);
