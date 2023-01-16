// 8.	Add two matrices of the same size.
let arr1 = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];
let arr2 = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

let N = arr1.length;
let arr3 = new Array(N);
for (let i = 0; i < N; i++) {
  arr3[i] = new Array(N);
}
function addMetrices(arr1, arr2) {
  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++) arr3[i][j] = arr1[i][j] + arr2[i][j];

  document.write("Result matrix is <br>");
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) document.write(arr3[i][j] + " ");
    document.write("<br>");
  }
}

addMetrices(arr1, arr2);

// 9.	Multiply two matrices of the same size.
function mulMetrices(arr1, arr2) {
  let i, j, k;
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      arr3[i][j] = 0;
      for (k = 0; k < N; k++) arr3[i][j] += arr1[i][k] * arr2[k][j];
    }
  }
  document.write("Result matrix is <br>");
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) document.write(arr3[i][j] + " ");
    document.write("<br>");
  }
}
mulMetrices(arr1, arr2);

// 10.	Transpose the given matrix of 4 x 4.
function transpose(arr) {
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      arr3[i][j] = arr[j][i];
    }
  }
  document.write("Before Transpose <br>");
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) document.write(arr[i][j] + " ");
    document.write("<br>");
  }
  document.write("After Transpose <br>");
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) document.write(arr3[i][j] + " ");
    document.write("<br>");
  }
}
transpose(arr1)
