// 14.	Find out the average of 5 random numbers between 0 and 50.
function avg_random() {
  let a = [];
  sum = 0;
  for (i = 0; i < 5; i++) {
    a[i] = Math.floor(Math.random() * 50);
    sum += a[i];
  }
  console.log(sum / 5);
}
avg_random();
