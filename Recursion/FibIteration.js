let n = 6;

// function fib(n) {
//     let fibs = [0, 1];
//     for (let i = 2; i <= n; i++){
//         fibs[i] = fibs[i - 1] + fibs[i - 2];
//     }
//     return fibs[n];
// }

function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;


}

console.log(fib(n))