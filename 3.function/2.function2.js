// onsole.log('3 * 4 = ' + 3 * 4);
// console.log('3 * 2 = ' + 3 * 2);
// console.log('7 * 5 = ' + 7 * 5);
// console.log('8 * 9 = ' + 8 * 9);
// console.log('5 * 5 = ' + 5 * 5);
// console.log('9 * 9 = ' + 9 * 9);
// 3 * 4 = 12
// 3 * 2 = 6
// 7 * 5 = 35
// 8 * 9 = 72
// 5 * 5 = 25
// 9 * 9 = 81
// 위와 같이 반복이 많은 작업은 함수를 활용하면 좋겠죠? 함수를 써서 동일한 결과가 나오는 코드를 작성해주세요.

// 템플릿
// // 여기에 expressMultiplication 함수를 써주세요.
// // 코드를 작성해주세요.

// // 테스트 코드
// expressMultiplication(3, 4);
// expressMultiplication(3, 2);
// expressMultiplication(7, 5);
// expressMultiplication(8, 9);
// expressMultiplication(5, 5);
// expressMultiplication(9, 9);

// 여기에 expressMultiplication 함수를 써주세요.
// 코드를 작성해주세요.

// function expressMultiplication(a, b) {
//     problem = String(a) + ' * ' + String(b) + ' = ';
//     result = a * b;
//     console.log(problem + String(result));
// }

function expressMultiplication(a, b) {
    result = a * b;
    console.log(String(a) + ' * ' + String(b) + ' = ' + String(result));
}

// 테스트 코드
expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);