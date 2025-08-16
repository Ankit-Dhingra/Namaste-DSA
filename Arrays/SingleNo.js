let nums = [3,1,5,4,1,5,3];

// Brute Force

// function Single(nums){
//     let hash = {};
//     for(let i = 0 ; i < nums.length ; i++){
//         if(!hash[nums[i]]){
//             hash[nums[i]] = 1;
//         }
//         else{
//             hash[nums[i]]++;
//         }
//     }
//     for(let i = 0 ; i < nums.length ; i++){
//         if(hash[nums[i]] == 1){
//             return nums[i];
//         }
//     }
// }

// Optimized Solution

// We will use Bitwise XOR (^)
// cause:
// a^a = 0
// a^0 = a;


function Single(nums){
    let xor = 0;
    for(let i = 0 ; i < nums.length ; i++){
        xor = xor ^ nums[i];
    }
    return xor;
}
let res = Single(nums);
console.log(res);
