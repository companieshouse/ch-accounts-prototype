/////// CICS //////
// CICS MVP criteria

module.exports = function ( router ) {

	router.get( '/cics/cics-criteria-report', function ( req, res ) {
		var cicsr1 = req.query.cicsr1;
		if ( cicsr1 == "no" ) {
			res.redirect( "/cics/cics-criteria-not-met" );
		} else {
			res.render( 'cics/cics-criteria-report' );
		}
	} );

	router.get( '/cics/cics-criteria-profit', function ( req, res ) {
		var criteriareport = req.query.criteriareport;
		if ( criteriareport == "yes" ) {
			res.redirect( "/cics/cics-criteria-no-DR-PL" );
		} else {
			res.render( 'cics/cics-criteria-profit' );
		}
	} );

	router.get( '/cics/cics-criteria-audit', function ( req, res ) {
		var cicsr1 = req.query.cicsr1;
		if ( cicsr1 == "no" ) {
			res.redirect( "/cics/cics-criteria-not-met" );
		} else {
			res.render( 'cics/cics-criteria-audit' );
		}
	} );

	router.get( '/cics/general-description', function ( req, res ) {
		var accountsaudited = req.query.accountsaudited;
		if ( accountsaudited == "yes" ) {
			res.redirect( "/cics/cics-criteria-not-met" );
		} else {
			res.render( 'cics/general-description' );
		}
	} );

	router.get( '/cics/consultation-with-stakeholders-yes', function ( req, res ) {
		var consultationwithstakeholders = req.query.consultationwithstakeholders;
		if ( consultationwithstakeholders == "no" ) {
			res.redirect( "/cics/directors-remuneration" );
		} else {
			res.render( 'cics/consultation-with-stakeholders-yes' );
		}
	} );

	//Choose CICS or full journey
	router.get( '/accounts/accounts-start-page-small-full-mvp', function ( req, res ) {
		var cicssmallfullroute1 = req.query.cicssmallfullroute1;
		if ( cicssmallfullroute1 == "cic" ) {
			res.redirect( "/gov-uk/gov-uk-start-page-cics" );
		} else {
			res.render( 'accounts/accounts-start-page-small-full-mvp' );
		}
	} );

	router.post( '/accounts/accounts-start-page-small-full-mvp', function ( req, res ) {
		req.session.cicssmallfullroute1 = null;
		if ( req.body.cicssmallfullroute1 == "sf" ) {
			req.session.cicssmallfullroute1 = "sf";
		} else {
			req.session.cicssmallfullroute1 = "cic";
		}
		res.redirect( 301, '/gov-uk/gov-uk-start-page-cics' );
	} );



	router.post( '/cics-or-small-full', function ( req, res ) {
		var cicorsf = req.body.cicssmallfullroute1

		if ( cicorsf !== 'sf' && cicorsf !== 'cic' ) {
			res.render( 'cics-or-small-full' )
		} else {
			req.session.cicorsf = cicorsf
			if ( cicorsf == "sf" ) {
				res.redirect( '/chs/chs-start-page-small-full' );
			} else {
				res.redirect( '/gov-uk/gov-uk-start-page-cics' );
			}
		}
	} )


	router.post( '/small-full/small-full-review-mvp', function ( req, res ) {
		var errorFlag = false
		console.log( req.body.directorName )
		if ( req.body.directorName === "" ) {
			errorFlag = true
		}

		if ( errorFlag === true ) {
			res.render( '/small-full/small-full-review-mvp' )
		} else {
			if ( req.session.cicorsf == "sf" ) {
				res.redirect( '/small-full/small-full-approval-mvp' );
			} else {
				res.redirect( '/cics/cics-accounts-approval' );
			}
		}
	} )


	// CICS - detailed or simplified accounts

	router.get( '/cics/cics-criteria-mvp', function ( req, res ) {
		var choosecicreporttype = req.query.choosecicreporttype;
		if ( choosecicreporttype == "Detailed" ) {
			res.redirect( "/cics/cics-criteria-not-met" );
		} else {
			res.render( 'cics/cics-criteria-mvp' );
		}
	} );



	// CICS - Was directors' remuneration received?

	router.get( '/cics/directors-remuneration-yes', function ( req, res ) {

		var directorsremunerationyn = req.query.directorsremunerationyn;
		if ( directorsremunerationyn == "no" ) {
			res.redirect( "/cics/transfer-of-assets" );
		} else {
			res.render( 'cics/directors-remuneration-yes' );
		}
	} );

	// CICS - Is directors' remuneration included in accounts?

	router.get( '/cics/transfer-of-assets', function ( req, res ) {
		var directorsremunerationaccounts = req.query.directorsremunerationaccounts;
		if ( directorsremunerationaccounts == "no" ) {
			res.redirect( "/cics/directors-remuneration-accounts" );
		} else {
			res.render( 'cics/transfer-of-assets' );
		}
	} );

	// CICS - Were any assets transferred other than for full consideration?

	router.get( '/cics/cics-check-before-you-submit', function ( req, res ) {
		var assetstransferred = req.query.assetstransferred;
		if ( assetstransferred == "yes" ) {
			res.redirect( "/cics/transfers-of-assets-yes" );
		} else {
			res.render( 'cics/cics-check-before-you-submit' );
		}
	} );

	// (CICs) Accounts - Change accounting reference dates

	router.get( '/small-full/small-full-balance-sheet', function ( req, res ) {
		var changecompanydates = req.query.changecompanydates;
		if ( changecompanydates == "yes" ) {
			res.redirect( "/small-full/small-full-accounts-dates-change" );
		} else {
			res.render( 'small-full/small-full-balance-sheet' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any additional accounting policies?

	router.get( '/small-full/small-full-turnover-policy-yes-no', function ( req, res ) {
		var smallfullotherpolicies = req.query.smallfullotherpolicies;
		if ( smallfullotherpolicies == "no" ) {
			res.redirect( "/small-full/small-full-tangible-assets-choose" );
		} else {
			res.render( 'small-full/small-full-turnover-policy-yes-no' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include a 'turnover' policy?

	router.get( '/small-full/small-full-turnover-policy', function ( req, res ) {
		var turnoverpolicy = req.query.turnoverpolicy;
		if ( turnoverpolicy == "no" ) {
			res.redirect( "/small-full/small-full-tangible-policy-yes-no" );
		} else {
			res.render( 'small-full/small-full-turnover-policy' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include a 'tangible fixed assets depreciation' policy?

	router.get( '/small-full/small-full-tangible-policy', function ( req, res ) {
		var tangiblefixedassetsdepreciationpolicy = req.query.tangiblefixedassetsdepreciationpolicy;
		if ( tangiblefixedassetsdepreciationpolicy == "no" ) {
			res.redirect( "/small-full/small-full-intangible-policy-yes-no" );
		} else {
			res.render( 'small-full/small-full-tangible-policy' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include an 'intangible fixed assets amortisation' policy?

	router.get( '/small-full/small-full-intangible-policy', function ( req, res ) {
		var intangiblefixedassetsamortisationpolicy = req.query.intangiblefixedassetsamortisationpolicy;
		if ( intangiblefixedassetsamortisationpolicy == "no" ) {
			res.redirect( "/small-full/small-full-valuation-policy-yes-no" );
		} else {
			res.render( 'small-full/small-full-intangible-policy' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include a 'valuation information' policy?

	router.get( '/small-full/small-full-valuation-policy', function ( req, res ) {
		var valuationinformationpolicy = req.query.valuationinformationpolicy;
		if ( valuationinformationpolicy == "no" ) {
			res.redirect( "/small-full/small-full-any-other-accounting-policies-yes-no" );
		} else {
			res.render( 'small-full/small-full-valuation-policy' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any other accounting policies?

	router.get( '/small-full/small-full-any-other-accounting-policies', function ( req, res ) {
		var anyotheraccountingpolicies = req.query.anyotheraccountingpolicies;
		if ( anyotheraccountingpolicies == "no" ) {
			res.redirect( "/small-full/small-full-tangible-assets-choose" );
		} else {
			res.render( 'small-full/small-full-any-other-accounting-policies' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any other notes?

	router.get( '/small-full/small-full-employees-yes-no', function ( req, res ) {
		var smallfullothernotes = req.query.smallfullothernotes;
		if ( smallfullothernotes == "no" ) {
			res.redirect( "/small-full/small-full-check-before-you-submit" );
		} else {
			res.render( 'small-full/small-full-employees-yes-no' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include an 'employees' note?

	router.get( '/small-full/small-full-employees-note', function ( req, res ) {
		var employeesnoteyesno = req.query.employeesnoteyesno;
		if ( employeesnoteyesno == "no" ) {
			res.redirect( "/small-full/small-full-fixed-assets-yes-no" );
		} else {
			res.render( 'small-full/small-full-employees-note' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include a 'fixed assets investments' note?

	router.get( '/small-full/small-full-fixed-assets-investments-note', function ( req, res ) {
		var fixedassetsinvestmentsyesno = req.query.fixedassetsinvestmentsyesno;
		if ( fixedassetsinvestmentsyesno == "no" ) {
			res.redirect( "/small-full/small-full-current-assets-yes-no" );
		} else {
			res.render( 'small-full/small-full-fixed-assets-investments-note' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include a 'fixed assets investments' note?

	router.get( '/small-full/small-full-current-assets-investments-note', function ( req, res ) {
		var currentassetsinvestmentsyesno = req.query.currentassetsinvestmentsyesno;
		if ( currentassetsinvestmentsyesno == "no" ) {
			res.redirect( "/small-full/small-full-commitments-yes-no" );
		} else {
			res.render( 'small-full/small-full-current-assets-investments-note' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include a 'financial commitments' note?

	router.get( '/small-full/small-full-financial-commitments-note', function ( req, res ) {
		var financialcommitments = req.query.financialcommitments;
		if ( financialcommitments == "no" ) {
			res.redirect( "/small-full/small-full-loans-yes-no" );
		} else {
			res.render( 'small-full/small-full-financial-commitments-note' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any 'loans to directors' notes?

	router.get( '/small-full/small-full-loans-yes-1', function ( req, res ) {
		var loanstodirectors = req.query.loanstodirectors;
		if ( loanstodirectors == "no" ) {
			res.redirect( "/small-full/small-full-changes-in-presentation-yes-no" );
		} else {
			res.render( 'small-full/small-full-loans-yes-1' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any other 'loans to directors' notes?

	router.get( '/small-full/small-full-loans-additional-info-yes-no', function ( req, res ) {
		var anyotherloanstodirectors1 = req.query.anyotherloanstodirectors1;
		if ( anyotherloanstodirectors1 == "yes" ) {
			res.redirect( "/small-full/small-full-loans-yes-no-2" ); // Temporary URL until real page created
		} else {
			res.render( 'small-full/small-full-loans-additional-info-yes-no' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any additional 'loans to directors' information?

	router.get( '/small-full/small-full-loans-additional-info', function ( req, res ) {
		var loanstodirectorsadditionalinfoyesno = req.query.loanstodirectorsadditionalinfoyesno;
		if ( loanstodirectorsadditionalinfoyesno == "no" ) {
			res.redirect( "/small-full/small-full-changes-in-presentation-yes-no" ); // Temporary URL until real page created
		} else {
			res.render( 'small-full/small-full-loans-additional-info' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include a 'changes in presentation and prior period adjustments' note?

	router.get( '/small-full/small-full-changes-in-presentation-note', function ( req, res ) {
		var changesinpresentation = req.query.changesinpresentation;
		if ( changesinpresentation == "no" ) {
			res.redirect( "/small-full/small-full-related-transactions-yes-no" ); // Temporary URL until real page created
		} else {
			res.render( 'small-full/small-full-changes-in-presentation-note' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any 'related party transactions' notes?

	router.get( '/small-full/small-full-related-transactions-yes-1', function ( req, res ) {
		var relatedtransactions = req.query.relatedtransactions;
		if ( relatedtransactions == "no" ) {
			res.redirect( "/small-full/small-full-post-events-yes-no" ); // Temporary URL until real page created
		} else {
			res.render( 'small-full/small-full-related-transactions-yes-1' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include a 'post balance sheet events' note?

	router.get( '/small-full/small-full-post-balance-sheet-events-note', function ( req, res ) {
		var postbalancesheetevents = req.query.postbalancesheetevents;
		if ( postbalancesheetevents == "no" ) {
			res.redirect( "/small-full/small-full-check-before-you-submit" ); // Temporary URL until real page created
		} else {
			res.render( 'small-full/small-full-post-balance-sheet-events-note' );
		}
	} );

}