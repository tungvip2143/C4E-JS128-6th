// a
const cml = document.querySelector('#change-my-life ')
const t = document.querySelector('#tn')
cml.addEventListener('click', function() {
    t.innerText = 'Tôi giàu sau khi học lập trình tại Mindx'
})

// b
const n = document.querySelector('#nope')
n.addEventListener("mouseover", (viec1) => {
    n.style.backgroundColor = '#ff0000'
    n.style.color = 'white'
})

n.addEventListener('mouseout', (viec2) => {
    n.style.background = ''
    n.style.color = 'black'
})

n.addEventListener('click', (viec3) => {
    alert('Bạn có chắc chắn không muốn thay đổi cuộc đời bạn?')
    console.log("Tôi rất tiếc")
})