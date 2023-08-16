const count = document.getElementById('count')
const increase = document.getElementById('increase') // 버튼이란 상수를 만듦
const decrease = document.getElementById('decrease')

console.log(count)
console.log(increase)
console.log(decrease)

// line 11의 뜻은 어떠한 이벤트가 있을 때 사용하는 명령어
// line 11의 addEventListener('click'), () => {}의 뜻은 사용자가 클릭을 했을 때 () 안의 function이 작동할 것
let value = 0 // 만약 let이 아닌 const를 넣었다면 변수가 아닌 상수이기 때문에 클릭한 횟수가 증가하지 않는다
increase.addEventListener('click', () => {
    // console.log('click') // line 11을 입력했을 때 사용자가 버튼을 클릭한 횟수가 개발자 모드의 console에 뜬다
    // 만약 line 9의 button을 count로 입력했을 때는 버튼이 아닌 숫자를 클릭해야 수가 증가한다
    // count.textContent = ++value // 버튼을 클릭했을 때 수가 증가하도록
    count.textContent = value += 1 // line 15처럼 쓸 수도 있지만 line 16처럼 썼을 때 반응 속도가 더 좋음
})
decrease.addEventListener('click', () => {
    // count.textContent = --value
    count.textContent = value -= 1 // line 19처럼 쓸 수도 있으나 line 20처럼 썼을 때 반응 속도가 더 좋음
})

// function(함수)
function add(a, b){
    return a + b
}
console.log(add(2, 3))

// 아래처럼 함수의 매개 변수'()' 없이도 실행되는 함수가 있다
function message(){
    return console.log('message')
}
message() // 만약 line 33을 주석 처리해서 없다고 가정하면 line 30 ~ line 32가 표시되지 않는다

const showMessage = () => {
    return console.log('message2') // 만약 line 38을 주석 처리해서 없다고 가정하면 line 35 ~ line 37이 표시되지 않는다
}
showMessage()

function subtract(c, d){
    return c - d
}
console.log(subtract(10, 3))

function messageNyang(){
    return console.log('냥')
}
messageNyang()

// 아래의 line 51 ~ line 54처럼 function을 쓸 수도 있으나 복잡해서 위의 function을 사용하는 것 추천
function messanger(func){
    return console.log(func)
}
messanger(add(4, 4))