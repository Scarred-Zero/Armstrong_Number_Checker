"use strict";

(function ($) {
  "use strict";

  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $(".scroll-to-top").addClass("reveal");
    } else {
      $(".scroll-to-top").removeClass("reveal");
    }
  });

  /* ---------------------------------------------
          Contact Form
  --------------------------------------------- */

  var form = $(".contact__form"),
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

/* ---------------------------------------------
        Alerts --------------------------------
--------------------------------------------- */
const alertBtns = document.querySelectorAll('.closeAlertButton')
console.log("ALERT BTNS:", alertBtns)

alertBtns.forEach(alertBtn => {
  if (!alertBtn) {
    document.querySelectorAll('.alert').map(alert => alert.classList.add('d-none'))
  }
  alertBtn.onclick = () => {
    alertBtn.parentElement.classList.add("d-none");
  }
})

/* ---------------------------------------------
        Password Show / Hide
--------------------------------------------- */

var style = document.createElement('style');
style.innerHTML = `
.fa-eye:hover {
  cursor: pointer;
}

.fa-eye-slash:hover {
  cursor: pointer;
}
`;
document.head.appendChild(style);
const passwordEI = document.querySelector('#password');
const eyeButton = document.querySelector(".fa");
let isPass = true;
function togglePass() {
  if (isPass) {
      passwordEI.type = "text";
      eyeButton.classList.remove("fa-eye");
      eyeButton.classList.add("fa-eye-slash");
      isPass = false;
      eyeButton.title = "Hide password";
  } else {
      passwordEI.type = "password";
      eyeButton.classList.remove("fa-eye-slash");
      eyeButton.classList.add("fa-eye");
      isPass = true;
      eyeButton.title = "Show password"
  }
}

/* ---------------------------------------------
        Clear input
--------------------------------------------- */

if (document.getElementById('reset_min_num')) {
  document.getElementById('reset_min_num').onclick = function () {
    var field = document.getElementById('min_num');
    field.value = field.defaultValue;
  };
}

if (document.getElementById('reset_max_num')) {
  document.getElementById('reset_max_num').onclick = function () {
    var field = document.getElementById('max_num');
    field.value = field.defaultValue;
  };
}

if (document.getElementById('reset_check_particular_num')) {
  document.getElementById('reset_check_particular_num').onclick = function () {
    var field = document.getElementById('check_particular_num');
    field.value = field.defaultValue;
  };
}