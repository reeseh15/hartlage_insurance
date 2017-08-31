/*
	Minimaxing by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var $window = $(window),
			$body = $('body');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + 'hartlage insurance' + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);

function generateTaxCost(form1 = 'n', form2 = 'n', form3 = 'n', form4 = 'n', form5 = 'n', form6 = 'n', form7 = 'n', form8 = 'n') {   

	const ans1 = form1.toLowerCase();
	const ans2 = form2.toLowerCase();
	const ans3 = form3.toLowerCase();
	const ans4 = form4.toLowerCase();
	const ans5 = form5.toLowerCase();
	const ans6 = form6.toLowerCase();
	const ans7 = form7.toLowerCase();
	const ans8 = form8.toLowerCase();

	//W-2, Own Home, Own Business, have 1099, have SS Benefits, have unemployement income, have rental income, have other forms
	if (ans1 === 'y' && ans2 === 'y' && ans3 === 'y' && ans4 === 'y' && ans5 === 'y' && ans6 === 'y' && ans7 === 'y' && ans8 === 'y'){
		return 'your cost: $' + 400; 
	}
	//W-2, Own Home, Own Business, have 1099, have SS Benefits, have unemployement income, have rental income
	if (ans1 === 'y' && ans2 === 'y' && ans3 === 'y' && ans4 === 'y' && ans5 === 'y' && ans6 === 'y' && ans7 === 'y' && ans8 === 'n'){
		return 'your cost: $' + 270; 
	}
	//W-2, Own Home, Own Business, have 1099, have SS Benefits, have unemployement income
	if (ans1 === 'y' && ans2 === 'y' && ans3 === 'y' && ans4 === 'y' && ans5 === 'y' && ans6 === 'y' && ans7 === 'n' && ans8 === 'n'){
		return 'your cost: $' + 225; 
	}
	//W-2, Own Home, Own Business, have 1099, have SS Benefits
	if (ans1 === 'y' && ans2 === 'y' && ans3 === 'y' && ans4 === 'y' && ans5 === 'y' && ans6 === 'n' && ans7 === 'n' && ans8 === 'n'){
		return 'your cost: $' + 175; 
	}
	//W-2, Own Home, Own Business, have 1099
	if (ans1 === 'y' && ans2 === 'y' && ans3 === 'y' && ans4 === 'y' && ans5 === 'n' && ans6 === 'n' && ans7 === 'n' && ans8 === 'n'){
		return 'your cost: $' + 100; 
	}
	//W-2, Own Home, Own Business
	if (ans1 === 'y' && ans2 === 'y' && ans3 === 'y' && ans4 === 'n' && ans5 === 'n' && ans6 === 'n' && ans7 === 'n' && ans8 === 'n'){
		return 'your cost: $' + 75; 
	}
	//W-2, Own Home
	if (ans1 === 'y' && ans2 === 'y' && ans3 === 'n' && ans4 === 'n' && ans5 === 'n' && ans6 === 'n' && ans7 === 'n' && ans8 === 'n'){
		return 'your cost: $' + 40; 
	}
	//W-2 
   if (ans1 === 'y' && ans2 === 'n' && ans3 === 'n' && ans4 === 'n' && ans5 === 'n' && ans6 === 'n' && ans7 === 'n' && ans8 === 'n'){
		return 'your cost: $' + 25; 
	}
	//nothing
	if (ans1 === 'n' && ans2 === 'n' && ans3 === 'n' && ans4 === 'n' && ans5 === 'n' && ans6 === 'n' && ans7 === 'n' && ans8 === 'n'){
		return `nothing was entered`; 
	}
	else {
		return `Please answer all questions with Y or N`
	}
}

function onGenerateClicked() {

	const $i = $('.form-control');
	
	const cost = generateTaxCost(
		$i.eq(0).val(),
		$i.eq(1).val(),
		$i.eq(2).val(),
		$i.eq(3).val(),
		$i.eq(4).val(),
		$i.eq(5).val(),
		$i.eq(6).val(),
		$i.eq(7).val(),
	);
	$('.js-cost-output').html(cost);

	$i.val('');

}

$('.create-cost').click(onGenerateClicked)





