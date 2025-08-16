// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

var arr = ["h" , "e" , "l" , "l" , "o" , "G"];

function reverseString(arr){
    let x = arr.length - 1;
    for(let i = 0 ; i < arr.length ; i++){
        if(x >= i){
            let temp = arr[i];
            arr[i] = arr[x];
            arr[x] = temp;
            x--;
        }
    }
    return arr;
}

var res = reverseString(arr);
console.log(res);
