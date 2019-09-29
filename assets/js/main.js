function smoothScroll(offsetVal = 0) {
  $('html, body').animate({
    scrollTop: offsetVal
  }, 800);
}

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

  // parallel-x 
  $(window).on("scroll", function () {
    var scrollVal = $(window).scrollTop();
    var x = -(scrollVal - scrollVal / 2) + 'px';
    $('.banner-section').css({ 'background-position-y': 'calc(80px + ' + x + ')' });
  })

  // indicator offset
  if($('#creative-heading').length){
    indicatorOffset = $("#creative-heading").offset().top;
    $('.page-indicator').css({ "top": indicatorOffset + 'px', "display": "block" });
  
    $(window).resize(function () {
      //call to your function and check the window width
      indicatorOffset = $("#creative-heading").offset().top;
      $('.page-indicator').css({ "top": indicatorOffset + 'px', "display": "block" });
    });
  }
  


  // hello animation
  if($('#hello-aniamte').length){
    var animated_string = ["Namaste", "Hello", "Holla", "Ni Hao", "Hallo"];
    var i = 0;
    var animateLength = animated_string.length;

  (function loop() {
    // x.innerHTML = s[i];
    document.getElementById('hello-aniamte').innerHTML =animated_string[i];
    if (++i < animateLength) {
      setTimeout(loop, 1000);  // call myself in 3 seconds time if required
      
    }
    if(i==animateLength-1){
      i=0;
    }
  })(); 
  }
     

  // function animate(item,index){
  //   document.getElementsByClassName('text-hello').innerHTML = item;
  // }
  // indicator bar 

  $('section').each(function (index) {
    $(this).attr('data-index', index);
  });

  $.fn.isInHalfViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height()/2;

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function () {
    $('section').each(function () {
      if ($(this).isInHalfViewport()) {
        $('#indicate-next').attr('current-index', $(this).data('index'))
      }
    });
  });

  
  $('#indicate-next').click(function () {
    $('.page-indicator').addClass('page-moving');
    var sectionIndex = $(this).attr('current-index');
    smoothScroll($('section[data-index="' + sectionIndex + '"]').next().offset().top);
    setTimeout(() => {
      $('.page-indicator').removeClass('page-moving');
    }, 800);
  });
});

// work animation

$('.work-item__image').each(function(i){
  $(this).addClass('work-imgae-'+i);
});

$(document).on('mouseenter', '.work-list li', function(e){
  var myindex =  $(this).index();
  $('.work-imgae-'+myindex).addClass('is-active');
  $('.main-navbar').addClass(' hide-navbar');
});

$(document).on('mouseleave', '.work-list li', function(e){
  var myindex =  $(this).index();
  $('.work-imgae-'+myindex).removeClass('is-active');
});

// footer animation
$(window).on('resize scroll', function () {
var footerHeight = $('.main-footer').height();
$('.body-wrapper').css({ "margin-bottom": footerHeight + 'px'});
})


$(window).mousemove(function( event ) {
  var top = event.clientY ;
  var left = event.clientX;
  
  // $('.mouse-move').css({ "transform": "translate3d("+top+","+left +",0px)" });
  $('.mouse-move').css({ "top": top+ 'px' , "left": left+ 'px'});
  // var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  // var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
});



// nevbar add active class
// onclick
$(document).on('click','.nav-link[data-name="WORK"]', function(){
  $('.nav-link[data-name="WORK"]').parent().addClass('active');
  $('[data-name="CONTACT"]').parent().removeClass('active');
  $('[data-name="Home"]').parent().removeClass('active');
})

$(document).on('click','.nav-link[data-name="CONTACT"]', function(){
  $('.nav-link[data-name="CONTACT"]').parent().addClass('active');
  $('[data-name="WORK"]').parent().removeClass('active');
  $('[data-name="Home"]').parent().removeClass('active');
})

// on scroll
if($('#work').length && $('#contact').length){
  $(window).on('resize scroll', function () {
    var w_scroll=$(window).scrollTop();
    var work_top=$('#work').offset().top;
    var work_height=$('#work').outerHeight();
    var work_top_height=work_top+work_height;
    var y=$('#contact').offset().top;
    if(w_scroll>=work_top-(work_height/3)){
      $('a[data-name="WORK"]').parent().addClass('active');
      $('a[data-name="Home"]').parent().removeClass('active');

    }
    if(w_scroll<work_top-(work_height/3) || w_scroll>work_top_height-(work_height/3) ){
      $('a[data-name="WORK"]').parent().removeClass('active');
      $('a[data-name="Home"]').parent().addClass('active');
    }
  });
  
  $(window).on('resize scroll', function () {
    var w_scroll=$(window).scrollTop();
    var contact_top=$('#contact').offset().top;
    var contact_height=$('#contact').outerHeight();
    var contact_top_height=contact_top+contact_height;
    var y=$('#contact').offset().top;
    if(w_scroll>=contact_top-(contact_height/3)){
      $('a[data-name="CONTACT"]').parent().addClass('active');
      $('a[data-name="Home"]').parent().removeClass('active');
    }
    if(w_scroll<contact_top-(contact_height/3)||w_scroll>contact_top_height-(contact_height/3) ){
      $('a[data-name="CONTACT"]').parent().removeClass('active');
      // $('a[data-name="Home"]').parent().addClass('active');
    }
  });
}
