const title = document.getElementById('title')
/* document에서 ID 기반으로 Element를 가지고 오겠다. Element의 이름은 title이다.
(html 코드랑 같이 보면 이해 쉬움) */
console.log(title)

const subTitle = document.getElementById('subTitle')
console.log(subTitle)

title.style.color = 'lightpink' /* title의 색을 지정해 줌
css와 같은 형식이기에 색 이름 말고도 #ddd 등의 컬러 코드나 rgb(200, 0, 0)를 적용할 수도 있음 */
title.style.fontSize = '80px' // title의 폰트 사이즈 조절 가능
title.innerHTML = '저녁 보쌈' // 원래 지정되어 있던 title의 값을 바꿔 줄 수 있음
title.innerHTML = '<span>오늘 저녁 보쌈</span>' // tag를 span으로 바꿔 title 값을 바꿔 줄 수 있음
title.innerText = 'innerText로 변경된 제목'
title.textContent = 'textContent로 바꾼 제목' /* 14부터 15의 코드 둘 다 title 값을 바꿔 주는 명령어이지만
표시되는 값으로 적용되는 것은 가장 마지막인 line 15이다. 왜냐하면 순서대로 진행이 되기 때문에 */
/* line 13의 innerHTML은 <span>을 넣으면 태그를 변경해 주지만,
line 14, 15의 innerText와 textContent는 <span>을 넣어도 태그가 변경되지 않고 <span>을 포함한 문자로 출력된다. */

subTitle.style.color = 'skyblue' // subTitle의 색을 지정해 줌
subTitle.style.fontSize = '60px' // subTitle의 폰트 사이즈 조절 가능
subTitle.innerHTML = '맛있겠당' // 원래 지정되어 있던 subTitle의 값을 바꿀 수 있음
subTitle.innerText = 'innerText로 변경된 소제목'