$(document).ready(function() {
    $('#fullpage').fullpage({
    	anchors: ['about-info', 'skills-info', 'portofolio-info', 'contact-info'],
		scrollingSpeed: 1000
    });

// scroll page svg show on mousemove
    var i = null;
	$("html").mousemove(function() {
    	clearTimeout(i);
    	$(".scroll-down").show();
    	i = setTimeout(function () {
        	$(".scroll-down").fadeOut();
    	}, 1000);
	}).mouseleave(function() {
    	clearTimeout(i);
    	$(".scroll-down").fadeOut();  
	});
});