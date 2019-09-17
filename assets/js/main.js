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

// $('.banner-section').imageScroll({
//   // The image to show.
//   image: null, 
//   // The data attribute name for images.
//   // Uses the value of this attribute to load the image.
//   imageAttribute: 'image', 
//   // Class added to image holder(s). 
//   holderClass: 'imageHolder', 
//   // The element to which the parallax image(s) will be attached to
//   container: $('body'), 
//   // The window object which listens to scroll and resize events
//   windowObject: $(window),
//   // The speed of the parallax effect.
//   speed: 0.2, 
//   // How many percent of the screen each image should cover.
//   coverRatio: 0.75, 
//   // The minimum height of the image in pixels.
//   holderMinHeight: 200, 
//   // The maximum height of the image in pixels
//   holderMaxHeight: null,
//   // Extra height added to the image. 
//   extraHeight: 0, 
//   // The original width of the image.
//   mediaWidth: 1600, 
//   // The original height of the image.
//   mediaHeight: 900, 
//   // Whether or not you want the parallax effect.
//   parallax: true, 
//   // Presents a mobile/tablet friendly version, 
//   // no parallax effect and smaller images 
//   // (should be used with a mobile/tablet optimized image)
//   touch: false
//   });

});
