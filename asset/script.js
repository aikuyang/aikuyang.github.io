jQuery(function($) {

	// 頁數切換
	$(document).scroll(function(){
		let windowHeightHalf = $(window).height()/2;
		let currentVertialCenter =  ($(this).scrollTop()) + windowHeightHalf;

		let currentPage = $('.currentPage');
		let currentBigPage = $('.currentPageBig');

		$('.primary > section').each(function(){

			if (currentVertialCenter - $(this).offset().top > 0 ) {
				
				$('.primary > section').removeClass('active');
				$(this).addClass('active'); 
 
			} else {

				$(this).removeClass('active');
			}

		});

		if ( $('section.kv').hasClass('active') ) {
			currentPage.text('01');
			currentBigPage.text('01');
		} else if ( $('section.info').hasClass('active') ) {
			currentPage.text('02');
			currentBigPage.text('02');
		} else if ( $('section.project').hasClass('active') ) {
			currentPage.text('03');
			currentBigPage.text('03');
		} else if ( $('section.contact').hasClass('active') ) {
			currentPage.text('04');
			currentBigPage.text('04');
		}

	});


	// 作品篩選
	$(document).on('click', '.filterList > ul > li', function(){
		let type = $(this).attr('data-title');
		console.log(type)
		if ( type == 'all' ) { 
			$('.filterItem').addClass('active');
		} else {
			$('.filterItem').hide();
			$('.filterItem').removeClass('active');
			$('.filterItem[data-type="'+type+'"]').addClass('active');
		}
	});


	// 表單
	$(document).on('submit', function(e){
		e.preventDefault();

		const currentDate = new Date();
		const today = currentDate.getFullYear() + '-' + (currentDate.getMonth()+1) + '-' + currentDate.getDate() + '@' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();

		let name = $('input[name=name]').val();
		let email = $('input[name=email]').val();
		let message = $('textarea[name=message]').val();

		$.ajax({
			type: 'POST',
			url: 'https://script.google.com/macros/s/AKfycbwrqf-VE_bxr8wz9bFSpn40fNktKCIQLOVbYaov2j_gSn681Y1a10Iftef4Ky-33lwFZg/exec',
			data: {
				'Gdate': today,
				'Gname': name,
				'Gemail': email,
				'Gmessage': message
			},
			beforeSend: function(){
				$('.contactForm > form > .row > button').text('傳送中...');
			},
			success: function(response){
				$('input[name=name]').val('');
				$('input[name=email]').val('');
				$('textarea[name=message]').val('');

				if ( response == 'success' ) {
					$('.contactForm > form > .row > button').text('發送成功!');
				} else {
					$('.contactForm > form > .row > button').text('哦噢! 請稍後再試');
				}

			}
		});
	});

});
