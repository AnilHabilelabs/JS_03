// 17.	Display all the prime numbers from 1 to 100.
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
let count = 100;
for (let i = 1; i <= count; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
