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

	let cost = 20; 
	const w2 = form1.toLowerCase();
	const ownHome = form2.toLowerCase();
	const ownBusiness = form3.toLowerCase();
	const have1099 = form4.toLowerCase();
	const ssBenefits = form5.toLowerCase();
	const unemployement = form6.toLowerCase();
	const rental = form7.toLowerCase();
	const other = form8.toLowerCase();

	if (w2 === 'y' || w2 === 'yes'){
		cost = cost + 5; 
	}
	if (ownHome === 'y' || ownHome === 'yes'){
		cost = cost + 15;
	}
	if (ownBusiness === 'y' || ownBusiness === 'yes'){
		cost = cost + 25; 
	}
	if (have1099 === 'y' || have1099 === 'yes'){
		cost = cost + 20;
	}
	if (ssBenefits === 'y' || ssBenefits === 'yes'){
		cost = cost + 20; 
	}
	if (unemployement === 'y' || unemployement === 'yes'){
		cost = cost + 20;
	}
	if (rental === 'y' || rental === 'yes'){
		cost = cost + 35; 
	}
	if (other === 'y' || other === 'yes'){
		cost = cost + 40;
	}
	return cost; 
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

	if (cost === 20){
		$('.js-cost-output').html('Yes (y) must be at least one input')
	}
	else {
		$('.js-cost-output').html(`$${cost}`);
	}
	

	// $i.val('');

}

$('.create-cost').click(onGenerateClicked)




const $slideshow = $('.js-slideshow');

$slideshow.slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  prevArrow: false,
  nextArrow: false, 
  cssEase: 'linear'
});

const $nextButton = $('.js-next');
const onNextButtonClick = () => {
	console.log ('in onNextButtonClick')
	$slideshow.slick('slickNext');
}
$nextButton.click(onNextButtonClick)


const $send = $('.js-send');

public static ClientResponse SendSimpleMessage() {
    Client client = Client.create();
    client.addFilter(new HTTPBasicAuthFilter("api", "key-b225b392fe621cdc0ca529c62a257d2a"));
    WebResource webResource = client.resource("https://api.mailgun.net/v3/sandbox779f93f9ad994fc2adce48f198626777.mailgun.org/messages");
    MultivaluedMapImpl formData = new MultivaluedMapImpl();
    formData.add("from", "Mailgun Sandbox <postmaster@sandbox779f93f9ad994fc2adce48f198626777.mailgun.org>");
    formData.add("to", "Reese Hartlage <reeseh15@gmail.com>");
    formData.add("subject", "Hello Reese Hartlage");
    formData.add("text", "Congratulations Reese Hartlage, you just sent an email with Mailgun!  You are truly awesome!");
    return webResource.type(MediaType.APPLICATION_FORM_URLENCODED).
                                        post(ClientResponse.class, formData);
}

$send.click(SendSimpleMessage);





