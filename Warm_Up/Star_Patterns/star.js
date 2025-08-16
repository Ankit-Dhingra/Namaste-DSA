/*
* * * *
* * * *
* * * *
* * * *
*/

let a = 4;
for (let i = 0; i < a; i++) {
  let row = "";
  for (let j = 0; j < a; j++) {
    row += "*";
  }
  console.log(row);
}


/*
*
* *
* * *
* * * *
*/

let b = 4;
for (let i = 0; i < b; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}


/*
1
1 2
1 2 3
1 2 3 4
*/

let c = 4;
for (let i = 0; i < c; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += (j + 1);
  }
  console.log(row);
}


/*
1
2 2
3 3 3
4 4 4 4
*/

let cd = 4;
for (let i = 0; i < cd; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += (i + 1);
  }
  console.log(row);
}

/*
1 2 3 4
1 2 3
1 2
1
*/

let d = 4;
for (let i = 0; i < d; i++) {
  let row = "";
  for (let j = 0; j < d - i; j++) {
    row += (j + 1);
  }
  console.log(row);
}

/*
      *
    * *
  * * *
* * * *
*/

let e = 4;
for (let i = 0; i < e; i++) {
  let row = "";
  for (let j = 0; j < e - (i + 1); j++) {
    row += " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row += "*";
  }
  console.log(row);
}

/*
1
1 0
1 0 1
1 0 1 0
*/


let f = 4;
for (let i = 0; i < f; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}

/*
1
0 1
0 1 0
1 0 1 0
*/

let g = 4;
let toggle = 1;
for (let i = 0; i < g; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}