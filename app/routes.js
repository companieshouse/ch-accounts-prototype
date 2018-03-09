var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});



// More Loans to Directors

router.get('/accounts/accounts-loans-to-directors', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var moreloansdirectors = req.query.moreloansdirectors;

  if (moreloansdirectors == "no"){

    // redirect to the relevant page
    res.redirect("/accounts/accounts-balance-sheet-notes-completed-6");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('accounts/accounts-loans-to-directors');

  }

});

// WebFiling to CHS

router.get('/chs/chs-from-webfiling', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var gotochs = req.query.gotochs;

  if (gotochs == "No"){

    // redirect to the relevant page
    res.redirect("/webfiling/webfiling-hmrc-third-party");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('chs/chs-from-webfiling');

  }

});

// CHS from WebFiling (Register, CHS)

router.get('/chs/chs-choose-password', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var chsfromwebfiling = req.query.chsfromwebfiling;

  if (chsfromwebfiling == "no"){

    // redirect to the relevant page
    res.redirect("/chs/chs-register-page");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('chs/chs-choose-password');

  }

});

// CHS Release 1 question

router.get('/accounts/accounts-start-page-abridged', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var chsrelease1 = req.query.chsrelease1;

  if (chsrelease1 == "No"){

    // redirect to the relevant page
    res.redirect("/chs/chs-alternative-abridged-filing-options");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('accounts/accounts-start-page-abridged');

  }

});

// CHS Release 1 question (when user comes in stright to CHS, bypassing gov-uk)

router.get('/accounts/accounts-start-page-no-gov-uk', function (req, res) {

  var chsrelease1 = req.query.chsrelease1;

  if (chsrelease1 == "No"){

    res.redirect("/chs/chs-alternative-abridged-filing-options");

  } else {

    res.render('accounts/accounts-start-page-no-gov-uk');

  }

});



// CHS Release 1 question (no company search - directly into accounts)

router.get('/accounts/accounts-start-page-abridged-direct', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var chsrelease1 = req.query.chsrelease1;

  if (chsrelease1 == "No"){

    // redirect to the relevant page
    res.redirect("/chs/chs-choose-accounts-direct");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('accounts/accounts-start-page-abridged-direct');

  }

});


// CHS Release 1 question (no company search - directly into accounts)

router.get('/accounts/accounts-start-page-r1', function (req, res) {
  var chsr1 = req.query.chsr1;
  if (chsr1 == "No"){res.redirect("/chs/chs-alternative-abridged-filing-options");}
  else if (chsr1 == "Other"){res.redirect("/accounts/accounts-start-page-general");}
  else {res.render('accounts/accounts-start-page-r1');}
});





// CHS Release 1 question (on CHS accounts chooser)

router.get('/chs/chs-alternative-abridged-filing-options', function (req, res) {
  var chooserR1 = req.query.chooserR1;
  if (chooserR1 == "Yes"){res.redirect("/accounts/accounts-start-page-abridged");}
  else if (chooserR1 == "Other"){res.redirect("/chs/chs-choose-accounts");}
  else {res.render('chs/chs-alternative-abridged-filing-options');}

});


// CHS Release 1 question (when user had chosen Abridged from the accounts chooser they see after clicking File accounts on CHS profile)

router.get('/accounts/accounts-start-page', function (req, res) {
  var chsR1 = req.query.chsR1;
  if (chsR1 == "No"){res.redirect("/chs/chs-alternative-abridged-filing-options");}
  else if (chsR1 == "Other"){res.redirect("/chs/chs-choose-accounts-after-chs-profile");}
  else {res.render('accounts/accounts-start-page');}
});

// CHS Release 1 question (when user resumes)

router.get('/accounts/resume-from-profile', function (req, res) {
  var chsresume = req.query.chsresume;
  if (chsresume == "No"){res.redirect("/chs/chs-alternative-abridged-filing-options");}
  else if (chsresume == "Other"){res.redirect("/chs/chs-choose-accounts-after-chs-profile");}
  else {res.render('accounts/resume-from-profile');}
});


