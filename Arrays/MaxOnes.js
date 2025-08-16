let nums = [0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1];

function max(nums) {
  let maxNo = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else {
        maxNo = Math.max(count, maxNo);
        count = 0;
    }
  }
  return Math.max(maxNo , count);
}

let res = max(nums);
console.log(res);
