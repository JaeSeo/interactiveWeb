// 주어진 높이(height)에 맞게 *로 삼각형을 그려주는 함수 printTriangle을 써봅시다. 출력 결과는 아래를 참고해주세요.

// 높이: 5
// *
// **
// ***
// ****
// *****
// 높이: 3
// *
// **
// ***
// 높이: 1
// *

function printTriangle(height) {
    // 이 함수 안에서 console.log를 직접 사용하여
    // 직접 출력까지 완료해야 합니다.
    // 이 함수는 return 값이 없습니다.
    for (var count = 1; count <= height; count += 1) {
        console.log('*'.repeat(count));
    }
}
// 테스트 코드
console.log('높이: 5');
printTriangle(5);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 1');
printTriangle(1);