// 함수는 이런 구조입니다.

// 함수 선언
function makeLog(str) {
  console.log(str);
}

// 함수 호출
makeLog('안녕하세요');
// makeLog 함수는 파라미터 하나(str)를 받도록 정의되었기 때문에, 함수를 호출할 때 파라미터로 값을 하나 넘겨줄 수 있습니다.

// 이벤트 핸들러
$(document).on('keydown', keyboardInput);
// 위와 같이 이벤트를 등록하면, 이벤트 핸들러 함수(keyboardInput)를 호출하는 코드가 자바스크립트 내부에 이미 구현되어 있습니다. 그래서 이벤트 객체를 사용하고자 할 경우, 함수 선언 부분에 파라미터를 넣는 것만으로 이벤트 객체의 전달이 가능해집니다.

// 이벤트 객체를 사용할 경우
function keyboardInput(e) {
  console.log(e.key);
}
// 만약 이벤트 객체를 사용할 필요가 없으면 그냥 파라미터는 비워두면 됩니다.

// 이벤트 객체를 사용하지 않을 경우
function keyboardInput() {
//   ...
}