// 4. 	copy the elements of one array into another array.

function copyArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
}
let arr = [10, 20, 30, 15];
copyArr(arr);

// 5. 	remove a specific element from an array.
function removeElement(value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      arr.splice(i, 1);
      return true;
    }
  }
  return false;
}
removeElement(20);
console.log(arr);

// 6.	Find the maximum and minimum value of an array.
function MinMax(arr) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("min max");
  console.log(min, max);
}
MinMax(arr);

// 7.	Reverse an array of integer values.

function revArray(arr){
    let newArr = []
    for(i=arr.length-1;i>=0;i--){
        newArr.push(arr[i])
    }
    console.log(newArr);
}
revArray(arr);