// 15.	Find out all the numbers between 1 and 500, which are divisible 13.

let n=13;

// first approach without checking conditions;
// function oneToFiveHundred(n){
//     for(i=n;i<500;i+=n){
//         console.log(i);
//     }
// }

// second approach checking condtions;
function oneToFiveHundred(n){
    for(i=n;i<500;i++){
        if(i%n==0){
            console.log(i);
        }
    }
}

oneToFiveHundred(n);