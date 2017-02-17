$(document).ready(function() {

$("#Youlink").hide();
$('#Youlink').fadeIn(2000);

$('.Button').click(function(){
	var input = $('input[name=Eingabe]').val();

	switch(input) {
		case "Hallo" : $('.liste').append('<div>' + input + ' Mushi</div>');
		break;
		case "Hoi" : $('.liste').append('<div>' + input + ' Schwuchtle</div>');
		break;
		default: $('.liste').append('<div>Gib Hallo oder Hoi ein</div>');
		break;
	}
});

$('input').mouseenter(function() {
	$(this).css('border-color', 'blue');
});

$('input').mouseleave(function() {
	$(this).css('border-color', 'black');
});


});