// CHS Release 1 question (user ineligible to file Abridged ON THE COMPANIES HOUSE SERVICE)


router.get('/chs/chs-software-filing', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var r1dates = req.query.r1dates;

  if (r1dates == "other"){

    // redirect to the relevant page
    res.redirect("/webfiling/webfiling-login-page-chs-search");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('chs/chs-software-filing');

  }

});


// Resume journey (from GOV.UK start page)


router.get('/chs/chs-choose-accounts', function (req, res) {
  var neworresumetype = req.query.neworresumetype;
  if (neworresumetype == "micro"){res.redirect("/webfiling/webfiling-login-page-chs-search");}
  else if (neworresumetype == "abridged"){res.redirect("/chs/chs-login-page-resume-from-govuk");}
  else if (neworresumetype == "full"){res.redirect("https://www.tax.service.gov.uk/gg/sign-in?continue=https://www.tax.service.gov.uk/cato");}
  else if (neworresumetype == "dormant"){res.redirect("/webfiling/webfiling-login-page-chs-search");}
  else {res.render('chs/chs-choose-accounts');}
});





// CHS confirm accounts type (when user had chosen Abridged from the accounts chooser they see after clicking File accounts on CHS profile)

router.get('/chs/chs-choose-accounts-after-chs-profile', function (req, res) {

  var confirmtype = req.query.confirmtype;

  if (confirmtype == "Yes"){

    res.redirect("/accounts/accounts-start-page");

  } else {

    res.render('chs/chs-choose-accounts-after-chs-profile');

  }

});



// Abbreviated accounts - Does your accounting period end on or before 31 December 2015?

router.get('/accounts/accounts-start-page-abbreviated', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var abbreviateddates = req.query.abbreviateddates;

  if (abbreviateddates == "No"){

    // redirect to the relevant page
    res.redirect("/accounts/accounts-start-page-abbreviated-unable");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('accounts/accounts-start-page-abbreviated');

  }

});



// Resume accounts (from CHS profile when logged back in)

router.get('/accounts/accounts-balance-sheet-resume', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var resumefromprofile = req.query.resumefromprofile;

  if (resumefromprofile == "no"){

    // redirect to the relevant page
    res.redirect("/accounts/accounts-start-page");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('accounts/accounts-balance-sheet-resume');

  }

});

// Do you have a creditors note?

//router.get('/accounts/accounts-review', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  //var creditorsnoteyn = req.query.creditorsnoteyn;

//  if (creditorsnoteyn == "Yes"){

    // redirect to the relevant page
//    res.redirect("/accounts/accounts-creditors-amounts-falling-due-within-one-year");

//  } else {

    // if over18 is any other value (or is missing) render the page requested
  //  res.render('accounts/accounts-review');

//  }

//});


// Do you have Other notes - send them to Review or to the Employees note?

router.get('/accounts/accounts-abridged-employees-yes-no', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var othernotes = req.query.othernotes;

  if (othernotes == "No"){

    // redirect to the relevant page
    res.redirect("/accounts/accounts-review-no-other-notes");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('accounts/accounts-abridged-employees-yes-no');

  }

});




// Do you have Other accounting policies - send them to Review or to the Employees note?

router.get('/accounts/accounts-turnover-policy-yes-no', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var otherpolicies = req.query.otherpolicies;

  if (otherpolicies == "No"){

    // redirect to the relevant page
    //res.redirect("/accounts/accounts-abridged-intangible-note");
    res.redirect("/accounts/accounts-abridged-tangible-note");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('accounts/accounts-turnover-policy-yes-no');

  }

});




// Do you have Other notes, second chance (ie did you miss any on the Review screen)

router.get('/accounts/accounts-abridged-fixed-assets-yes-no', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var othernotes = req.query.othernotes;

  if (othernotes == "Yes"){

    // redirect to the relevant page
    res.redirect("/accounts/accounts-approval");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('accounts/accounts-abridged-fixed-assets-yes-no');

  }

});

