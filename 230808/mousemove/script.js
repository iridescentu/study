// window.addEventListener('mousemove', (event) => {
//     console.log('마우스의 X 좌표: ' + event.clientX)
//     console.log('마우스의 Y 좌표: ' + event.clientY)
// })

// 동그라미가 마우스 포인터를 따라다니도록
// const dot = document.querySelector('.dot')
// window.addEventListener('mousemove', (evt) => {
//     const clientX = evt.clientX;
//     const clientY = evt.clientY;
//     dot.style.left = clientX - (dot.clientWidth / 2) + 'px'
//     dot.style.top = clientY - (dot.clientHeight / 2) + 'px'
// })

// css에서 transition을 줬을 때 마우스를 따라오는 원의 움직임이 부드럽도록
const dot = document.querySelector('.dot')
window.addEventListener('mousemove', (evt) => {
    requestAnimationFrame(() => mouseMove(evt)) // 애니메이션을 부드럽게 설정해 주는 기능
})
const mouseMove = (evt) => {
    const clientX = evt.clientX;
    const clientY = evt.clientY;
    dot.style.left = clientX - (dot.clientWidth / 2) + 'px'
    dot.style.top = clientY - (dot.clientHeight / 2) + 'px'
}

window.addEventListener('click', () => {
    const bubble = document.createElement('span')
    bubble.classList.add('bubble')
    dot.append(bubble)
    setTimeout(() => {
        bubble.remove()
    }, 1000)
})