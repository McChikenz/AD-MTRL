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