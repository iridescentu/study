const prev = document.getElementById('prev')
const next = document.getElementById('next')
const slider = document.querySelector('.slider')
const sliderWidth = slider.clientWidth
// clientWidth, offsetWidth
// clientWidth/clientHeight = padding 포함 길이
// offsetWidth/offsetHeight = padding, border, scrollbar 포함한 값
const child = document.querySelectorAll('.slider-item')


let index = 0;

prev.addEventListener('click', () => {
    if(index > 0){
        index--;
        console.log(index)
        slider.style.transform = `translateX(${- sliderWidth * index}px)`
    } else {
        index = child.length - 1;
        slider.style.transform = `translateX(${- sliderWidth * index}px)`

    }       
})

next.addEventListener('click', () => {
    // index가 child.length보다 작다면
    // slider.length = 4
    // index가 slider.length인 4보다 작을 때 4까지 증가하도록
    if(index < child.length - 1){
        index++;
        console.log(index)
        // slider.style.transform = 'translateX('+-sliderWidth * index + 'px)'
        slider.style.transform = `translateX(${- sliderWidth * index}px)`
        // line 24와 line 25는 같은 식
        // line 25에서 ${} 안에는 무조건 자바에서 처리하는 식만 넣기
    } else {
        // index 번호가 마지막 요소와 같다면 translateX가 0으로 돌아가도록
        index = 0;
        slider.style.transform = `translateX(${- sliderWidth * index}px)`
    }
})