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
function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;


    if (u == "") {
        alert("Vui lòng nhập tên!");
        return false;
    }
    if (p1 == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }

    alert("Xin hãy điền đúng thông tin!")

    return true;
}