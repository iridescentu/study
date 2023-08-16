// string, number, null, undefined, object, array, etc.
// 괄호 안에 조건
// if (condition) {
//     // 해야 할 일
// }


/* Live Server Console log에서 직접 입력해 볼 수 있다
let x = 1
x == 1 넣으면 true 출력 (==: 같다)
x != 1 넣으면 false 출력 (!=: 다르다)
x === '1' 넣으면 false 출력 (===: 값과 타입이 같음)
x !== '1' 넣으면 true 출력 (!==: 값과 타입이 다르다)
x > 1을 넣으면 false 출력 (x > 1: x가 1보다 크다)
x < 1을 넣으면 flase 출력 (x < 1: x가 1보다 작다)
x <= 1 넣으면 true 출력 (x <= 1: x가 1보다 작거나 같다)
x >= 1 넣으면 true 출력 (x >= 1: x가 1보다 크거나 같다) */

// const a = 10
// if(a > 10){
//     // if: true, 참일 때만 실행이 된다.
//     console.log('a는 10보다 큽니다.')
// } else if(a < 10){
//     // else if: 위의 조건이 false일 때
//     // 새로 true 여부를 판단한다.
//     console.log('a는 10보다 작습니다.')
// } else{
//     // else: false, 거짓일 때 실행이 된다.
//     console.log('a와 10은 같습니다.')
// }

// const b = 4
// if(b < 1){
//     console.log('b는 1보다 작습니다.')
// } else if(b > 9){
//     console.log('b는 9보다 큽니다.')
// } else{
//     console.log('b는 4와 같습니다.')
// }

const c = 1
if(c > 1){
    // 참일 경우 시켜야 할 일을 console.log('') 안에 적어 준다.
    console.log('b는 1보다 큽니다.')
} else{
    // 거짓일 경우 시켜야 할 일을 console.log('') 안에 적어 준다.
    console.log('무슨 말을 하는 건지 몰루겠네요.')
}

const d = '1'
// 두 가지 조건이 참일 때만 AND(&&)
// if(typeof b !== 'string' && b > 1)
// 둘 중 하나라도 참일 때 OR(||)
// if(typeof b !== 'string' || b > 1)
if(typeof d !== 'string' && b > 1){
    // 참일 경우 시켜야 할 일
    console.log('d는 1보다 큽니다.')
} else{
    // 거짓일 경우 시켜야 할 일
    console.log('무슨 말을 하는 건지 몰루겠네요.')
}

// number, string, null, undefined, etc.
// const value = '1'
// if(typeof value === 'string'){
//     console.log('문자열입니다.')
// }else if(typeof value === 'number'){
//     console.log('숫자형입니다.')
// }else{
//     console.log('타입을 잘 몰루겠네요.')
// }

const value = '고양이'
if(typeof value === 'string'){
    console.log('문자열입니다. (고양이귀여워)')
}else if(typeof value === 'number'){
    console.log('숫자형입니다.')
}else{
    console.log('타입을 잘 몰루?겠네요.')
}