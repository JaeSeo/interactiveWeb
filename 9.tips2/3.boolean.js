// 용어 설명
// undefined 와 null
// undefined와 null은 자주 접하게 되는 값들입니다.

// null은 비어있는 값이고, undefined는 변수에 아무것도 할당되지 않았을 때의 값입니다. 자바스크립트에서는 변수의 선언과 초기화를 동시에 하지 않아도 되기 때문에, 선언만 된 변수는 undefined라는 값을 갖게 됩니다.

var n = null;
var u;

console.log(n);
console.log(u);
// null
// undefined
// NaN (Not a Number)
// 전에도 잠깐 언급했던 적 있었죠? NaN은 'Not a Number'의 약자입니다. 숫자가 아닌 것을 숫자로 표현하려 할 때 반환됩니다.

var n = parseInt('abcd');
console.log(n);
// NaN
// false와 true로 간주되는 것들
// 자바스크립트 if문이나 while문의 조건 부분에는 사실 불린이 아닌 다른 자료형의 결과값이 있어도 작동합니다.

// 그래도 조건을 통과하는지 안 하는지에 대한 기준은 필요하겠죠? 어떤 것들이 true로 간주되고, 어떤 것들이 false로 간주될까요?

// 숫자
if (0) {
  console.log('0은 true');
} else {
  console.log('0은 false');
}

if (4) {
  console.log('양수는 true');
} else {
  console.log('양수는 false');
}

if (-10) {
  console.log('음수는 true');
} else {
  console.log('음수는 false');
}
// 0은 false
// 양수는 true
// 음수는 true
// 문자열
if ('') {
  console.log('비어있는 문자열은 true');
} else {
  console.log('비어있는 문자열은 false');
}

if ('ab') {
  console.log('안 비어있는 문자열은 true');
} else {
  console.log('안 비어있는 문자열은 false');
}
// 비어있는 문자열은 false
// 안 비어있는 문자열은 true
// null, undefined, NaN
if (null) {
    console.log('null은 true');
} else {
    console.log('null은 false');
}

if (undefined) {
    console.log('undefined는 true');
} else {
    console.log('undefined는 false');
}

if (NaN) {
    console.log('NaN은 true');
} else {
    console.log('NaN은 false');
}
// null은 false
// undefined는 false
// NaN은 false
// 위의 것을 활용하는 방법
// 기존의 지식을 활용해서, 변수 str이 빈 문자열인지 이렇게 확인할 수 있습니다.

if (str !== '') {
  console.log('str은 빈 문자열이 아닙니다.');
} else {
  console.log('str은 빈 문자열입니다.');
}
// 하지만 새롭게 배운 지식을 활용하면 이렇게 바꿀 수 있습니다.

if (str) {
  console.log('str은 빈 문자열이 아닙니다.');
} else {
  console.log('str은 빈 문자열입니다.');
}
// 다른 자료형을 불린으로 변형하는 법
// 비어 있는 문자열은 불린으로 생각했을 때 false이죠? 따라서 아래 코드에서 !str을 하면 true가 되고, !!str을 하면 false가 됩니다.

var str = '';
console.log(!str);
console.log(!!str);
// true
// false