// Do you have loans to directors notes?

router.get('/accounts/accounts-abridged-loans-yes-no-2', function (req, res) {
  var loansnoteyn = req.query.loansnoteyn;
  if (loansnoteyn == "No"){
    // redirect to the relevant page
    res.redirect("/accounts/accounts-abridged-changes-in-presentation-yes-no");
  } else {
    res.render('accounts/accounts-abridged-loans-yes-no-2');
  }
});

// Do you have loans to Related party transactions notes?

router.get('/accounts/accounts-abridged-related-transactions-yes-no-2', function (req, res) {
  var relatedtransactionsnoteyn = req.query.relatedtransactionsnoteyn;
  if (relatedtransactionsnoteyn == "No"){
    // redirect to the relevant page
    res.redirect("/accounts/accounts-abridged-post-events-yes-no");
  } else {
    res.render('accounts/accounts-abridged-related-transactions-yes-no-2');
  }
});



// tangible asset note - testing when user changes a figure on the balance sheet (so renders note invalid


router.get('/accounts/accounts-abridged-tangible-note-errors', function (req, res) {

  var tangiblecosttransfers = req.query.tangiblecosttransfers;

  if (tangiblecosttransfers == "18600"){

    res.redirect("/accounts/accounts-review-amended-tangible-figure");

  } else {

    res.render('accounts/accounts-abridged-tangible-note-errors');

  }

});





// Small full - does user want to include a directors report and/or a profit and loss account?


router.get('/accounts/accounts-start-page-small-full', function (req, res) {

  var smallfulldirectorsreport = req.query.smallfulldirectorsreport;
  var smallfullprofitloss = req.query.smallfullprofitloss;

  if (smallfulldirectorsreport == "No" & smallfullprofitloss == "No" ){
    res.redirect("/accounts/accounts-start-page-small-full-no-director-no-profit");
  }
  else if (smallfulldirectorsreport == "No" & smallfullprofitloss == "Yes" ){
    res.redirect("/accounts/accounts-start-page-small-full-no-director");
  }
  else if (smallfulldirectorsreport == "Yes" & smallfullprofitloss == "No" ){
    res.redirect("/accounts/accounts-start-page-small-full-no-profit");
  }
  else {
    res.render('accounts/accounts-start-page-small-full');
  }

});





// Small full accounts - Directors' report


router.get('/small-full/profit-and-loss-account', function (req, res) {
  var directorsreport1 = req.query.directorsreport1;
  if (directorsreport1 == "Yesnotes"){res.redirect("/small-full/directors-report-notes-principal");}
  else if (directorsreport1 == "No"){res.redirect("/small-full/directors-report-changes");}
  else {res.render('small-full/profit-and-loss-account');}
});



// Small full - do you have Other accounting policies?

router.get('/small-full/small-full-intangible-assets-note', function (req, res) {

  var smallfullotherpolicies = req.query.smallfullotherpolicies;

  if (smallfullotherpolicies == "Yes"){

    // redirect to the relevant page
    res.redirect("/small-full/small-full-turnover-policy-yes-no");

  } else {

    res.render('small-full/small-full-intangible-assets-note');

  }

});


// Abbreviated accounts (from the CHS accounts chooser) - on alternative CHS search journey

router.get('/webfiling/webfiling-login-page-chs-search', function (req, res) {

  var chsabbreviatedsearch = req.query.chsabbreviatedsearch;

  if (chsabbreviatedsearch == "Other"){

    // redirect to the relevant page
    res.redirect("/chs/chs-choose-accounts-alternative-chs-search");

  } else {

    res.render('webfiling/webfiling-login-page-chs-search');

  }

});

// Abbreviated accounts (from the CHS accounts chooser) - direct from CHS

