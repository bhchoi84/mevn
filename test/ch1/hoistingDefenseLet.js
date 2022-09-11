/* 호이스팅 */
function hoistingDefenseLet(){    
    for( let i =0; i<10; i++){
        console.log('for문 안에서의 let으로 선언된 i : ' + i);
    }
    return i;
}

// ReferenceError: i is not defined 에러 발생
// let은 블록 스코프
console.log('hoistingDefenseLet를 호출시 결과 : ' + hoistingDefenseLet() + ' ==> let으로 선언된 i의 리턴은 {} 스코프에 의해 undefined 가 나온다.');

