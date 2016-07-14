// load everything in the DOM before executing the JS
$(document).ready(function() {
	var feed = new Instafeed({
        get: 'tagged',
        tagName: 'rheabeary',
        accessToken: '264011630.bb7baeb.d344f672a17c4ba1a47a75beeaeb8731'
    });
    feed.run();



});


/* 
* https://www.instagram.com/oauth/authorize/?client_id=bb7baebb28fa40d8b21fa32f095f9e5a&redirect_uri=http://www.matthewself.com&response_type=token&scope=public_content
*/