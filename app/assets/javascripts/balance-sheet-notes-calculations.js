// Tangible assets note: Cost AT END
$( document )
	.ready( function () {
		function compute() {
			var tangiblecostatstart = $( '#tangible-cost-at-start' )
				.val();
			var tangiblecostadditions = $( '#tangible-cost-additions' )
				.val();
			var tangiblecostdisposals = $( '#tangible-cost-disposals' )
				.val();
			var tangiblecostrevaluations = $( '#tangible-cost-revaluations' )
				.val();
			var tangiblecosttransfers = $( '#tangiblecosttransfers' )
				.val();
			var total = +tangiblecostatstart + +tangiblecostadditions - +tangiblecostdisposals + +tangiblecostrevaluations + +tangiblecosttransfers;
			$( '#tangible-cost-at-end' )
				.val( total );
		}
		$( '#tangible-cost-at-start, #tangible-cost-additions, #tangible-cost-disposals, #tangible-cost-revaluations, #tangiblecosttransfers' )
			.change( compute );
	} );

// Tangible assets note: depreciation AT END
$( document )
	.ready( function () {
		function compute() {
			var tangibledepreciationatstart = $( '#tangible-depreciation-at-start' )
				.val();
			var tangibledepreciationchargeforyear = $( '#tangible-depreciation-charge-for-year' )
				.val();
			var tangibledepreciationondisposals = $( '#tangible-depreciation-on-disposals' )
				.val();
			var tangibledepreciationotheradjustments = $( '#tangible-depreciation-other-adjustments' )
				.val();
			var total = +tangibledepreciationatstart + +tangibledepreciationchargeforyear - +tangibledepreciationondisposals + +tangibledepreciationotheradjustments;
			$( '#tangible-depreciation-at-end' )
				.val( total );
		}
		$( '#tangible-depreciation-at-start, #tangible-depreciation-charge-for-year, #tangible-depreciation-on-disposals, #tangible-depreciation-other-adjustments' )
			.change( compute );
	} );

// Tangible assets note: net book value end
$( document )
	.ready( function () {
		function compute() {
			var tangiblecostatend = $( '#tangible-cost-at-end' )
				.val();
			var tangibledepreciationatend = $( '#tangible-depreciation-at-end' )
				.val();
			var total = +tangiblecostatend - +tangibledepreciationatend;
			$( '#tangible-net-book-value-end' )
				.val( total );
		}
		$( '#tangible-cost-at-start, #tangible-cost-additions, #tangible-cost-disposals, #tangiblecosttransfers, #tangible-depreciation-at-start, #tangible-depreciation-charge-for-year, #tangible-depreciation-on-disposals, #tangible-depreciation-other-adjustments' )
			.change( compute );
	} );

// Tangible assets note: net book value start
$( document )
	.ready( function () {
		function compute() {
			var tangiblecostatstart = $( '#tangible-cost-at-start' )
				.val();
			var tangibledepreciationatstart = $( '#tangible-depreciation-at-start' )
				.val();
			var total = +tangiblecostatstart - +tangibledepreciationatstart;
			$( '#tangible-net-book-value-start' )
				.val( total );
		}
		$( '#tangible-cost-at-start, #tangible-depreciation-at-start' )
			.change( compute );
	} );









// Intangible assets note: Cost AT END
$( document )
	.ready( function () {
		function compute() {
			var intangiblecostatstart = $( '#intangible-cost-at-start' )
				.val();
			var intangiblecostadditions = $( '#intangible-cost-additions' )
				.val();
			var intangiblecostdisposals = $( '#intangible-cost-disposals' )
				.val();
			var intangiblecostrevaluations = $( '#intangible-cost-revaluations' )
				.val();
			var intangiblecosttransfers = $( '#intangible-cost-transfers' )
				.val();
			var total = +intangiblecostatstart + +intangiblecostadditions - +intangiblecostdisposals + +intangiblecostrevaluations + +intangiblecosttransfers;
			$( '#intangible-cost-at-end' )
				.val( total );
		}
		$( '#intangible-cost-at-start, #intangible-cost-additions, #intangible-cost-disposals, #intangible-cost-revaluations, #intangible-cost-transfers' )
			.change( compute );
	} );

// Intangible assets note: Amortisation AT END
$( document )
	.ready( function () {
		function compute() {
			var intangibleamortisationatstart = $( '#intangible-amortisation-at-start' )
				.val();
			var intangibleamortisationchargeforyear = $( '#intangible-amortisation-charge-for-year' )
				.val();
			var intangibleamortisationondisposals = $( '#intangible-amortisation-on-disposals' )
				.val();
			var intangibleamortisationotheradjustments = $( '#intangible-amortisation-other-adjustments' )
				.val();
			var total = +intangibleamortisationatstart + +intangibleamortisationchargeforyear - +intangibleamortisationondisposals + +intangibleamortisationotheradjustments;
			$( '#intangible-amortisation-at-end' )
				.val( total );
		}
		$( '#intangible-amortisation-at-start, #intangible-amortisation-charge-for-year, #intangible-amortisation-on-disposals, #intangible-amortisation-other-adjustments' )
			.change( compute );
	} );

