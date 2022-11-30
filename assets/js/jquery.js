jQuery(document).ready(function($) {
    jQuery('.loop').owlCarousel({
      center: true,
      items: 2,
      loop: true,
      margin: 100,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
      }
    });
  });