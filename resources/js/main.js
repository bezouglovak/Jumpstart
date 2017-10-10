$(document).ready(function(){
$('.carousel').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
  pauseOnFocus: false
});

/*hide nav bar*/
var $distance = 0;
$(window).scroll(function(){
  var $scrollValue = $(this).scrollTop();

    if ($scrollValue-$distance > 50){
      var $hide = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + $hide}, 150);
      $distance = $scrollValue;
    } else if($distance - $scrollValue > 50){
      $('.navbar').animate({top: '0px'}, 150);
      $distance = $scrollValue;
    }
});

});
