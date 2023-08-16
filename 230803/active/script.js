console.log('연결')

// figure를 탐색해서 배열(nodelist)로 담는다.
const menuItem = document.querySelectorAll('figure')
console.log(menuItem)

// figure nodelist(배열) 내용을 꺼내서 반복시킨다
// 배열의 길이만큼 반복한다
for(let i = 0; i < menuItem.length; i++){

    // figure[i] 번째를 클릭했을 때 가능하다
    // i 번째가 결정되는 시기는 figure를 클릭했을 때 결정된다
    menuItem[i].addEventListener('click', () => {

        // 모든 figure 요소에서
        // active를 삭제해 주는 내용
        for(let j = 0; j < menuItem.length; j++){
            menuItem[j].classList.remove('active')
        }

        // line 17 ~ line 19의 명령어로 인하여 
        // 어떠한 요소도 active를 가지고 있지 않은 상태에서
        // 현재 클릭한 i 번째의 요소에 active를 적용시킨다
        menuItem[i].classList.add('active')
    })
}