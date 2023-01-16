// 4. 	Compute the sum of the digits of an integer.
let a = -154;
function sumOfDigit(a) {
  a = Math.abs(a);
  sum = 0;
  while (a % 10 > 0) {
    sum += a % 10;
    a = Math.floor(a / 10);
  }
  console.log(sum);
}
sumOfDigit(a);
