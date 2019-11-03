// 지난 강의에서 봤듯, 이벤트를 등록하는 jQuery 코드는 이 네 줄이었습니다:

$('#home').on('click', clickHome);
$('#seoul').on('click', clickSeoul);
$('#tokyo').on('click', clickTokyo);
$('#paris').on('click', clickParis);
// 이렇게 이벤트를 등록하면, HTML 태그에 직접 명시해두지 않고 더 깔끔하게 쓸 수 있습니다.

// 순수 자바스크립트 (Vanilla JavaScript)
// jQuery 너무 편하고 좋습니다. 그래도 혹시 나중에 jQuery를 쓰지 않을 경우를 대비해서, '순수 자바스크립트'만을 사용했을 때에는 어떻게 써야할지 알아두는 것도 나쁘지 않겠죠?

document.getElementById('home').addEventListener('click', clickHome);
document.getElementById('seoul').addEventListener('click', clickSeoul);
document.getElementById('tokyo').addEventListener('click', clickTokyo);
document.getElementById('paris').addEventListener('click', clickParis);
// 순수 자바스크립트만 쓰니까 조금 복잡해졌습니다. 하지만 위에 있는 jQuery 코드와 의미는 동일합니다.

// keyboard event는 fuction key(event) { console.log(event) }와 같은 방식으로 event에서 발생하는 객체 정보를 확인하여 핸들링.