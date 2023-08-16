const button = document.getElementById('button')
const container = document.querySelector('.container')

console.log(button, container)

// button에 클릭할 때 해야 할 일 부여
button.addEventListener('click', () => {
    // active class 유무에 따라 true/false
    if (container.classList.contains('active')){
        container.classList.remove('active')
    }else{
        container.classList.add('active')
    }
})

// 삼항 연산자
// 조건 ? 참 : 거짓
// container.classList.contains('active') ? container.classList.remove('active') : container.classList.add('active')

// container.classList.toggle('active')