const input = document.querySelector('input')
const addButton = document.querySelector('button')
const list = document.querySelector('ul')

const addItem = () => {
    if(!input.value){
        return alert('할 일을 입력해 주세요')
    }
    // li 요소 생성
    const li = document.createElement('li')
    // li에 button 아이콘 추가
    li.innerHTML = `${input.value}<button class="list-delete">&#x2716</button>`
    // li에 list-item 클래스 추가 (아이콘이 생긴다)
    li.classList.add('list-item')
    // 리스트(ul)에 li 추가
    list.append(li)
    // 값을 비워 준다
    input.value = ''
    // 포커스 활성화
    input.focus()
    saveList(list.innerHTML)
    // localStorage.setItem('todo', JSON.stringify(list.innerHTML))
}


input.addEventListener("keydown", (e) => {
    if(e.key === 'Enter'){
        return addItem()
    }
})
// console.log(input)
// console.log(addButton)
// console.log(list)

addButton.addEventListener('click', () => {
    addItem()
})

list.addEventListener('click', (e) => {
    // currentTarget = event가 걸려 있는 대상만 감지
    console.log(e.currentTarget)
    // target = 클릭한 대상 감지
    console.log(e.target)
    if(e.target.tagName === 'LI'){ // 여기에서는 태그를 LI라고 소문자가 아닌 대문자라고 써야 함
        // checked 클래스 유무 확인 후 추가 또는 삭제
        e.target.classList.toggle('checked') // toggle은 위에 있는 것과 똑같이 작동함
        saveList(list.innerHTML)

    }
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        saveList(list.innerHTML)

    }
})

const saveList = () => {
    localStorage.setItem('todo', JSON.stringify(list.innerHTML))
}

const loadList = () => {
    const getList = JSON.parse(localStorage.getItem('todo'))
    list.innerHTML = getList
}
document.addEventListener('load', loadList())