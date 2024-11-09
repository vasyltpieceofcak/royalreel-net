jQuery(function(){

	jQuery('.faq-question').click(function(){

		jQuery(this)
			.toggleClass("active")
			.next(".faq-answer")
			.slideToggle()
			.parent()
			.siblings()
			.find(".faq-answer")
			.slideUp()
			.prev()
			.removeClass("active");
	});

	let menu = jQuery('<ul></ul>');
	let titles = jQuery('section h2');

	titles.each(function(i, val){
		let text = jQuery(this).text();
		let id = text.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
		jQuery(this).attr('id', id);

		let menuItem = jQuery('<li></li>');
		let link = jQuery('<a></a>').attr('href', '#' + id).text(text);
		menuItem.append(link);
		menu.append(menuItem);
	});

	jQuery('.page-contents-menu').prepend(menu);

	jQuery('.page-contents-title').click(function(){
		jQuery(this).toggleClass('active');
		jQuery('.page-contents-menu').slideToggle();
	});

	jQuery('.page-contents-menu a, .footer-menu a').click(function(e){
		e.preventDefault();
		let href = jQuery(this).attr('href');
		jQuery('html, body').animate({scrollTop: jQuery(href).offset().top-100},500);
	});

	let tables = jQuery('.description table');
	tables.each(function(i, val){
		jQuery(this).wrap("<div class='table-wrap'></div>");
	});


});
