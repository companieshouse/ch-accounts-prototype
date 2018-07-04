/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

	// User sign in and company authentication
	"company-number": "01234567",
	"chs-email": "jsmith@testcompany.co.uk",

	//CIC Report
	"cics-activities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nlorem	",
	"cics-consultation-stakeholders": "The CICs stakeholders are its members, who are regularly updated via monthly meetings and a quarterly newsletter. No specific action has been taken this year.",
	"cics-directors-remuneration": "No remuneration was received.",
	"cics-transfer-assets": "There was a transfer to The Acme Charity of £100 to purchase a laptop."

}