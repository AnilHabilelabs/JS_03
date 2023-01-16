// 12.	Print the ASCII value of a given character. 
let a = window.prompt("Enter a Character")
function ascii(a){
    let res = a.charCodeAt(0);
    console.log(`The Ascii Value : ${res}`);
}
ascii(a);