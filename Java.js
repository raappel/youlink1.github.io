function main(){
$("#Youlink").hide();
$('#Youlink').fadeIn(2000);

$('.Stern').hide();
$('.Button').on('click', function(){
$(this).next().toggle();
});
};
$(document).ready(main);





