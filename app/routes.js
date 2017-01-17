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

router.get('/cato-style/cato-style-loans-to-directors', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var moreloansdirectors = req.query.moreloansdirectors;

  if (moreloansdirectors == "no"){

    // redirect to the relevant page
    res.redirect("/cato-style/cato-style-balance-sheet-notes-completed-6");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('cato-style/cato-style-loans-to-directors');

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

// WIZARD - is the company trading

router.get('/cato-style/wizard/wizard-ever-traded', function (req, res) {

  // get the answer from the query string
  var trading = req.query.trading;
  if (trading == "Yes"){

    // redirect to the relevant page
    res.redirect("/cato-style/wizard/wizard-turnover");

  } else {
    // if trading is any other value (or is missing) render the page requested
    res.render('cato-style/wizard/wizard-ever-traded');
  }

});

// WIZARD - has the company ever traded

router.get('/cato-style/cato-style-start-page-dormant', function (req, res) {

  // get the answer from the query string
  var evertraded = req.query.evertraded;
  if (evertraded == "Yes"){

    // redirect to the relevant page
    res.redirect("/cato-style/cato-style-start-page-cato");

  } else {
    // if evertraded is any other value (or is missing) render the page requested
    res.render('cato-style/cato-style-start-page-dormant');
  }

});

// WIZARD - Was the company's turnover more than £632,000?

router.get('/cato-style/wizard/wizard-balance-sheet-less', function (req, res) {

  // get the answer from the query string
  var turnover632 = req.query.turnover632;
  if (turnover632 == "Yes"){

    // redirect to the relevant page
    res.redirect("/cato-style/wizard/wizard-balance-sheet-more");

  } else {
    // if turnover632 is any other value (or is missing) render the page requested
    res.render('cato-style/wizard/wizard-balance-sheet-less');
  }

});

// WIZARD - Was the company's balance sheet total less than £316,000?

router.get('/cato-style/wizard/wizard-employees-more', function (req, res) {

  // get the answer from the query string
  var balanceless = req.query.balanceless;
  if (balanceless == "Yes"){

    // redirect to the relevant page
    res.redirect("/cato-style/wizard/wizard-employees-less");

  } else {
    // if balanceless is any other value (or is missing) render the page requested
    res.render('cato-style/wizard/wizard-employees-more');
  }

});

// WIZARD - Was the company's balance sheet total more than £316,000?

router.get('/cato-style/wizard/wizard-breakdown', function (req, res) {

  // get the answer from the query string
  var balancemore = req.query.balancemore;
  if (balancemore == "No"){

    // redirect to the relevant page
    res.redirect("/cato-style/wizard/wizard-employees-less");

  } else {
    // if balancemore is any other value (or is missing) render the page requested
    res.render('cato-style/wizard/wizard-breakdown');
  }

});

// WIZARD - Did the company employ an average of more than 10 employees during the year?

router.get('/cato-style/wizard/wizard-micros-abridged', function (req, res) {

  // get the answer from the query string
  var employeemore = req.query.employeemore;
  if (employeemore == "Yes"){

    // redirect to the relevant page
    res.redirect("/cato-style/wizard/wizard-breakdown");

  } else {
    // if employeeless is any other value (or is missing) render the page requested
    res.render('cato-style/wizard/wizard-micros-abridged');
  }

});

// WIZARD - Did the company employ an average less than 10 employees during the year?

router.get('/cato-style/wizard/wizard-micros-abridged', function (req, res) {

  // get the answer from the query string
  var employeeless = req.query.employeeless;
  if (employeeless == "No"){

    // redirect to the relevant page
    res.redirect("/cato-style/wizard/wizard-breakdown");

  } else {
    // if employeeless is any other value (or is missing) render the page requested
    res.render('cato-style/wizard/wizard-micros-abridged');
  }

});

// WIZARD - You are eligible to file micro-entity accounts or abridged accounts

router.get('/cato-style/cato-style-start-page-micros', function (req, res) {

  // get the answer from the query string
  var microabridged = req.query.microabridged;
  if (microabridged == "abridged"){

    // redirect to the relevant page
    res.redirect("/cato-style/cato-style-start-page-abridged");

  } else {
    // if microabridged is any other value (or is missing) render the page requested
    res.render('cato-style/cato-style-start-page-micros');
  }

});

// WIZARD - Do you want to give a breakdown?

router.get('/cato-style/wizard/wizard-joint', function (req, res) {

  // get the answer from the query string
  var breakdown = req.query.breakdown;
  if (breakdown == "No"){

    // redirect to the relevant page
    res.redirect("/cato-style/cato-style-start-page-abridged");

  } else {
    // if breakdown is any other value (or is missing) render the page requested
    res.render('cato-style/wizard/wizard-joint');
  }

});

// WIZARD - Do you want to give a file to both Companies House and HMRC?

router.get('/cato-style/cato-style-start-page-cato-full', function (req, res) {

  // get the answer from the query string
  var joint = req.query.joint;
  if (joint == "No"){

    // redirect to the relevant page
    res.redirect("/cato-style/cato-style-start-page-full-software");

  } else {
    // if joint is any other value (or is missing) render the page requested
    res.render('cato-style/cato-style-start-page-cato-full');
  }

});

module.exports = router;
