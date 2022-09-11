const divide_first_data = ( d, ...rest ) => {
    console.log( '첫번째 매개변수 제외 ' + rest)
}

divide_first_data( 1,2,3,4,5 );

const spread = [1, 2, 3,4,5,]

const show_spread = ( a, b, ...c) => {
    console.log('spread 1 => ', a)
    console.log('spread 2 => ', b)
    console.log('spread 첫번째, 두번째 제외 이후 전체 => ', c)
    
}

show_spread(...spread)


const [ head, second, ...rest ] = spread;
console.log('head '+head);
console.log('second '+second);
console.log('rest '+rest);

console.log('Max ' + Math.max(...spread));

const base = [1,2,3,4,5,6,7,8,9,10];

const concatMap = base.map((element, index) => {
    element + 10
})
const show = (e) => console.log(e);
concatMap.forEach(show);


const a = [1,2,3,4,5,6,7,8,9,10];
const b = ['a','b','c','d','e','f','g','h'];

console.log(`시작 ${new Date()}`)
const c = [...a, ...b]
console.log(`종료 ${new Date()}`)
console.log('spread '+c)


console.log(`시작 ${new Date()}`)
const d = a.concat(b)
console.log(`종료 ${new Date()}`)
console.log('concat '+d)

