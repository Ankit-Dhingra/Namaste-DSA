let n = 10;
let x = 0;

function Print(x , n) {
  if (x > n) return;

  console.log(x);
  x++;
  Print(x , n);
}

Print(x , n);
