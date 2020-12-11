
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
	});
}


$(function () {
	$("body").removeClass("preload");
	// JQueryの範囲

	// フェードイン
	$('.fadein').on('inview',function(){
		$(this).addClass('active');
	});

});

// ヘッダー追従
$(window).on('load scroll', function () {
	if(w > spwidth) {
		if ($(window).scrollTop() > 200) {
			$('header').addClass('active');
			$('header .logo img').attr('src', './images/common/logo.png');
		} else {
			$('header').removeClass('active');
			$('header .logo img').attr('src', './images/common/logo_w.png');
		}
	}else{
		if ($(window).scrollTop() > 200) {
			$('header').addClass('active');
			$('header .logo img').attr('src', './images/common/logo.png');
		} else {
			$('header').removeClass('active');
			$('header .logo img').attr('src', './images/common/logo.png');
		}
	}
});