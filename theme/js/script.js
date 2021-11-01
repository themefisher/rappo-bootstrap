/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  'use strict';

  // PRELOADER
  $(window).on('load', function () {
    $('#page-loader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

	// navbarDropdown
	if ($(window).width() < 992) {
		$('.has-dropdown .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}


  // SCROLL TO TOP
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      $('.scroll-to-top').addClass('reveal');
    } else {
      $('.scroll-to-top').removeClass('reveal');
    }
  });


  // Fixed header
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      $('.site-navigation,.trans-navigation').addClass('header-white');
    } else {
      $('.site-navigation,.trans-navigation').removeClass('header-white');
    }
  });
  

	// scroll-to-top
	if ($('#scroll-to-top').length) {
		$('#scroll-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	}


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click', function (event) {
    $('.navbar-collapse').collapse('hide');
  });

})(jQuery);
