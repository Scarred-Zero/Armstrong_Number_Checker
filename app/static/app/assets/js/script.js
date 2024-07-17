"use strict";

(function ($) {
  "use strict";

  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.scroll-to-top').addClass('reveal');
    } else {
      $('.scroll-to-top').removeClass('reveal');
    }
  });

  /* ---------------------------------------------
         Clear input
  --------------------------------------------- */

  document.getElementById('reset_min_num').onclick= function() {
    var field = document.getElementById('min_num');
    field.value = field.defaultValue;
  };

  document.getElementById('reset_max_num').onclick= function() {
    var field = document.getElementById('max_num');
    field.value = field.defaultValue;
  };

  document.getElementById('reset_particular_num').onclick= function() {
    var field = document.getElementById('check_particular_num');
    field.value = field.defaultValue;
  };

  /* ---------------------------------------------
         course filtering
    --------------------------------------------- */

  var $course = $('.course-gallery');

  if ($.fn.imagesLoaded && $course.length > 0) {
    imagesLoaded($course, function () {
      $course.isotope({
        itemSelector: '.course-item',
        filter: '*'
      });
      $(window).trigger("resize");
    });
  }

  $('.course-filter').on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $course.isotope({
      filter: filterValue
    });
  });

  /* ---------------------------------------------
         Contact Form
  --------------------------------------------- */

  var form = $('.contact__form'),
      message = $('.contact__msg'),
      form_data;

  // Success function
  function done_func(response) {
    message.fadeIn().removeClass('alert-danger').addClass('alert-success');
    message.text(response);
    setTimeout(function () {
      message.fadeOut();
    }, 4000);
    form.find('input:not([type="submit"]), textarea').val('');
  } 
  
  // fail function
  function fail_func(data) {
    message.fadeIn().removeClass('alert-success').addClass('alert-danger');
    message.text(data.responseText);
    setTimeout(function () {
      message.fadeOut();
    }, 4000);
  }

  var a = document.getElementById("liveAlertPlaceholder"),
  t = document.getElementById("liveAlertBtn");
  t && t.addEventListener("click", function () {
    var e, t, n;
    (e = "Nice, you triggered this alert message!"),
      (t = "success"),
      ((n = document.createElement("div")).innerHTML = [
        '<div class="alert alert-'.concat(t, ' alert-dismissible" role="alert">'),
        "   <div>".concat(e, "</div>"),
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("")),
      a.append(n);
  }),

  // onclick function to close alert dialog
  a.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-close")) {
      e.target.parentElement.remove();
    }
  });

  // onclick function to close alert dialog on clicking outside
  a.addEventListener("click", function (e) {
    if (e.target === a) {
      a.remove();
    }
  });

  // onclick function to close alert dialog on clicking close button
  a.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-close")) {
      a.remove();
    }
  });

  form.submit(function (e) {
    e.preventDefault();
    form_data = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: form_data
    }).done(done_func).fail(fail_func);
  });
  
   /*
    * ----------------------------------------------------------------------------------------
    *  SMOTH SCROOL JS
    * ----------------------------------------------------------------------------------------
    */

   $('a.js-scroll-trigger').on('click', function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 100
      }, 1000);
      e.preventDefault();
  });

    /* ---------------------------------------------------------- */
      /*  Fixed header
      /* ----------------------------------------------------------- */
  
      $(window).scroll(function () {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 50) {
          $('.site-navigation').addClass('menu_fixed animated fadeInDown');
        } else {
          $('.site-navigation').removeClass('menu_fixed animated fadeInDown');
        }
      });
})(jQuery);