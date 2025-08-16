let nums = [0,1,0,3,12];

function move(nums){
    let x = nums[0];
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] != 0){
            nums[x] = nums[i];
            x++;
        }
    }

    for(let j = x ; j < nums.length ; j++){
        nums[j] = 0;
    };
}
move(nums);
console.log(nums);
