// JavaScript Document

$(function(){ 
	
	// slick
	$('.slide-items').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		slidesToShow: 1,
	});
	
	
	// アコーディオン
	const accordionBtn = $("#question .wrapper .accordion .item .head");
	accordionBtn.on('click',function() {
		$(this).parent().toggleClass("active");
	});
	
	
	// topボタン
	$(window).scroll(function() {
		if ($(this).scrollTop() > 700) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	
	// fade
	$(window).scroll(function() {
		$('.fade').each(function() {
			let scroll = $(window).scrollTop();
			let target = $(this).offset().top;
			let windowHeight = $(window).height();
			
			if (scroll > target - windowHeight + 200) {
				$(this).css('opacity','1');
				$(this).css('transform','translate(0)');
			}
		});
	});
	

});


// topボタン
let pagetop = $('#to-top');
pagetop.hide();

pagetop.click(function() {
	$('body,html').animate({scrollTop: 0}, 500);
	return false;
});