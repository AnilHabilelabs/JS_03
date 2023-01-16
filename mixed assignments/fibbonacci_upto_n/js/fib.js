// 20. Print Fabonacci series upto n numbers./
function fib(n) {
  let a = 0;
  let b = 1;
  if (n >= 1) {
    console.log(a);
    console.log(b);
  }
  if (n == 0) console.log(a);
  for (i = 2; i < n; i++) {
    let temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
}
fib(10);
