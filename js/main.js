$( document ).ready(function() {
    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
	if(window.innerWidth <= 800 && window.innerHeight <= 600){
		$('#home').empty();
		$('#home').css({'background-color': 'black'});
		
	}
	$('body').scrollspy({ target: '.right_header_position'});
	
	
});
