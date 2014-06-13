$( document ).ready(function() {
    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
	if(iOS){
		$("#landingVideo").attr( "controls", true );
	}
	$('body').scrollspy({ target: '.right_header_position'})
});
