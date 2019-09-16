function smoothScroll(offsetVal = 0) {
  $('html, body').animate({
    scrollTop: offsetVal
  }, 800);
}

$(window).on('hashchange', function(){
  // Your Code goes here
  var hash = location.hash.replace( /^#/, '' );
  
  

 });




function amountscrolled() {
  var scrollTop = $(window).scrollTop()
  var winheight = $(window).height()
  var docheight = $(document).height()
  var trackLength = docheight - winheight
  var pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
  var srolvalue = (pctScrolled + '% ');
  return srolvalue;
}

$(window).on("scroll", function(){
  if($('.page-indicator').length){
    $('.indicator-progress').height(amountscrolled());
  }
})

$(document).ready(function () {
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    // var allow = (scroll >= 111)? true : false;

    if ((scroll > position)) {
      // console.log('scrollDown');
      $(".main-navbar").addClass("hide-navbar");
    } else {
      //  console.log('scrollUp');
      $(".main-navbar").removeClass("hide-navbar");
    }
    position = scroll;

    if (scroll > 1) {
      $(".main-navbar").addClass("shadow-navbar");
    } else {
      $(".main-navbar").removeClass("shadow-navbar");
    }
  });

});
