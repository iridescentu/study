// import add from './add.js' // import = 불러오기
// import multiply from './multiply.js'
import {add, multiply} from './math.js'
// import {add, multiply as multi} from './math.js'
// multiply as multi = multiply의 별명을 multi라고 짓겠다

console.log(add(6, 4))
console.log(multiply(4, 8))
// console.log(multi(3, 9))
// line 4와 세트
// line 4에서 multiply의 별명을 multi로 바꿔 줬기 때문에
// console.log에도 multiply가 아닌 multi를 적어야 한다

// 객체
// const person = {
//     키: 밸류
//     key: value,
//     key: value,
//     key: value,
//     key: value,
//     key: value,
// }
const person = {
    name: '짱구',
    age: 5
}
console.log(person.name + '는 ' + person.age + '살')

const characters = [
    {
        id: 0,
        name: '짱구',
        age: 5,
    },
    {
        id: 1,
        name: '훈이',
        age: 5,
    },
    {
        id: 2,
        name: '철수',
        age: 5,
    },
    {
        id: 3,
        name: '맹구',
        age: 5,
    },
    {
        id: 4,
        name: '유리',
        age: 5,
    },
    {
        id: 5,
        name: '짱아',
        age: 1
    },
    {
        id: 6,
        name: '이슬이 누나',
        age: 20,
    },
    {
        id: 7,
        name: '신형만',
        age: 40,
    },
]
// console.log(characters.length)

// // characters 안에 있는 객체들의 이름을 console 탭에 표시하기
// for(let i = 0; i < characters.length; i++){
//     console.log(characters[i].name)
// }

// // characters.forEach(person => console.log(person.name))
// // 위의 line 73(forEach문)과 line 69 ~ line 71(for문)까지는 같은 식이다
// // line 78의 person은 내가 임의로 지정해 준 이름
// // person이든 p이든 item이든 상관없다

// // characters.forEach(person => {
// //     console.log(person.name + '의 나이는 ' + person.age + '살 입니다.')
// // })

// characters.forEach(person => {
//     console.log(person.name + '의 10 년 뒤 나이는 ' + (person.age+10) + '살 입니다.')
// })

// const a = '10'
// const b = 10
// console.log(a + b)

const list = document.getElementById('list')
characters.forEach(person => {
    const li = document.createElement('li')
    li.textContent = (person.name + '의 나이는 ' + person.age + '살 입니다.')
    list.append(li)
})