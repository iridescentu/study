const menu = ['짜장면', '짬뽕밥', '콩국수', '라면', '돈까스', '마라탕']
// console.log(menu[0])
// console.log(menu[1])
// console.log(menu[2])
// console.log(menu[3])

const button = document.getElementById('button')
const result = document.getElementById('result')
button.addEventListener('click', () => {
    let random = Math.floor(Math.random() * menu.length)
    result.textContent = menu[random]
})