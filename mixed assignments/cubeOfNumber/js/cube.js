// 8.	Print the cube of the number upto given terms.
var a = Number(window.prompt("Enter value"));
function cube(a){
    for(i=1;i<=a;i++){
        console.log((i+" : "+i*i*i));
    }
}
cube(a);