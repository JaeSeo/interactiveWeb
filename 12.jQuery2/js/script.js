$('#even-btn').on('click', function() {
    $('.card').each(function() {
       if((Number($(this).text()) % 2) === 0) {
           $(this).addClass('selected');   
       } else {
           $(this).removeClass('selected');
       }
    });
});

$('#odd-btn').on('click', function() {
    $('.card').each(function() {
       if((Number($(this).text()) % 2) === 1) {
        $(this).addClass('selected');   
       } else {
           $(this).removeClass('selected');
       }
    });
});