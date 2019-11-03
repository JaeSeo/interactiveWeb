// 배열의 길이
// length 속성은 배열의 길이를 담고 있습니다.

var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
console.log(brands.length);
// 3

// 배열에서 특정 값 찾기
// 문자열에서 썼던 indexOf가 배열에서도 똑같이 동작합니다. array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인할 수 있습니다.

// 만약 포함되어 있다면, item이 있는 인덱스가 리턴됩니다.
// 포함되어 있지 않다면, -1이 리턴됩니다.
// 여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴됩니다.
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
console.log(brands.indexOf('Starbucks'));
console.log(brands.indexOf('Kakao'));
// 2
// -1

// 배열에 값 추가
// array.push(item1)을 하면 item1이 array 배열의 끝에 추가됩니다.

// array.push(item1, item2, item3)를 하면 item1, item2, item3이 array 배열의 끝에 순서대로 추가됩니다.

var brands = ['Apple', 'Coca-Cola', 'Starbucks'];

brands.push('Kakao');
console.log(brands);

brands.push('Samsung', 'LG', 'Facebook');
console.log(brands);
// ['Apple', 'Coca-Cola', 'Starbucks', 'Kakao']
// ['Apple', 'Coca-Cola', 'Starbucks', 'Kakao', 'Samsung', 'LG', 'Facebook']

// 배열에서 값 빼기
// array.pop()을 하면 배열 array의 마지막 요소가 배열에서 빠지고, 그 마지막 요소가 리턴됩니다.

var brands = ['Apple', 'Coca-Cola', 'Starbucks'];

var lastBrand = brands.pop();

console.log(lastBrand);
console.log(brands);
// Starbucks
// ['Apple', 'Coca-Cola']

// 배열을 문자열로 바꾸기
// 그리고 여기서, brands.join() 이라고 한번 해보세요. 어떻게 되나요? 모든 내용이 하나로 합쳐지죠?

var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
console.log(brands.join());
// Apple,Coca-Cola,Starbucks

// 만약 값들 사이에 들어가는 쉼표가 마음에 들지 않으면, 파라미터로 쉼표를 대체할 문자열을 넣어주시면 됩니다.

var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
console.log(brands.join('###'));
// Apple###Coca-Cola###Starbucks
// 그리고...
// 더 많은 내용을 알고싶다면, 이 링크를 참고해보세요!
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array