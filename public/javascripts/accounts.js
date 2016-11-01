//Choose type of accounts - disabled next button, only undisable it if user selects Abridged, Micro or Dormant
$(document).ready(function() {
    $('#choose-accounts-button').attr('disabled', 'true'); // Disables Next button on page load
    $('input:radio[name=choosetypeaccounts]').click(function() {
        var checkval = $(this).val();
      //  $('#choose-accounts-button').prop('disabled', !(checkval == 'abridged' || checkval == 'micro' || checkval == 'dormant'));
        $('#choose-accounts-button').prop('disabled', !(checkval == 'abridged'));

    });
});

//Start page - disabled next button, until user confirms they have a set of prepared accounts ready
$(document).ready(function(){
  $('#accounts-start-button').attr('disabled', 'true'); // Disables Next button on page load
  $('input:checkbox[name=prepared]').click(function() {
      var checkval = $(this).val();
    //  $('#choose-accounts-button').prop('disabled', !(checkval == 'abridged' || checkval == 'micro' || checkval == 'dormant'));
      $('#accounts-start-button').prop('disabled', !(checkval == 'prepared-yes'));

  });
});

//Balance sheet statements page - disabled continue/next button, until user agrees to statements
//$(document).ready(function(){
//  $('#statements-button').attr('disabled', 'true'); // Disables Next button on page load
//  $('input:checkbox[name=confirmation]').click(function() {
//      var checkval = $(this).val();
//      $('#statements-button').prop('disabled', !(checkval == 'agree'));
//
//});




//// Copied from DEV version, reveals help as soon as user interacts with numeruc inputs
$(function() {

	// Fixed assets
	attachOnChangeListener([$('#intangible-assets-current'),  $('#tangible-assets-current'),  $('#investments-fixed-assets-current')], 'total-fixed-assets-current')
	attachOnChangeListener([$('#intangible-assets-previous'),  $('#tangible-assets-previous'),  $('#investments-fixed-assets-previous')], 'total-fixed-assets-previous' )

	// Current assets
	attachOnChangeListener([$('#stocks-current'),  $('#debtors-current'),  $('#cash-at-bank-and-in-hand-current'), $('#investments-current-assets-current')], 'total-current-assets-current' )
	attachOnChangeListener([$('#stocks-previous'),  $('#debtors-previous'),  $('#cash-at-bank-and-in-hand-previous'), $('#investments-current-assets-previous')], 'total-current-assets-previous' )

	// Net current assets
	attachOnChangeListener([$('#total-current-assets-current'),  $('#creditors-amounts-falling-due-within-one-year-current')], 'net-current-assets-liabilities-current', true )
	attachOnChangeListener([$('#total-current-assets-previous'),  $('#creditors-amounts-falling-due-within-one-year-previous')], 'net-current-assets-liabilities-previous', true )

	// Total assets less current liabilities
	attachOnChangeListener([$('#total-fixed-assets-current'),  $('#net-current-assets-liabilities-current')], 'total-assets-less-current-liabilities-current' )
	attachOnChangeListener([$('#total-fixed-assets-previous'),  $('#net-current-assets-liabilities-previous')], 'total-assets-less-current-liabilities-previous' )

	// Total net assets (liabilities)
	attachOnChangeListener([$('#total-assets-less-current-liabilities-current'),  $('#creditors-amounts-falling-due-after-more-than-one-year-current'), $('#provision-for-liabilities-current')], 'total-net-assets-liabilities-current', true )
	attachOnChangeListener([$('#total-assets-less-current-liabilities-previous'),  $('#creditors-amounts-falling-due-after-more-than-one-year-previous'), $('#provision-for-liabilities-previous')], 'total-net-assets-liabilities-previous', true )

    //Capital and reserves
	attachOnChangeListener([$('#called-up-share-capital-current'),  $('#share-premium-account-current'),  $('#revaluation-reserve-current'), $('#other-reserves-current'), $('#profit-and-loss-account-current')], 'total-shareholders-funds-current' )
	attachOnChangeListener([$('#called-up-share-capital-previous'),  $('#share-premium-account-previous'),  $('#revaluation-reserve-previous'), $('#other-reserves-previous'), $('#profit-and-loss-account-previous')], 'total-shareholders-funds-previous' )

	$(".grid-row").focusin(function() {
		var $this = $(this);
		$('details').removeAttr('open');
		$this.find('details').attr('open', 'true')
		})
});


function attachOnChangeListener(arr, total, substract){
	for(var i=0;i<arr.length;i++){
		arr[i].on('change', function() {
			if( substract ){
				findDifference(arr, total)
			} else {
				findTotal(arr, total)
			}

		});
	}
}
