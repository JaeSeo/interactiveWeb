$('#btn1').on('click', blueActive);

function blueActive() {
    $('.blue').addClass('rotate');
    setTimeout(removeClass, 1000);
}

$('#btn2').on('click', whiteActive);

function whiteActive() {
    $('.white').addClass('rotate');
    setTimeout(removeClass, 1000);    
}

$('#btn3').on('click', dotBlueActive);

function dotBlueActive() {
    $('.blue.dot').addClass('rotate');
    setTimeout(removeClass, 1000);    
}

function removeClass() {
    $('.blue, .white, .dot').removeClass('rotate');
}