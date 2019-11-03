// 1등만 기억하는 세상을 타파하기 위해, 2등을 찾아보는 프로그램을 만들기로 했습니다.

// 파라미터로 배열 arr을 받고, arr에서 두 번째로 큰 숫자를 리턴시켜주는 함수 getSecondBiggestNumber를 작성해주세요.

// 템플릿
// function getSecondBiggestNumber(arr) {
//     // 코드를 작성하세요.
// }

// // 테스트 코드
// console.log(getSecondBiggestNumber([4, 7, 2, 1, 9, 3, 6, 5]));
// console.log(getSecondBiggestNumber([80, 2, 44, 21, 92, 3, 51]));
// console.log(getSecondBiggestNumber([4, 7, 6, 5]));
// 7
// 80
// 6

function getSecondBiggestNumber(arr) {
    // 코드를 작성하세요.
    var second = arr[0];
    for (var count = 1; count < arr.length; count ++) {
        if (arr[0] < arr[count]) {
        second = arr[0];
        arr[0] = arr[count];
        arr[count] = second;
        } else if (second < arr[count]) {
                   second = arr[count];
        }
    }
    return second;
}

// 테스트 코드
console.log(getSecondBiggestNumber([4, 7, 2, 1, 9, 3, 6, 5]));
console.log(getSecondBiggestNumber([80, 2, 44, 21, 92, 3, 51]));
console.log(getSecondBiggestNumber([4, 7, 6, 5]));
