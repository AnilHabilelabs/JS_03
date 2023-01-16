// 11.	Count the factors of a given number.
function calculate(num) {
    let str = "0";
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            str += ',' + i;
        }
    }
    alert(str);
}

calculate(2);