// 3. 	Swap two variables.
var a = 5;
var b = 7;
function swap(a, b) {
  console.log("Before: " + "a=" + a, "b=" + b);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("After : " + "a=" + a, "b=" + b);
}
swap(a,b);
