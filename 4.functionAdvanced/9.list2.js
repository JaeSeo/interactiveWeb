// 뒤늦게 코드잇 강의를 듣고 있는 영준이는 배열 안에 배열을 넣는 방법을 배우고서 너무 신난 나머지, 모든 배열을 다 2중 배열로 만들어버렸습니다. 게다가 순서도 뒤집어 놓았네요.

// 골치는 아프지만, 한 발 앞선 우리가 바로잡아 줘야겠죠? 아래의 조건에 맞게 원래의 배열로 돌려놓는 함수 restoreArray를 만들어주세요.

// 2중 배열이 아닌, 하나의 배열로 통합한다.
// 배열 안의 배열에 있는 숫자들은 순서를 뒤바꾼다.
// 실행결과
// [ 1, 2, 3, 4 ]
// [ 1, 2, 3, 4, 5, 6 ]
// [ 3, 5, 4, 6, 7, 10, 9, 8 ]

//해설

// 먼저 2중 배열을 하나의 배열로 만들어봅시다. for문을 사용하여 arr의 각 요소에 대해 length를 확인하고, 그 length만큼 다시 반복해주면서 returnArr에 추가합니다.

var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    var returnArr = [];
    var idx = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            returnArr[idx] = arr[i][j];
            idx++;
        }
    }
    return returnArr;
}

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));
// [2, 1, 4, 3]
// [3, 2, 1, 5, 4, 6]
// [3, 5, 4, 6, 7, 8, 9, 10]
// 위와 같이 작성하면 하나의 배열로 만들었지만, 순서가 뒤집히지 않았습니다. 위의 코드를 조금 더 고쳐봅시다.

// 두 번째 for문에서, j를 0부터 arr[i].length까지 증가시키는 것이 아니라 arr[i].length부터 0까지 감소시키면 뒤집힌 순서로 추가할 수 있습니다.

var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    var returnArr = [];
    var idx = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = arr[i].length - 1; j >= 0; j--) {
            returnArr[idx] = arr[i][j];
            idx++;
        }
    }
    return returnArr;
}

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));
// [1, 2, 3, 4]
// [1, 2, 3, 4, 5, 6]
// [3, 5, 4, 6, 7, 10, 9, 8]