// 원주율, PI
console.log(Math.PI)

// 절댓값 ex) |-1| = 1
console.log(Math.abs(-1))

// Round, 반올림, 소수점 이하를 반올림
console.log(Math.round(1.3)) // 반올림을 해서 1으로 나옴
console.log(Math.round(1.5)) // 반올림을 해서 2로 나옴
console.log(Math.round(-1.5)) // 반올림을 해서 -1로 나옴
console.log(Math.round(-1.7)) // 반올림을 해서 -2로 나옴

// Ceil, 올림, 소수점 이하를 올림
console.log(Math.ceil(1.1)) // 올림을 해서 2로 나옴
console.log(Math.ceil(-1.1)) // 올림을 해서 -1로 나옴

// floor, 버림, 소수점 이하를 버림
console.log(Math.floor(1.7)) // 버림을 해서 1로 나옴
console.log(Math.floor(-1.7)) // 버림을 해서 -2가 나옴

// Random, 난수, 랜덤 숫자
console.log(Math.random()) // 계속 새로고침을 해 보면 0부터 1 미만의 숫자(0 ~ 0.999999...)가 계속해서 랜덤으로 나온다
const random = Math.random() + 1;
console.log(random) // 0부터 1 미만의 숫자에 1을 더해 주었기 때문에 1부터 2 미만의 수가 계속해서 랜덤으로 나온다

const randomNum = Math.floor(Math.random() * 5 + 1);
console.log(randomNum) // 소수점 포함 1부터 5까지의 숫자가 나오지만 Math.floor를 사용해 소수점 이하를 버려 주었기 때문에 1부터 5까지의 숫자가 나온다

let max = 8;
let min = 3;
const randNum = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randNum) // 3에서 8까지의 수가 나옴

console.log(Math.floor(Math.random() * 100 + 1))