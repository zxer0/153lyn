// load everything in the DOM before executing the JS
$(document).ready(function() {
	var feed = new Instafeed({
        get: 'tagged',
        tagName: 'rheabeary',
        limit: '1',
        resolution: 'low_resolution',
        accessToken: '264011630.bb7baeb.d344f672a17c4ba1a47a75beeaeb8731'
    });
    feed.run();

    $(".weather").weatherFeed({relativeTimeZone:true});



});