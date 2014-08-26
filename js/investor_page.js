$( document ).ready(function() {
    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
	if(iOS){
		$("#landingVideo").attr( "controls", true );
	}
	$('body').scrollspy({ target: '.right_header_position'})
	var myVideo = _V_("landingVideo");
	function onComplete() { 
		var landingVideo = document.getElementsByTagName('video')[0];
		var videoPlaying = landingVideo.currentSRC; 
		var ext = videoPlaying.substr(videoPlaying.lastIndexof(".")); 
		landingVideo.src = 'main-v3-r.'+ ext;
		landingVideo.load();
		landingVideo.play();
		landingVideo.removeEvent("ended", onComplete);
	
};
	myVideo.addEvent("ended", onComplete);
	
	/* var videoSource = new Array(); 
	videoSource[0] = document.getElementsById("landingVideo").currentSRC;
	videoSource[1] = document.getElemtnsById("landingVideo2").currentSRC; 
	videoSource[2] = document.getElemtnsById("landingVideo3").currentSRC;
	var videoCount = videoSource.length; 
	
	function videoPlay(videoNum) { 
		document.getElementById("landingVideo").setAttribute("src", videoSource[videoNum]);
		document.getElementById("landingVdieo").load(); 
		document.getElementById("landingVideo").play();
	}
	document.getElementById('landingVideo').addEventListener('ended',myHandler,false);
	function myHandler() {
	i++;
	if(i == (videoCount-1)){
	i = 0;
	videoPlay(i);
	}
	else{
	videoPlay(i);
	}
        
	       }
	
	
});*/

