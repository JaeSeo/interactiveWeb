// 개념 설명
// 배열에 push 메소드를 사용하면 배열 마지막 칸에 값이 추가됩니다.

// var arr = [2, 3, 5, 7];
// arr.push(11);
// console.log(arr);
// [2, 3, 5, 7, 11]
// 과제
// 범위의 시작 지점(start), 끝 지점(end), 그리고 증가폭(step)을 파라미터로 받고, 그에 해당하는 배열을 리턴해주는 함수 range를 작성해주세요.

// // 결과 예시
// console.log(range(1, 6, 1));
// console.log(range(3, 10, 2));
// console.log(range(10, -10, -4));
// [1, 2, 3, 4, 5]
// [3, 5, 7, 9]
// [10, 6, 2, -2, -6]
// 위를 보시면 알 수 있듯이, 끝 지점(end)은 배열에 포함될 수 없습니다. range(1, 6, 1)에서의 마지막 값은 6이 아니라 5고, range(10, -10, -4)에서의 마지막 값은 -10이 아니라 -6인 거죠.

//해설

// 두 가지로 나눠서 생각해봅시다. start보다 end가 클 경우, 그리고 작을 경우.

// 먼저 start보다 end가 클 경우, 즉 값이 점점 증가할 경우에는

var idx = 0;
for (var i = start; i < end; i += step) {
    arr[idx] = i;
    idx++;
}
// 이렇게 작성할 수 있습니다.

// 반대로 start보다 end가 작을 경우, 즉 값이 점점 감소할 경우에는

var idx = 0;
for (var i = start; i > end; i += step) {
    arr[idx] = i;
    idx++;
}
// 이렇게 작성하면 됩니다.

// 이 코드를 if문으로 합쳐서 완성하면 아래와 같습니다.

function range(start, end, step) {
    var arr = [];
    var idx = 0;

    if (start < end) {
        for (var i = start; i < end; i += step) {
            arr[idx] = i;
            idx++;
        }
    } else {
        for (var i = start; i > end; i += step) {
            arr[idx] = i;
            idx++;
        }
    }
    return arr;
}

// 테스트 코드
console.log(range(1, 10, 1));
console.log(range(-1, 10, 3));
console.log(range(10, -10, -4));
[1, 2, 3, 4, 5, 6, 7, 8, 9]
[-1, 2, 5, 8]
[10, 6, 2, -2, -6]