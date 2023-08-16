// html과 java script가 잘 연결되어 있는지 확인하기 위해 항상 line 2를 입력해서 확인해 보는 게 좋음
// console.log('연결')

const animal = '앵무새';
// case문은 어떤 case를 실행할지 필요할 때 사용
switch(animal){
    case "강아지":
        console.log('강아지가 더 귀엽다고?')
        break; // break를 꼭 써 줘야 case들의 값이 전부 뜨지 않고 해당되는 값만 출력됨
    case "햄스터":
        console.log('햄스터가 더 좋다며')
        break;
    case "병아리":
        console.log('갑자기 병아리를 키우고 싶다니')
        break;
    case "고양이":
        console.log('마장 고양이가 귀엽긴 하지')
        break;
    default: // case문의 마지막에는 default를 꼭 쓰기. case문에 해당되는 값이 없을 때 default 값이 출력
        console.log('고양이가 세상을 구한다')
        break;
}
