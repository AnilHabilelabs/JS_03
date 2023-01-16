// 6.	Solve quadratic equations (use if, else if and else)

function solve(a, b, c) {
  let res1 = (-1 * b + Math.sqrt(b * b - 4 * a * c)) / 2 * a;
  let res2 = (-1 * b - Math.sqrt(b * b - 4 * a * c)) / 2 * a;
  console.log(res1,res2);
}

function userInput(){
    var a = Number(prompt("enter value of a"));
    var b = Number(prompt("enter value of b"));
    var c = Number(prompt("enter value of c"));
    solve(a,b,c)
}
userInput();
// solve(1,1,-5)