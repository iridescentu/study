const title = document.getElementById('title')
console.log(title)

const content = document.getElementById('content')
console.log(content)

// css에서 변경한 내용 java script에서 적용시키기
content.classList.add('active') // 만약 line 27이 주석 처리되지 않았다면 line 8의 명령어가 먹히지 않는다

// innerHTML, innerText, textContent
// innerHTML: 태그를 넣을 수 있다
title.innerHTML = '<span>span 태그 적용</span>' // 태그 적용이 가능
title.innerText = '<span>span 태그 적용</span>' // 태그 적용이 아닌 텍스트로 적용이 됨
title.textContent = '<span>span 태그 적용</span>' // line 10과 마찬가지로 태그 적용이 아닌 텍스트로 적용

// content 내용 바꾸기
content.innerHTML = '<span>content에 span 태그 적용</span>'
content.innerText = '<span>innerText는 content에 span 태그 적용 불가</span>'
content.textContent = '<span>textContent는 content에 span 태그 적용 불가</span>'

// 스타일 바꾸기
title.style.color = 'skyblue'
title.style.fontsize = '60px'
title.style.marginTop = '0'
title.style.marginBottom = '0'

// content.style.color = 'lightpink'