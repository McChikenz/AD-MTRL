//Navbar section

// The nav menu will close when clicked outside
jQuery(document).ready(function( $ ) {

$(function() {
    $('.js-scroll-trigger').click(function (event) {
      $('.navbar-collapse').collapse('hide');
    });
  });

// back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('default');
    } else {
        $('.back-to-top').fadeOut('default');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0},0, 'easeInOutExpo');
    return false;

});

$("#header").sticky({topSpacing:0, zIndex: '50'});


function isElementInViewport (el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
  }
  var position = el.getBoundingClientRect();
  if(position.top >= 0 && position.bottom <= window.innerHeight) {
    return true;
  }
  if(position.top < window.innerHeight && position.bottom >= 0) {
    return true;
  }
  return false;
}
$("[data-aos]").each(function() {
  if (isElementInViewport($(this))) {
    $(this).removeAttr("data-aos");
  }
});
});

// Owl carousel Section 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       loop:true,
       margin:10,
       dots:false,
  
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });

//Team card Isotope section
var $grid = $('#team-area');
// Wait for images to load before initializing Isotope
  $grid.imagesLoaded(function () {
    $grid.isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows',
      transitionDuration: '0.4s'
    });
  });

  // Filter buttons
  $('.filter-button-group').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });

    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
  });


//Avoid Team Card Collision
(function ($) {
  'use strict';

  // Initialize Isotope on the team container
  var $team = $('.team');

  $team.isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

  // Filter buttons
  $('ul.filters > li').on('click', function (e) {
    e.preventDefault();

    var filter = $(this).attr('data-filter');

    $('ul.filters > li').removeClass('active');
    $(this).addClass('active');

    $team.isotope({ filter: filter });
  });

  // Move modals to body to avoid layout conflicts
  if ($('.modal').length > 0) {
    $('.modal').each(function () {
      $(this).appendTo('body');
    });
  }

})(jQuery);

//Read more buttons
  function toggleReadMore(button) {
    const moreText = button.previousElementSibling.querySelector('.more-text');
    if (moreText.classList.contains('d-none')) {
      moreText.classList.remove('d-none');
      button.textContent = 'Read less';
    } else {
      moreText.classList.add('d-none');
      button.textContent = 'Read more';
    }
  }


