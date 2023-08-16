const title = document.querySelector('#title')
const button = document.querySelector('#button')
console.log(title, button)

// 버튼을 클릭했을 때 어떻게 할지
button.addEventListener('click', () => {
    if(title.classList.contains('active')){
        console.log(title.classList.contains('active'))
        // line 8의 코드는 개발자 로그의 콘솔 창에서 보면 클릭을
        // 누를 때마다 true 혹은 false가 뜬다
        title.classList.remove('active')
        // title 문자열 변경 > 'active 클래스 제거'
        title.textContent = '클래스 제거'
    }else{
        console.log(title.classList.contains('active'))
        // line 13의 코드는 개발자 로그의 콘솔 창에서 보면 클릭을
        // 누를 때마다 true 혹은 false가 뜬다
        title.classList.add('active')
        // title 문자열 변경 > 'active 클래스 추가'
        title.textContent= '클래스 추가'
    }
})