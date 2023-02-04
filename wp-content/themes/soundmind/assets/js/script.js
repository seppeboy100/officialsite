AOS.init();
AOS.init({disable: 'mobile'});

// SCROLL HEADER FIXED
// get header height (without border)
// jQuery(window).scroll(function () {
//   var sticky = jQuery("#myHeader"),
//     scroll = jQuery(window).scrollTop();
//   if (scroll >= 10) {
//     sticky.addClass("sticky");
//   } else {
//     sticky.removeClass("sticky");
//   }
// });

// MOBILE MENU
$(document).ready(function() {
    $('.menu-bar').on('click', function() {
        $(this).toggleClass('in').parents('body').toggleClass('mobile-menu');
        $(this).next().toggleClass('in');
    });
    $('.mobile-scroll li.menu-item-has-children').on('click', function() {
        var aftercl = psuedoClick(this);
        var clickafter = psuedoClick(this).after;
        if (clickafter == true) {
            console.log($(aftercl));
            if (!$(this).hasClass('open')) {
                $(this).addClass('open');
                $(this).children('ul').addClass('in');
            } else {
                $(this).find('.sub-menu').removeClass('in');
                $(this).removeClass('open');
                $(this).find('li.open').removeClass('open');
            }
        }
        $('.sub-menu .sub-menu.in li.open').click(function() {
            $(this).removeClass('open');
            $(this).children('.sub-menu.in').removeClass('in');
        })
        console.log($(this).children('.sub-menu'));
    });

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        console.log($clicked);
        if (!$clicked.parents().hasClass('main-nav')) {
            $('.main-nav').find('.in').removeClass('in');
            $('body').removeClass('mobile-menu');
        }
    });
    $(document).on('click', '.click-music-open', function() {
        console.log($(this).parent().find('.hideaudio').length>0);
        if($(this).parent().find('.hideaudio').length>0) {
            $(this).parent().find('.hideaudio').addClass('audiopopupshow');
            $(this).parent().find('.audiopopupshow').removeClass('hideaudio');
        } else {
            $(this).parent().find('.audiopopupshow').addClass('hideaudio');
            $(this).parent().find('.hideaudio').removeClass('audiopopupshow');
            $('.mejs__container button').click();
        }

    })
});
function psuedoClick(parentElem) {

    var beforeClicked,
      afterClicked;

  var parentLeft = parseInt(parentElem.getBoundingClientRect().left, 10),
      parentTop = parseInt(parentElem.getBoundingClientRect().top, 10);

  var parentWidth = parseInt(window.getComputedStyle(parentElem).width, 10),
      parentHeight = parseInt(window.getComputedStyle(parentElem).height, 10);

  var before = window.getComputedStyle(parentElem, ':before');

  var beforeStart = parentLeft + (parseInt(before.getPropertyValue("left"), 10)),
      beforeEnd = beforeStart + parseInt(before.width, 10);

  var beforeYStart = parentTop + (parseInt(before.getPropertyValue("top"), 10)),
      beforeYEnd = beforeYStart + parseInt(before.height, 10);

  var after = window.getComputedStyle(parentElem, ':after');

  var afterStart = parentLeft + (parseInt(after.getPropertyValue("left"), 10)),
      afterEnd = afterStart + parseInt(after.width, 10);

  var afterYStart = parentTop + (parseInt(after.getPropertyValue("top"), 10)),
      afterYEnd = afterYStart + parseInt(after.height, 10);

  var mouseX = event.clientX,
      mouseY = event.clientY;

  beforeClicked = (mouseX >= beforeStart && mouseX <= beforeEnd && mouseY >= beforeYStart && mouseY <= beforeYEnd ? true : false);

  afterClicked = (mouseX >= afterStart && mouseX <= afterEnd && mouseY >= afterYStart && mouseY <= afterYEnd ? true : false);

  return {
    "before" : beforeClicked,
    "after"  : afterClicked

  };

}
if ($('.plant-goal-slide').length) {
    $('.plant-goal-slide').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        arrows:false,
        dots:false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000,
    });
}
// if ($('.grow-slider-row').length) {
//     $('.grow-slider-row').slick({
//         slidesToShow:4,
//         slidesToScroll: 1,
//         arrows:false,
//         dots:false,
//         autoplay: true,
//         speed: 1000,
//     });
//     }
if ($('.img-pc-side').length) {
    $('.img-pc-side').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        arrows:false,
        dots:false,
        autoplay: true,
        speed: 1000,
        fade: true,
    });
    }

    // if ($('.team-slider').length) {
    //     $('.team-slider').slick({
    //         dots: false,
    //         arrows: true,
    //         infinite: true,
    //         slidesToShow: 5,
    //         slidesToScroll: 1,
    //         autoplay:true,
    //         speed: 1000,
    //     });
    // }

    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay:true,
            speed: 1000,
            responsive: [
               {
                 breakpoint: 1023,
                 settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1
                 }
             },
               {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
             ]
        });
    }

    if ($('.research-team-slider').length) {
      $('.research-team-slider').slick({
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay:true,
          speed: 1000,
          responsive: [
             {
               breakpoint: 1023,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
                 arrows: true
               }
           },
             {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                }
              },
           ]
      });
  }

  if($(window).width() <= 575) {
    if ($('.key-benefits-wrap').length) {
      $('.key-benefits-wrap').slick({
          dots: false,
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          speed: 1500,
      });
  }
}

    //Mouse HOVER add and remove class
    // HOVER
    $('.click-href-poup').click(function () {
        $('.binauralbeats-absolute').toggleClass('popup-open');
    });

    // HOVER
    $(".click-href-poup").hover(
      function () {
        $('.binauralbeats-absolute').addClass("popup-open");
      },
      function () {
        $('.binauralbeats-absolute').removeClass("popup-open");
      }
    );


    // $("#audio-popup-1").on('show.bs.modal', function (e) {
    //     $("#audio-popup-2").modal("hide");
    //     $("#audio-popup-3").modal("hide");
    //     $("#audio-popup-4").modal("hide");
    //     $("#audio-popup-5").modal("hide");
    // });
    // $("#audio-popup-2").on('show.bs.modal', function (e) {
    //     $("#audio-popup-1").modal("hide");
    //     $("#audio-popup-3").modal("hide");
    //     $("#audio-popup-4").modal("hide");
    //     $("#audio-popup-5").modal("hide");
    // });
    // $("#audio-popup-3").on('show.bs.modal', function (e) {
    //     $("#audio-popup-1").modal("hide");
    //     $("#audio-popup-2").modal("hide");
    //     $("#audio-popup-4").modal("hide");
    //     $("#audio-popup-5").modal("hide");
    // });
    // $("#audio-popup-4").on('show.bs.modal', function (e) {
    //     $("#audio-popup-1").modal("hide");
    //     $("#audio-popup-2").modal("hide");
    //     $("#audio-popup-3").modal("hide");
    //     $("#audio-popup-5").modal("hide");
    // });
    // $("#audio-popup-5").on('show.bs.modal', function (e) {
    //     $("#audio-popup-1").modal("hide");
    //     $("#audio-popup-2").modal("hide");
    //     $("#audio-popup-3").modal("hide");
    //     $("#audio-popup-4").modal("hide");
    // });



