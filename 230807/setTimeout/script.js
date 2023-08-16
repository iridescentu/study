// setTimeout(() => {
//     console.log('첫 번째')}, 1000)
//     /* setTimeout: 지연 시간 설정
//     line 2는 1 초의 지연 시간 때문에 line 5, 6이 먼저 나온 후 1 초 뒤에 첫 번째라는 글씨가 표시 */
// console.log('두 번째')
// console.log('세 번째')

// const title = document.querySelector('h1')
// console.log(title)

// /* 정해 둔 시간이 지나면 글자 색이 바뀌도록 */
// setTimeout(() => {
//     title.style.color = 'red';
//     title.textContent = '빨간색';
// }, 1000)
// setTimeout(() => {
//     title.style.color = 'blue';
//     title.textContent = '파란색';
// }, 2000)

// console.log('세 번째')

// // // 초기값 0
// // let index = 0;

// // // 1 초마다 1씩 증가
// // setInterval(() => {
// //     index++
// //     console.log(index)
// // },1000)


// let index = 0;
// setInterval(() => {
//     if(index < 10){
//         index++ // 1 초마다 1씩 증가
//         console.log(index)
//     }
// }, 1000)


const title = document.querySelector('h1')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')
const list = document.getElementById('list')

// setTimeout(() => {})
let index = 0;
let timerId;
startBtn.addEventListener('click', () => {
    if(timerId){
        clearInterval(timerId)
    }
    /* line 51 ~ line 53을 적어 주지 않으면 start를 여러 번 누른 뒤
    stop을 눌렀을 때 멈추지 않고 계속 수가 올라간다
    clear를 해 줘야 누적이 되지 않고 stop을 눌렀을 때 수를 멈출 수 있다 */
    timerId = setInterval(() => {
        index++
        title.textContent = index
    })
})

stopBtn.addEventListener('click', () => {
    clearInterval(timerId)
    const li = document.createElement('li') // creatElement를 사용해 li를 만들어 줌
    li.textContent = index
    list.append(li)
})

// reset 버튼 눌렀을 때 숫자가 0으로 리셋되도록
resetBtn.addEventListener('click', () => {
    index = 0;
    title.textContent = index
    const items = list.querySelectorAll('li');
    items.forEach(item => item.remove())
})