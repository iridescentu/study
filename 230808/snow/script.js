// wrapper에 <span class="snow"></span>을 생성해서 추가
// 1. 태그를 생성
// const snow = document.createElement('span')
// 2. 클래스 추가
// snow.classList.add('snow')
// 3. wrapper에 삽입
// wrapper.append(snow)

// 해야 할 일
// wrapper에 snow를 100 개 추가

const wrapper = document.querySelector('.wrapper')
const addSnow = () => {
    const snow = document.createElement('span')
    snow.classList.add('snow')
    // left 값을 random으로 1~100% 값을 할당
    snow.style.left = Math.floor(Math.random() * (100 - 1) + 1) + '%'
    snow.style.animationDuration = Math.floor(Math.random() * (30 - 10) + 10) + 's'
    snow.style.animationDelay = Math.floor(Math.random() * (20 - 5) + 5) + 's'
    snow.style.filter = 'blur('+Math.floor(Math.random() * (5 - 2) + 2) + 'px)'
    // line 20처럼 쓰기는 복잡하니까 `문자열${자바스크립트}문자열` 이런 식으로 쓸 수 있다
    // snow의 width, height 값 변경
    snow.style.width = Math.floor(Math.random(8 - 5) + 5) + 'px'
    snow.style.height = Math.floor(Math.random(8 - 5) + 5) + 'px'
    snow.style.opacity = Math.random()
    wrapper.append(snow)
}

for(let i = 0; i < 100; i++){
    addSnow()
}