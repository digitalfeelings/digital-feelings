$(document).ready(function () {		
	$.jribbble.getShotsByPlayerId('ignaciovaldesreyes', function (playerShots) {
	    var html = [];
	
	    $.each(playerShots.shots, function (i, shot) {
	    	//html.push('<li><h3>' + shot.title + '</h3>');
	    	//html.push('<li><b>Likes:</b> ' + shot.likes_count + '</li>');
	        html.push('<li><a href="' + shot.url + '">');
	        html.push('<img src="' + shot.image_teaser_url + '" ');
	        html.push('alt="' + shot.title + '"></a></li>');
	    });
	
	    $('#portfolio').html(html.join(''));
	}, {page: 1, per_page: 24});
});