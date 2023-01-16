// 11.	Count the factors of a given number.
function calculate(num) {
    var str = "0";
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            str += ',' + i;
        }
    }
    alert(str);
}

calculate(2);