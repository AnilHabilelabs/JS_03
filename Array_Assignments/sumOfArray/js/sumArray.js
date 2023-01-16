// 1. 	Print the sum of all elements of the array.
// 2. 	calculate the average value of array elements.
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
    console.log("Average Value of The Array",sum/arr.length);
}
sumArray([2,3,1,4,5,6]);