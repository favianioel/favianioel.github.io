$(document).ready(function() {
    $('#fullpage').fullpage();

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