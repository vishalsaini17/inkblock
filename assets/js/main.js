function smoothScroll(offsetVal = 0) {
  $('html, body').animate({
    scrollTop: offsetVal
  }, 800);
}

// $(window).on('hashchange', function(){
//   // Your Code goes here
//   var hash = location.hash.replace( /^#/, '' );
  
  

//  });
if($('#work').length && $('#contact').length){
  var offset_top_work=$('#work').offset().top;
  var offset_top_contact=$('#contact').offset().top;
}



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



  $('.project-img-1').hover(function(){
    $('.work-image').toggleClass('hover-image-p1');
    $('.work-image').toggleClass('hover-project-image');
  })

  $('.project-img-2').hover(function(){
    $('.work-image').toggleClass('hover-image-p2');
    $('.work-image').toggleClass('hover-project-image');
  })

  $('.project-img-3').hover(function(){
    $('.work-image').toggleClass('hover-image-p3');
    $('.work-image').toggleClass('hover-project-image');
  })

  $('.project-img-4').hover(function(){
    $('.work-image').toggleClass('hover-image-p4');
    $('.work-image').toggleClass('hover-project-image');
  })

  $('.project-img-5').hover(function(){
    $('.work-image').toggleClass('hover-image-p5');
    $('.work-image').toggleClass('hover-project-image');
  })
  
// parallel-x 
$(window).on("scroll", function(){
  var scrollVal = $(window).scrollTop();
  var x = -(scrollVal - scrollVal/2) + 'px';
  $('.banner-section').css({'background-position-y':x});
})

});
