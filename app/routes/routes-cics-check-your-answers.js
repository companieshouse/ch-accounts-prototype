/////// CICS //////
// Show notes based on Balance sheet entries

module.exports = function ( router ) {
	router.get( '/small-full/small-full-check-before-you-submit', function ( req, res ) {
		// do somrthing
		console.log( req.session.storeData )
		res.render( 'small-full/small-full-check-before-you-submit', {
			data: req.session.data
		} );
	} );
}