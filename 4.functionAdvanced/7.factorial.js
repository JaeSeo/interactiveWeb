// 개념 설명
// 중학교 때 배운 '계승(팩토리얼)' 기억하시나요?

// 1부터 어떤 양의 정수 n까지의 정수를 모두 곱한 것을 말하며 n!로 나타낸다.

// 출저: 네이버 지식백과

// 팩토리얼은 아래와 같이 계산합니다. 0!은 1이라는 점도 기억해주세요.

// 0! = 1
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

//해설

// STEP 1: 0!
// 우선 결괏값을 0!의 값인 1로 초기화해줍니다.

var result = 1;
// STEP 2: n! (1 이상에 대해)
// n이 1 이상인 경우에는 반복문을 사용해서 팩토리얼 계산을 해줍니다.

if (n > 1) {
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
}
// 이제 n이 0일 경우 초깃값인 1이, n이 1 이상일 경우 팩토리얼 계산값이 result에 저장됩니다. 이 값을 리턴해주면 되겠죠?

function factorial(n) {
    var result = 1;

    if (n > 1) {
        for (var i = 1; i <= n; i++) {
            result = result * i;
        }
    }
    return result;
}

// 테스트 코드
console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));
3628800
120
6
1
// STEP 3: 한걸음 더
// 눈치채신 분도 있으시겠지만, 사실 if문이 없더라도 동일하게 동작하겠죠? n이 0인 경우에는 for문의 조건에 따라서 for문 내부가 실행되지 않기 때문이죠. 더 간단하게 아래와 같이 고치셔도 됩니다.

function factorial(n) {
    var result = 1;

    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

// 테스트 코드
console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));