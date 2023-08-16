const name = "커피 마시고 싶다"
console.log(name)

const say = "고양이 귀여워"
console.log(say)

const sayy = "코딩 재미있다"
console.log(sayy)

const number1 = 2
const number2 = 5
const result = number1 + number2
const result2 = number2 - number1
const result3 = number1 * number2
const result4 = number2 / number1
const result5 = number2 % number1 // 나머지를 구하는 연산자
console.log(result)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(typeof result) // typeof는 값의 형태를 알려 줌 result의 값이 숫자니까 number라고 나옴

const number3 = "1"
const result6 = number1 + Number(number3) /* Number는(무조건 대문자) 문자값인 number3을 숫자값으로 변환시켜 준다
이처럼 숫자를 사용할 때는 앞에 Number를 적어 숫자값이라는 것을 확실하게 해 주는 게 좋다 */
console.log(result6) /* 때문에 number1의 값인 2와 number3의 문자값인 1이 숫자값 1로 바뀌어서 2와 1을 더한 3이 나온다 */

let variables;
console.log(variables) /*이런 식으로 variable의 값을 지정해 주지 않았을 때 let인 변수는 실행시킬 수 있으나
개발자 화면의 Console에는 undefined라고 출력된다. 왜냐하면 값을 지정하지 않았기 때문에 */

let variables2 = 'content2'; // variables2의 값을 content2로 지정
let content = variables2 + '냠냠냠' // content의 값은 variables2의 값 + 문자 냠냠냠
console.log(content) // 화면에는 content2냠냠냠 이라는 값이 출력됨

// 주석을 한 줄로 작성할 때는 슬래시 두 개를 사용
// 매 줄마다 새롭게 슬래시를 두 번 넣어서
// 작성해 줘야 한다

/**
* 주석을 여러 줄에 걸쳐서
* 작성할 때는 이런 식으로 쓴다
*/