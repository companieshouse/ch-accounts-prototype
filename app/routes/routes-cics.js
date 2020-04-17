/////// CICS //////
// CICS MVP criteria

module.exports = function ( router ) {



	router.get( '/cics/cics-criteria-profit', function ( req, res ) {
		var criteriareportalt = req.query.criteriareportalt;
		if ( criteriareportalt == "yes" ) {
			res.redirect( "/cics/cics-criteria-not-met" );
		} else {
			res.render( 'cics/cics-criteria-profit' );
		}
	} );

	router.get( '/cics/cics-criteria-mvp', function ( req, res ) {
		var criteriaprofit = req.query.criteriaprofit;
		if ( criteriaprofit == "yes" ) {
			res.redirect( "/cics/cics-criteria-not-met" );
		} else {
			res.render( 'cics/cics-criteria-mvp' );
		}
	} );



	router.get( '/cics/cics-criteria-report', function ( req, res ) {
		var cicsr1 = req.query.cicsr1;
		if ( cicsr1 == "no" ) {
			res.redirect( "/cics/cics-criteria-not-met" );
		} else {
			res.render( 'cics/cics-criteria-report' );
		}
	} );



	router.get( '/accounts/mvp-criteria', function ( req, res ) {
		var corporationTax = req.query.corporationTax;
		if ( corporationTax == "yes" ) {
			res.redirect( "https://www.gov.uk/file-your-company-accounts-and-tax-return" );
		} else {
			res.render( 'accounts/mvp-criteria' );
		}
	} );

	router.get( '/cics/cics-company-number', function ( req, res ) {
		var criteriaprofit = req.query.criteriaprofit;
		if ( criteriaprofit == "yes" ) {
			res.redirect( "/cics/cics-criteria-not-met" );
		} else {
			res.render( 'cics/cics-company-number' );
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
	//	router.get( '/accounts/accounts-start-page-small-full-mvp', function ( req, res ) {
	//	var cicssmallfullroute1 = req.query.cicssmallfullroute1;
	//	if ( cicssmallfullroute1 == "cic" ) {
	//		res.redirect( "/gov-uk/gov-uk-start-page-cics" );
	//		} else {
	//			res.render( 'accounts/accounts-start-page-small-full-mvp' );
	//		}
	//	} );

	//	router.post( '/accounts/accounts-start-page-small-full-mvp', function ( req, res ) {
	//		req.session.cicssmallfullroute1 = null;
	//		if ( req.body.cicssmallfullroute1 == "sf" ) {
	//			req.session.cicssmallfullroute1 = "sf";
	//		} else {
	//			req.session.cicssmallfullroute1 = "cic";
	//		}
	//		res.redirect( 301, '/gov-uk/gov-uk-start-page-cics' );
	//	} );



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

	router.get( 'chs/corporation-tax', function ( req, res ) {
		var cicsNewOrResume = req.query.cicsNewOrResume;
		if ( cicsNewOrResume == "no" ) {
			res.redirect( "/chs/chs-login-page-cics-via-number" );
		} else {
			res.render( 'chs/corporation-tax' );
		}
	} );





	// CICS - Was directors' remuneration received?



	router.get( '/cics/directors-remuneration-cic-report', function ( req, res ) {
		var cicsDirectorsRemuneration = req.query.cicsDirectorsRemuneration;
		if ( cicsDirectorsRemuneration == "No directors' remuneration was received" ) {
			res.redirect( "/cics/transfer-of-assets" );
		} else {
			res.render( 'cics/directors-remuneration-cic-report' );
		}
	} );

	// CICS - Where is the directors' remuneration information?


	router.get( '/cics/directors-remuneration-accounts', function ( req, res ) {
		var cicsDirectorsRemunerationLocation = req.query.cicsDirectorsRemunerationLocation;
		if ( cicsDirectorsRemunerationLocation == "CIC" ) {
			res.redirect( "/cics/directors-remuneration-cic-report" );
		} else {
			res.render( 'cics/directors-remuneration-accounts' );
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

	router.get( '/small-full/small-full-balance-sheet-choose', function ( req, res ) {
		var changecompanydates = req.query.changecompanydates;
		if ( changecompanydates == "no" ) {
			res.redirect( "/small-full/small-full-accounts-dates-change" );
		} else {
			res.render( 'small-full/small-full-balance-sheet-choose' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any additional accounting policies?

	router.get( '/small-full/small-full-turnover-policy-yes-no', function ( req, res ) {
		var smallfullotherpolicies = req.query.smallfullotherpolicies;
		if ( smallfullotherpolicies == "no" ) {
			res.redirect( "/small-full/small-full-intangible-assets-note" );
		} else {
			res.render( 'small-full/small-full-turnover-policy-yes-no' );
		}
	} );

	router.get( '/small-full/small-full-turnover-policy-yes-no-mvp', function ( req, res ) {
		var smallfullotherpolicies = req.query.smallfullotherpolicies;
		if ( smallfullotherpolicies == "no" ) {
			res.redirect( "/small-full/small-full-tangible-assets-note-mvp" );
		} else {
			res.render( 'small-full/small-full-turnover-policy-yes-no-mvp' );
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

	router.get( '/small-full/small-full-turnover-policy-mvp', function ( req, res ) {
		var turnoverpolicy = req.query.turnoverpolicy;
		if ( turnoverpolicy == "no" ) {
			res.redirect( "/small-full/small-full-tangible-policy-yes-no-mvp" );
		} else {
			res.render( 'small-full/small-full-turnover-policy-mvp' );
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

	router.get( '/small-full/small-full-tangible-policy-mvp', function ( req, res ) {
		var tangiblefixedassetsdepreciationpolicy = req.query.tangiblefixedassetsdepreciationpolicy;
		if ( tangiblefixedassetsdepreciationpolicy == "no" ) {
			res.redirect( "/small-full/small-full-intangible-policy-yes-no-mvp" );
		} else {
			res.render( 'small-full/small-full-tangible-policy-mvp' );
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

	router.get( '/small-full/small-full-intangible-policy-mvp', function ( req, res ) {
		var intangiblefixedassetsamortisationpolicy = req.query.intangiblefixedassetsamortisationpolicy;
		if ( intangiblefixedassetsamortisationpolicy == "no" ) {
			res.redirect( "/small-full/small-full-valuation-policy-yes-no-mvp" );
		} else {
			res.render( 'small-full/small-full-intangible-policy-mvp' );
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

	router.get( '/small-full/small-full-valuation-policy-mvp', function ( req, res ) {
		var valuationinformationpolicy = req.query.valuationinformationpolicy;
		if ( valuationinformationpolicy == "no" ) {
			res.redirect( "/small-full/small-full-any-other-accounting-policies-yes-no-mvp" );
		} else {
			res.render( 'small-full/small-full-valuation-policy-mvp' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any other accounting policies?

	router.get( '/small-full/small-full-any-other-accounting-policies', function ( req, res ) {
		var anyotheraccountingpolicies = req.query.anyotheraccountingpolicies;
		if ( anyotheraccountingpolicies == "no" ) {
			res.redirect( "/small-full/small-full-intangible-assets-note" );
		} else {
			res.render( 'small-full/small-full-any-other-accounting-policies' );
		}
	} );

	router.get( '/small-full/small-full-any-other-accounting-policies-mvp', function ( req, res ) {
		var anyotheraccountingpolicies = req.query.anyotheraccountingpolicies;
		if ( anyotheraccountingpolicies == "no" ) {
			res.redirect( "/small-full/small-full-tangible-assets-note-mvp" );
		} else {
			res.render( 'small-full/small-full-any-other-accounting-policies-mvp' );
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

	router.get( '/small-full/small-full-employees-note-mvp', function ( req, res ) {
		var employeesnoteyesno = req.query.employeesnoteyesno;
		if ( employeesnoteyesno == "no" ) {
			res.redirect( "/small-full/small-full-fixed-assets-yes-no-mvp" );
		} else {
			res.render( 'small-full/small-full-employees-note-mvp' );
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

	router.get( '/small-full/small-full-fixed-assets-investments-note-mvp', function ( req, res ) {
		var fixedassetsinvestmentsyesno = req.query.fixedassetsinvestmentsyesno;
		if ( fixedassetsinvestmentsyesno == "no" ) {
			res.redirect( "/small-full/small-full-current-assets-yes-no-mvp" );
		} else {
			res.render( 'small-full/small-full-fixed-assets-investments-note-mvp' );
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

	router.get( '/small-full/small-full-current-assets-investments-note-mvp', function ( req, res ) {
		var currentassetsinvestmentsyesno = req.query.currentassetsinvestmentsyesno;
		if ( currentassetsinvestmentsyesno == "no" ) {
			res.redirect( "/small-full/small-full-commitments-yes-no-mvp" );
		} else {
			res.render( 'small-full/small-full-current-assets-investments-note-mvp' );
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

	router.get( '/small-full/small-full-financial-commitments-note-mvp', function ( req, res ) {
		var financialcommitments = req.query.financialcommitments;
		if ( financialcommitments == "no" ) {
			res.redirect( "/small-full/small-full-loans-yes-no-mvp" );
		} else {
			res.render( 'small-full/small-full-financial-commitments-note-mvp' );
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

	router.get( '/small-full/small-full-loans-yes-1-mvp', function ( req, res ) {
		var loanstodirectors = req.query.loanstodirectors;
		if ( loanstodirectors == "no" ) {
			res.redirect( "/small-full/small-full-changes-in-presentation-yes-no-mvp" );
		} else {
			res.render( 'small-full/small-full-loans-yes-1-mvp' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any other 'loans to directors' notes?

	router.get( '/small-full/small-full-loans-additional-info-yes-no', function ( req, res ) {
		var anyotherloanstodirectors1 = req.query.anyotherloanstodirectors1;
		if ( anyotherloanstodirectors1 == "yes" ) {
			res.redirect( "/small-full/small-full-loans-yes-2" ); // Temporary URL until real page created
		} else {
			res.render( 'small-full/small-full-loans-additional-info-yes-no' );
		}
	} );

	router.get( '/small-full/small-full-loans-additional-info-yes-no', function ( req, res ) {
		var anyotherloanstodirectors2 = req.query.anyotherloanstodirectors2;
		if ( anyotherloanstodirectors2 == "yes" ) {
			res.redirect( "/small-full/small-full-loans-any-other-2" ); // Temporary URL until real page created
		} else {
			res.render( 'small-full/small-full-loans-additional-info-yes-no' );
		}
	} );

	router.get( '/small-full/small-full-loans-additional-info-yes-no-mvp', function ( req, res ) {
		var anyotherloanstodirectors1 = req.query.anyotherloanstodirectors1;
		if ( anyotherloanstodirectors1 == "yes" ) {
			res.redirect( "/small-full/small-full-loans-any-other-mvp" ); // Temporary URL until real page created
		} else {
			res.render( 'small-full/small-full-loans-additional-info-yes-no-mvp' );
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

	router.get( '/small-full/small-full-loans-additional-info-mvp', function ( req, res ) {
		var loanstodirectorsadditionalinfoyesno = req.query.loanstodirectorsadditionalinfoyesno;
		if ( loanstodirectorsadditionalinfoyesno == "no" ) {
			res.redirect( "/small-full/small-full-changes-in-presentation-yes-no-mvp" ); // Temporary URL until real page created
		} else {
			res.render( 'small-full/small-full-loans-additional-info-mvp' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include a 'changes in presentation and prior period adjustments' note?

	router.get( '/small-full/small-full-changes-in-presentation-note', function ( req, res ) {
		var changesinpresentation = req.query.changesinpresentation;
		if ( changesinpresentation == "no" ) {
			res.redirect( "/small-full/small-full-related-transactions-yes-no" );
		} else {
			res.render( 'small-full/small-full-changes-in-presentation-note' );
		}
	} );

	router.get( '/small-full/small-full-changes-in-presentation-note-mvp', function ( req, res ) {
		var changesinpresentation = req.query.changesinpresentation;
		if ( changesinpresentation == "no" ) {
			res.redirect( "/small-full/small-full-related-transactions-yes-no-mvp" );
		} else {
			res.render( 'small-full/small-full-changes-in-presentation-note-mvp' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any 'related party transactions' notes?

	router.get( '/small-full/small-full-related-transactions-yes-1', function ( req, res ) {
		var relatedtransactions = req.query.relatedtransactions;
		if ( relatedtransactions == "no" ) {
			res.redirect( "/small-full/small-full-post-events-yes-no" );
		} else {
			res.render( 'small-full/small-full-related-transactions-yes-1' );
		}
	} );

	router.get( '/small-full/small-full-related-transactions-yes-1-mvp', function ( req, res ) {
		var relatedtransactions = req.query.relatedtransactions;
		if ( relatedtransactions == "no" ) {
			res.redirect( "/small-full/small-full-post-events-yes-no-mvp" );
		} else {
			res.render( 'small-full/small-full-related-transactions-yes-1-mvp' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any other 'related party transactions' notes?

	router.get( '/small-full/small-full-transactions-additional-info-yes-no', function ( req, res ) {
		var anyothertransactions1 = req.query.anyothertransactions1;
		if ( anyothertransactions1 == "yes" ) {
			res.redirect( "/small-full/small-full-transactions-any-other" ); // Temporary URL until real page created
		} else {
			res.render( 'small-full/small-full-transactions-additional-info-yes-no' );
		}
	} );

	router.get( '/small-full/small-full-transactions-additional-info-yes-no-mvp', function ( req, res ) {
		var anyothertransactions1 = req.query.anyothertransactions1;
		if ( anyothertransactions1 == "yes" ) {
			res.redirect( "/small-full/small-full-transactions-any-other-mvp" ); // Temporary URL until real page created
		} else {
			res.render( 'small-full/small-full-transactions-additional-info-yes-no-mvp' );
		}
	} );

	// (CICs) Accounts - Do your prepared accounts include any additional 'related party transactions' information?

	router.get( '/small-full/small-full-transactions-additional-info', function ( req, res ) {
		var relatedpartytransactionsadditionalinfoyesno = req.query.relatedpartytransactionsadditionalinfoyesno;
		if ( relatedpartytransactionsadditionalinfoyesno == "no" ) {
			res.redirect( "/small-full/small-full-post-events-yes-no" );
		} else {
			res.render( 'small-full/small-full-transactions-additional-info' );
		}
	} );

	router.get( '/small-full/small-full-transactions-additional-info-mvp', function ( req, res ) {
		var relatedpartytransactionsadditionalinfoyesno = req.query.relatedpartytransactionsadditionalinfoyesno;
		if ( relatedpartytransactionsadditionalinfoyesno == "no" ) {
			res.redirect( "/small-full/small-full-post-events-yes-no-mvp" );
		} else {
			res.render( 'small-full/small-full-transactions-additional-info-mvp' );
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

	router.get( '/small-full/small-full-post-balance-sheet-events-note-mvp', function ( req, res ) {
		var postbalancesheetevents = req.query.postbalancesheetevents;
		if ( postbalancesheetevents == "no" ) {
			res.redirect( "/small-full/small-full-check-before-you-submit-mvp" ); // Temporary URL until real page created
		} else {
			res.render( 'small-full/small-full-post-balance-sheet-events-note-mvp' );
		}
	} );

	// (CICs) Accounts - Did NAME HERE approve the accounts?
	router.get( '/cics/cics-accounts-approval-same-dates', function ( req, res ) {
		var cicReportAccountsSameDirector = req.query.cicReportAccountsSameDirector;
		if ( cicReportAccountsSameDirector == "no" ) {
			res.redirect( "/cics/cics-accounts-approval" ); // Temporary URL until real page created
		} else {
			res.render( 'cics/cics-accounts-approval-same-dates' );
		}
	} );

	// (CICs) Accounts - Did NAME HERE approve the accounts?
	router.get( '/accounts/accounts-payment', function ( req, res ) {

		var cicReportAccountsSameDate = req.query.cicReportAccountsSameDate;
		if ( cicReportAccountsSameDate == "no" ) {
			res.redirect( "/cics/cics-accounts-approval" ); // Temporary URL until real page created
		} else {
			res.render( 'accounts/accounts-payment' );
		}
	} );

	//Choose accounts type

	router.get( '/chs/corporation-tax', function ( req, res ) {
		var chooseAccountsRadio = req.query.chooseAccountsRadio;
		if ( chooseAccountsRadio == "micros" ) {
			res.redirect( "/chs/chs-choose-accounts-small-full-radio" );
		} else if ( chooseAccountsRadio == "abridged" ) {
			res.redirect( "/chs/chs-choose-accounts-small-full-radio" );
		} else if ( chooseAccountsRadio == "dormant" ) {
			res.redirect( "/chs/chs-choose-accounts-small-full-radio" );
		} else if ( chooseAccountsRadio == "full" ) {
			res.redirect( "/cics/cics-criteria-not-met" );
		} else if ( chooseAccountsRadio == "filetted" ) {
			res.redirect( "/chs/corporation-tax" );
		} else {
			res.render( 'chs/corporation-tax' );
		}
	} );

	router.get( '/cics/cics-criteria-mvp-2', function ( req, res ) {
		var chooseAccountsRadioAlt = req.query.chooseAccountsRadioAlt;
		if ( chooseAccountsRadioAlt == "micros" ) {
			res.redirect( "/accounts/accounts-start-page-micros" );
		} else if ( chooseAccountsRadioAlt == "abridged" ) {
			res.redirect( "/chs/chs-choose-abridged-or-other-r1" );
		} else if ( chooseAccountsRadioAlt == "fullInc" ) {
			res.redirect( "/cics/cics-criteria-want-dr-pl" );
		} else if ( chooseAccountsRadioAlt == "fullNotInc" ) {
			res.redirect( "/cics/cics-criteria-mvp-2" );
		} else if ( chooseAccountsRadioAlt == "dormant" ) {
			res.redirect( "/accounts/accounts-start-page-dormant" );
		} else {
			res.render( 'cics/cics-criteria-mvp-2' );
		}
	} );



	//Tangible assets chooser
	router.get( '/small-full/small-full-tangible-assets-note', function ( req, res ) {
		var tangibleType = req.query.tangibleType;
		if ( tangibleType.length == 1 ) {
			res.redirect( "/small-full/small-full-tangible-assets-note-1" );
		} else if ( tangibleType.length == 2 ) {
			res.redirect( "/small-full/small-full-tangible-assets-note-2" );
		} else if ( tangibleType.length == 3 ) {
			res.redirect( "/small-full/small-full-tangible-assets-note-3" );
		} else if ( tangibleType.length == 4 ) {
			res.redirect( "/small-full/small-full-tangible-assets-note-4" );
		} else {
			res.render( 'small-full/small-full-tangible-assets-note' );
		}
	} );


	router.get( '/accounts/file-full-accounts', function ( req, res ) {
		var smallfullcriteria = req.query.smallfullcriteria;
		if ( smallfullcriteria == "No" ) {
			res.redirect( "/chs/chs-other-ways-to-file" );
		} else if ( smallfullcriteria == "Other" ) {
			res.redirect( "/chs/chs-choose-accounts-small-full-radio" );
		} else {
			res.render( 'accounts/file-full-accounts' );
		}
	} );


	//Directors report
	//Does the directors' report in your prepared accounts include information on the principal activities of the company?
	router.get( '/small-full/directors-report-principal-activities-note', function ( req, res ) {
		var principalactivitiesyesno = req.query.principalactivitiesyesno;
		if ( principalactivitiesyesno == "no" ) {
			res.redirect( "/small-full/directors-report-political-yes-no" );
		} else {
			res.render( 'small-full/directors-report-principal-activities-note' );
		}
	} );
	//Does the directors' report in your prepared accounts include information on political and charitable donations?
	router.get( '/small-full/directors-report-political-note', function ( req, res ) {
		var politicalcharitableyesno = req.query.politicalcharitableyesno;
		if ( politicalcharitableyesno == "no" ) {
			res.redirect( "/small-full/directors-report-disabled-yes-no" );
		} else {
			res.render( 'small-full/directors-report-political-note' );
		}
	} );
	//Does the directors' report in your prepared accounts include a company policy on disabled employees?
	router.get( '/small-full/directors-report-disabled-note', function ( req, res ) {
		var disabledemployeesyesno = req.query.disabledemployeesyesno;
		if ( disabledemployeesyesno == "no" ) {
			res.redirect( "/small-full/directors-report-additional-yes-no" );
		} else {
			res.render( 'small-full/directors-report-disabled-note' );
		}
	} );
	//Does the directors' report in your prepared accounts include additional information?
	router.get( '/small-full/directors-report-additional-note', function ( req, res ) {
		var directorsreportadditionalinformationyesno = req.query.directorsreportadditionalinformationyesno;
		if ( directorsreportadditionalinformationyesno == "no" ) {
			res.redirect( "/small-full/check-your-answers-DR" );
		} else {
			res.render( 'small-full/directors-report-additional-note' );
		}
	} );
	//Have the accounts been prepared for the period of 1 April 2019 to 31 March 2020?
	router.get( '/small-full/small-full-accounts-dates-choose', function ( req, res ) {
		var confirmAccountsDates2020 = req.query.confirmAccountsDates2020;
		if ( confirmAccountsDates2020 == "yes" ) {
			res.redirect( "/small-full/profit-and-loss-account" );
		} else {
			res.render( 'small-full/small-full-accounts-dates-choose' );
		}
	} );

}