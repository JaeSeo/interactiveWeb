// 문자열의 길이
// length 속성은 문자열의 길이를 담고 있습니다.

var str = 'Codeit';
console.log(str.length);
// 6

// 특정 인덱스의 문자 받아오기
// str.charAt(index)를 하면 문자열 str의 index 인덱스에 있는 문자를 받아올 수 있습니다. str[index]와 같은 셈이죠.

var str = 'Codeit';
console.log(str.charAt(2));
// d

// str.charAt(index)와 str[index]에는 약간의 차이가 있는데, 이 부분은 다음 챕터에서 배워보도록 하겠습니다.

// 문자열 안에서 다른 문자열 검색
// str.indexOf(searchValue)를 하면 문자열 str 내에 문자열 searchValue가 포함되어 있는지 확인할 수 있습니다.

// 만약 포함되어 있다면, 문자열이 시작되는 문자의 인덱스가 리턴됩니다.
// 포함되어 있지 않다면, -1이 리턴됩니다.
// 여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴됩니다.
// 예시를 통해 살펴봅시다.

var str = 'Hello World!';

console.log(str.indexOf('e'));
console.log(str.indexOf('z'));
console.log(str.indexOf('ello'));
console.log(str.indexOf('o'));
// 1
// -1
// 1
// 4

// 마지막 인덱스 찾기
// lastIndexOf는 indexOf와 동일한데, 가장 뒤에 위치한 검색 결과를 찾아줍니다.
// 예를 들어 봅시다. 'Hello World!'에는 o가 두 번 나옵니다.
// 이 때 indexOf는 앞에 있는 o를, lastIndexOf는 뒤에 있는 o를 찾아주는 거죠.

var str = 'Hello World!';

console.log(str.indexOf('o'));
console.log(str.lastIndexOf('o'));
// 4
// 7

// 대소문자 변환
// 대문자로 바꾸기
// str.toUpperCase()를 하면 str의 모든 글자가 대문자로 바뀌어서 리턴됩니다.

var str = 'Codeit';
console.log(str.toUpperCase());
// CODEIT

// 소문자로 바꾸기
// str.toLowerCase()를 하면 str의 모든 글자가 소문자로 바뀌어서 리턴됩니다.

var str = 'Codeit';
console.log(str.toLowerCase());
// codeit

// 문자열 자르기
// 시작 지점과 끝 지점으로 자르기
// str.substring(indexStart, indexEnd)를 하면 인덱스 indexStart부터 인덱스 indexEnd전까지의 문자열을 잘라서 만든 새로운 문자열이 리턴됩니다. 만약 indexEnd를 쓰지 않으면, 인덱스 indexStart부터 끝까지 문자열이 잘립니다.

var str = 'Hello World!';

console.log(str.substring(2, 5));
console.log(str.substring(2));
// llo
// llo World!

// 시작 지점과 길이로 자르기
// str.substr(start, length)를 하면 인덱스 start부터 길이 length의 문자열이 잘려서 리턴됩니다.

var str = 'Hello World!';

console.log(str.substr(2, 5));
// llo W

// 앞뒤의 공백을 없애줍니다.
// str.trim()을 하면 문자열 str의 앞뒤로 있는 '공백(띄어쓰기, 들여쓰기, 줄바꿈 등)'을 모두 지운 새로운 문자열이 리턴됩니다.

var str = '        Hello World!      ';

// console.log(str.trim());
// Hello World!
// 그리고...
// 더 많은 내용을 알고싶다면, 이 링크를 참고해보세요!
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/prototype