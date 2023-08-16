// Promise
// const first = () => new Promise((resolve, reject) => {})

const text = () => {
    console.log('text')
}
const first = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('1번째'),3000)    
})
const second = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('2번째'),2000)
}) 
const third = () => new Promise((resolve, reject) => {
    resolve('3번째')
}) 
// text()
first()
.then((result) => {
    console.log(result)
    return second()
})
.then(result => {
    console.log(result)
    return third()
})
.then(result => console.log(result))
.catch(e => console.error(e))


// const first = () => new Promise(setTimeout(() => console.log('하암 1'), 3000))
// setTimeout(() => console.log('하암 1'), 3000)
// setTimeout(() => console.log('하암 2'), 2000)
// console.log('하암 3')