function smoothScroll(offsetVal = 0) {
  $('html, body').animate({
    scrollTop: offsetVal
  }, 800);
}

// if ($('#work').length && $('#contact').length) {
//   var offset_top_work = $('#work').offset().top;  
//   var offset_top_contact = $('#contact').offset().top;
//   // var offset_top_creative = $('#creative-section').offset().top;
// }



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
      console.log('insideheight'+ scroll +  position  );
      
      if ((scroll > position)) {
        console.log('insideposition'+ scroll +  position);
        
        // console.log('scrollDown');
        $(".main-navbar").addClass("hide-navbar");
      }
      else {
        console.log('insideelse');
        
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
    else{
      if($(".main-navbar").hasClass('hide-navbar')){
        $(".main-navbar").removeClass('hide-navbar')
      }
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
    }, 2000));

    // hide navbar time interval
    // function navTimeout() {
    //   setTimeout(function () {
    //     // if ( ($(window).scrollTop() > $('.nav-height').outerHeight(true)) ) {
    //       $(".main-navbar").addClass("hide-navbar");
    //     // }
    //   }, 2000);
    // }
  });

  // nav logo text hide $
  $(window).on("scroll", function () {
    var scrolltop = $(window).scrollTop();
    var hello_offset = $(".nav-height").height() + 400;
    if (scrolltop > hello_offset) {
      $('.nav-logo-text').css('display', 'none');
    }
    if (scrolltop < hello_offset) {
      $('.nav-logo-text').css('display', 'block');
    }
  });

  // parallel-x 
  $(window).on("scroll", function () {
    var scrollVal = $(window).scrollTop();
    var x = -(scrollVal - scrollVal / 2) + 'px';
    $('.banner-section').css({ 'background-position-y': 'calc(80px + ' + x + ')' });
  })

  // indicator offset
  if ($("#creative-heading").length) {
    indicatorOffset = $("#creative-heading").offset().top;
    $('.page-indicator').css({ "top": indicatorOffset + 'px', "display": "block" });

    $(window).resize(function () {
      //call to your function and check the window width
      indicatorOffset = $("#creative-heading").offset().top;
      $('.page-indicator').css({ "top": indicatorOffset + 'px', "display": "block" });
    });
  }

  // hello animation
  if (document.getElementById('hello-aniamte')) {
    var animated_string = ["Namaste", "Hello", "Holla", "Ni Hao", "Hallo"];
    var i = 0;
    var animateLength = animated_string.length;

    (function loop() {
      // x.innerHTML = s[i];
      document.getElementById('hello-aniamte').innerHTML = animated_string[i] + "!";
      if (i++ < animateLength) {
        setTimeout(loop, 1000);  // call myself in 3 seconds time if required

      }
      if (i == animateLength) {
        i = 0;
      }
    })();
  }


  // function animate(item,index){
  //   document.getElementsByClassName('text-hello').innerHTML = item;
  // }
  // indicator bar 

  // $('section').each(function (index) {
  //   $(this).attr('data-index', index);
  // });

  // $.fn.isInHalfViewport = function () {
  //   var elementTop = $(this).offset().top;
  //   var elementBottom = elementTop + $(this).outerHeight();

  //   var viewportTop = $(window).scrollTop();
  //   var viewportBottom = viewportTop + $(window).height() / 2;

  //   return elementBottom > viewportTop && elementTop < viewportBottom;
  // };

  // $(window).on('resize scroll load', function () {
  //   $('section').each(function () {
  //     if ($(this).isInHalfViewport()) {
  //       $('#indicate-next').attr('current-index', $(this).data('index'))
  //     }
  //   });
  // });


  //   $('#indicate-next').click(function () {
  //     $('.page-indicator').addClass('page-moving');
  //     var sectionIndex = $(this).attr('current-index');
  //     smoothScroll($('section[data-index="' + sectionIndex + '"]').next().offset().top);
  //     setTimeout(() => {
  //       $('.page-indicator').removeClass('page-moving');
  //     }, 800);
  //   });
  // });

  $(window).trigger('resize');

  // work animation

  $('.work-item__image').each(function (i) {
    $(this).addClass('work-imgae-' + i);
  });

  $(document).on('mouseenter', '.work-list li>a', function (e) {
    var myindex = $(this).parent().index();
    $('.work-imgae-' + myindex).addClass('is-active');
    $('.main-navbar').addClass(' hide-navbar');
  });

  $(document).on('mouseleave', '.work-list li>a', function (e) {
    var myindex = $(this).parent().index();
    $('.work-imgae-' + myindex).removeClass('is-active');
  });

  // footer animation
  $(window).on('resize scroll', function () {
    var footerHeight = $('.main-footer').height();
    $('.footer-height').css({ "height": footerHeight + 'px' });
  })

  // nav btn active class
  $(document).on('click', '.nav-link', function () {
    $('.nav-link').parent().removeClass('active');
    $(this).parent().addClass('active');
  })


  // on scroll
  if ($('#work').length && $('#contact').length) {
    $(window).on('resize scroll', function () {
      var w_scroll = $(window).scrollTop();
      var work_top = $('#work').offset().top;
      var work_height = $('#work').outerHeight();
      var work_top_height = work_top + work_height;
      // var y=$('#contact').offset().top;
      if (w_scroll >= work_top - (work_height / 3)) {
        $('a[data-name="WORK"]').parent().addClass('active');
        $('a[data-name="Home"]').parent().removeClass('active');

      }
      if (w_scroll < work_top - (work_height / 3) || w_scroll > work_top_height - (work_height / 3)) {
        $('a[data-name="WORK"]').parent().removeClass('active');
        $('a[data-name="Home"]').parent().addClass('active');
      }
    });

    $(window).on('resize scroll', function () {
      var w_scroll = $(window).scrollTop();
      var contact_top = $('#contact').offset().top;
      var contact_height = $('#contact').outerHeight();
      var contact_top_height = contact_top + contact_height;
      // var y=$('#contact').offset().top;
      if (w_scroll >= contact_top - (contact_height / 3)) {
        $('a[data-name="CONTACT"]').parent().addClass('active');
        $('a[data-name="Home"]').parent().removeClass('active');
      }
      if (w_scroll < contact_top - (contact_height / 3) || w_scroll > contact_top_height - (contact_height / 3)) {
        $('a[data-name="CONTACT"]').parent().removeClass('active');
        // $('a[data-name="Home"]').parent().addClass('active');
      }
    });
  }
  // cursor moving
  // if ($('.mouse-move').length) {
  //   $(window).mousemove(function (event) {
  //     var top = event.clientY;
  //     var left = event.clientX;

  //     // $('.mouse-move').css({ "transform": "translate3d("+top+","+left +",0px)" });
  //     $('.mouse-move').css({ "top": top + 'px', "left": left + 'px' });
  //     // var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  //     // var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  //   });

  // }




  // $('a[data-name="Home"]').click(function(){
  //     smoothScroll(0);
  // });


  // var templateParams = {
  //   name: 'James',
  //   notes: 'Check this out!'
  // };

  // emailjs.send('kishanpal', 'inkblockstudio', templateParams)
  //   .then(function(response) {
  //      console.log('SUCCESS!', response.status, response.text);
  //   }, function(error) {
  //      console.log('FAILED...', error);
  //   });


  var myform = $("form#contact-form");
  myform.submit(function (event) {
    event.preventDefault();

    var params = myform.serializeArray().reduce(function (obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

    // Change to your service ID, or keep using the default service
    var service_id = "smtp_server";

    var template_id = "template_xeru8fU8";
    myform.find("button").text("Sending...");
    emailjs.send(service_id, template_id, params)
      .then(function () {
        // alert("Sent!");
        bootoast.toast({
          message:'Form submit successfuly',
          type:'success',
          position:'right-top',
          // timeout: 2000,
          // timeoutProgress:false,
        });
        myform.find("button").text("Send");
      }, function (err) {
        // alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
        bootoast.toast({
          message:'Send email failed!',
          type:'danger',
          position:'right-top',
          // timeout: 2000,
          // timeoutProgress:false,
        });
        myform.find("button").text("Send");
      });

    return false;
  });
  
  // indicator slidebar
  if ($('#down-slider').length) {
    function getTrackLength() {
      var winheight = $(window).height()
      var docheight = $(document).height()
      return docheight - winheight;
    }

    var slidebar = $('#down-slider').XSlider({
      min: 0,
      max: getTrackLength(),
      value: $(window).scrollTop(),
      isVertical: true,
      tooltip: false,
      // direction: 'vertical',
      tooltipOffset: 3,
      tooltipDirection: '', //top bottom left right
      onChange: (val) => {
        $(window).scrollTop(val);
      }
    });

    $(window).on("scroll resize", function () {
      slidebar.setOptions({
        max: getTrackLength()
      });
    });

    $(window).on("scroll", function () {
      slidebar.setValue($(this).scrollTop());
      // $(".xslide-handle").addClass("hover");
    });
  }

  $(".xslide-handle").on("mousedown touchstart", function (e) {
    // $(this).addClass('grabbing')
    $(this).css({ "opacity": "1", "transform": "scale(1.3)" });
    // debugger
  })

  $("body").on("mouseup touchend", function (e) {
    // $(this).removeClass('grabbing')
    $(".xslide-handle").css({ "opacity": "0", "transform": "scale(0.5)" });
  })

// form validation
  // var myform = $("form#contact-form");
  // myform.submit(function(event){
  //   event.preventDefault();
  
  //   // Change to your service ID, or keep using the default service
  //   var service_id = "kishanpal";
  //   var template_id = "inkblockstudio";
  
  //   myform.find("button").text("Sending...");
  //   emailjs.sendForm(service_id,template_id,myform[0])
  //     .then(function(){ 
  //       // alert("Sent!");    
  //       bootoast.toast({
  //         message:'Form submit successfuly',
  //         type:'success',
  //         position:'right-top',
  //         // timeout: 2000,
  //         // timeoutProgress:false,
  //       });
  //        myform.find("button").text("Send");
  //     }, function(err) {
  //       //  alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));    
  //       bootoast.toast({
  //         message:'Send email failed!',
  //         type:'danger',
  //         position:'bottom-center',
  //         // timeout: 20000000,
  //         // timeoutProgress:false,
  //       });

  //        myform.find("button").text("Send");
  //     });
  //   return false;
  // });


  // form validation

  



  $("#form-btn").click(function() {
    var $email = $('form input[name="from_email'); //change form to id or containment selector
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if ($email.val() == '' || !re.test($email.val()))
    {
        // alert('Please enter a valid email address.');
                
        // bootoast.toast({
        //   message:'Please enter a valid email address.',
        //   type:'danger',
        //   position:'bottom-center',
        //   icon:'exclamation-sign',
        //   timeout: 2000,
        //   timeoutProgress:false,
        // });
        $(".email-input").addClass('is-invalid');
        return false;
    }
    
    $(".email-input").removeClass('is-invalid');

    if(phone_no.value.length!=10){
  
      // bootoast.toast({
      //   message:'Please enter a valid phone number!',
      //   type:'danger',
      //   position:'bottom-center',
      //   timeout: 2000,
      //   timeoutProgress:false,
      // });
      $(".phone-number").addClass('is-invalid');
        return false;
    }

    $(".phone-number").removeClass('is-invalid');

  });

//   $(window).scroll(function() {
//     clearTimeout($.data(this, 'scrollTimer'));
//     $.data(this, 'scrollTimer', setTimeout(function() {
//         // do something
//       $(".xslide-handle").removeClass("hover");
//     }, 250));
// });
//   window.onscroll = function(ev) {
//     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
//         // alert("you're at the bottom of the page");
//       $(".xslide-handle").removeClass("hover");
//     }
// };
//   $('.xslide-handle').bind('click mousedown', function(){
//     // Do something here
//     $("#down-slider").css
// });
 

// projects in one page
  var project_height = $('.section-wrap').height();
  $(".cover").css("height",project_height);
// $(window).on('resize', function(){
//   var project_height = $('.section-wrap').height();
//   $(".cover").css("height",project_height);
  
// });

$(".next").click(function(){
  var url = $(this).attr("href");
  var res = url.split("#");
  next_id = "#"+res[1];
  var project_height = $(next_id).height();
  $(".cover").css("height",project_height);
 smoothScroll();
})

$(".prev").click(function(){
  var url = $(this).attr("href");
  var res = url.split("#");
  next_id = "#"+res[1];
  var project_height = $(next_id).height();
  $(".cover").css("height",project_height);
  smoothScroll();
})

})


  // window.onload = function() {
  //   var url = window.location.href;
  //   var res = url.split("#");
  //   var next_id = "#"+res[1];
  //   var project_height = $(next_id).height();
  //   $(".cover").css("height",project_height);
  // }

  $(window).on('load resize', function () {
    var url = window.location.href;
    var res = url.split("#");
    var next_id = "#"+res[1];
    var project_height = $(next_id).height();
    $(".cover").css("height",project_height);
    if($('.cover').length){
      setTimeout(function(){ smoothScroll(); }, 1);
    }
});

