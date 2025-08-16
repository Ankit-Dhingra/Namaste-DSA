let arr = [1,4,5,6,7,8,9,12,14,24];
let val = 8;

function binarySearch(arr , val){
    let left = 0;
    let right = arr.length - 1;
    while(right >= left){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] === val){
            return mid;
        }
        else if(arr[mid] > val){
            right = mid -1;
        }
        else{
            left = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr , val));
