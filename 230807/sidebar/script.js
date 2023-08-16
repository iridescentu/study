const tirgger = document.getElementById('trigger')
const sidebar = document.getElementById('sidebar')
const overlay = document.querySelector('.overlay')

tirgger.addEventListener('click', () => {
    // sidebar에 open 클래스가 있는지 유무 확인
    if(sidebar.classList.contains('open')){
        // true니까 'open' class가 있다면 삭제
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        // 열기로 텍스트 변경
        tirgger.textContent = '열기'
    } else {
        // false일 때 'open' class가 없을 경우 추가
        sidebar.classList.add('open')
        overlay.classList.add('open')
        // 닫기로 텍스트 변경
        tirgger.textContent = '닫기'
    }
})

overlay.addEventListener('click', () => {
    // sidebar가 열려 있을 때 판단
    if(sidebar.classList.contains('open')){
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        tirgger.textContent = '열기'
    }
})