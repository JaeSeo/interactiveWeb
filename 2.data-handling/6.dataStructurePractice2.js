// '형 변환'이라는 새로운 기술을 배워왔습니다. 이제 조금 더 자유자재로 자료형을 다룰 수 있겠네요.

// 이전에는 주어진 재료로 만들 수 없었던 결과물을, '형 변환'을 활용해서 만들어보세요.

// 템플릿
// // 숫자형과 문자열 재료
// var material1 = '3';
// var material2 = 3;
// var material3 = '4';
// var material4 = 10;

// // 요리 결과
// var result1;
// var result2;

// // 형 변환을 사용해서 result1에는 문자열 '30'을, result2에는 숫자형 40을 만들어 넣어보세요.
// // 코드를 작성하세요.

// // 테스트 코드
// console.log(result1);
// console.log(typeof result1);
// console.log(result2);
// console.log(typeof result2);
// 30
// string
// 40
// number

// 숫자형과 문자열 재료
var material1 = '3';
var material2 = 3;
var material3 = '4';
var material4 = 10;

// 요리 결과
var result1;
var result2;

// 형 변환을 사용해서 result1에는 문자열 '30'을, result2에는 숫자형 40을 만들어 넣어보세요.
// 코드를 작성하세요.
result1 = String(Number(material1) * material4);
result2 = Number(material3) * material4;

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);