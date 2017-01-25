(function($, window){

	var parseUrl = function(url) {
		var parser = document.createElement('a');
		parser.href = url;
		return parser.protocol + "//" + parser.host + parser.pathname;
	};

	var updateVideo = function($video) {
		var baseUrl = parseUrl($video.attr("src")),
			uniqueId = Math.random(),
			url = baseUrl + "?uniq=" + uniqueId;

		$video.attr("src", url);
	};

	$(function() {
		var $videos = $(".webcam_in_frame");

		//
		// Every time the image loads, force a re-load
		//
		$videos.bind("load", function(){
			updateVideo($(this));
		});

		//
		// Initialize re-load of all videos
		//
		$videos.each(function(){
			updateVideo($(this));
		});
	});


})(jQuery, window);