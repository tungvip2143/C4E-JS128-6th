// // bai 1

// let a = 10;
// let b = 15;
// console.log(a > b)

// console.log(a == 10)

// console.log(a === 10)


// let x = 5;
// let y = 6;
// console.log(x !== y)




// // bai 2a
// let a = 10;
// let b = Number(a);
// let c = a * 1;
// a;
// b;
// c;
// // b và c là kiểu dữ liệu khác
// // Coercion có nghĩa là Javascript tự động (nhanh chóng) chuyển đổi một biến từ kiểu dữ liệu này sang kiểu dữ liệu khác

// // bai 2b
// let a = 10;
// let b = '';
// if (a) {
//     console.log('a is truthy');
// }
// if (b) {
//     console.log('b is truthy');
// }
// // log ra 'a is truthy' còn b k hiển thị
// // một giá trị không phải boolean cần chuyển sang boolean thì giá trị của biến sẽ được hiểu theo nhóm giá trị truthy và falsy

// // bai 3a
// let a = "mindX";
// let b = '';

// if (a || b) {
//     console.log("hello")
// }
// // kết quả trả về true

// // bai 3b
// let a = "mindX";
// let b = '';

// if (a && true && !b) {
//     console.log("hello")
// }
// // kết quả trả về true

// // bai 3c
// let a = -1
// let b = 1
// if (a && b) {
//     console.log("hello")
// }

// // bai 3d
// let number = prompt("nhap so bat ki");
// if (number % 3 == 0) {
//     console.log(number / 3)
// } else {
//     console.log("number không chia hết cho 3 và dư", number % 3)
// }

// // bai 4
// // Viết lệnh in ra các số chẵn trong dãy sau
// let numbers = [13, 23, 12, 45, 22, 48, 66, 100];
// for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         console.log(numbers[i])
//     }
// }

// // Viết hàm xóa phần tử được chọn ra khỏi dãy và in ra dãy sau khi xóa:
// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// let new_arr = arr.filter(function(element) {
//     return element !== 56
// });
// console.log(new_arr);

// Viết hàm tính mũ của 1 số bằng cách dùng vòng lặp

// for (i = 1; i < 10; i++) {
//     for (j = 0; j < 10; j++) {
//         console.log(Math.pow(i, j))
//     }
// }

// // tính tổng các chữ số  trong 1 số nguyên cho trước    
// let value = prompt('numer');
// sum = 0;
// while (value) {
//     sum += value % 10;
//     value = Math.floor(value / 10);
// }
// console.log(sum);