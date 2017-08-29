// Intangible assets (for small full accounts)

      // COST
          // Cost at start
          $(document).ready(function() {
            function compute() {
                 var coststartgoodwill = $('#cost-start-goodwill').val();
                 var coststartother = $('#cost-start-other').val();
                 var total = +coststartgoodwill + +coststartother;
                 $('#cost-start-total').val(total);
               }
               $('#cost-start-goodwill, #cost-start-other').change(compute);
          });

          // Additions
          $(document).ready(function() {
            function compute() {
                 var additionsgoodwill = $('#additions-goodwill').val();
                 var additionsother = $('#additions-other').val();
                 var total = +additionsgoodwill + +additionsother;
                 $('#additions-total').val(total);
               }
               $('#additions-goodwill, #additions-other').change(compute);
          });

          // Disposals
          $(document).ready(function() {
            function compute() {
                 var disposalsgoodwill = $('#disposals-goodwill').val();
                 var disposalsother = $('#disposals-other').val();
                 var total = +disposalsgoodwill + +disposalsother;
                 $('#disposals-total').val(total);
               }
               $('#disposals-goodwill, #disposals-other').change(compute);
          });

          // Revaluations
          $(document).ready(function() {
            function compute() {
                 var revaluationsgoodwill = $('#revaluations-goodwill').val();
                 var revaluationsother = $('#revaluations-other').val();
                 var total = +revaluationsgoodwill + +revaluationsother;
                 $('#revaluations-total').val(total);
               }
               $('#revaluations-goodwill, #revaluations-other').change(compute);
          });

          // Transfers
          $(document).ready(function() {
            function compute() {
                 var transfersgoodwill = $('#transfers-goodwill').val();
                 var transfersother = $('#transfers-other').val();
                 var total = +transfersgoodwill + +transfersother;
                 $('#transfers-total').val(total);
               }
               $('#transfers-goodwill, #transfers-other').change(compute);
          });


          // Cost at end (Goodwill)
          $(document).ready(function() {
            function compute() {
                 var coststartgoodwill = $('#cost-start-goodwill').val();
                 var additionsgoodwill = $('#additions-goodwill').val();
                 var disposalsgoodwill = $('#disposals-goodwill').val();
                 var revaluationsgoodwill = $('#revaluations-goodwill').val();
                 var transfersgoodwill = $('#transfers-goodwill').val();
                 var total = +coststartgoodwill + +additionsgoodwill - +disposalsgoodwill + +revaluationsgoodwill + +transfersgoodwill;
                 $('#cost-end-goodwill').val(total);
               }
               $('#cost-start-goodwill, #additions-goodwill, #disposals-goodwill, #revaluations-goodwill, #transfers-goodwill').change(compute);
          });

          // Cost at end (Other)
          $(document).ready(function() {
            function compute() {
                 var coststartother = $('#cost-start-other').val();
                 var additionsother = $('#additions-other').val();
                 var disposalsother = $('#disposals-other').val();
                 var revaluationsother = $('#revaluations-other').val();
                 var transfersother = $('#transfers-other').val();
                 var total = +coststartother + +additionsother - +disposalsother + +revaluationsother + +transfersother;
                 $('#cost-end-other').val(total);
               }
               $('#cost-start-other, #additions-other, #disposals-other, #revaluations-other, #transfers-other').change(compute);
          });

          // Cost at end (Total)
          $(document).ready(function() {
            function compute() {
                 var coststarttotal = $('#cost-start-total').val();
                 var additionstotal = $('#additions-total').val();
                 var disposalstotal = $('#disposals-total').val();
                 var revaluationstotal = $('#revaluations-total').val();
                 var transferstotal = $('#transfers-total').val();
                     var coststartgoodwill = $('#cost-start-goodwill').val();
                     var coststartother = $('#cost-start-other').val();
                     var additionsgoodwill = $('#additions-goodwill').val();
                     var additionsother = $('#additions-other').val();
                     var disposalsgoodwill = $('#disposals-goodwill').val();
                     var disposalsother = $('#disposals-other').val();
                     var revaluationsgoodwill = $('#revaluations-goodwill').val();
                     var revaluationsother = $('#revaluations-other').val();
                     var transfersgoodwill = $('#transfers-goodwill').val();
                     var transfersother = $('#transfers-other').val();
                 var total = +coststarttotal + +additionstotal - +disposalstotal + +revaluationstotal + +transferstotal;
                 $('#cost-end-total').val(total);
               }
               $('#cost-start-goodwill, #cost-start-other, #additions-goodwill, #additions-other, #disposals-goodwill, #disposals-other, #revaluations-goodwill, #revaluations-other, #transfers-goodwill, #transfers-other').change(compute);
          });


        // AMORTISATION
              // Amortisation at start
              $(document).ready(function() {
                function compute() {
                     var amortisationstartgoodwill = $('#amortisation-start-goodwill').val();
                     var amortisationstartother = $('#amortisation-start-other').val();
                     var total = +amortisationstartgoodwill + +amortisationstartother;
                     $('#amortisation-start-total').val(total);
                   }
                   $('#amortisation-start-goodwill, #amortisation-start-other').change(compute);
              });
              // Charge for year
              $(document).ready(function() {
                function compute() {
                     var chargeforyeargoodwill = $('#charge-year-goodwill').val();
                     var chargeforyearother = $('#charge-year-other').val();
                     var total = +chargeforyeargoodwill + +chargeforyearother;
                     $('#charge-year-total').val(total);
                   }
                   $('#charge-year-goodwill, #charge-year-other').change(compute);
              });
              // On disposals
              $(document).ready(function() {
                function compute() {
                     var ondisposalsgoodwill = $('#on-disposals-goodwill').val();
                     var ondisposalsother = $('#on-disposals-other').val();
                     var total = +ondisposalsgoodwill + +ondisposalsother;
                     $('#on-disposals-total').val(total);
                   }
                   $('#on-disposals-goodwill, #on-disposals-other').change(compute);
              });
              // Other adjustments
              $(document).ready(function() {
                function compute() {
                     var otheradjustmentsgoodwill = $('#other-adjustments-goodwill').val();
                     var otheradjustmentsother = $('#other-adjustments-other').val();
                     var total = +otheradjustmentsgoodwill + +otheradjustmentsother;
                     $('#other-adjustments-total').val(total);
                   }
                   $('#other-adjustments-goodwill, #other-adjustments-other').change(compute);
              });
              // Amortisation at end (Goodwill)
              $(document).ready(function() {
                function compute() {
                    var amortisationstartgoodwill = $('#amortisation-start-goodwill').val();
                    var chargeforyeargoodwill = $('#charge-year-goodwill').val();
                    var ondisposalsgoodwill = $('#on-disposals-goodwill').val();
                    var otheradjustmentsgoodwill = $('#other-adjustments-goodwill').val();
                     var total = +amortisationstartgoodwill + +chargeforyeargoodwill - +ondisposalsgoodwill + +otheradjustmentsgoodwill;
                     $('#amortisation-end-goodwill').val(total);
                   }
                   $('#amortisation-start-goodwill, #charge-year-goodwill, #on-disposals-goodwill, #other-adjustments-goodwill').change(compute);
              });
              // Amortisation at end (Other)
              $(document).ready(function() {
                function compute() {
                    var amortisationstartother = $('#amortisation-start-other').val();
                    var chargeforyearother = $('#charge-year-other').val();
                    var ondisposalsother = $('#on-disposals-other').val();
                    var otheradjustmentsother = $('#other-adjustments-other').val();
                     var total = +amortisationstartother + +chargeforyearother - +ondisposalsother + +otheradjustmentsother;
                     $('#amortisation-end-other').val(total);
                   }
                   $('#amortisation-start-other, #charge-year-other, #on-disposals-other, #other-adjustments-other').change(compute);
              });
              // Amortisation at end (Total)
              $(document).ready(function() {
                function compute() {
                     var amortisationstarttotal = $('#amortisation-start-total').val();
                     var chargeforyeartotal = $('#charge-year-total').val();
                     var ondisposalstotal = $('#on-disposals-total').val();
                     var otheradjustmentstotal = $('#other-adjustments-total').val();
                       var amortisationstartgoodwill = $('#amortisation-start-goodwill').val();
                       var amortisationstartother = $('#amortisation-start-other').val();
                       var chargeforyeargoodwill = $('#charge-year-goodwill').val();
                       var chargeforyearother = $('#charge-year-other').val();
                       var ondisposalsgoodwill = $('#on-disposals-goodwill').val();
                       var ondisposalsother = $('#on-disposals-other').val();
                       var otheradjustmentsgoodwill = $('#other-adjustments-goodwill').val();
                       var otheradjustmentsother = $('#other-adjustments-other').val();
                     var total = +amortisationstarttotal + +chargeforyeartotal - +ondisposalstotal + +otheradjustmentstotal;
                     $('#amortisation-end-total').val(total);
                   }
                   $('#amortisation-start-goodwill, #amortisation-start-other, #charge-year-goodwill, #charge-year-other, #on-disposals-goodwill, #on-disposals-other, #other-adjustments-goodwill, #other-adjustments-other').change(compute);
              });


            // NET BOOK VALUE
                  // Net book value at end (Goodwill)
                  $(document).ready(function() {
                    function compute() {
                         var costendgoodwill = $('#cost-end-goodwill').val();
                         var amortisationendgoodwill = $('#amortisation-end-goodwill').val();
                         var total = +costendgoodwill - +amortisationendgoodwill;
                         $('#net-book-value-end-goodwill').val(total);
                       }
                       $('#cost-start-goodwill, #additions-goodwill, #disposals-goodwill, #revaluations-goodwill, #transfers-goodwill, #amortisation-start-goodwill, #charge-year-goodwill, #on-disposals-goodwill, #other-adjustments-goodwill').change(compute);
                  });
                  // Net book value at end (Other)
                  $(document).ready(function() {
                    function compute() {
                         var costendother = $('#cost-end-other').val();
                         var amortisationendother = $('#amortisation-end-other').val();
                         var total = +costendother - +amortisationendother;
                         $('#net-book-value-end-other').val(total);
                       }
                       $('#cost-start-other, #additions-other, #disposals-other, #revaluations-other, #transfers-other, #amortisation-start-other, #charge-year-other, #on-disposals-other, #other-adjustments-other').change(compute);
                  });
                  // Net book value at end (Total)
                  $(document).ready(function() {
                    function compute() {
                         var costendtotal = $('#cost-end-total').val();
                         var amortisationendtotal = $('#amortisation-end-total').val();
                         var total = +costendtotal - +amortisationendtotal;
                         $('#net-book-value-end-total').val(total);
                       }
                       $('#cost-start-goodwill, #additions-goodwill, #disposals-goodwill, #revaluations-goodwill, #transfers-goodwill, #amortisation-start-goodwill, #charge-year-goodwill, #on-disposals-goodwill, #other-adjustments-goodwill, #cost-start-other, #additions-other, #disposals-other, #revaluations-other, #transfers-other, #amortisation-start-other, #charge-year-other, #on-disposals-other, #other-adjustments-other').change(compute);
                  });
                  // Net book value at start (Goodwill)
                  $(document).ready(function() {
                    function compute() {
                         var coststartgoodwill = $('#cost-start-goodwill').val();
                         var amortisationstartgoodwill = $('#amortisation-start-goodwill').val();
                         var total = +coststartgoodwill - +amortisationstartgoodwill;
                         $('#net-book-value-start-goodwill').val(total);
                       }
                       $('#cost-start-goodwill, #amortisation-start-goodwill').change(compute);
                  });
                  // Net book value at start (Other)
                  $(document).ready(function() {
                    function compute() {
                         var coststartother = $('#cost-start-other').val();
                         var amortisationstartother = $('#amortisation-start-other').val();
                         var total = +coststartother - +amortisationstartother;
                         $('#net-book-value-start-other').val(total);
                       }
                       $('#cost-start-other, #amortisation-start-other').change(compute);
                  });
                  // Net book value at start (Other)
                  $(document).ready(function() {
                    function compute() {
                         var coststarttotal = $('#cost-start-total').val();
                         var amortisationstarttotal = $('#amortisation-start-total').val();
                         var total = +coststarttotal - +amortisationstarttotal;
                         $('#net-book-value-start-total').val(total);
                       }
                       $('#cost-start-goodwill, #additions-goodwill, #disposals-goodwill, #revaluations-goodwill, #transfers-goodwill, #amortisation-start-goodwill, #charge-year-goodwill, #on-disposals-goodwill, #other-adjustments-goodwill, #cost-start-other, #additions-other, #disposals-other, #revaluations-other, #transfers-other, #amortisation-start-other, #charge-year-other, #on-disposals-other, #other-adjustments-other').change(compute);
                  });

