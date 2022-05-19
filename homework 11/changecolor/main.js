let color = ["#222f3e", "#f368e0", "#ee5253", "#0abde3", "#222f3e", "#10ac84", "#222f3e", "#5f27cd", ]
let i = 0;
document.querySelector("button").addEventListener("click",
    function() {
        i = 1 < color.length ? ++i : 0;
        document.querySelector("body").style.backgroundColor = color[i];
    })

// Bài tập về Dom Get/Find
document.querySelector("h2").style.color = "white";
document.querySelector("h2").style.fontSize = "30px";
document.querySelector("h2").style.fontWeight = "500";
document.querySelector("h2").style.textAlign = "center";
// Bài tập về Dom Change 1
document.querySelector("h2").innerText = "Hi"
    // Thêm thẻ input
document.querySelector("input").style.color = "black";
document.querySelector("input").placeholder = "Enter";
document.querySelector("input").style.backgroundColor = "yellow";