router.get('/webfiling/webfiling-login-page', function (req, res) {

  var chsabbreviateddirect = req.query.chsabbreviateddirect;

  if (chsabbreviateddirect == "Other"){

    // redirect to the relevant page
    res.redirect("/chs/chs-choose-accounts-after-chs-profile");

  } else {

    res.render('webfiling/webfiling-login-page');

  }

});

















// WIZARD - is the company trading

router.get('/accounts/wizard/wizard-ever-traded', function (req, res) {

  // get the answer from the query string
  var trading = req.query.trading;
  if (trading == "Yes"){

    // redirect to the relevant page
    res.redirect("/accounts/wizard/wizard-turnover");

  } else {
    // if trading is any other value (or is missing) render the page requested
    res.render('accounts/wizard/wizard-ever-traded');
  }

});

// WIZARD - has the company ever traded

router.get('/accounts/accounts-start-page-dormant', function (req, res) {

  // get the answer from the query string
  var evertraded = req.query.evertraded;
  if (evertraded == "Yes"){

    // redirect to the relevant page
    res.redirect("/accounts/accounts-start-page-cato");

  } else {
    // if evertraded is any other value (or is missing) render the page requested
    res.render('accounts/accounts-start-page-dormant');
  }

});

// WIZARD - Was the company's turnover more than £632,000?

router.get('/accounts/wizard/wizard-balance-sheet-less', function (req, res) {

  // get the answer from the query string
  var turnover632 = req.query.turnover632;
  if (turnover632 == "Yes"){

    // redirect to the relevant page
    res.redirect("/accounts/wizard/wizard-balance-sheet-more");

  } else {
    // if turnover632 is any other value (or is missing) render the page requested
    res.render('accounts/wizard/wizard-balance-sheet-less');
  }

});

// WIZARD - Was the company's balance sheet total less than £316,000?

router.get('/accounts/wizard/wizard-employees-more', function (req, res) {

  // get the answer from the query string
  var balanceless = req.query.balanceless;
  if (balanceless == "Yes"){

    // redirect to the relevant page
    res.redirect("/accounts/wizard/wizard-employees-less");

  } else {
    // if balanceless is any other value (or is missing) render the page requested
    res.render('accounts/wizard/wizard-employees-more');
  }

});

// WIZARD - Was the company's balance sheet total more than £316,000?

router.get('/accounts/wizard/wizard-breakdown', function (req, res) {

  // get the answer from the query string
  var balancemore = req.query.balancemore;
  if (balancemore == "No"){

    // redirect to the relevant page
    res.redirect("/accounts/wizard/wizard-employees-less");

  } else {
    // if balancemore is any other value (or is missing) render the page requested
    res.render('accounts/wizard/wizard-breakdown');
  }

});

// WIZARD - Did the company employ an average of more than 10 employees during the year?

router.get('/accounts/wizard/wizard-micros-abridged', function (req, res) {

  // get the answer from the query string
  var employeemore = req.query.employeemore;
  if (employeemore == "Yes"){

    // redirect to the relevant page
    res.redirect("/accounts/wizard/wizard-breakdown");

  } else {
    // if employeeless is any other value (or is missing) render the page requested
    res.render('accounts/wizard/wizard-micros-abridged');
  }

});

// WIZARD - Did the company employ an average less than 10 employees during the year?

router.get('/accounts/wizard/wizard-micros-abridged', function (req, res) {

  // get the answer from the query string
  var employeeless = req.query.employeeless;
  if (employeeless == "No"){

    // redirect to the relevant page
    res.redirect("/accounts/wizard/wizard-breakdown");

  } else {
    // if employeeless is any other value (or is missing) render the page requested
    res.render('accounts/wizard/wizard-micros-abridged');
  }

});

// WIZARD - You are eligible to file micro-entity accounts or abridged accounts

router.get('/accounts/accounts-start-page-micros', function (req, res) {

  // get the answer from the query string
  var microabridged = req.query.microabridged;
  if (microabridged == "abridged"){

    // redirect to the relevant page
    res.redirect("/accounts/accounts-start-page-abridged");

  } else {
    // if microabridged is any other value (or is missing) render the page requested
    res.render('accounts/accounts-start-page-micros');
  }

});

