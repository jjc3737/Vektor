$( document ).ready(function() {
    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
	if(window.innerWidth <= 800 && window.innerHeight <= 600){
		$('#home').empty();
		$('#home').prepend('<img id="mobileLanding" src="getfree.jpeg" />')
		$('#home').prepend('<img id="mobileLanding" src="yerba.jpeg" />')
		$('#home').prepend('<img id="mobileLanding2" src="dolores.jpeg" />')
		
	}
	$('body').scrollspy({ target: '.right_header_position'})
	
	
});