// function scrollMobile(divSc) {
//     var pos = div.scrollTop();
//     if ((div.scrollTop() + div.innerHeight()) >= div[0].scrollHeight) {
//         clearInterval(autoscroller);
//         $('.autoscroller').addClass('stop-scroll');
//     }
//     div.scrollTop(pos + 3);
// }




$('#alert-and-calm').on('shown.bs.modal', function () {
    $('#video1')[0].play();
})
$('#alert-and-calm').on('hidden.bs.modal', function () {
    $('#video1')[0].pause();
})

$('#balance').on('shown.bs.modal', function () {
    $('#video2')[0].play();
})
$('#balance').on('hidden.bs.modal', function () {
    $('#video2')[0].pause();
})

$('#brain-power').on('shown.bs.modal', function () {
    $('#video3')[0].play();
})
$('#brain-power').on('hidden.bs.modal', function () {
    $('#video3')[0].pause();
})

$('#deep-sleep').on('shown.bs.modal', function () {
    $('#video4')[0].play();
})
$('#deep-sleep').on('hidden.bs.modal', function () {
    $('#video4')[0].pause();
})



// VIDEO CLICK PLAY JABASCRIPT
$(document).on('click', '#workvideo, .playicon', function (e) {
    var videoID = $(this).attr('data-video');
    var video = $('#'+videoID).get(0);
    console.log(video.paused);
    if (video.paused === false) {
        video.pause();
        if(video.paused === true) {
            $(this).parent().css('opacity', '1');
        } else {
            $(this).parent().css('opacity', '0');
        }

    } else {
        $( "video" ).each(function() {
            var videoPause = $(this).get(0);
            videoPause.pause();
            $(this).parent().find('.playicon').css('opacity', '1');
        });
        video.play();
        $(this).parent().css('opacity', '0');
    }

    return false;
});



$(function () {
        $("#switch-id, #switch-id2, #switch-id3, #switch-id4, #switch-id5").change(function () {
            if ($(this).is(":checked")) {
                $(".switch").removeClass('switch-open');
                $(".fitvideoA").css('display', 'flex');
                $(".fitvideoB").hide();
            } else {
                $(".switch").addClass('switch-open');
                $(".fitvideoA").hide();
                $(".fitvideoB").css('display', 'flex');
            }
        });
    });

// MOBILE TABING ON BOX STYLES
$('.tabs-dropdown').each(function(i, elm) {
  $(elm).text($(elm).next('ul').find('li a.active').text());
});
$('.tabs-dropdown').on('click', function(e) {
  e.preventDefault();
  $(e.target).toggleClass('open').next('ul').slideToggle();
});
$('.mobile-tabs a[data-toggle="tab"]').on('click', function(e) {
  e.preventDefault();
  $('.mobile-tabs li').removeClass('active-li');
  $(this).parent().addClass('active-li');
  $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());
});

// counter JS
$('.counter').countUp();
