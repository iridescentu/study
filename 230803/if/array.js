// console.log('array 연결')

// array는 대괄호[] 안에 넣고 가장 처음에 있는 것 0이기에 0부터 시작된다
const pokemon = ['피카츄', '파이리', '꼬부기', '이상해씨', '피츄', '라이츄', '리자드', '리자몽', '어니부기', '거북왕', '뮤츠', '뮤']
// console.log(pokemon[0])
// console.log(pokemon[1])
// console.log(pokemon[2])
// console.log(pokemon[3])

// pokemon이라는 array의 항목이 몇 개인지 알고 싶을 때
console.log(pokemon.length)


// for문으로 array 안에 있는 포켓몬들 나열하기
for(let i = 0; i < 4; i++){
    console.log(pokemon[i])
}