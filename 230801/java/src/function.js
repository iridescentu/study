function add(x, y){
    return x + y;
}
console.log (add(2, 2)) // line 1의 add(x, y)의 값이 (2,2)가 됨

function subtract(a, b){
    return a - b;
}
console.log (subtract(5, 3))

function multiply(c, d){
    return c * d;
}
console.log (multiply(4, 6))

function division(e, f){
    return e / f;
}
console.log (division(15, 5))

function letter(g, h){
    return Number(g) + Number(h);
}
console.log (letter("3", "7"))

const addNumber = function add(first, second){
    return Number(first) + Number(second);
}
console.log (addNumber("24", "2"))
console.log (addNumber(2, 2))
console.log (addNumber(4, 6))
console.log (addNumber("8", "10"))

// es5
function addES5(x, y){
    return x+ y;
}

// es6
// fat arrow function
const addES6 = (x, y) => {
    return x + y;
}
console.log (addES6(6,7))

// 하는 일이 한 줄일 때 압축해서 사용 가능
const addFunc = (x, y) => x + y;
console.log ("x와 y 값을 더하면 " + addFunc(10, 10))

const subt = (c, d) => {
    return c - d;
}
console.log ("c에서 d의 값을 빼면 " + subt(10, 7))

const mul = (a, b) => {
    return a * b;
}
console.log ("a와 b의 값을 곱하면 " + mul(5, 10))

const div = (e, f) => {
    return e / f;
}
console.log ("e와 f의 값을 나누면 " + div(100, 50))