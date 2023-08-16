const tabButt = document.querySelectorAll('.tab-button')
const tabItem = document.querySelectorAll('.tab-item')
console.log(tabItem)

// tabButt.addEventListener('click', () => {
//     for(i = 0; i < tabButt; i++){
//         tabItem.classList.remove('show')
//     }
// })

for(let i = 0; i < tabButt.length; i++){
    tabButt[i].addEventListener('click', () => {
        for(let j = 0; j < tabButt.length; j++){
            tabButt[j].classList.remove('selected')
            tabItem[j].classList.remove('show')
        }
        tabButt[i].classList.add('selected')
        tabItem[i].classList.add('show')
    })
}