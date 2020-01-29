function startDemo(){
    $('.start-demo').fadeOut('slow');
}

$(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth < 992) {
      $('.slideImg1').attr('src','assets/img/slides-for-mobile/slider_1min.jpg');
      $('.slideImg2').attr('src','assets/img/slides-for-mobile/slider_2min.jpg');
      $('.slideImg3').attr('src','assets/img/slides-for-mobile/slider_3min.jpg');
      $('.slideImg4').attr('src','assets/img/slides-for-mobile/slider_4min.jpg');
    } else {
        $('.slideImg1').attr('src','assets/img/slides/slider_1.jpg');
        $('.slideImg2').attr('src','assets/img/slides/slider_2.jpg');
        $('.slideImg3').attr('src','assets/img/slides/slider_3.jpg');
        $('.slideImg4').attr('src','assets/img/slides/slider_4.jpg');
    }
  });
  
$(document).ready(function(){
    $(window).resize();
});