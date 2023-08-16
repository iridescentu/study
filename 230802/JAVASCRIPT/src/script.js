// var, let, const
// let, const
// do: let 값을 바꿀 수 있다

let username = '홍길동'
username = '강아지'
// line 5에서 username에 홍길동이라는 값을 넣었지만 변수인 let이기 때문에 line 6에서 값을 바꿔 줄 수 있다
// 만약 line 5에서 변수 let이 아닌 상수 const였다면 line 6의 코드가 먹히지 않음
console.log(username)

let name = '고양이'
console.log(name)

// 참 또는 거짓 값을 넣을 수도 있다
let value = true
value = false
console.log(value)

// null
// let nullValue;
let nullValue = null

// undefined
let undefValue;
console.log(undefValue)

// number (숫자열)
let numberValue = 11;

// string (문자열)
let stringValue = '문자열값'

// object
let objValue = { }

let a = 1;
let b = 2;
let c = a + b;
console.log(c)

let d = 1;
let e = '2'; // 2가 '' 안에 들어 있기 때문에 자바스크립트는 숫자가 아닌 문자로 인식
let f = d + Number(e); // 문자인 e의 값 앞에 Number()를 넣어 주면 자바스크립트가 문자가 아닌 숫자로 인식
console.log(f)

// +, -, *, /, %
let g = 4;
let h = 3;
i = g + h;
g += h; // line 49와 line 50의 식은 동일하다 line 49의 식을 line 50처럼 표현할 수도 있다
console.log(g)

let j = 1;
let k = 2;
l = k - j;
k -= j;
console.log(k)

let m = 1;
let n = 2;
o = m * n;
m *= n;
console.log(o)

// 증가 연산자, 감소 연산자
let x = 1;
const y = ++x;
console.log(x, y)

let valueOne = 2;
const valueTwo = valueOne--
console.log(valueOne, valueTwo)

let valOne = 4;
const valTwo = --valOne
console.log(valOne, valTwo)