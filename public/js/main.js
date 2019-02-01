window.onload = function(){

$('.header__bottom-events ul').slick({
    arrows: false,
    dots: true,
    infinite: false,
    autoplay: true,
});
$('.main__right-news ul').slick({
    arrows: false,
    dots: true,
    infinite: false,
    autoplay: true,
});


/* opacity posts scroll */
/* $('.main__left-post').addClass('hidden');

$(window).scroll(function(){
    if($(window).scrollTop()>500){
        $('.main__left-post').addClass('bounce visible').css('transition','1s');
    }
}) */


 $('.header__middle-btn').on('click', function(){
     $('.span2').toggleClass('span2Animate');
     $('.span3').toggleClass('span3Animate');
     $('.span1').toggleClass('span1Animate');
     $('.span4').toggleClass('span4Animate');
     $('.header__middle-bottom').toggleClass('animateMenu')
 })














}