// Total fixed assets (current year))
$(document).ready(function() {
  function compute() {
       var intangibleassetscurrent = $('#intangible-assets-current').val();
       var tangibleassetscurrent = $('#tangible-assets-current').val();
       var investmentsfixedassetscurrent = $('#investments-fixed-assets-current').val();
      // var total = +intangibleassetscurrent + +tangibleassetscurrent + +investmentsfixedassetscurrent;
       var total = tangibleassetscurrent; //For Release 1 only, when we only want tangible assets

       $('#total-fixed-assets-current').val(total);
     }
     $('#intangible-assets-current, #tangible-assets-current, #investments-fixed-assets-current').change(compute);
});

// Total fixed assets (previous year))
$(document).ready(function() {
  function compute() {
       var intangibleassetsprevious = $('#intangible-assets-previous').val();
       var tangibleassetsprevious = $('#tangible-assets-previous').val();
       var investmentsfixedassetsprevious = $('#investments-fixed-assets-previous').val();
       //var total = +intangibleassetsprevious + +tangibleassetsprevious + +investmentsfixedassetsprevious;
       var total = tangibleassetsprevious; //For Release 1 only, when we only want tangible assets

       $('#total-fixed-assets-previous').val(total);
     }
     $('#intangible-assets-previous, #tangible-assets-previous, #investments-fixed-assets-previous').change(compute);
});

// Total current assets (current year))
$(document).ready(function() {
  function compute() {
       var stockscurrent = $('#stocks-current').val();
       var debtorscurrent = $('#debtors-current').val();
       var cashatbankandinhandcurrent = $('#cash-at-bank-and-in-hand-current').val();
       var investmentscurrentassetscurrent = $('#investments-current-assets-current').val();
       var total = +stockscurrent + +debtorscurrent + +cashatbankandinhandcurrent + +investmentscurrentassetscurrent;
       $('#total-current-assets-current').val(total);
     }
     $('#stocks-current, #debtors-current, #cash-at-bank-and-in-hand-current, #investments-current-assets-current').change(compute);
});

// Total current assets (previous year))
$(document).ready(function() {
  function compute() {
       var stocksprevious = $('#stocks-previous').val();
       var debtorsprevious = $('#debtors-previous').val();
       var cashatbankandinhandprevious = $('#cash-at-bank-and-in-hand-previous').val();
       var investmentscurrentassetsprevious = $('#investments-current-assets-previous').val();
       var total = +stocksprevious + +debtorsprevious + +cashatbankandinhandprevious + +investmentscurrentassetsprevious;
       $('#total-current-assets-previous').val(total);
     }
     $('#stocks-previous, #debtors-previous, #cash-at-bank-and-in-hand-previous, #investments-current-assets-previous').change(compute);
});

// Net current assets (liabilities) (current year))
$(document).ready(function() {
  function compute() {
       var totalcurrentassetscurrent = $('#total-current-assets-current').val();
       var creditorsamountsfallingduewithinoneyearcurrent = $('#creditors-amounts-falling-due-within-one-year-current').val();
       var total = +totalcurrentassetscurrent - +creditorsamountsfallingduewithinoneyearcurrent;
       $('#net-current-assets-liabilities-current').val(total);
     }
     $('#total-current-assets-current, #creditors-amounts-falling-due-within-one-year-current').change(compute);
});

// Net current assets (liabilities) (previous year))
$(document).ready(function() {
  function compute() {
       var totalcurrentassetsprevious = $('#total-current-assets-previous').val();
       var creditorsamountsfallingduewithinoneyearprevious = $('#creditors-amounts-falling-due-within-one-year-previous').val();
       var total = +totalcurrentassetsprevious - +creditorsamountsfallingduewithinoneyearprevious;
       $('#net-current-assets-liabilities-previous').val(total);
     }
     $('#total-current-assets-previous, #creditors-amounts-falling-due-within-one-year-previous').change(compute);
});


// Total assets less current liabilities (current year))
$(document).ready(function() {
  function compute() {
       var totalfixedassetscurrent = $('#total-fixed-assets-current').val();
       var netcurrentassetsliabilitiescurrent = $('#net-current-assets-liabilities-current').val();
       var total = +totalfixedassetscurrent + +netcurrentassetsliabilitiescurrent;
       $('#total-assets-less-current-liabilities-current').val(total);
     }
     $('#total-fixed-assets-current, #net-current-assets-liabilities-current, #creditors-amounts-falling-due-within-one-year-current').change(compute);
});

