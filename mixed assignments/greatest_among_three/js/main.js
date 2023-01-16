// 7.	Print the greatest number from three numbers.
let a = 5;
let b = 3;
let c = 9;

function greatest(a, b, c) {
  console.log(a > b ? (a > c ? a : c) : b > a ? a : b);
}
greatest(a, b, c);
