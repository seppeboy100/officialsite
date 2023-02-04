$.fn.equalHeights = function(){
	var max_height = 0;
	$(this).each(function(){
		max_height = Math.max($(this).height(), max_height);
	});
	$(this).each(function(){
		$(this).height(max_height);
	});
};

$(window).load(function(){
    $('.why-chooseus-content p').equalHeights();
});
$(document).resize(function(){
    $('.why-chooseus-content p').equalHeights();
});
