function smoothScroll(offsetVal = 0) {
  $('html, body').animate({
    scrollTop: offsetVal
  }, 800);
}

// $(window).on('hashchange', function(){
//   // Your Code goes here
//   var hash = location.hash.replace( /^#/, '' );



//  });
if ($('#work').length && $('#contact').length) {
  var offset_top_work = $('#work').offset().top;
  var offset_top_contact = $('#contact').offset().top;
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

$(window).on("scroll", function () {
  if ($('.page-indicator').length) {
    $('.indicator-progress').height(amountscrolled());
  }
})


$(document).ready(function () {
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var navHeight = $('.nav-height').outerHeight(true);
    // var allow = (scroll >= 111)? true : false;
    if (scroll > navHeight) {
      if ((scroll > position)) {
        // console.log('scrollDown');
        $(".main-navbar").addClass("hide-navbar");
      }
      else {
        //  console.log('scrollUp');
        $(".main-navbar").removeClass("hide-navbar");
      }
      // if(scroll == position){
      //   navTimeout();
      // }
      var scrollHeight = $(document).height();
      // var scrollPosition = $(window).height() + $(window).scrollTop();
      // var scrollPosition = scrollHeight - scroll;


    }

    position = scroll;

    if (scroll > 1) {
      $(".main-navbar").addClass("shadow-navbar");
    } else {
      $(".main-navbar").removeClass("shadow-navbar");
    }


    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function () {
      // do something
      // console.log("Haven't scrolled in 250ms!");
      if ($(window).scrollTop() > $('.nav-height').outerHeight(true)) {
        $(".main-navbar").addClass("hide-navbar");
      }
    }, 1000));

    // hide navbar time interval
    // function navTimeout() {
    //   setTimeout(function () {
    //     // if ( ($(window).scrollTop() > $('.nav-height').outerHeight(true)) ) {
    //       $(".main-navbar").addClass("hide-navbar");
    //     // }
    //   }, 2000);
    // }
  });



  // setTimeout(function () {
  // }, 2000);


  $('.project-img-1').hover(function () {
    $('.work-image-hover-1').toggleClass('hover-image-p1');
    $('.work-image-hover-1').toggleClass('hover-project-image');
    $('.main-navbar').addClass(' hide-navbar');
    $('.work-image-1').toggleClass('work-hover');
  })

  $('.project-img-2').hover(function () {
    $('.work-image-hover-2').toggleClass('hover-image-p2');
    $('.work-image-hover-2').toggleClass('hover-project-image');
    $('.work-image-2').toggleClass('work-hover');
    $('.main-navbar').addClass(' hide-navbar');
  })

  $('.project-img-3').hover(function () {
    $('.work-image-hover-3').toggleClass('hover-image-p3');
    $('.work-image-hover-3').toggleClass('hover-project-image');
    $('.work-image-3').toggleClass('work-hover');
    $('.main-navbar').addClass(' hide-navbar');
  })

  $('.project-img-4').hover(function () {
    $('.work-image-hover-4').toggleClass('hover-image-p4');
    $('.work-image-hover-4').toggleClass('hover-project-image');
    $('.work-image-4').toggleClass('work-hover');
    $('.main-navbar').addClass(' hide-navbar');
  })

  $('.project-img-5').hover(function () {
    $('.work-image-hover-5').toggleClass('hover-image-p5');
    $('.work-image-hover-5').toggleClass('hover-project-image');
    $('.work-image-5').toggleClass('work-hover');
    $('.main-navbar').addClass(' hide-navbar');
  })

  // parallel-x 
  $(window).on("scroll", function () {
    var scrollVal = $(window).scrollTop();
    var x = -(scrollVal - scrollVal / 2) + 'px';
    $('.banner-section').css({ 'background-position-y': 'calc(80px + ' + x + ')' });
  })



  // var indicatorval=$('.section-hello h1').offset().top;
  // $('.page-indicator').css({'top':indicatorval+'px'});

  // indicator offset
  indicatorOffset = $("#creative-heading").offset().top;
  $('.page-indicator').css({ "top": indicatorOffset + 'px', "display": "block" });

  $(window).resize(function () {
    //call to your function and check the window width
    indicatorOffset = $("#creative-heading").offset().top;
    $('.page-indicator').css({ "top": indicatorOffset + 'px', "display": "block" });
  });


  // indicator button
  // $.fn.scrollView = function () {
  //   return this.each(function () {
  //     $('html, body').animate({
  //       scrollTop: $(this).offset().top
  //     }, 1000);
  //   });
  // }


  // if ($('.four').visible(true)) {
  //   // The element is visible, do something
  //   $('.one').scrollView();
  // }

  // $('#indicate-next').click(function (event) {
  //   // $('#four').scrollView();
  //   if ($('.zero').visible(true)) {
  //     // The element is visible, do something
  //     $('.one').scrollView();
  //   } else {
  //     // The element is NOT visible, do something else
  //   }
  // })

  
  // $('#indicate-next').click(function (event) {
  //   // $('#four').scrollView();
  //   if ($('.one').visible(true)) {
  //     // The element is visible, do something
  //     $('.two').scrollView();
  //   } else {
  //     // The element is NOT visible, do something else
  //   }
  // })

  
  
  // $('#indicate-next').click(function (event) {
  //   // $('#four').scrollView();
  //   if ($('.two').visible(true)) {
  //     // The element is visible, do something
  //     $('.three').scrollView();
  //   } else {
  //     // The element is NOT visible, do something else
  //   }
  // })

  
  // $('#indicate-next').click(function (event) {
  //   // $('#four').scrollView();
  //   if ($('.three').visible(true)) {
  //     // The element is visible, do something
  //     $('.four').scrollView();
  //   } else {
  //     // The element is NOT visible, do something else
  //   }
  // })





  // hello animation
  $(".text-hello").typed({

    strings: ["Namaste", "Hello", "Holla", "Ni Hao", "Hallo"],
    stringsElement: null,

    // typing speed
    typeSpeed: 100,

    // time before typing starts
    startDelay: 1,

    // backspacing speed
    backSpeed: 100,

    // shuffle the strings
    shuffle: false,

    // time before backspacing
    backDelay: 500,

    // Fade out instead of backspace
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 1000, // milliseconds

    // loop
    loop: true,

    // false = infinite
    loopCount: false,

    // show cursor
    showCursor: false,

    // character for cursor
    cursorChar: "|",

    // attribute to type (null == text)
    attr: null,

    // either html or text
    contentType: 'html'

  });



  // indicator bar 



});
