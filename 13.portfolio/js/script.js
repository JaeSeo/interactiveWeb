// My 답안
// $('.header .vertical-center').animate({opacity: 1, top: '0px'}, 1000);

// $(window).on('scroll', function() {
//     if ($(window).scrollTop() >= $('.about').offset().top && $(window).scrollTop() < $('.contact').offset().top) {
//         $('.navbar .menu-right li button').css('color', '#4A4A4A'); 
//         $('.about .vertical-center').animate({opacity: 1, top: '0px'}, 1000);
//         $('.inner-bar').each(function() {
//             $(this).animate({width: $(this).siblings('.percentage').text()}, 1000);
//         });        
//     } else if ($(window).scrollTop() >= $('.contact').offset().top) {
//         $('.navbar .menu-right li button').css('color', '#4A4A4A'); 
//         $('.contact .vertical-center').animate({opacity: 1, top: '0px'}, 1000);
//     } else {
//         $('.navbar .menu-right li button').css('color', 'white');        
//     }
// });

// $('#about-btn').on('click', function() {
//     $('html').animate({scrollTop: $('.about').offset().top}, 1000);
// });

// $('#contact-btn').on('click', function() {
//     $('html').animate({scrollTop: $('.contact').offset().top}, 1000);
// });


//해설 (모범 답안)
$(window).on('scroll', scrollHandler);

//첫 로딩
scrollHandler();

//스크롤 핸들러
function scrollHandler() {
    if ($(window).scrollTop() >= $('.about').position().top) {
        $('.menu-right button').css('color', '#4A4A4A'); 
        $('.skill').each(function() {
            let percentage = $(this).find('.percentage').text();
            $(this).find('.inner-bar').animate({width: percentage}, 1000);
        });          
    } else {
        $('.menu-right button').css('color', 'white'); 
    }

    $('section').each(function() {
        if ($(window).scrollTop() >= $(this).position().top) {
            $(this).find('.vertical-center').animate({opacity: 1, top: '0px'}, 800);
        }
    });
};

//버튼 클릭 이벤트
$('.menu-right button').on('click', function() {
    let id = $(this).attr('id');
    if (id == 'about-btn') {
        $('html, body').animate({scrollTop: $('.about').position().top}, 1000);
    } else if (id == 'contact-btn') {
        $('html').animate({scrollTop: $('.contact').position().top}, 1000);
    }
});