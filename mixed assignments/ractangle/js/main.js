// 2. 	Print the area and perimeter of a rectangle.
let l = Number(prompt("Enter Length Of The Ractangle"));
let w = Number(prompt("Enter Width Of The Ractangle"));

function Area_plus_Perimeter(l,w){
    console.log("Area Of The Ractangle : "+ l*w);
    console.log("Perimeter Of The Ractangle : "+2*(l+w));
}
Area_plus_Perimeter(l,w);