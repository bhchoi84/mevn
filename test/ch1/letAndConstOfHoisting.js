function letAndConstOfHoisting(){
    let a = 1  // let 선언 - 블록 스코프
    console.log('블록 스코프 밖에서의 a : ' + a);
    if( true ){
        console.log(a) // 실행구문 아래에 선언된 변수를 참조하게 했다
                        // hosisting 테스트 
        let a = 2       // 끌어올려진다.
                        // 선언 - Temporal Dead Zone -> 초기화 -> 할당
                        // Cannot access 'a' before initialization ( 초기화 전에 변수에 접근할 수 없습니다.)
                        // 변수를 인식을 한다는 뜻은 hoisting 되었다는 뜻 그러나 TDZ 상태이고 초기화 되기 전이라 에러 발생 
    }
}
// ReferenceError: Cannot access 'a' before initialization
console.log(' 동일한 변수명을 함수내에서 선언하고 또 다른 동일하 변수명은 블록 스코프 내에서 호출시 TDZ에 의해 에러가 발생 => '+letAndConstOfHoisting())