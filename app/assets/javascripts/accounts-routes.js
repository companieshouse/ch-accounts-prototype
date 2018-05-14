// full accounts - MVP or Full journey

router.get('/gov-uk/gov-uk-start-page-small-full', function (req, res) {

  var smallfullroute1 = req.query.smallfullroute1;

  if (smallfullroute1 == "mvp"){

    res.redirect("/accounts/accounts-start-page-small-full-no-director-no-profit");

  } else {

    res.render('gov-uk/gov-uk-start-page-small-full');

  }

});