// WIZARD - Do you want to give a breakdown?

router.get('/accounts/wizard/wizard-joint', function (req, res) {

  // get the answer from the query string
  var breakdown = req.query.breakdown;
  if (breakdown == "No"){

    // redirect to the relevant page
    res.redirect("/accounts/accounts-start-page-abridged");

  } else {
    // if breakdown is any other value (or is missing) render the page requested
    res.render('accounts/wizard/wizard-joint');
  }

});

// WIZARD - Do you want to give a file to both Companies House and HMRC?

router.get('/accounts/accounts-start-page-cato-full', function (req, res) {

  // get the answer from the query string
  var joint = req.query.joint;
  if (joint == "No"){

    // redirect to the relevant page
    res.redirect("/accounts/accounts-start-page-full-software");

  } else {
    // if joint is any other value (or is missing) render the page requested
    res.render('accounts/accounts-start-page-cato-full');
  }

});

module.exports = router;




// Small full accounts - MVP or Full journey

router.get('/gov-uk/gov-uk-start-page-small-full', function (req, res) {

  var smallfullroute1 = req.query.smallfullroute1;

  if (smallfullroute1 == "mvp"){

    res.redirect("/accounts/accounts-start-page-small-full-mvp");

  } else {

    res.render('gov-uk/gov-uk-start-page-small-full');

  }

});




/////// CICS //////
// CICS MVP criteria

router.get('/cics/cics-stages-of-service', function (req, res) {
  var cicsr1 = req.query.cicsr1;
  if (cicsr1 == "No"){res.redirect("/cics/cics-criteria-not-met");}
  else {res.render('cics/cics-stages-of-service');}
});


//Choose CICS or Small Full journey
router.get('/accounts/accounts-start-page-small-full-mvp', function (req, res) {
  var cicssmallfullroute1 = req.query.cicssmallfullroute1;
  if (cicssmallfullroute1 == "cic"){res.redirect("/gov-uk/gov-uk-start-page-cics");}
  else {res.render('accounts/accounts-start-page-small-full-mvp');}
});

router.post('/accounts/accounts-start-page-small-full-mvp', function (req, res) {
      req.session.cicssmallfullroute1 = null;
       if (req.body.cicssmallfullroute1 == "sf") {
           req.session.cicssmallfullroute1 = "sf";
       } else {
           req.session.cicssmallfullroute1 = "cic";
       }
       res.redirect(301, '/gov-uk/gov-uk-start-page-cics');
   });

// *  router.get('/small-full/small-full-review-mvp', function (req, res) {
/*     res.render('/small-full/small-full-review-mvp');
   });

   router.post('/small-full/small-full-review-mvp', function (req, res) {

            res.redirect(301, '/small-full/small-full-approval-mvp');

      });
*/














      // Enter details
//router.get('/enter-details', function (req, res) {
 //res.render('enter-details')
//})

// Enter details
router.post('/cics-or-small-full', function (req, res) {
 var cicorsf = req.body.cicssmallfullroute1

 if (cicorsf !== 'sf' && cicorsf !== 'cic') {
   res.render('cics-or-small-full')
 } else {
   req.session.cicorsf = cicorsf
   if (cicorsf == "sf") {
     res.redirect('/accounts/accounts-start-page-small-full-mvp');
   } else {
     res.redirect('/gov-uk/gov-uk-start-page-cics');
   }
 }
})


router.post('/small-full/small-full-review-mvp', function (req, res) {
 var errorFlag = false
 console.log(req.body.directorName)
 if (req.body.directorName === "") {
   errorFlag = true
 }

 if (errorFlag === true) {
   res.render('/small-full/small-full-review-mvp')
 } else {
   if (req.session.cicorsf == "sf") {
     res.redirect('/small-full/small-full-approval-mvp');
   } else {
     res.redirect('/cics/cics-accounts-approval');
   }
 }
})
