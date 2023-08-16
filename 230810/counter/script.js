const dataList = document.querySelectorAll('[data-counter]')
console.log(dataList)

// for(let i = 0; i < dataList.length; i++){
//     // 'dataset' === 'data-'
//     const target = dataList[i].dataset.counter;
//     let index = 0;
//     let timer = dataList[i].querySelector('.timer')
//     const step = target / 200
//     // setInterval 사용
//     // index가 target이 될 때까지 증가
//     // ex) target: 3600, index가 3600이 될 때까지 증가하도록
//     setInterval(() => {
//         if(index < target){
//             index = index + step; // 같은 수에서 멈추도록 step을 이용함
//             console.log(index)
//             timer.textContent = index
//         }
//     }, 10)
// }

// line 4 ~ line 20의 코드를 forEach문으로 작성
// line 4 ~ line 20의 코드에서 percentage만 추가
dataList.forEach((data) => {
    let index = 0;
    let percentage = 0;
    const target = data.dataset.counter;
    const timer = data.querySelector('.timer')
    const perNode = data.querySelector('.percentage')
    const step = target / 200;
    setInterval(() => {
        if(index < target){
            index = index + step;
            percentage = (index / target) * 100;
            timer.textContent = index;
            perNode.style.width = percentage + '%';
        }
    }, 10)

})