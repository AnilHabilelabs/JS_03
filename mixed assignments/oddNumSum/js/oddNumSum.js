// 9.	Print the n terms of odd natural number and their sum.
var a = window.prompt("Enter a Number");
function nOddSUm(a){
    sum=0;
    for(i=0;i<=a;i++){
        if(i%2==1){
            sum+=i;
            console.log(i);
        }
    }
    console.log("sum :"+sum);
}
nOddSUm(a);