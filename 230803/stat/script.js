console.log('d')

// figure를 탐색해서 배열(nodelist)로 담는다
// const menuItem = document.querySelectorAll('.stat li') = .stat 아래에 있는 li가 자식이든 손자든 전부 찾겠다
// const menuItem = document.querySelectorAll('.stat > li') = .stat 자식인 li들을 전부 찾겠다
const lis = document.querySelectorAll('li') // querySelectorAll('예제') = 예제를 전부 찾겠다
console.log(lis)

// figure nodelist(배열) 내용을 꺼내서 반복시킨다
// 배열의 길이만큼 반복한다
for(let i = 0; i < lis.length; i++){

    // figure[i] 번째를 클릭했을 때 가능하다
    // i 번째가 결정되는 시기는 figure를 클릭했을 때 결정된다
    lis[i].addEventListener('click', () => {

        // 모든 figure 요소에서
        // active를 삭제해 주는 내용
        for(let j = 0; j < lis.length; j++){
            lis[j].classList.remove('active')
        }

        // line 19 ~ line 21의 명령어로 인하여 
        // 어떠한 요소도 active를 가지고 있지 않은 상태에서
        // 현재 클릭한 i 번째의 요소에 active를 적용시킨다
        lis[i].classList.add('active')
    })
}

// line 11 ~ line 28의 코드 설명
// 클릭 > 모든 figure 요소에서 active 삭제 > 클릭한 요소에만 active 적용 > 클릭 > 모든 figure 요서에서 active 삭제 > 클릭한 요소에만 active 적용
// 위 과정을 계속 반복하는 코드이다