// Intangible assets (for small full accounts)

      // COST
          // Cost at start
          $(document).ready(function() {
            function compute() {
                 var coststartlandbuildings = $('#cost-start-land-buildings').val();
                 var coststartplantmachinery = $('#cost-start-plant-machinery').val();
                 var coststartfixturesfittings = $('#cost-start-fixtures-fittings').val();
                 var coststartofficeequipment = $('#cost-start-office-equipment').val();
                 var coststartmotorvehicles = $('#cost-start-motor-vehicles').val();
                 var total = +coststartlandbuildings + +coststartplantmachinery + +coststartfixturesfittings + +coststartofficeequipment + +coststartmotorvehicles;
                 $('#cost-start-total').val(total);
               }
               $('#cost-start-land-buildings, #cost-start-plant-machinery, #cost-start-fixtures-fittings, #cost-start-office-equipment, #cost-start-motor-vehicles').change(compute);
          });
          // Additions
          $(document).ready(function() {
            function compute() {
                 var additionslandbuildings = $('#additions-land-buildings').val();
                 var additionsplantmachinery = $('#additions-plant-machinery').val();
                 var additionsfixturesfittings = $('#additions-fixtures-fittings').val();
                 var additionsofficeequipment = $('#additions-office-equipment').val();
                 var additionsmotorvehicles = $('#additions-motor-vehicles').val();
                 var total = +additionslandbuildings + +additionsplantmachinery + +additionsfixturesfittings + +additionsofficeequipment + +additionsmotorvehicles;
                 $('#additions-total').val(total);
               }
               $('#additions-land-buildings, #additions-plant-machinery, #additions-fixtures-fittings, #additions-office-equipment, #additions-motor-vehicles').change(compute);
          });
          // Disposals
          $(document).ready(function() {
            function compute() {
                 var disposalslandbuildings = $('#disposals-land-buildings').val();
                 var disposalsplantmachinery = $('#disposals-plant-machinery').val();
                 var disposalsfixturesfittings = $('#disposals-fixtures-fittings').val();
                 var disposalsofficeequipment = $('#disposals-office-equipment').val();
                 var disposalsmotorvehicles = $('#disposals-motor-vehicles').val();
                 var total = +disposalslandbuildings + +disposalsplantmachinery + +disposalsfixturesfittings + +disposalsofficeequipment + +disposalsmotorvehicles;
                 $('#disposals-total').val(total);
               }
               $('#disposals-land-buildings, #disposals-plant-machinery, disposals-fixtures-fittings, #disposals-office-equipment, #disposals-motor-vehicles').change(compute);
          });
          // Revaluations
          $(document).ready(function() {
            function compute() {
                 var revaluationslandbuildings = $('#revaluations-land-buildings').val();
                 var revaluationsplantmachinery = $('#revaluations-plant-machinery').val();
                 var revaluationsfixturesfittings = $('#revaluations-fixtures-fittings').val();
                 var revaluationsofficeequipment = $('#revaluations-office-equipment').val();
                 var revaluationsmotorvehicles = $('#revaluations-motor-vehicles').val();
                 var total = +revaluationslandbuildings + +revaluationsplantmachinery + +revaluationsfixturesfittings + +revaluationsofficeequipment + +revaluationsmotorvehicles;
                 $('#revaluations-total').val(total);
               }
               $('#revaluations-land-buildings, #revaluations-plant-machinery, revaluations-fixtures-fittings, #revaluations-office-equipment, #revaluations-motor-vehicles').change(compute);
          });
          // Transfers
          $(document).ready(function() {
            function compute() {
                 var transferslandbuildings = $('#transfers-land-buildings').val();
                 var transfersplantmachinery = $('#transfers-plant-machinery').val();
                 var transfersfixturesfittings = $('#transfers-fixtures-fittings').val();
                 var transfersofficeequipment = $('#transfers-office-equipment').val();
                 var transfersmotorvehicles = $('#transfers-motor-vehicles').val();
                 var total = +transferslandbuildings + +transfersplantmachinery + +transfersfixturesfittings + +transfersofficeequipment + +transfersmotorvehicles;
                 $('#transfers-total').val(total);
               }
               $('#transfers-land-buildings, #transfers-plant-machinery, transfers-fixtures-fittings, #transfers-office-equipment, #transfers-motor-vehicles').change(compute);
          });
          // Cost at end (Land and buildings)
          $(document).ready(function() {
            function compute() {
                 var coststartlandbuildings = $('#cost-start-land-buildings').val();
                 var additionslandbuildings = $('#additions-land-buildings').val();
                 var disposalslandbuildings = $('#disposals-land-buildings').val();
                 var revaluationslandbuildings = $('#revaluations-land-buildings').val();
                 var transferslandbuildings = $('#transfers-land-buildings').val();
                 var total = +coststartlandbuildings + +additionslandbuildings - +disposalslandbuildings + +revaluationslandbuildings + +transferslandbuildings;
                 $('#cost-end-land-buildings').val(total);
               }
               $('#cost-start-land-buildings, #additions-land-buildings, #disposals-land-buildings, #revaluations-land-buildings, #transfers-land-buildings').change(compute);
          });
          // Cost at end (Plant and machinery)
          $(document).ready(function() {
            function compute() {
                 var coststartplantmachinery = $('#cost-start-plant-machinery').val();
                 var additionsplantmachinery = $('#additions-plant-machinery').val();
                 var disposalsplantmachinery = $('#disposals-plant-machinery').val();
                 var revaluationsplantmachinery = $('#revaluations-plant-machinery').val();
                 var transfersplantmachinery = $('#transfers-plant-machinery').val();
                 var total = +coststartplantmachinery + +additionsplantmachinery - +disposalsplantmachinery + +revaluationsplantmachinery + +transfersplantmachinery;
                 $('#cost-end-plant-machinery').val(total);
               }
               $('#cost-start-plant-machinery, #additions-plant-machinery, #disposals-plant-machinery, #revaluations-plant-machinery, #transfers-plant-machinery').change(compute);
          });
          // Cost at end (Fixtures and fittings)
          $(document).ready(function() {
            function compute() {
                 var coststartfixturesfittings = $('#cost-start-fixtures-fittings').val();
                 var additionsfixturesfittings = $('#additions-fixtures-fittings').val();
                 var disposalsfixturesfittings = $('#disposals-fixtures-fittings').val();
                 var revaluationsfixturesfittings = $('#revaluations-fixtures-fittings').val();
                 var transfersfixturesfittings = $('#transfers-fixtures-fittings').val();
                 var total = +coststartfixturesfittings + +additionsfixturesfittings - +disposalsfixturesfittings + +revaluationsfixturesfittings + +transfersfixturesfittings;
                 $('#cost-end-fixtures-fittings').val(total);
               }
               $('#cost-start-fixtures-fittings, #additions-fixtures-fittings, #disposals-fixtures-fittings, #revaluations-fixtures-fittings, #transfers-fixtures-fittings').change(compute);
          });
          // Cost at end (Office equipment)
          $(document).ready(function() {
            function compute() {
                 var coststartofficeequipment = $('#cost-start-office-equipment').val();
                 var additionsofficeequipment = $('#additions-office-equipment').val();
                 var disposalsofficeequipment = $('#disposals-office-equipment').val();
                 var revaluationsofficeequipment = $('#revaluations-office-equipment').val();
                 var transfersofficeequipment = $('#transfers-office-equipment').val();
                 var total = +coststartofficeequipment + +additionsofficeequipment - +disposalsofficeequipment + +revaluationsofficeequipment + +transfersofficeequipment;
                 $('#cost-end-office-equipment').val(total);
               }
               $('#cost-start-office-equipment, #additions-office-equipment, #disposals-office-equipment, #revaluations-office-equipment, #transfers-office-equipment').change(compute);
          });
          // Cost at end (Motor vehicles)
          $(document).ready(function() {
            function compute() {
                 var coststartmotorvehicles = $('#cost-start-motor-vehicles').val();
                 var additionsmotorvehicles = $('#additions-motor-vehicles').val();
                 var disposalsmotorvehicles = $('#disposals-motor-vehicles').val();
                 var revaluationsmotorvehicles = $('#revaluations-motor-vehicles').val();
                 var transfersmotorvehicles = $('#transfers-motor-vehicles').val();
                 var total = +coststartmotorvehicles + +additionsmotorvehicles - +disposalsmotorvehicles + +revaluationsmotorvehicles + +transfersmotorvehicles;
                 $('#cost-end-motor-vehicles').val(total);
               }
               $('#cost-start-motor-vehicles, #additions-motor-vehicles, #disposals-motor-vehicles, #revaluations-motor-vehicles, #transfers-motor-vehicles').change(compute);
          });
          // Cost at end (Total)
          $(document).ready(function() {
            function compute() {
                 var coststarttotal = $('#cost-start-total').val();
                 var additionstotal = $('#additions-total').val();
                 var disposalstotal = $('#disposals-total').val();
                 var revaluationstotal = $('#revaluations-total').val();
                 var transferstotal = $('#transfers-total').val();
                     var coststartlandbuildings = $('#cost-start-land-buildings').val();
                     var coststartplantmachinery = $('#cost-start-plant-machinery').val();
                     var coststartfixturesfittings = $('#cost-start-fixtures-fittings').val();
                     var coststartofficeequipment = $('#cost-start-office-equipment').val();
                     var coststartmotorvehicles = $('#cost-start-motor-vehicles').val();
                     var additionslandbuildings = $('#additions-land-buildings').val();
                     var additionsplantmachinery = $('#additions-plant-machinery').val();
                     var additionsfixturesfittings = $('#additions-fixtures-fittings').val();
                     var additionsofficeequipment = $('#additions-office-equipment').val();
                     var additionsmotorvehicles = $('#additions-motor-vehicles').val();
                     var disposalslandbuildings = $('#disposals-land-buildings').val();
                     var disposalsplantmachinery = $('#disposals-plant-machinery').val();
                     var disposalsfixturesfittings = $('#disposals-fixtures-fittings').val();
                     var disposalsofficeequipment = $('#disposals-office-equipment').val();
                     var disposalsmotorvehicles = $('#disposals-motor-vehicles').val();
                     var revaluationslandbuildings = $('#revaluations-land-buildings').val();
                     var revaluationsplantmachinery = $('#revaluations-plant-machinery').val();
                     var revaluationsfixturesfittings = $('#revaluations-fixtures-fittings').val();
                     var revaluationsofficeequipment = $('#revaluations-office-equipment').val();
                     var revaluationsmotorvehicles = $('#revaluations-motor-vehicles').val();
                     var transferslandbuildings = $('#transfers-land-buildings').val();
                     var transfersplantmachinery = $('#transfers-plant-machinery').val();
                     var transfersfixturesfittings = $('#transfers-fixtures-fittings').val();
                     var transfersofficeequipment = $('#transfers-office-equipment').val();
                     var transfersmotorvehicles = $('#transfers-motor-vehicles').val();
                 var total = +coststarttotal + +additionstotal - +disposalstotal + +revaluationstotal + +transferstotal;
                 $('#cost-end-total').val(total);
               }
               $('#cost-start-land-buildings, #cost-start-plant-machinery, #cost-start-fixtures-fittings, #cost-start-office-equipment, #cost-start-motor-vehicles, #additions-land-buildings, #additions-plant-machinery, #additions-fixtures-fittings, #additions-office-equipment, #additions-motor-vehicles, #disposals-land-buildings, #disposals-plant-machinery, #disposals-fixtures-fittings, #disposals-office-equipment, #disposals-motor-vehicles, #revaluations-land-buildings, #revaluations-plant-machinery, #revaluations-fixtures-fittings, #revaluations-office-equipment, #revaluations-motor-vehicles, #transfers-land-buildings, #transfers-plant-machinery, #transfers-fixtures-fittings, #transfers-office-equipment, #transfers-motor-vehicles').change(compute);
          });

          // DEPRECIATION
              // Depreciation at start
              $(document).ready(function() {
                function compute() {
                     var depreciationstartlandbuildings = $('#depreciation-start-land-buildings').val();
                     var depreciationstartplantmachinery = $('#depreciation-start-plant-machinery').val();
                     var depreciationstartfixturesfittings = $('#depreciation-start-fixtures-fittings').val();
                     var depreciationstartofficeequipment = $('#depreciation-start-office-equipment').val();
                     var depreciationstartmotorvehicles = $('#depreciation-start-motor-vehicles').val();
                     var total = +depreciationstartlandbuildings + +depreciationstartplantmachinery + +depreciationstartfixturesfittings + +depreciationstartofficeequipment + +depreciationstartmotorvehicles;
                     $('#depreciation-start-total').val(total);
                   }
                   $('#depreciation-start-land-buildings, #depreciation-start-plant-machinery, #depreciation-start-fixtures-fittings, #depreciation-start-office-equipment, #depreciation-start-motor-vehicles').change(compute);
              });
              // Charge for year
              $(document).ready(function() {
                function compute() {
                     var chargeyearlandbuildings = $('#charge-year-land-buildings').val();
                     var chargeyearplantmachinery = $('#charge-year-plant-machinery').val();
                     var chargeyearfixturesfittings = $('#charge-year-fixtures-fittings').val();
                     var chargeyearofficeequipment = $('#charge-year-office-equipment').val();
                     var chargeyearmotorvehicles = $('#charge-year-motor-vehicles').val();
                     var total = +chargeyearlandbuildings + +chargeyearplantmachinery + +chargeyearfixturesfittings + +chargeyearofficeequipment + +chargeyearmotorvehicles;
                     $('#charge-year-total').val(total);
                   }
                   $('#charge-year-land-buildings, #charge-year-plant-machinery, #charge-year-fixtures-fittings, #charge-year-office-equipment, #charge-year-motor-vehicles').change(compute);
              });
              // On disposals
              $(document).ready(function() {
                function compute() {
                     var ondisposalslandbuildings = $('#on-disposals-land-buildings').val();
                     var ondisposalsplantmachinery = $('#on-disposals-plant-machinery').val();
                     var ondisposalsfixturesfittings = $('#on-disposals-fixtures-fittings').val();
                     var ondisposalsofficeequipment = $('#on-disposals-office-equipment').val();
                     var ondisposalsmotorvehicles = $('#on-disposals-motor-vehicles').val();
                     var total = +ondisposalslandbuildings + +ondisposalsplantmachinery + +ondisposalsfixturesfittings + +ondisposalsofficeequipment + +ondisposalsmotorvehicles;
                     $('#on-disposals-total').val(total);
                   }
                   $('#on-disposals-land-buildings, #on-disposals-plant-machinery, #on-disposals-fixtures-fittings, #on-disposals-office-equipment, #on-disposals-motor-vehicles').change(compute);
              });
              // Other adjustments
              $(document).ready(function() {
                function compute() {
                     var otheradjustmentslandbuildings = $('#other-adjustments-land-buildings').val();
                     var otheradjustmentsplantmachinery = $('#other-adjustments-plant-machinery').val();
                     var otheradjustmentsfixturesfittings = $('#other-adjustments-fixtures-fittings').val();
                     var otheradjustmentsofficeequipment = $('#other-adjustments-office-equipment').val();
                     var otheradjustmentsmotorvehicles = $('#other-adjustments-motor-vehicles').val();
                     var total = +otheradjustmentslandbuildings + +otheradjustmentsplantmachinery + +otheradjustmentsfixturesfittings + +otheradjustmentsofficeequipment + +otheradjustmentsmotorvehicles;
                     $('#other-adjustments-total').val(total);
                   }
                   $('#other-adjustments-land-buildings, #other-adjustments-plant-machinery, #other-adjustments-fixtures-fittings, #other-adjustments-office-equipment, #other-adjustments-motor-vehicles').change(compute);
              });
              // Depreciation at end (Land and buildings)
              $(document).ready(function() {
                function compute() {
                     var depreciationstartlandbuildings = $('#depreciation-start-land-buildings').val();
                     var chargeyearlandbuildings = $('#charge-year-land-buildings').val();
                     var ondisposalslandbuildings = $('#on-disposals-land-buildings').val();
                     var otheradjustmentslandbuildings = $('#other-adjustments-land-buildings').val();
                     var total = +depreciationstartlandbuildings + +chargeyearlandbuildings - +ondisposalslandbuildings + +otheradjustmentslandbuildings;
                     $('#depreciation-end-land-buildings').val(total);
                   }
                   $('#depreciation-start-land-buildings, #charge-year-land-buildings, #on-disposals-land-buildings, #other-adjustments-land-buildings').change(compute);
              });
              // Depreciation at end (Plant and machinery)
              $(document).ready(function() {
                function compute() {
                     var depreciationstartplantmachinery = $('#depreciation-start-plant-machinery').val();
                     var chargeyearplantmachinery = $('#charge-year-plant-machinery').val();
                     var ondisposalsplantmachinery = $('#on-disposals-plant-machinery').val();
                     var otheradjustmentsplantmachinery = $('#other-adjustments-plant-machinery').val();
                     var total = +depreciationstartplantmachinery + +chargeyearplantmachinery - +ondisposalsplantmachinery + +otheradjustmentsplantmachinery;
                     $('#depreciation-end-plant-machinery').val(total);
                   }
                   $('#depreciation-start-plant-machinery, #charge-year-plant-machinery, #on-disposals-plant-machinery, #other-adjustments-plant-machinery').change(compute);
              });
              // Depreciation at end (Fixtures and fittings)
              $(document).ready(function() {
                function compute() {
                     var depreciationstartfixturesfittings = $('#depreciation-start-fixtures-fittings').val();
                     var chargeyearfixturesfittings = $('#charge-year-fixtures-fittings').val();
                     var ondisposalsfixturesfittings = $('#on-disposals-fixtures-fittings').val();
                     var otheradjustmentsfixturesfittings = $('#other-adjustments-fixtures-fittings').val();
                     var total = +depreciationstartfixturesfittings + +chargeyearfixturesfittings - +ondisposalsfixturesfittings + +otheradjustmentsfixturesfittings;
                     $('#depreciation-end-fixtures-fittings').val(total);
                   }
                   $('#depreciation-start-fixtures-fittings, #charge-year-fixtures-fittings, #on-disposals-fixtures-fittings, #other-adjustments-fixtures-fittings').change(compute);
              });
              // Depreciation at end (Office equipment)
              $(document).ready(function() {
                function compute() {
                     var depreciationstartofficeequipment = $('#depreciation-start-office-equipment').val();
                     var chargeyearofficeequipment = $('#charge-year-office-equipment').val();
                     var ondisposalsofficeequipment = $('#on-disposals-office-equipment').val();
                     var otheradjustmentsofficeequipment = $('#other-adjustments-office-equipment').val();
                     var total = +depreciationstartofficeequipment + +chargeyearofficeequipment - +ondisposalsofficeequipment + +otheradjustmentsofficeequipment;
                     $('#depreciation-end-office-equipment').val(total);
                   }
                   $('#depreciation-start-office-equipment, #charge-year-office-equipment, #on-disposals-office-equipment, #other-adjustments-office-equipment').change(compute);
              });
              // Depreciation at end (Motor vehicles)
              $(document).ready(function() {
                function compute() {
                     var depreciationstartmotorvehicles = $('#depreciation-start-motor-vehicles').val();
                     var chargeyearmotorvehicles  = $('#charge-year-motor-vehicles').val();
                     var ondisposalsmotorvehicles  = $('#on-disposals-motor-vehicles').val();
                     var otheradjustmentsmotorvehicles  = $('#other-adjustments-motor-vehicles').val();
                     var total = +depreciationstartmotorvehicles  + +chargeyearmotorvehicles  - +ondisposalsmotorvehicles  + +otheradjustmentsmotorvehicles ;
                     $('#depreciation-end-motor-vehicles').val(total);
                   }
                   $('#depreciation-start-motor-vehicles, #charge-year-motor-vehicles, #on-disposals-motor-vehicles, #other-adjustments-motor-vehicles').change(compute);
              });
              // Depreciation at end (Total)
              $(document).ready(function() {
                function compute() {
                     var depreciationstarttotal = $('#depreciation-start-total').val();
                     var chargeyeartotal = $('#charge-year-total').val();
                     var ondisposalstotal = $('#on-disposals-total').val();
                     var otheradjustmentstotal = $('#other-adjustments-total').val();
                         var depreciationstartlandbuildings = $('#depreciation-start-land-buildings').val();
                         var depreciationstartplantmachinery = $('#depreciation-start-plant-machinery').val();
                         var depreciationstartfixturesfittings = $('#depreciation-start-fixtures-fittings').val();
                         var depreciationstartofficeequipment = $('#depreciation-start-office-equipment').val();
                         var depreciationstartmotorvehicles = $('#depreciation-start-motor-vehicles').val();
                         var chargeyearlandbuildings = $('#charge-year-land-buildings').val();
                         var chargeyearplantmachinery = $('#charge-year-plant-machinery').val();
                         var chargeyearfixturesfittings = $('#charge-year-fixtures-fittings').val();
                         var chargeyearofficeequipment = $('#charge-year-office-equipment').val();
                         var chargeyearmotorvehicles = $('#charge-year-motor-vehicles').val();
                         var ondisposalslandbuildings = $('#on-disposals-land-buildings').val();
                         var ondisposalsplantmachinery = $('#on-disposals-plant-machinery').val();
                         var ondisposalsfixturesfittings = $('#on-disposals-fixtures-fittings').val();
                         var ondisposalsofficeequipment = $('#on-disposals-office-equipment').val();
                         var ondisposalsmotorvehicles = $('#on-disposals-motor-vehicles').val();
                         var otheradjustmentslandbuildings = $('#other-adjustments-land-buildings').val();
                         var otheradjustmentsplantmachinery = $('#other-adjustments-plant-machinery').val();
                         var otheradjustmentsfixturesfittings = $('#other-adjustments-fixtures-fittings').val();
                         var otheradjustmentsofficeequipment = $('#other-adjustments-office-equipment').val();
                         var otheradjustmentsmotorvehicles = $('#other-adjustments-motor-vehicles').val();
                     var total = +depreciationstarttotal + +chargeyeartotal - +ondisposalstotal + +otheradjustmentstotal;
                     $('#depreciation-end-total').val(total);
                   }
                   $('depreciation-start-land-buildings, #depreciation-start-plant-machinery, #depreciation-start-fixtures-fittings, #depreciation-start-office-equipment, #depreciation-start-motor-vehicles, #charge-year-land-buildings, #charge-year-plant-machinery, #charge-year-fixtures-fittings, #charge-year-office-equipment, #charge-year-motor-vehicles, #on-disposals-land-buildings, #on-disposals-plant-machinery, #on-disposals-fixtures-fittings, #on-disposals-office-equipment, #on-disposals-motor-vehicles, #other-adjustments-land-buildings, #other-adjustments-plant-machinery, #other-adjustments-fixtures-fittings, #other-adjustments-office-equipment, #other-adjustments-motor-vehicles').change(compute);
              });
              // NET BOOK VALUE
                    // Net book value at end (Land and buildings)
                    $(document).ready(function() {
                      function compute() {
                           var costendlandbuildings = $('#cost-end-land-buildings').val();
                           var depreciationendlandbuildings = $('#depreciation-end-land-buildings').val();
                           var total = +costendlandbuildings - +depreciationendlandbuildings;
                           $('#net-book-value-end-land-buildings').val(total);
                         }
                         $('#cost-start-land-buildings, #additions-land-buildings, #disposals-land-buildings, #revaluations-land-buildings, #transfers-land-buildings, #depreciation-start-land-buildings, #charge-year-land-buildings, #on-disposals-land-buildings, #other-adjustments-land-buildings').change(compute);
                    });
                    // Net book value at end (Plant and machinery)
                    $(document).ready(function() {
                      function compute() {
                           var costendplantmachinery = $('#cost-end-plant-machinery').val();
                           var depreciationendplantmachinery = $('#depreciation-end-plant-machinery').val();
                           var total = +costendplantmachinery - +depreciationendplantmachinery;
                           $('#net-book-value-end-plant-machinery').val(total);
                         }
                         $('#cost-start-plant-machinery, #additions-plant-machinery, #disposals-plant-machinery, #revaluations-plant-machinery, #transfers-plant-machinery, #depreciation-start-plant-machinery, #charge-year-plant-machinery, #on-disposals-plant-machinery, #other-adjustments-plant-machinery').change(compute);
                    });
                    // Net book value at end (Fixtures and fittings)
                    $(document).ready(function() {
                      function compute() {
                           var costendfixturesfittings = $('#cost-end-fixtures-fittings').val();
                           var depreciationendfixturesfittings = $('#depreciation-end-fixtures-fittings').val();
                           var total = +costendfixturesfittings - +depreciationendfixturesfittings;
                           $('#net-book-value-end-fixtures-fittings').val(total);
                         }
                         $('#cost-start-fixtures-fittings, #additions-fixtures-fittings, #disposals-fixtures-fittings, #revaluations-fixtures-fittings, #transfers-fixtures-fittings, #depreciation-start-fixtures-fittings, #charge-year-fixtures-fittings, #on-disposals-fixtures-fittings, #other-adjustments-fixtures-fittings').change(compute);
                    });
                    // Net book value at end (Office equipment)
                    $(document).ready(function() {
                      function compute() {
                           var costendofficeequipment = $('#cost-end-office-equipment').val();
                           var depreciationendofficeequipment = $('#depreciation-end-office-equipment').val();
                           var total = +costendofficeequipment - +depreciationendofficeequipment;
                           $('#net-book-value-end-office-equipment').val(total);
                         }
                         $('#cost-start-office-equipment, #additions-office-equipment, #disposals-office-equipment, #revaluations-office-equipment, #transfers-office-equipment, #depreciation-start-office-equipment, #charge-year-office-equipment, #on-disposals-office-equipment, #other-adjustments-office-equipment').change(compute);
                    });
                    // Net book value at end (Motor vehicles)
                    $(document).ready(function() {
                      function compute() {
                           var costendmotorvehicles = $('#cost-end-motor-vehicles').val();
                           var depreciationendmotorvehicles = $('#depreciation-end-motor-vehicles').val();
                           var total = +costendmotorvehicles - +depreciationendmotorvehicles;
                           $('#net-book-value-end-motor-vehicles').val(total);
                         }
                         $('#cost-start-motor-vehicles, #additions-motor-vehicles, #disposals-motor-vehicles, #revaluations-motor-vehicles, #transfers-motor-vehicles, #depreciation-start-motor-vehicles, #charge-year-motor-vehicles, #on-disposals-motor-vehicles, #other-adjustments-motor-vehicles').change(compute);
                    });
                    // Net book value at end (Total)
                    $(document).ready(function() {
                      function compute() {
                           var costendtotal = $('#cost-end-total').val();
                           var depreciationendtotal = $('#depreciation-end-total').val();
                           var total = +costendtotal - +depreciationendtotal;
                           $('#net-book-value-end-total').val(total);
                         }
                         $('#cost-start-motor-vehicles, #additions-motor-vehicles, #disposals-motor-vehicles, #revaluations-motor-vehicles, #transfers-motor-vehicles, #depreciation-start-motor-vehicles, #charge-year-motor-vehicles, #on-disposals-motor-vehicles, #other-adjustments-motor-vehicles, cost-start-office-equipment, #additions-office-equipment, #disposals-office-equipment, #revaluations-office-equipment, #transfers-office-equipment, #depreciation-start-office-equipment, #charge-year-office-equipment, #on-disposals-office-equipment, #other-adjustments-office-equipment, #cost-start-fixtures-fittings, #additions-fixtures-fittings, #disposals-fixtures-fittings, #revaluations-fixtures-fittings, #transfers-fixtures-fittings, #depreciation-start-fixtures-fittings, #charge-year-fixtures-fittings, #on-disposals-fixtures-fittings, #other-adjustments-fixtures-fittings, #cost-start-plant-machinery, #additions-plant-machinery, #disposals-plant-machinery, #revaluations-plant-machinery, #transfers-plant-machinery, #depreciation-start-plant-machinery, #charge-year-plant-machinery, #on-disposals-plant-machinery, #other-adjustments-plant-machinery, #cost-start-land-buildings, #additions-land-buildings, #disposals-land-buildings, #revaluations-land-buildings, #transfers-land-buildings, #depreciation-start-land-buildings, #charge-year-land-buildings, #on-disposals-land-buildings, #other-adjustments-land-buildings').change(compute);
                    });
                    // Net book value at start (Land and buildings)
                    $(document).ready(function() {
                      function compute() {
                           var coststartlandbuildings = $('#cost-start-land-buildings').val();
                           var depreciationstartlandbuildings = $('#depreciation-start-land-buildings').val();
                           var total = +coststartlandbuildings - +depreciationstartlandbuildings;
                           $('#net-book-value-start-land-buildings').val(total);
                         }
                         $('#cost-start-land-buildings, #additions-land-buildings, #disposals-land-buildings, #revaluations-land-buildings, #transfers-land-buildings, #depreciation-start-land-buildings, #charge-year-land-buildings, #on-disposals-land-buildings, #other-adjustments-land-buildings').change(compute);
                    });
                    // Net book value at start (Plant and machinery)
                    $(document).ready(function() {
                      function compute() {
                           var coststartplantmachinery = $('#cost-start-plant-machinery').val();
                           var depreciationstartplantmachinery = $('#depreciation-start-plant-machinery').val();
                           var total = +coststartplantmachinery - +depreciationstartplantmachinery;
                           $('#net-book-value-start-plant-machinery').val(total);
                         }
                         $('#cost-start-plant-machinery, #additions-plant-machinery, #disposals-plant-machinery, #revaluations-plant-machinery, #transfers-plant-machinery, #depreciation-start-plant-machinery, #charge-year-plant-machinery, #on-disposals-plant-machinery, #other-adjustments-plant-machinery').change(compute);
                    });
                    // Net book value at start (Fixtures and fittings)
                    $(document).ready(function() {
                      function compute() {
                           var coststartfixturesfittings = $('#cost-start-fixtures-fittings').val();
                           var depreciationstartfixturesfittings = $('#depreciation-start-fixtures-fittings').val();
                           var total = +coststartfixturesfittings - +depreciationstartfixturesfittings;
                           $('#net-book-value-start-fixtures-fittings').val(total);
                         }
                         $('#cost-start-fixtures-fittings, #additions-fixtures-fittings, #disposals-fixtures-fittings, #revaluations-fixtures-fittings, #transfers-fixtures-fittings, #depreciation-start-fixtures-fittings, #charge-year-fixtures-fittings, #on-disposals-fixtures-fittings, #other-adjustments-fixtures-fittings').change(compute);
                    });
                    // Net book value at start (Office equipment)
                    $(document).ready(function() {
                      function compute() {
                           var coststartofficeequipment = $('#cost-start-office-equipment').val();
                           var depreciationstartofficeequipment = $('#depreciation-start-office-equipment').val();
                           var total = +coststartofficeequipment - +depreciationstartofficeequipment;
                           $('#net-book-value-start-office-equipment').val(total);
                         }
                         $('#cost-start-office-equipment, #additions-office-equipment, #disposals-office-equipment, #revaluations-office-equipment, #transfers-office-equipment, #depreciation-start-office-equipment, #charge-year-office-equipment, #on-disposals-office-equipment, #other-adjustments-office-equipment').change(compute);
                    });
                    // Net book value at start (Motor vehicles)
                    $(document).ready(function() {
                      function compute() {
                           var coststartmotorvehicles = $('#cost-start-motor-vehicles').val();
                           var depreciationstartmotorvehicles = $('#depreciation-start-motor-vehicles').val();
                           var total = +coststartmotorvehicles - +depreciationstartmotorvehicles;
                           $('#net-book-value-start-motor-vehicles').val(total);
                         }
                         $('#cost-start-motor-vehicles, #additions-motor-vehicles, #disposals-motor-vehicles, #revaluations-motor-vehicles, #transfers-motor-vehicles, #depreciation-start-motor-vehicles, #charge-year-motor-vehicles, #on-disposals-motor-vehicles, #other-adjustments-motor-vehicles').change(compute);
                    });
                    // Net book value at end (Total)
                    $(document).ready(function() {
                      function compute() {
                           var coststarttotal = $('#cost-start-total').val();
                           var depreciationstarttotal = $('#depreciation-start-total').val();
                           var total = +coststarttotal - +depreciationstarttotal;
                           $('#net-book-value-start-total').val(total);
                         }
                         $('#cost-start-motor-vehicles, #additions-motor-vehicles, #disposals-motor-vehicles, #revaluations-motor-vehicles, #transfers-motor-vehicles, #depreciation-start-motor-vehicles, #charge-year-motor-vehicles, #on-disposals-motor-vehicles, #other-adjustments-motor-vehicles, cost-start-office-equipment, #additions-office-equipment, #disposals-office-equipment, #revaluations-office-equipment, #transfers-office-equipment, #depreciation-start-office-equipment, #charge-year-office-equipment, #on-disposals-office-equipment, #other-adjustments-office-equipment, #cost-start-fixtures-fittings, #additions-fixtures-fittings, #disposals-fixtures-fittings, #revaluations-fixtures-fittings, #transfers-fixtures-fittings, #depreciation-start-fixtures-fittings, #charge-year-fixtures-fittings, #on-disposals-fixtures-fittings, #other-adjustments-fixtures-fittings, #cost-start-plant-machinery, #additions-plant-machinery, #disposals-plant-machinery, #revaluations-plant-machinery, #transfers-plant-machinery, #depreciation-start-plant-machinery, #charge-year-plant-machinery, #on-disposals-plant-machinery, #other-adjustments-plant-machinery, #cost-start-land-buildings, #additions-land-buildings, #disposals-land-buildings, #revaluations-land-buildings, #transfers-land-buildings, #depreciation-start-land-buildings, #charge-year-land-buildings, #on-disposals-land-buildings, #other-adjustments-land-buildings').change(compute);
                    });
