// Tangible assets: Cost AT END
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

// Tangible assets: Amortisation AT END
$(document).ready(function() {
  function compute() {
       var tangibleamortisationatstart = $('#tangible-amortisation-at-start').val();
       var tangibleamortisationadditions = $('#tangible-amortisation-additions').val();
       var tangibleamortisationchargeforyear = $('#tangible-amortisation-charge-for-year').val();
       var tangibleamortisationondisposals = $('#tangible-amortisation-on-disposals').val();
       var tangibleamortisationotheradjustments = $('#tangible-amortisation-other-adjustments').val();
       var total = +tangibleamortisationatstart + +tangibleamortisationadditions + +tangibleamortisationchargeforyear + +tangibleamortisationondisposals + +tangibleamortisationotheradjustments;
       $('#tangible-amortisation-at-end').val(total);
     }
     $('#tangible-amortisation-at-start, #tangible-amortisation-additions, #tangible-amortisation-charge-for-year, #tangible-amortisation-on-disposals, #tangible-amortisation-other-adjustments').change(compute);
});

// Tangible assets: net book value end
$(document).ready(function() {
  function compute() {
       var tangiblecostatend = $('#tangible-cost-at-end').val();
       var tangibleamortisationatend = $('#tangible-amortisation-at-end').val();
       var total = +tangiblecostatend - +tangibleamortisationatend;
       $('#tangible-net-book-value-end').val(total);
     }
     $('#tangible-cost-at-start, #tangible-cost-additions, #tangible-cost-disposals, #tangible-cost-transfers, #tangible-amortisation-at-start, #tangible-amortisation-additions, #tangible-amortisation-charge-for-year, #tangible-amortisation-on-disposals, #tangible-amortisation-other-adjustments').change(compute);
});

// Tangible assets: net book value start
$(document).ready(function() {
  function compute() {
      var tangiblecostatstart = $('#tangible-cost-at-start').val();
      var tangibleamortisationatstart = $('#tangible-amortisation-at-start').val();
       var total = +tangiblecostatstart - +tangibleamortisationatstart;
       $('#tangible-net-book-value-start').val(total);
     }
     $('#tangible-cost-at-start, #tangible-amortisation-at-start').change(compute);
});





// Intangible assets: Cost AT END
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

// Intangible assets: Amortisation AT END
$(document).ready(function() {
  function compute() {
       var intangibleamortisationatstart = $('#intangible-amortisation-at-start').val();
       var intangibleamortisationadditions = $('#intangible-amortisation-additions').val();
       var intangibleamortisationchargeforyear = $('#intangible-amortisation-charge-for-year').val();
       var intangibleamortisationondisposals = $('#intangible-amortisation-on-disposals').val();
       var intangibleamortisationotheradjustments = $('#intangible-amortisation-other-adjustments').val();
       var total = +intangibleamortisationatstart + +intangibleamortisationadditions + +intangibleamortisationchargeforyear + +intangibleamortisationondisposals + +intangibleamortisationotheradjustments;
       $('#intangible-amortisation-at-end').val(total);
     }
     $('#intangible-amortisation-at-start, #intangible-amortisation-additions, #intangible-amortisation-charge-for-year, #intangible-amortisation-on-disposals, #intangible-amortisation-other-adjustments').change(compute);
});

// Intangible assets: net book value end
$(document).ready(function() {
  function compute() {
       var intangiblecostatend = $('#intangible-cost-at-end').val();
       var intangibleamortisationatend = $('#intangible-amortisation-at-end').val();
       var total = +intangiblecostatend - +intangibleamortisationatend;
       $('#intangible-net-book-value-end').val(total);
     }
     $('#intangible-cost-at-start, #intangible-cost-additions, #intangible-cost-disposals, #intangible-cost-transfers, #intangible-amortisation-at-start, #intangible-amortisation-additions, #intangible-amortisation-charge-for-year, #intangible-amortisation-on-disposals, #intangible-amortisation-other-adjustments').change(compute);
});

// Intangible assets: net book value start
$(document).ready(function() {
  function compute() {
      var intangiblecostatstart = $('#intangible-cost-at-start').val();
      var intangibleamortisationatstart = $('#intangible-amortisation-at-start').val();
       var total = +intangiblecostatstart - +intangibleamortisationatstart;
       $('#intangible-net-book-value-start').val(total);
     }
     $('#intangible-cost-at-start, #intangible-amortisation-at-start').change(compute);
});
