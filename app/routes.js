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

  // get the answer from the query string (eg. ?over18=false)
  var chsrelease1 = req.query.chsrelease1;

  if (chsrelease1 == "No"){

    // redirect to the relevant page
    res.redirect("/chs/chs-alternative-abridged-filing-options");

  } else {

    // if over18 is any other value (or is missing) render the page requested
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
