/**
 * display
 */
const show = (e, index) => {
    console.log(`${index}번째의 요소는 ${e}입니다.`);
}

const multi = ( e, index) => e * 2
const compoundInterest = (prev, current, index) => prev+current
const oddRemainder = e => e % 2
const base = [1,2,3,4,5,6,7,8,9,10]

//const loopShowButReturnIsNull = base.forEach(show);
console.log('forEach문은 의 return은 '+base.forEach(show) + '다.')


const b = base.map(multi)
console.log('2배로 곱해지고 새로운 array를 return');
b.forEach(show)


const c = base.reduce(compoundInterest)
console.log('간단하게 계산식 적용');
console.log('reduce의 결과는 계산된 형태의 단일값 function이 아니다.')

const d = base.filter(oddRemainder)
console.log('나머지가 1인 홀수만 출력')
base.filter(oddRemainder).forEach(show)

console.log('every함수는 모두가 참일때만 반환')
const isAllOdd = base.every( e => e % 2 ) // 모두 홀수
console.log('base 배열 전체가 홀수 입니가? every는 해당값의 전체 비교 후 boolean 리턴 : '+isAllOdd);

console.log('some함수는 일부만 참이라도 true 반환')
const isSomeOdd = base.some( e => e % 2 )
console.log('base 배열의 일부가 홀수 입니까? some은 해당값의 일부가 참이면 참 : ' + isSomeOdd)
