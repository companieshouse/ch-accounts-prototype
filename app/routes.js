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

// Micro-account yes or no

router.get('/cato-style/cato-style-choose-dormant', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var micro = req.query.micro;

  if (micro == "micros-no"){

    // redirect to the relevant page
    res.redirect("/cato-style/cato-style-choose-full-or-abridged");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('cato-style/cato-style-choose-dormant');

  }

});

// Full or abridged

router.get('/cato-style/cato-style-choose-dormant-abridged', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var abridgedfull = req.query.abridgedfull;

  if (abridgedfull == "full-yes"){

    // redirect to the relevant page
    res.redirect("/cato-style/cato-style-choose-dormant-full");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('cato-style/cato-style-choose-dormant-abridged');

  }

});

// Micro-accounts > Dormant yes or no

router.get('/cato-style/cato-style-start-page-dormant', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var dormant = req.query.dormant;

  if (dormant == "dormant-no"){

    // redirect to the relevant page
    res.redirect("/cato-style/cato-style-start-page-micros");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('cato-style/cato-style-start-page-dormant');

  }

});

// Full accounts > Dormant yes or no

router.get('/cato-style/cato-style-start-page-dormant-full', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var dormant = req.query.dormant;

  if (dormant == "dormant-no"){

    // redirect to the relevant page
    res.redirect("/cato-style/cato-style-start-page-full");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('cato-style/cato-style-start-page-dormant-full');

  }

});

// Abridged accounts > Dormant yes or no

router.get('/cato-style/cato-style-start-page-dormant-abridged', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var dormant = req.query.dormant;

  if (dormant == "dormant-no"){

    // redirect to the relevant page
    res.redirect("/cato-style/cato-style-start-page-abridged");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('cato-style/cato-style-start-page-dormant-abridged');

  }

});






module.exports = router;
