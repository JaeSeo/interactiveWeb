// switch문 -> 특정 케이스에 따라 함수를 실행해야할 때 유리
// range로 범위를 설정해야하면 if가 유리.

var inputNumber = window.prompt("한 자리 숫자를 적어주세요.");

switch (inputNumber) {
    case '0':
        alert('Zero!');
        break;
    case '1':
        alert('One!');
        break;
    case '7':
    case '3':
        //두 개 조건 걸어야 할 경우 -> 3 or 7과 동일
        alert('Lucky!');
        break;
    default:
        alert('Yes!');
        break;
}