// project list hover
$('.projects-link').hover(function(){
  $(this).parent().toggleClass('link-hover');
}); 


// ABOUT active class
if($('.about-info').length){
  $('.nav-link[data-name="ABOUT"]').parent().addClass('active');
}
// home active class
if($('.section-hello').length){
  $('.nav-link[data-name="Home"]').parent().addClass('active');
  // var x = $(window).scrollTop(0);
  // var x= $(document).offset({top:0});
  
  // $(".home-scroll").smoothScroll();
  // debugger
}

// projects active class

if($('#project_content').length){
  $('.nav-link[data-name="WORK"]').parent().addClass('active');
}


// projects page dynamic code
// project slider btn
$('#project_content').carousel({
  interval: false,
  pause: true
})
  // autoslide pause
$('.carousel-item').each(function (i) {
  $(this).attr('data-index', i);
});

$('.projects-link').click(function () {
  go($(this));
});
function go(ele) {
  var current_index = Number(ele.attr('data-index'));
  var project_name = $('.projects-link[data-index =' + current_index + ']').attr('data-name');
  var alise_name = $('.projects-link[data-index =' + current_index + ']').attr('alise');
  var next_index = current_index + 1;
  var prev_index = current_index - 1;
  if (current_index == 4) {
    next_index = 0
  }
  else if (current_index == 0) {
    prev_index = 4
  }
  var next_name = $('.projects-link[data-index =' + next_index + ']').attr('data-name');
  var next_alise_name = $('.projects-link[data-index =' + next_index + ']').attr('alise');
  var prev_name = $('.projects-link[data-index =' + prev_index + ']').attr('data-name');
  var prev_alise_name = $('.projects-link[data-index =' + prev_index + ']').attr('alise');
  localStorage.setItem("project_name", project_name);
  localStorage.setItem("alise_name", alise_name);
  localStorage.setItem("current_index", current_index);
  localStorage.setItem("next_index", next_index);
  localStorage.setItem("prev_index", prev_index);
  localStorage.setItem("next_name", next_name);
  localStorage.setItem("prev_name", prev_name);
  localStorage.setItem("next_alise_name", next_alise_name);
  localStorage.setItem("prev_alise_name", prev_alise_name);
}
if (localStorage.getItem("project_name") && localStorage.getItem("alise_name") && localStorage.getItem("next_name") && localStorage.getItem("prev_name") && localStorage.getItem("current_index") && localStorage.getItem("next_alise_name")
  && localStorage.getItem("prev_alise_name") && localStorage.getItem("next_index") && localStorage.getItem("prev_index")) {
  if ($('#project_name').length && $('#alise_name').length && $('#prev_project').length && $('#next_project').length && $('.carousel-item').length) {
    var project_name = localStorage.getItem("project_name");
    var alise_name = localStorage.getItem("alise_name");
    var next_name = localStorage.getItem("next_name");
    var prev_name = localStorage.getItem("prev_name");
    var next_alise_name = localStorage.getItem("next_alise_name");
    var prev_alise_name = localStorage.getItem("prev_alise_name");
    var next_index = localStorage.getItem("next_index");
    var prev_index = localStorage.getItem("prev_index");
    var current_index = localStorage.getItem("current_index");
    $('#project_name').prepend(project_name);
    $('#alise_name').prepend(alise_name);
    $('#prev_project').prepend(prev_name);
    $('#next_project').prepend(next_name);

    $('.next-link').attr('data-name', next_name);
    $('.next-link').attr('alise', next_alise_name);
    $('.next-link').attr('data-index', next_index);

    $('.prev-link').attr('data-name', prev_name);
    $('.prev-link').attr('alise', prev_alise_name);
    $('.prev-link').attr('data-index', prev_index);

    $('.my-slide[data-index=' + current_index + ']').addClass('active');
        // next btn code project page
    if ($('.next-link').length) {
      $('.next-link').click(function () {
        debugger
        var current_index = Number($(this).attr('data-index'));
        if (current_index > 4 ) {
          current_index = 0;
        }      
        var project_name = $('.carousel-item[data-index =' + current_index + ']').attr('data-name');
        var alise_name = $('.carousel-item[data-index =' + current_index + ']').attr('alise');
        var next_index = current_index + 1;
        var prev_index = current_index - 1;
        if(current_index == 4){
          next_index = 0;
        }
        else if (current_index == 0) {
          prev_index = 4
        }
        var project_next = $('.carousel-item[data-index =' + next_index + ']').attr('data-name');
        var project_prev = $('.carousel-item[data-index =' + prev_index + ']').attr('data-name');
        $('.prev-link').attr('data-index',prev_index);
        $('.next-link').attr('data-index',next_index);
        document.getElementById('alise_name').innerText=alise_name;
        document.getElementById('project_name').innerText=project_name;
        document.getElementById('next_project').innerText=project_next;
        document.getElementById('prev_project').innerText=project_prev;
        current_index = current_index + 1;
        $(this).attr('data-index', current_index);
        // current_index = next_index;
        debugger
      });
    }
        // prev btn code project page
    if ($('.prev-link').length) {
      $('.prev-link').click(function () {
        debugger
        var current_index = Number($(this).attr('data-index'));
        if(current_index < 0){
          current_index = 4;
        }
        var project_name = $('.carousel-item[data-index =' + current_index + ']').attr('data-name');
        var alise_name = $('.carousel-item[data-index =' + current_index + ']').attr('alise');
        var next_index = current_index + 1;
        var prev_index = current_index - 1;
        if(current_index == 0){
          prev_index = 4;
        }
        if(current_index == 4){
          next_index = 0;
        }
        var project_next = $('.carousel-item[data-index =' + next_index + ']').attr('data-name');
        var project_prev = $('.carousel-item[data-index =' + prev_index + ']').attr('data-name');
        $('.next-link').attr('data-index',next_index);
        $('.prev-link').attr('data-index',prev_index);
        document.getElementById('alise_name').innerText=alise_name;
        document.getElementById('project_name').innerText=project_name;
        document.getElementById('next_project').innerText=project_next;
        document.getElementById('prev_project').innerText=project_prev;
        current_index = current_index - 1 ;
        $(this).attr('data-index', current_index);
        debugger
      });
    }    
  }
}