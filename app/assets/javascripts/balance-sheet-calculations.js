// Total fixed assets (current year))
$( document )
	.ready( function () {
		function compute() {
			var total = 0 // Start total off at zero

			if ( typeof $( '#called-up-share-capital-not-paid-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var calledupsharecapitalnotpaidcurrent = $( '#called-up-share-capital-not-paid-current' )
					.val();
				total += +calledupsharecapitalnotpaidcurrent // Total (0) plus whatever value is in nere
			}

			if ( typeof $( '#intangible-assets-current' )
				.val() !== 'undefined' ) {
				var intangibleassetscurrent = $( '#intangible-assets-current' )
					.val();
				total += +intangibleassetscurrent
			}

			if ( typeof $( '#tangible-assets-current' )
				.val() !== 'undefined' ) {
				var tangibleassetscurrent = $( '#tangible-assets-current' )
					.val();
				total += +tangibleassetscurrent
			}

			if ( typeof $( '#investments-fixed-assets-current' )
				.val() !== 'undefined' ) {
				var investmentsfixedassetscurrent = $( '#investments-fixed-assets-current' )
					.val();
				total += +investmentsfixedassetscurrent
			}

			$( '#total-fixed-assets-current' )
				.val( total );
		}


		$( '#called-up-share-capital-not-paid-current, #intangible-assets-current, #tangible-assets-current, #investments-fixed-assets-current' )
			.change( compute );
	} );

// Total fixed assets (previous year))
$( document )
	.ready( function () {
		function compute() {
			var total = 0 // Start total off at zero

			if ( typeof $( '#called-up-share-capital-not-paid-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var calledupsharecapitalnotpaidprevious = $( '#called-up-share-capital-not-paid-previous' )
					.val();
				total += +calledupsharecapitalnotpaidprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#intangible-assets-previous' )
				.val() !== 'undefined' ) {
				var intangibleassetsprevious = $( '#intangible-assets-previous' )
					.val();
				total += +intangibleassetsprevious
			}

			if ( typeof $( '#tangible-assets-previous' )
				.val() !== 'undefined' ) {
				var tangibleassetsprevious = $( '#tangible-assets-previous' )
					.val();
				total += +tangibleassetsprevious
			}

			if ( typeof $( '#investments-fixed-assets-previous' )
				.val() !== 'undefined' ) {
				var investmentsfixedassetsprevious = $( '#investments-fixed-assets-previous' )
					.val();
				total += +investmentsfixedassetsprevious
			}

			$( '#total-fixed-assets-previous' )
				.val( total );
		}
		$( '#called-up-share-capital-not-paid-previous, #intangible-assets-previous, #tangible-assets-previous, #investments-fixed-assets-previous' )
			.change( compute );
	} );

// Total current assets (current year))
$( document )
	.ready( function () {
		function compute() {
			var total = 0 // Start total off at zero
			if ( typeof $( '#stocks-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var stockscurrent = $( '#stocks-current' )
					.val();
				total += +stockscurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#debtors-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var debtorscurrent = $( '#debtors-current' )
					.val();
				total += +debtorscurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#cash-at-bank-and-in-hand-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var cashatbankandinhandcurrent = $( '#cash-at-bank-and-in-hand-current' )
					.val();
				total += +cashatbankandinhandcurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#investments-current-assets-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var investmentscurrentassetscurrent = $( '#investments-current-assets-current' )
					.val();
				total += +investmentscurrentassetscurrent // Total (0) plus whatever value is in nere
			}

			$( '#total-current-assets-current' )
				.val( total );
		}
		$( '#stocks-current, #debtors-current, #cash-at-bank-and-in-hand-current, #investments-current-assets-current' )
			.change( compute );
	} );

// Total current assets (previous year))
$( document )
	.ready( function () {
		function compute() {
			var total = 0 // Start total off at zero
			if ( typeof $( '#stocks-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var stocksprevious = $( '#stocks-previous' )
					.val();
				total += +stocksprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#debtors-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var debtorsprevious = $( '#debtors-previous' )
					.val();
				total += +debtorsprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#cash-at-bank-and-in-hand-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var cashatbankandinhandprevious = $( '#cash-at-bank-and-in-hand-previous' )
					.val();
				total += +cashatbankandinhandprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#investments-current-assets-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var investmentscurrentassetsprevious = $( '#investments-current-assets-previous' )
					.val();
				total += +investmentscurrentassetsprevious // Total (0) plus whatever value is in nere
			}

			$( '#total-current-assets-previous' )
				.val( total );
		}
		$( '#stocks-previous, #debtors-previous, #cash-at-bank-and-in-hand-previous, #investments-current-assets-previous' )
			.change( compute );
	} );

// Net current assets (liabilities) (current year))
$( document )
	.ready( function () {
		function compute() {
			var total = 0 // Start total off at zero
			if ( typeof $( '#total-current-assets-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var totalcurrentassetscurrent = $( '#total-current-assets-current' )
					.val();
				total += +totalcurrentassetscurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#creditors-amounts-falling-due-within-one-year-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var creditorsamountsfallingduewithinoneyearcurrent = $( '#creditors-amounts-falling-due-within-one-year-current' )
					.val();
				total -= +creditorsamountsfallingduewithinoneyearcurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#prepayments-and-and-accrued-income-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var prepaymentsandandaccruedincomecurrent = $( '#prepayments-and-and-accrued-income-current' )
					.val();
				total += +prepaymentsandandaccruedincomecurrent // Total (0) plus whatever value is in nere
			}

			$( '#net-current-assets-liabilities-current' )
				.val( total );
		}
		$( '#total-current-assets-current, #creditors-amounts-falling-due-within-one-year-current, #prepayments-and-and-accrued-income-current' )
			.change( compute );
	} );


// Net current assets (liabilities) (previous year))
$( document )
	.ready( function () {
		function compute() {
			var total = 0 // Start total off at zero
			if ( typeof $( '#total-current-assets-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var totalcurrentassetsprevious = $( '#total-current-assets-previous' )
					.val();
				total += +totalcurrentassetsprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#creditors-amounts-falling-due-within-one-year-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var creditorsamountsfallingduewithinoneyearprevious = $( '#creditors-amounts-falling-due-within-one-year-previous' )
					.val();
				total -= +creditorsamountsfallingduewithinoneyearprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#prepayments-and-and-accrued-income-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var prepaymentsandandaccruedincomeprevious = $( '#prepayments-and-and-accrued-income-previous' )
					.val();
				total += +prepaymentsandandaccruedincomeprevious // Total (0) plus whatever value is in nere
			}

			$( '#net-current-assets-liabilities-previous' )
				.val( total );
		}
		$( '#total-current-assets-current, #creditors-amounts-falling-due-within-one-year-current, #prepayments-and-and-accrued-income-current' )
			.change( compute );
	} );


// Total assets less current liabilities (current year)
$( document )
	.ready( function () {
		function compute() {
			var total = 0 // Start total off at zero
			if ( typeof $( '#called-up-share-capital-not-paid-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var calledupsharecapitalnotpaidcurrent = $( '#called-up-share-capital-not-paid-current' )
					.val();
				total += +calledupsharecapitalnotpaidcurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#intangible-assets-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var intangibleassetscurrent = $( '#intangible-assets-current' )
					.val();
				total += +intangibleassetscurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#tangible-assets-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var tangibleassetscurrent = $( '#tangible-assets-current' )
					.val();
				total += +tangibleassetscurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#investments-fixed-assets-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var investmentsfixedassetscurrent = $( '#investments-fixed-assets-current' )
					.val();
				total += +investmentsfixedassetscurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#stocks-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var stockscurrent = $( '#stocks-current' )
					.val();
				total += +stockscurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#debtors-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var debtorscurrent = $( '#debtors-current' )
					.val();
				total += +debtorscurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#cash-at-bank-and-in-hand-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var cashatbankandinhandcurrent = $( '#cash-at-bank-and-in-hand-current' )
					.val();
				total += +cashatbankandinhandcurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#investments-current-assets-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var investmentscurrentassetscurrent = $( '#investments-current-assets-current' )
					.val();
				total += +investmentscurrentassetscurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#creditors-amounts-falling-due-within-one-year-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var creditorsamountsfallingduewithinoneyearcurrent = $( '#creditors-amounts-falling-due-within-one-year-current' )
					.val();
				total -= +creditorsamountsfallingduewithinoneyearcurrent // Total (0) plus whatever value is in nere
			}
			$( '#total-assets-less-current-liabilities-current' )
				.val( total );
		}
		$( '#called-up-share-capital-not-paid-current, #intangible-assets-current, #tangible-assets-current, #investments-fixed-assets-current, #stocks-current, #debtors-current, #cash-at-bank-and-in-hand-current, #investments-current-assets-current, #creditors-amounts-falling-due-within-one-year-current' )
			.change( compute );
	} );

// Total assets less current liabilities (previous year)
$( document )
	.ready( function () {
		function compute() {
			var total = 0 // Start total off at zero
			if ( typeof $( '#called-up-share-capital-not-paid-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var calledupsharecapitalnotpaidprevious = $( '#called-up-share-capital-not-paid-previous' )
					.val();
				total += +calledupsharecapitalnotpaidprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#intangible-assets-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var intangibleassetsprevious = $( '#intangible-assets-previous' )
					.val();
				total += +intangibleassetsprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#tangible-assets-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var tangibleassetsprevious = $( '#tangible-assets-previous' )
					.val();
				total += +tangibleassetsprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#investments-fixed-assets-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var investmentsfixedassetsprevious = $( '#investments-fixed-assets-previous' )
					.val();
				total += +investmentsfixedassetsprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#stocks-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var stocksprevious = $( '#stocks-previous' )
					.val();
				total += +stocksprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#debtors-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var debtorsprevious = $( '#debtors-previous' )
					.val();
				total += +debtorsprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#cash-at-bank-and-in-hand-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var cashatbankandinhandprevious = $( '#cash-at-bank-and-in-hand-previous' )
					.val();
				total += +cashatbankandinhandprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#investments-current-assets-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var investmentscurrentassetsprevious = $( '#investments-current-assets-previous' )
					.val();
				total += +investmentscurrentassetsprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#creditors-amounts-falling-due-within-one-year-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var creditorsamountsfallingduewithinoneyearprevious = $( '#creditors-amounts-falling-due-within-one-year-previous' )
					.val();
				total -= +creditorsamountsfallingduewithinoneyearprevious // Total (0) plus whatever value is in nere
			}
			$( '#total-assets-less-current-liabilities-previous' )
				.val( total );
		}
		$( '#called-up-share-capital-not-paid-previous, #intangible-assets-previous, #tangible-assets-previous, #investments-fixed-assets-previous, #stocks-previous, #debtors-previous, #cash-at-bank-and-in-hand-previous, #investments-current-assets-previous, #creditors-amounts-falling-due-within-one-year-previous' )
			.change( compute );
	} );

//Total net assets (liabilities)  (current year)
$( document )
	.ready( function () {
		function compute() {
			var total = 0 // Start total off at zero
			if ( typeof $( '#total-assets-less-current-liabilities-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var totalassetslesscurrentliabilitiescurrent = $( '#total-assets-less-current-liabilities-current' )
					.val();
				total += +totalassetslesscurrentliabilitiescurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#creditors-amounts-falling-due-after-more-than-one-year-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var creditorsamountsfallingdueaftermorethanoneyearcurrent = $( '#creditors-amounts-falling-due-after-more-than-one-year-current' )
					.val();
				total -= +creditorsamountsfallingdueaftermorethanoneyearcurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#provision-for-liabilities-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var provisionforliabilitiescurrent = $( '#provision-for-liabilities-current' )
					.val();
				total -= +provisionforliabilitiescurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#accruals-and-deferred-income-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var accrualsanddeferredincomecurrent = $( '#accruals-and-deferred-income-current' )
					.val();
				total -= +accrualsanddeferredincomecurrent // Total (0) plus whatever value is in nere
			}

			$( '#total-net-assets-liabilities-current' )
				.val( total );
		}
		$( '#intangible-assets-current, #tangible-assets-current, #investments-current-assets-current, #stocks-current, #debtors-current, #cash-at-bank-and-in-hand-current, #investments-current-assets-current, #creditors-amounts-falling-due-within-one-year-current, #creditors-amounts-falling-due-after-more-than-one-year-current, #total-assets-less-current-liabilities-current, #provision-for-liabilities-current, #accruals-and-deferred-income-current' )
			.change( compute );
	} );

//Total net assets (liabilities)  (previous year)
$( document )
	.ready( function () {
		function compute() {
			var total = 0 // Start total off at zero
			if ( typeof $( '#total-assets-less-current-liabilities-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var totalassetslesscurrentliabilitiesprevious = $( '#total-assets-less-current-liabilities-previous' )
					.val();
				total += +totalassetslesscurrentliabilitiesprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#creditors-amounts-falling-due-after-more-than-one-year-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var creditorsamountsfallingdueaftermorethanoneyearprevious = $( '#creditors-amounts-falling-due-after-more-than-one-year-previous' )
					.val();
				total -= +creditorsamountsfallingdueaftermorethanoneyearprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#provision-for-liabilities-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var provisionforliabilitiesprevious = $( '#provision-for-liabilities-previous' )
					.val();
				total -= +provisionforliabilitiesprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#accruals-and-deferred-income-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var accrualsanddeferredincomeprevious = $( '#accruals-and-deferred-income-previous' )
					.val();
				total -= +accrualsanddeferredincomeprevious // Total (0) plus whatever value is in nere
			}

			$( '#total-net-assets-liabilities-previous' )
				.val( total );
		}
		$( '#intangible-assets-previous, #tangible-assets-previous, #investments-current-assets-previous, #stocks-previous, #debtors-previous, #cash-at-bank-and-in-hand-previous, #investments-current-assets-previous, #creditors-amounts-falling-due-within-one-year-previous, #creditors-amounts-falling-due-after-more-than-one-year-previous, #total-assets-less-current-liabilities-previous, #provision-for-liabilities-previous, #accruals-and-deferred-income-previous' )
			.change( compute );
	} );

// Total shareholders' funds (current year)
$( document )
	.ready( function () {
		function compute() {
			var total = 0 // Start total off at zero
			if ( typeof $( '#called-up-share-capital-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var calledupsharecapitalcurrent = $( '#called-up-share-capital-current' )
					.val();
				total += +calledupsharecapitalcurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#share-premium-account-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var sharepremiumaccountcurrent = $( '#share-premium-account-current' )
					.val();
				total += +sharepremiumaccountcurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#revaluation-reserve-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var revaluationreservecurrent = $( '#revaluation-reserve-current' )
					.val();
				total += +revaluationreservecurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#other-reserves-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var otherreservescurrent = $( '#other-reserves-current' )
					.val();
				total += +otherreservescurrent // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#profit-and-loss-account-current' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var profitandlossaccountcurrent = $( '#profit-and-loss-account-current' )
					.val();
				total += +profitandlossaccountcurrent // Total (0) plus whatever value is in nere
			}

			$( '#total-shareholders-funds-current' )
				.val( total );
		}
		$( '#called-up-share-capital-current, #share-premium-account-current, #revaluation-reserve-current, #other-reserves-current, #profit-and-loss-account-current' )
			.change( compute );
	} );

// Total shareholders' funds (previous year)
$( document )
	.ready( function () {
		function compute() {
			var total = 0 // Start total off at zero
			if ( typeof $( '#called-up-share-capital-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var calledupsharecapitalprevious = $( '#called-up-share-capital-previous' )
					.val();
				total += +calledupsharecapitalprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#share-premium-account-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var sharepremiumaccountprevious = $( '#share-premium-account-previous' )
					.val();
				total += +sharepremiumaccountprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#revaluation-reserve-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var revaluationreserveprevious = $( '#revaluation-reserve-previous' )
					.val();
				total += +revaluationreserveprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#other-reserves-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var otherreservesprevious = $( '#other-reserves-previous' )
					.val();
				total += +otherreservesprevious // Total (0) plus whatever value is in nere
			}
			if ( typeof $( '#profit-and-loss-account-previous' )
				.val() !== 'undefined' ) { // If this thing is NOT undefined (as in it DOES exist) then output it as a variable
				var profitandlossaccountprevious = $( '#profit-and-loss-account-previous' )
					.val();
				total += +profitandlossaccountprevious // Total (0) plus whatever value is in nere
			}
			$( '#total-shareholders-funds-previous' )
				.val( total );
		}
		$( '#called-up-share-capital-previous, #share-premium-account-previous, #revaluation-reserve-previous, #other-reserves-previous, #profit-and-loss-account-previous' )
			.change( compute );
	} );


// Show a warning when user tries to amend a figure

$( '#tangible-assets-current' )
	.change( function () {
		$( 'div.warning-with-triangle' )
			.show();
		$( document )
			.bind( 'focusin.warning-with-triangle click.warning-with-triangle', function ( e ) {
				if ( $( e.target )
					.closest( '.warning-with-triangle, #tangible-assets-current' )
					.length ) return;
				$( document )
					.unbind( '.warning-with-triangle' );
				$( 'div.warning-with-triangle' )
					.hide();
			} );
	} );
$( 'div.warning-with-triangle' )
	.hide();