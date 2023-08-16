const title = document.getElementById('title')
const incButton = document.getElementById('incButton')
const decButton = document.getElementById('decButton')
console.log(title, incButton, decButton)

// title의 기본 font 사이즈
let size = 32;

//title의 font size를 바꾸고 싶다면
title.style.fontSize = size + 'px' // 뒤에 px이라는 단위를 꼭 붙여 줘야 그냥 32가 아닌 32px로 인식한다

// 제목 글자 색 바꾸기
title.classList.add('active')

// 버튼 색 바꾸기
incButton.classList.add('incButt')
decButton.classList.add('decButt')

// 증가, 감소 버튼을 누를 때 수가 증가, 감소하도록
incButton.addEventListener('click', () => {
    size = size += 1
    title.style.fontSize = size + 'px'
})

decButton.addEventListener('click', () => {
    size = size -= 1
    title.style.fontSize = size + 'px'
})