let n;
do {
    n = prompt('Input number to check:');
    if (!isNaN(n)) {
        break;
    } else {
        alert('You need to input number! please try again!')
    }
} while (isNaN(n));

function check_prime(n) {
    let flag = true; // flag=true thi n la prime number, flag = false thi nguoc lai
    if (n < 2) {
        flag = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag == true) {
        document.write(n + " is a prime number");
    } else {
        document.write(n + " is not a prime number");
    }
}
check_prime(n);