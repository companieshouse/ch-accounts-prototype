// Profit and loss account calculations (for small full accounts)
// Profit and loss account calculations (for small full accounts)
// Profit and loss account calculations (for small full accounts)
// Profit and loss account calculations (for small full accounts)
// Profit and loss account calculations (for small full accounts)

// Gross profit (or loss) (current year))
$(document).ready(function() {
  function compute() {
       var plturnovercurrent = $('#pl-turnover-current').val();
       var plcostofsalescurrent = $('#pl-cost-of-sales-current').val();
       var total = +plturnovercurrent - +plcostofsalescurrent;
       $('#pl-gross-profit-current').val(total);
     }
     $('#pl-turnover-current, #pl-cost-of-sales-current').change(compute);
});

// Gross profit (or loss) (previous year))
$(document).ready(function() {
  function compute() {
    var plturnoverprevious = $('#pl-turnover-previous').val();
    var plcostofsalesprevious = $('#pl-cost-of-sales-previous').val();
    var total = +plturnoverprevious - +plcostofsalesprevious;
    $('#pl-gross-profit-previous').val(total);
  }
  $('#pl-turnover-previous, #pl-cost-of-sales-previous').change(compute);
});

// Operating (or loss) (current year))
$(document).ready(function() {
function compute() {
  var plgrossprofitcurrent = $('#pl-gross-profit-current').val();
  var pldistributioncostscurrent = $('#pl-distribution-costs-current').val();
  var pladministrativeexpensescurrent = $('#pl-administrative-expenses-current').val();
  var plotheroperatingincomecurrent = $('#pl-other-operating-income-current').val();
  var total = +plgrossprofitcurrent - +pldistributioncostscurrent - +pladministrativeexpensescurrent + +plotheroperatingincomecurrent;
     $('#pl-operating-profit-current').val(total);
   }
   $('#pl-turnover-current, #pl-cost-of-sales-current, #pl-gross-profit-current, #pl-distribution-costs-current, #pl-administrative-expenses-current, #pl-other-operating-income-current').change(compute);
});

// Operating (or loss) (previous year))
$(document).ready(function() {
function compute() {
  var plgrossprofitprevious = $('#pl-gross-profit-previous').val();
  var pldistributioncostsprevious = $('#pl-distribution-costs-previous').val();
  var pladministrativeexpensesprevious = $('#pl-administrative-expenses-previous').val();
  var plotheroperatingincomeprevious = $('#pl-other-operating-income-previous').val();
  var total = +plgrossprofitprevious - +pldistributioncostsprevious - +pladministrativeexpensesprevious + +plotheroperatingincomeprevious;
     $('#pl-operating-profit-previous').val(total);
   }
   $('#pl-turnover-previous, #pl-cost-of-sales-previous, #pl-gross-profit-previous, #pl-distribution-costs-previous, #pl-administrative-expenses-previous, #pl-other-operating-income-previous').change(compute);
});


// Profit (or loss) before tax (current year))
$(document).ready(function() {
  function compute() {
    var ploperatingprofitcurrent = $('#pl-operating-profit-current').val();
    var plinterestreceivablecurrent = $('#pl-interest-receivable-current').val();
    var plinterestpayablecurrent = $('#pl-interest-payable-current').val();
    var total = +ploperatingprofitcurrent + +plinterestreceivablecurrent - +plinterestpayablecurrent;
       $('#pl-profit-before-tax-current').val(total);
     }
     $('#pl-turnover-current, #pl-cost-of-sales-current, #pl-gross-profit-current, #pl-distribution-costs-current, #pl-administrative-expenses-current, #pl-other-operating-income-current, #pl-interest-receivable-current, #pl-interest-payable-current').change(compute);
});

// Profit (or loss) before tax (previous year))
$(document).ready(function() {
  function compute() {
    var ploperatingprofitprevious = $('#pl-operating-profit-previous').val();
    var plinterestreceivableprevious = $('#pl-interest-receivable-previous').val();
    var plinterestpayableprevious = $('#pl-interest-payable-previous').val();
    var total = +ploperatingprofitprevious + +plinterestreceivableprevious - +plinterestpayableprevious;
       $('#pl-profit-before-tax-previous').val(total);
     }
     $('#pl-turnover-previous, #pl-cost-of-sales-previous, #pl-gross-profit-previous, #pl-distribution-costs-previous, #pl-administrative-expenses-previous, #pl-other-operating-income-previous, #pl-interest-receivable-previous, #pl-interest-payable-previous').change(compute);
});

// Profit (or loss) for the financial year (current year))
$(document).ready(function() {
  function compute() {
    var plprofitbeforetaxcurrent = $('#pl-profit-before-tax-current').val();
    var pltaxonprofitcurrent = $('#pl-tax-on-profit-current').val();

    var total = +plprofitbeforetaxcurrent - +pltaxonprofitcurrent;
       $('#pl-profit-year-current').val(total);
     }
     $('#pl-turnover-current, #pl-cost-of-sales-current, #pl-gross-profit-current, #pl-distribution-costs-current, #pl-administrative-expenses-current, #pl-other-operating-income-current, #pl-interest-receivable-current, #pl-interest-payable-current, #pl-profit-before-tax-current, #pl-tax-on-profit-current').change(compute);
});

// Profit (or loss) for the financial year (previous year))
$(document).ready(function() {
  function compute() {
    var plprofitbeforetaxprevious = $('#pl-profit-before-tax-previous').val();
    var pltaxonprofitprevious = $('#pl-tax-on-profit-previous').val();

    var total = +plprofitbeforetaxprevious - +pltaxonprofitprevious;
       $('#pl-profit-year-previous').val(total);
     }
     $('#pl-turnover-previous, #pl-cost-of-sales-previous, #pl-gross-profit-previous, #pl-distribution-costs-previous, #pl-administrative-expenses-previous, #pl-other-operating-income-previous, #pl-interest-receivable-previous, #pl-interest-payable-previous, #pl-profit-before-tax-previous, #pl-tax-on-profit-previous').change(compute);
});
