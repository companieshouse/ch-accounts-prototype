// Tangible assets note: Cost AT END
$(document).ready(function() {
  function compute() {
       var tangiblecostatstart = $('#tangible-cost-at-start').val();
       var tangiblecostadditions = $('#tangible-cost-additions').val();
       var tangiblecostdisposals = $('#tangible-cost-disposals').val();
       var tangiblecosttransfers = $('#tangible-cost-transfers').val();
       var total = +tangiblecostatstart + +tangiblecostadditions + +tangiblecostdisposals + +tangiblecosttransfers;
       $('#tangible-cost-at-end').val(total);
     }
     $('#tangible-cost-at-start, #tangible-cost-additions, #tangible-cost-disposals, #tangible-cost-transfers').change(compute);
});

// Tangible assets note: Amortisation AT END
$(document).ready(function() {
  function compute() {
       var tangibleamortisationatstart = $('#tangible-amortisation-at-start').val();
       var tangibleamortisationchargeforyear = $('#tangible-amortisation-charge-for-year').val();
       var tangibleamortisationondisposals = $('#tangible-amortisation-on-disposals').val();
       var tangibleamortisationotheradjustments = $('#tangible-amortisation-other-adjustments').val();
       var total = +tangibleamortisationatstart + +tangibleamortisationchargeforyear + +tangibleamortisationondisposals + +tangibleamortisationotheradjustments;
       $('#tangible-amortisation-at-end').val(total);
     }
     $('#tangible-amortisation-at-start, #tangible-amortisation-charge-for-year, #tangible-amortisation-on-disposals, #tangible-amortisation-other-adjustments').change(compute);
});

// Tangible assets note: net book value end
$(document).ready(function() {
  function compute() {
       var tangiblecostatend = $('#tangible-cost-at-end').val();
       var tangibleamortisationatend = $('#tangible-amortisation-at-end').val();
       var total = +tangiblecostatend - +tangibleamortisationatend;
       $('#tangible-net-book-value-end').val(total);
     }
     $('#tangible-cost-at-start, #tangible-cost-additions, #tangible-cost-disposals, #tangible-cost-transfers, #tangible-amortisation-at-start, #tangible-amortisation-charge-for-year, #tangible-amortisation-on-disposals, #tangible-amortisation-other-adjustments').change(compute);
});

// Tangible assets note: net book value start
$(document).ready(function() {
  function compute() {
      var tangiblecostatstart = $('#tangible-cost-at-start').val();
      var tangibleamortisationatstart = $('#tangible-amortisation-at-start').val();
       var total = +tangiblecostatstart - +tangibleamortisationatstart;
       $('#tangible-net-book-value-start').val(total);
     }
     $('#tangible-cost-at-start, #tangible-amortisation-at-start').change(compute);
});





// Intangible assets note: Cost AT END
$(document).ready(function() {
  function compute() {
       var intangiblecostatstart = $('#intangible-cost-at-start').val();
       var intangiblecostadditions = $('#intangible-cost-additions').val();
       var intangiblecostdisposals = $('#intangible-cost-disposals').val();
       var intangiblecosttransfers = $('#intangible-cost-transfers').val();
       var total = +intangiblecostatstart + +intangiblecostadditions + +intangiblecostdisposals + +intangiblecosttransfers;
       $('#intangible-cost-at-end').val(total);
     }
     $('#intangible-cost-at-start, #intangible-cost-additions, #intangible-cost-disposals, #intangible-cost-transfers').change(compute);
});

// Intangible assets note: Amortisation AT END
$(document).ready(function() {
  function compute() {
       var intangibleamortisationatstart = $('#intangible-amortisation-at-start').val();
       var intangibleamortisationchargeforyear = $('#intangible-amortisation-charge-for-year').val();
       var intangibleamortisationondisposals = $('#intangible-amortisation-on-disposals').val();
       var intangibleamortisationotheradjustments = $('#intangible-amortisation-other-adjustments').val();
       var total = +intangibleamortisationatstart + +intangibleamortisationchargeforyear + +intangibleamortisationondisposals + +intangibleamortisationotheradjustments;
       $('#intangible-amortisation-at-end').val(total);
     }
     $('#intangible-amortisation-at-start, #intangible-amortisation-charge-for-year, #intangible-amortisation-on-disposals, #intangible-amortisation-other-adjustments').change(compute);
});

// Intangible assets note: net book value end
$(document).ready(function() {
  function compute() {
       var intangiblecostatend = $('#intangible-cost-at-end').val();
       var intangibleamortisationatend = $('#intangible-amortisation-at-end').val();
       var total = +intangiblecostatend - +intangibleamortisationatend;
       $('#intangible-net-book-value-end').val(total);
     }
     $('#intangible-cost-at-start, #intangible-cost-additions, #intangible-cost-disposals, #intangible-cost-transfers, #intangible-amortisation-at-start, #intangible-amortisation-charge-for-year, #intangible-amortisation-on-disposals, #intangible-amortisation-other-adjustments').change(compute);
});

// Intangible assets note: net book value start
$(document).ready(function() {
  function compute() {
      var intangiblecostatstart = $('#intangible-cost-at-start').val();
      var intangibleamortisationatstart = $('#intangible-amortisation-at-start').val();
       var total = +intangiblecostatstart - +intangibleamortisationatstart;
       $('#intangible-net-book-value-start').val(total);
     }
     $('#intangible-cost-at-start, #intangible-amortisation-at-start').change(compute);
});

// Revaluation reserve note: End

$(document).ready(function() {
  function compute() {
      var revaluationbalanceatstart = $('#revaluation-balance-at-start').val();
      var surplusordeficitarisingfromrevaluation = $('#surplus-or-deficit-arising-from-revaluation').val();
       var total = +revaluationbalanceatstart + +surplusordeficitarisingfromrevaluation;
       $('#revaluation-balance-at-end').val(total);
     }
     $('#revaluation-balance-at-start, #surplus-or-deficit-arising-from-revaluation').change(compute);
});



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

$(document).ready(function() {
  function compute() {
      var loanstodirectorsbalanceatstart = $('#loans-to-directors-balance-at-start').val();
      var loanstodirectorsadvancesorcreditsmade = $('#loans-to-directors-advances-or-credits-made').val();
      var loanstodirectorsadvancesorcreditsrepaid = $('#loans-to-directors-advances-or-credits-repaid').val();
      var total = +loanstodirectorsbalanceatstart + +loanstodirectorsadvancesorcreditsmade - +loanstodirectorsadvancesorcreditsrepaid;
       $('#loans-to-directors-balance-at-end').val(total);
     }
     $('#loans-to-directors-balance-at-start, #loans-to-directors-advances-or-credits-made, #loans-to-directors-advances-or-credits-repaid').change(compute);
});
