// 1. 	Print the area and perimeter of a circle. 
let r = Number(prompt("Enter Radius of the Circle"))
function area(r){
    console.log("Area Of Circle :" +Math.PI*r*r);
}
function perimeter(r){
    console.log("Perimeter Of Circle: "+2*Math.PI*r);
}
area(r);
perimeter(r);