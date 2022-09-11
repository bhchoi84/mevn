const condition_over_height_170 = e => e.height >= 170
const condition_over_age_50 = e => e.age >= 50

const friends_template = {name:"name",age:"age", height:"height"}
const friends = [
    {'name': 'park_20_160',age:20,height:160},
    {'name': 'lee_25_170',age:25,height:170},
    {'name': 'choi_39_162',age:39,height:162},
    {'name': 'kim_60_190',age:60,height:190},
    {'name': 'seo_55_200',age:55,height:200},
    {'name': 'jung',age:3,height:90},
]

console.log(friends_template);

// 정렬
const sortCondition = ( a, b ) => a[friends_template.age] - b[friends_template.age]
console.log( friends.sort(sortCondition) )

// 170이상인 친구들 중 1명 
console.log(  friends.find(condition_over_height_170).name ) // 첫번째만 나온다.
console.log( friends.findIndex(condition_over_age_50)) // 나이가 50 이상인 index ( 정렬되서 ok )

console.log(`템플릿 문자열 나이순 정렬된 배열 첫번째 값 이름 : ${friends[0].name} / 나이 : ${friends[0].age} 입니다.`)