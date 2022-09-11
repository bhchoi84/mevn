/* 호이스팅 */
function hoistingTest(){
    var i = 3;
    console.log('for문밖에서의 i : ' + i);
    for( var i=0; i<10; i++){
        console.log('for문 안에서의 i : ' + i);
    }
    return i;
}

console.log('hoisting되어 function 밖에서의 i : ' + hoistingTest() + " => 함수의 리턴은 10이라고 나온다. 즉 for문 안에서 선언된 변수도 함수의 최상단으로 끌어올려져서 함수내에서 동일하게 사용된다는 것이다.");

