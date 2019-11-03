//특정 클래스를 공유하고 있는 요소들에게 각각 특정 로직을 적용해야할 때 -> jquery each 반복문 사용 가능.
//주로 this와 함께 사용됨. 해당 클래스를 가진 this는 각각의 요소라고 이해하면 됨.
$('.card').each(function() {
    console.log($(this));
})