// Total assets less current liabilities (previous year))
$(document).ready(function() {
  function compute() {
       var totalfixedassetsprevious = $('#total-fixed-assets-previous').val();
       var netcurrentassetsliabilitiesprevious = $('#net-current-assets-liabilities-previous').val();
       var total = +totalfixedassetsprevious + +netcurrentassetsliabilitiesprevious;
       $('#total-assets-less-current-liabilities-previous').val(total);
     }
     $('#total-fixed-assets-previous, #net-current-assets-liabilities-previous, #creditors-amounts-falling-due-within-one-year-previous').change(compute);
});

//Total net assets (liabilities)  (current year)
$(document).ready(function() {
  function compute() {
       var totalassetslesscurrentliabilitiescurrent = $('#total-assets-less-current-liabilities-current').val();
       var creditorsamountsfallingdueaftermorethanoneyearcurrent = $('#creditors-amounts-falling-due-after-more-than-one-year-current').val();
       var provisionforliabilitiescurrent = $('#provision-for-liabilities-current').val();
       var total = +totalassetslesscurrentliabilitiescurrent - +creditorsamountsfallingdueaftermorethanoneyearcurrent - +provisionforliabilitiescurrent;
       $('#total-net-assets-liabilities-current').val(total);
     }
     $('#total-assets-less-current-liabilities-current, #creditors-amounts-falling-due-after-more-than-one-year-current, #provision-for-liabilities-current').change(compute);
});

//Total net assets (liabilities)  (previous year)
$(document).ready(function() {
  function compute() {
       var totalassetslesscurrentliabilitiesprevious = $('#total-assets-less-current-liabilities-previous').val();
       var creditorsamountsfallingdueaftermorethanoneyearprevious = $('#creditors-amounts-falling-due-after-more-than-one-year-previous').val();
       var provisionforliabilitiesprevious = $('#provision-for-liabilities-previous').val();
       var total = +totalassetslesscurrentliabilitiesprevious - +creditorsamountsfallingdueaftermorethanoneyearprevious - +provisionforliabilitiesprevious;
       $('#total-net-assets-liabilities-previous').val(total);
     }
     $('#total-assets-less-current-liabilities-previous, #creditors-amounts-falling-due-after-more-than-one-year-previous, #provision-for-liabilities-previous').change(compute);
});

// Total shareholders' funds (current year)
$(document).ready(function() {
  function compute() {
       var calledupsharecapitalcurrent = $('#called-up-share-capital-current').val();
       var sharepremiumaccountcurrent = $('#share-premium-account-current').val();
       var revaluationreservecurrent = $('#revaluation-reserve-current').val();
       var otherreservescurrent = $('#other-reserves-current').val();
       var profitandlossaccountcurrent = $('#profit-and-loss-account-current').val();
       //var total = +calledupsharecapitalcurrent + +sharepremiumaccountcurrent + +revaluationreservecurrent + +otherreservescurrent + +profitandlossaccountcurrent;
       var total = +calledupsharecapitalcurrent + +sharepremiumaccountcurrent + +otherreservescurrent + +profitandlossaccountcurrent; // For Release 1 only, when we don't ask for revaluation reserve
       $('#total-shareholders-funds-current').val(total);
     }
     $('#called-up-share-capital-current, #share-premium-account-current, #revaluation-reserve-current, #other-reserves-current, #profit-and-loss-account-current').change(compute);
});

// Total shareholders' funds (previous year)
$(document).ready(function() {
  function compute() {
       var calledupsharecapitalprevious = $('#called-up-share-capital-previous').val();
       var sharepremiumaccountprevious = $('#share-premium-account-previous').val();
       var revaluationreserveprevious = $('#revaluation-reserve-previous').val();
       var otherreservesprevious = $('#other-reserves-previous').val();
       var profitandlossaccountprevious = $('#profit-and-loss-account-previous').val();
       //var total = +calledupsharecapitalprevious + +sharepremiumaccountprevious + +revaluationreserveprevious + +otherreservesprevious + +profitandlossaccountprevious;
       var total = +calledupsharecapitalprevious + +sharepremiumaccountprevious + +otherreservesprevious + +profitandlossaccountprevious; // For Release 1 only, when we don't ask for revaluation reserve

       $('#total-shareholders-funds-previous').val(total);
     }
     $('#called-up-share-capital-previous, #share-premium-account-previous, #revaluation-reserve-previous, #other-reserves-previous, #profit-and-loss-account-previous').change(compute);
});


// Show a warning when user tries to amend a figure

$('#tangible-assets-current').change(function() {
    $('div.warning-with-triangle').show();
    $(document).bind('focusin.warning-with-triangle click.warning-with-triangle',function(e) {
        if ($(e.target).closest('.warning-with-triangle, #tangible-assets-current').length) return;
        $(document).unbind('.warning-with-triangle');
        $('div.warning-with-triangle').hide();
    });
});
$('div.warning-with-triangle').hide();
