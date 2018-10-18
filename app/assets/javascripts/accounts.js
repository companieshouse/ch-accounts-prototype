//Choose type of accounts - disabled next button, only undisable it if user selects Abridged, Micro or Dormant
$( document )
	.ready( function () {
		$( '#choose-accounts-button' )
			.attr( 'disabled', 'true' ); // Disables Next button on page load
		$( 'input:radio[name=choosetypeaccounts]' )
			.click( function () {
				var checkval = $( this )
					.val();
				//  $('#choose-accounts-button').prop('disabled', !(checkval == 'abridged' || checkval == 'micro' || checkval == 'dormant'));
				$( '#choose-accounts-button' )
					.prop( 'disabled', !( checkval == 'abridged' ) );

			} );
	} );

//Start page - disabled next button, until user confirms they have a set of prepared accounts ready
//$(document).ready(function(){
//  $('#accounts-start-button').attr('disabled', 'true'); // Disables Next button on page load
//  $('input:checkbox[name=prepared]').click(function() {
//      var checkval = $(this).val();
//    //  $('#choose-accounts-button').prop('disabled', !(checkval == 'abridged' || checkval == 'micro' || checkval == 'dormant'));
//      $('#accounts-start-button').prop('disabled', !(checkval == 'prepared-yes'));

//  });
//});

//Balance sheet statements page - disabled continue/next button, until user agrees to statements
//$(document).ready(function(){
//  $('#statements-button').attr('disabled', 'true'); // Disables Next button on page load
//  $('input:checkbox[name=confirmation]').click(function() {
//      var checkval = $(this).val();
//      $('#statements-button').prop('disabled', !(checkval == 'agree'));
//
//});




//Balance sheet statements
//$(function(){
//  $('#confirmation').on('change',function(){
//     $('.confirmation-child').prop('checked',$(this).prop('checked'));
//  });
//  $('.confirmation-child').on('change',function(){
//     $('#confirmation').prop('checked',$('.confirmation-child:checked').length ? true: false);
//  });
// });

//About your business (2 from 3 for Micro eligibility)
$( '.micro-eligibility-questions' )
	.click( function () {
		if ( $( this )
			.find( 'input[type="radio"]:checked' )
			.length > 3 ) {
			$( ".button" )
				.removeClass( "disabled" );
		} else {
			$( ".button" )
				.addClass( "disabled" );
		}
	} );

$( '.micro-eligibility' )
	.click( function () {
		if ( $( 'input[type=radio][value="Yes"]:checked' )
			.length > 1 ) {
			window.location.replace( "/accounts/accounts-choose-micros" );
		} else {
			window.location.replace( "/accounts/accounts-choose-full-or-abridged" );
		}
		return false;
	} );