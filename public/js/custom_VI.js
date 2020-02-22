(function($){
  "use strict";
	
	 // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });
	
	// on ready function
	jQuery(document).ready(function($) {
	var $this = $(window);




			
				
			
		

$('#cssmenu li.active').addClass('open').children('ul').show();
	$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});
		
		
		 //------------ counter-js------------// 
		 
		 
		  $(document).ready(function() {
              $('.ck_blog_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
				autoplay:true,
                responsiveClass: true,
				smartSpeed: 1200,
				navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: true
                  },
                  1000: {
                    items: 2,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })
		 
		 $(document).ready(function() {
              $('.ck_team_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
				autoplay:false,
                responsiveClass: true,
				smartSpeed: 1200,
				mouseDrag: false,
				navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  800: {
                    items: 2,
                    nav: true,
					margin: 15
                  },
                  1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })
			
			
			$(document).ready(function() {
              $('.ck_testi_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
				autoplay:false,
                responsiveClass: true,
				smartSpeed: 1200,
				animateOut: 'fadeInUp',
				animateIn: 'fadeInUp',
				mouseDrag: false,
				navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: true
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              })
            })
			
			
			$(document).ready(function() {
            $('.lr_prt_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                responsive: {
                    0: {
                        items: 2,
                        nav: true
                    },
					500: {
                        items: 4,
                        nav: true
                    },
                    700: {
                        items: 4,
                        nav: true
                    },
                    1000: {
                        items: 6,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })


		
		//-------------------------------------------------------
    // counter-section
    //-------------------------------------------------------
    $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });
	
		
	
	});
})(); 