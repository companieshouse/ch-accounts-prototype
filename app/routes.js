var express = require( 'express' );
var router = express.Router();

// CICS
require( './routes/routes-cics.js' )( router )
// Older - may be deleted at some point
require( './routes/routes-older.js' )( router )

module.exports = router