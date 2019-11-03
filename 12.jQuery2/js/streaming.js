scrollHandler(); // 화면 켰을 때 일부는 바로 실행되도록 하기 위해. //document.ready로도 구현 가능

$(window).on('scroll', scrollHandler);

// for문으로 구형
// function scrollHandler() {
//     for (var order = 0; order < $('.playlist').length; order++) {
//         if ($('.playlist').eq(order).offset().top + 120 <= $(window).scrollTop() + $(window).height()) {
//             $('.playlist').eq(order).animate({opacity: 1}, 1000);
//         }
//     }
// }

function scrollHandler() {
    $('.playlist').each(function() {
        if ($(this).offset().top + 120 <= $(window).scrollTop() + $(window).height()) {
            $(this).animate({opacity: 1}, 1000);
        }
    });
    //버튼
    if ($(document).height() === $(window).scrollTop() + $(window).height()) {
        $(".to-top-btn").fadeIn(1000);
    }
}

//버튼
$(".to-top-btn").on('click', function() {
    $('html').animate({scrollTop: 0}, 1000);
});