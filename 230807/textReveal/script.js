const title = document.getElementById('title')

// 문자열을 배열로 만듦
const text = title.textContent.split('')
// console.log(text)

// text들을 하나씩 꺼내서 span 태그에 추가하기
// span 태그로 묶어서 title에 추가
// ex) <span>L</span>
// for문 안에서 해야 할 일
// 1. createElement
// 2. 추가 (append)

// title.TextContent = ''
// text.forEach(char => {
//     const span = document.createElement('span') // span 태그를 새로 생성
//     span.append(char) // span에 char을 부여
//     title.append(span)
//     // console.log(span)
// })

// line 14 ~ line 20의 코드를 for문으로
title.textContent = ''
for(let i = 0; i < text.length; i++){
    const span = document.createElement('span')
    span.append(text[i])
    title.append(span)
    setTimeout(() => {
        span.classList.add('reveal')
    }, i * 1000)
}