$(document).ready(function(){
  	$('.homepage').slick({
    	dots: false,
    	infinite: true,
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	autoplay: true,
    	autoplaySpeed: 3000,
	  	responsive: [
	  		{
	      		breakpoint: 768,
	      		settings: {
			    	autoplaySpeed: 2500,
		      	}
		    },
		    {
		      	breakpoint: 640,
	      		settings: {
			    	dots: false,
	      			slidesToShow: 4,
			    	autoplaySpeed: 2500,
	      		}
	      	},
	      	{
		      	breakpoint: 320,
	      		settings: {
			    	dots: false,
	      			slidesToShow: 3,
			    	autoplaySpeed: 2500,
	      		}
	      	}
	    ]

  	});
});
