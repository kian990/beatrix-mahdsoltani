$(document).ready(function() {
	
	// Position The Footer to Anchor Bottom
	
	if ($('#footer').length) { // Footer Exists
    
    	var footer = $('#footer');
    	
		var originalPosition = footer.offset().top; // Distance to foot
		positionFoot(footer);
	  
		$(window).bind("resize", function(){ // Trigger Position on Resize
			positionFoot(footer);  
		});
  	
	}
	
	// Position Foot Function
	
	function positionFoot(elem){ 
	
		// get foot and window info
		var footPosition = elem.offset().top;
		var footHeight = elem.height();
		var windowHeight = $(window).height();
		
		// Determine New and Current Position
		var newPosition = (parseInt(windowHeight)) - (parseInt(footHeight));
		
		// Fix Footer to Bottom
		if(originalPosition < windowHeight) {
			elem.addClass('fixed'); // Add Fixed Class
		 }
	
		// Do Not Fix Footer to Bottom
		if(newPosition <= originalPosition){
			elem.removeClass('fixed'); // Removed Fixed Class
		}
	}
	
});