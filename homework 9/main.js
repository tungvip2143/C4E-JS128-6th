// //BÀI 1:
// //CÁCH 1:DÙNG TOÁN TỬ ?
// function checkAge(age) {
// return age > 18 ? true : confirm('Did parents allow you ?');
// }
// let result = checkAge(prompt('nhap tuoi'));
// console.log(result)

// //CÁCH 2:DÙNG TOÁN TỬ LOGIC
// function checkAge(age) {
//     return age > 18 || confirm('Did parents allow you ?')
// }
// let result = checkAge(prompt('nhap tuoi'));
// console.log(result)

// // BÀI 2:
// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Do you agree?",
//     () => { alert("You agreed."); },
//     () => { alert("You canceled the execution") }
// );

// BÀI 3:
// function login() {
//     let user = prompt("Enter User Name")
//     if (user == "Admin") {
//         let pass = prompt("Enter your password")
//         if (pass == "mindX")
//             alert("Chào mừng")
//         else if (pass == "" || pass == undefined) alert("Đã hủy")
//         else alert("Mật khẩu sai ")
//     } else if (user == "" || user == undefined) alert("Canceled")
//     else alert("Tôi không biết bạn")
// }
// login()