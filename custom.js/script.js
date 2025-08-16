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
