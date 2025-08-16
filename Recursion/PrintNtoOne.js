let n = 10;

function Print(n) {
  if (n == 0) return;

  console.log(n);
  n--;
  Print(n);
}

Print(n);
