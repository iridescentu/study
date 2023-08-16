// console.log('for문 연결')

// for (초기값; 조건; 증가)
// for(let i = 0; i < 5; i++){
//     console.log(i)
// }
// 초기값인 0부터 4까지 화면에 표시된다

// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }


// 구구단 만들기
// for(let i = 2; i <= 9; i++){
//     for(let j = 1; j <= 9; j++){
//         console.log(i + ' * ' + j + ' = ' + (i*j));
//     }
// }


// 별 찍기
// let star = ''
// for(let i = 0; i < 5; i++){
//     // star = star + '*'; <- line 25와 같음
//     star += '*'
//     console.log(star)
// }

// 두 번째에만 o 넣고 나머지는 별 찍기
let star = ''
for(let i = 0; i < 5; i++){
    if(i === 0 || i > 1){ // i의 값이 0과 같거나 1보다 클 때
        star += "*";
    }else{
        star += "o"; // i의 값이 0과 같지 않고 1보다 크지 않을 때, 결국 0과 2의 사이니까 1일 때
    }
    console.log(star)
}

