(function ($, Drupal) {
  Drupal.behaviors.gamesOwl = {
    attach: function (context, settings) {
      $(document).ready(function(){

        $('.owl-carousel').owlCarousel({
          loop: false,
          nav: true,
          rewind: true,
          responsive:{
            0:{
              items:1
            },
            768:{
              items:2
            },
                1024:{
                    items:3
                },
                1296:{
                    items:4
                },
                1600:{
                    items:5
                }
            }
        })
      });
    }
  };
})(jQuery, Drupal);
