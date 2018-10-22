var express = require( 'express' );
var router = express.Router();


// CICS
require( './routes/routes-cics.js' )( router )
require( './routes/routes-cics-notes.js' )( router )
require( './routes/routes-cics-check-your-answers.js' )( router )

// Older - may be deleted at some point
//require( './routes/routes-older.js' )( router )

// Start
router.get( '/', function ( req, res ) {
	req.session.destroy()
	res.render( 'index' )
} )
router.get( 'index', function ( req, res ) {
	req.session.destroy()
	res.render( 'index' )
} )

module.exports = router