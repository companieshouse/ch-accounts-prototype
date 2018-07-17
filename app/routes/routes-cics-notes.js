/////// CICS //////
// Show notes based on Balance sheet entries

module.exports = function ( router ) {

	// (CICs) Accounts - Show Intangible assets note or not depending on whether not values have been entered on the Balance sheet
	router.get( '/small-full/small-full-intangible-assets-note', function ( req, res ) {
		if ( parseInt( req.session.data[ 'intangible-assets-current' ], 10 ) > 0 || parseInt( req.session.data[ 'intangible-assets-previous' ], 10 ) > 0 ) { // If either one of these values (fromn the balance sheet contains a value gretaer than zero)
			res.render( 'small-full/small-full-intangible-assets-note' ); // then show the Intangible Assets note
		} else {
			res.redirect( "/small-full/small-full-tangible-assets-choose" ); // if not then render the next page (in this case, the choose your Intangible assets oage)
		}
	} );

	// (CICs) Accounts - Show Tangible assets note CHOOSER or not depending on whether not values have been entered on the Balance sheet
	router.get( '/small-full/small-full-tangible-assets-choose', function ( req, res ) {
		if ( parseInt( req.session.data[ 'tangible-assets-current' ], 10 ) > 0 || parseInt( req.session.data[ 'tangible-assets-previous' ], 10 ) > 0 ) {
			res.render( 'small-full/small-full-tangible-assets-choose' );
		} else {
			res.redirect( "/small-full/small-full-stocks-note" );
		}
	} );

	// (CICs) Accounts - Show Stocks note or not depending on whether not values have been entered on the Balance sheet
	router.get( '/small-full/small-full-stocks-note', function ( req, res ) {
		if ( parseInt( req.session.data[ 'stocks-current' ], 10 ) > 0 || parseInt( req.session.data[ 'stocks-previous' ], 10 ) > 0 ) {
			res.render( 'small-full/small-full-stocks-note' );
		} else {
			res.redirect( "/small-full/small-full-debtors-note" );
		}
	} );

	// (CICs) Accounts - Show Debtors note or not depending on whether not values have been entered on the Balance sheet
	router.get( '/small-full/small-full-debtors-note', function ( req, res ) {
		if ( parseInt( req.session.data[ 'debtors-current' ], 10 ) > 0 || parseInt( req.session.data[ 'debtors-previous' ], 10 ) > 0 ) {
			res.render( 'small-full/small-full-debtors-note' );
		} else {
			res.redirect( "/small-full/small-full-creditors-within-note" );
		}
	} );

	// (CICs) Accounts - Show  Creditors - amounts falling due within one year  note or not depending on whether not values have been entered on the Balance sheet
	router.get( '/small-full/small-full-creditors-within-note', function ( req, res ) {
		if ( parseInt( req.session.data[ 'creditors-amounts-falling-due-within-one-year-current' ], 10 ) > 0 || parseInt( req.session.data[ 'creditors-amounts-falling-due-within-one-year-previous' ], 10 ) > 0 ) {
			res.render( 'small-full/small-full-creditors-within-note' );
		} else {
			res.redirect( "/small-full/small-full-creditors-after-note" );
		}
	} );

	// (CICs) Accounts - Show  Creditors - amounts falling due after one year  note or not depending on whether not values have been entered on the Balance sheet
	router.get( '/small-full/small-full-creditors-after-note', function ( req, res ) {
		if ( parseInt( req.session.data[ 'creditors-amounts-falling-due-after-more-than-one-year-current' ], 10 ) > 0 || parseInt( req.session.data[ 'creditors-amounts-falling-due-after-more-than-one-year-previous' ], 10 ) > 0 ) {
			res.render( 'small-full/small-full-creditors-after-note' );
		} else {
			res.redirect( "/small-full/small-full-revaluation-reserve-note" );
		}
	} );

	// (CICs) Accounts - Show  Revaluation reserve or not depending on whether not values have been entered on the Balance sheet
	router.get( '/small-full/small-full-revaluation-reserve-note', function ( req, res ) {
		if ( parseInt( req.session.data[ 'revaluation-reserve-current' ], 10 ) > 0 || parseInt( req.session.data[ 'revaluation-reserve-previous' ], 10 ) > 0 ) {
			res.render( 'small-full/small-full-revaluation-reserve-note' );
		} else {
			res.redirect( "/small-full/small-full-other-notes-yes-no" );
		}
	} );



}