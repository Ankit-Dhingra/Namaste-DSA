// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


let prices = [7,1,5,3,6,4];
// function Profit(prices){
//     let maxProfit = -1;
//     for(let x = 0 ; x < prices.length-1 ; x++){
//         for(let i = x+1 ; i < prices.length ; i++){
//             if (prices[i] > prices[x]) {
//                 let pro = prices[i] - prices[x];
//                 if (pro > maxProfit) {
//                     maxProfit = pro;
//                 }
//             }
//         }
//     }
//     return maxProfit;
// }

function profit(prices){
    let maxProfit = 0 ; 
    let min = prices[0];
    for(let i = 1 ; i < prices.length ; i++){
        if(prices[i] - min  > maxProfit){
            maxProfit = prices[i]-min;
        }
        if(prices[i] < min){
            min = prices[i]
        }
    }
    return maxProfit
}

let res = Profit(prices);
console.log(res);