// Intangible assets note: net book value end
$( document )
	.ready( function () {
		function compute() {
			var intangiblecostatend = $( '#intangible-cost-at-end' )
				.val();
			var intangibleamortisationatend = $( '#intangible-amortisation-at-end' )
				.val();
			var total = +intangiblecostatend - +intangibleamortisationatend;
			$( '#intangible-net-book-value-end' )
				.val( total );
		}
		$( '#intangible-cost-at-start, #intangible-cost-additions, #intangible-cost-disposals, #intangiblecosttransfers, #intangible-amortisation-at-start, #intangible-amortisation-charge-for-year, #intangible-amortisation-on-disposals, #intangible-amortisation-other-adjustments' )
			.change( compute );
	} );

// Intangible assets note: net book value start
$( document )
	.ready( function () {
		function compute() {
			var intangiblecostatstart = $( '#intangible-cost-at-start' )
				.val();
			var intangibleamortisationatstart = $( '#intangible-amortisation-at-start' )
				.val();
			var total = +intangiblecostatstart - +intangibleamortisationatstart;
			$( '#intangible-net-book-value-start' )
				.val( total );
		}
		$( '#intangible-cost-at-start, #intangible-amortisation-at-start' )
			.change( compute );
	} );

// Revaluation reserve note: End

$( document )
	.ready( function () {
		function compute() {
			var revaluationbalanceatstart = $( '#revaluation-reserve-start' )
				.val();
			var surplusdeficitprevious = $( '#surplus-deficit-previous' )
				.val();
			var total = +revaluationbalanceatstart + +surplusdeficitprevious;
			$( '#revaluation-reserve-end' )
				.val( total );
		}
		$( '#revaluation-reserve-start, #surplus-deficit-previous' )
			.change( compute );
	} );



// Debtors note: current year

//$(document).ready(function() {
//  function compute() {
//      var tradedebtorscurrent = $('#trade-debtors-current').val();
//      var prepaymentsandaccruedincomecurrent = $('#prepayments-and-accrued-income-current').val();
//      var otherdebtorscurrent = $('#other-debtors-current').val();
//      var total = +tradedebtorscurrent + +prepaymentsandaccruedincomecurrent + +otherdebtorscurrent;
//       $('#total-debtors-current').val(total);
//     }
//     $('#trade-debtors-current, #prepayments-and-accrued-income-current, #other-debtors-current').change(compute);
//});

// Debtors note: previous year

//$(document).ready(function() {
//  function compute() {
//      var tradedebtorsprevious = $('#trade-debtors-previous').val();
//      var prepaymentsandaccruedincomeprevious = $('#prepayments-and-accrued-income-previous').val();
//      var otherdebtorsprevious = $('#other-debtors-previous').val();
//      var total = +tradedebtorsprevious + +prepaymentsandaccruedincomeprevious + +otherdebtorsprevious;
//       $('#total-debtors-previous').val(total);
//     }
//     $('#trade-debtors-previous, #prepayments-and-accrued-income-previous, #other-debtors-previous').change(compute);
//});

// Loans to director note

$( document )
	.ready( function () {
		function compute() {
			var loanstodirectorsbalanceatstart = $( '#loans-to-directors-balance-at-start' )
				.val();
			var loanstodirectorsadvancesorcreditsmade = $( '#loans-to-directors-advances-or-credits-made' )
				.val();
			var loanstodirectorsadvancesorcreditsrepaid = $( '#loans-to-directors-advances-or-credits-repaid' )
				.val();
			var total = +loanstodirectorsbalanceatstart + +loanstodirectorsadvancesorcreditsmade - +loanstodirectorsadvancesorcreditsrepaid;
			$( '#loans-to-directors-balance-at-end' )
				.val( total );
		}
		$( '#loans-to-directors-balance-at-start, #loans-to-directors-advances-or-credits-made, #loans-to-directors-advances-or-credits-repaid' )
			.change( compute );
	} );

$( document )
	.ready( function () {
		function compute() {
			var loanstodirectorsbalanceatstart2 = $( '#loans-to-directors-balance-at-start-2' )
				.val();
			var loanstodirectorsadvancesorcreditsmade2 = $( '#loans-to-directors-advances-or-credits-made-2' )
				.val();
			var loanstodirectorsadvancesorcreditsrepaid2 = $( '#loans-to-directors-advances-or-credits-repaid-2' )
				.val();
			var total = +loanstodirectorsbalanceatstart2 + +loanstodirectorsadvancesorcreditsmade2 - +loanstodirectorsadvancesorcreditsrepaid2;
			$( '#loans-to-directors-balance-at-end-2' )
				.val( total );
		}
		$( '#loans-to-directors-balance-at-start-2, #loans-to-directors-advances-or-credits-made-2, #loans-to-directors-advances-or-credits-repaid-2' )
			.change( compute );
	} );