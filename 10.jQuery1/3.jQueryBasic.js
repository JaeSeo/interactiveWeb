// jQuery = '선택' + '동작'
// 모든 jQuery 코드는 크게 두 부분으로 나눌 수 있습니다.

// 앞의 강의에서 나왔던 3개의 jQuery 예시 코드를 봅시다.

$('#hello').on('click', sayHello);
$('#hello').text();
$('#hello').css('background', '#7f8ff4');
// 이 코드들은 모두 .을 기준으로 두 부분으로 나눌 수 있습니다.

// 선택 //     .   // 동작 //
$('#hello')   .   on('click', sayHello);
$('#hello')   .   text();
$('#hello')   .   css('background', '#7f8ff4');
// jQuery를 쓰기 위해서는, '선택'과 '동작'만 알면 됩니다.

// 이번 챕터에서는 어떻게 하면 잘 '선택'할 수 있는지, 그리고 잘 '동작'시킬 수 있는지에 대해 배워봅시다.