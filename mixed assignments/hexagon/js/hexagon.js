// 5. 	Compute the area of a hexagon.
let a = Number(window.prompt("Enter value of One Side"));
function hexArea(a){
    console.log(("Area Of Hexagon : "+ (3*Math.sqrt(3)*(a*a))/2));
}
hexArea(a);