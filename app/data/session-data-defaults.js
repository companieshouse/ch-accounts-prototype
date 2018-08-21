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


	// Have removed a lot of the default answers, hence there are numerous instances of  "" - these MAY be removed completely at some point

	// Variables to set BEFORE the user starts the test
	"company-name-for-testing": "A TEST CIC",
	"company-number": "01234567",
	"company-address-for-testing": "1 Any Street, Cardiff, Wales, CF12 3AB",
	"company-made-up-date-for-testing": "31 March 2018",
	"company-due-by-date-for-testing": "31 December 2018",
	"company-last-accounts-date-for-testing": "31 March 2017",
	"chs-email": "jsmith@testcompany.co.uk",

	//CIC Report
	"cics-activities": "",
	"cics-consultation-stakeholders": "There has not been a consultation with stakeholders",
	"cicsDirectorsRemuneration": "No remuneration was received",
	"cics-transfer-assets": "No transfer of assets other than for full consideration",

	//Small Full Balance sheet
	"called-up-share-capital-not-paid-current": "",
	"called-up-share-capital-not-paid-previous": "",
	"intangible-assets-current": "",
	"intangible-assets-previous": "",
	"tangible-assets-current": "",
	"tangible-assets-previous": "",
	"investments-fixed-assets-current": "",
	"investments-fixed-assets-previous": "",
	"total-fixed-assets-current": "",
	"total-fixed-assets-previous": "",
	"stocks-current": "",
	"stocks-previous": "",
	"debtors-current": "",
	"debtors-previous": "",
	"cash-at-bank-and-in-hand-current": "",
	"cash-at-bank-and-in-hand-previous": "",
	"investments-current-assets-current": "",
	"investments-current-assets-previous": "",
	"total-current-assets-current": "",
	"total-current-assets-previous": "",
	"prepayments-and-and-accrued-income-current": "",
	"prepayments-and-and-accrued-income-previous": "",
	"creditors-amounts-falling-due-within-one-year-current": "",
	"creditors-amounts-falling-due-within-one-year-previous": "",
	"net-current-assets-liabilities-current": "",
	"net-current-assets-liabilities-previous": "",
	"total-assets-less-current-liabilities-current": "",
	"total-assets-less-current-liabilities-previous": "",
	"creditors-amounts-falling-due-after-more-than-one-year-current": "",
	"creditors-amounts-falling-due-after-more-than-one-year-previous": "",
	"provision-for-liabilities-current": "",
	"provision-for-liabilities-previous": "",
	"accruals-and-deferred-income-current": "",
	"accruals-and-deferred-income-previous": "",
	"total-net-assets-liabilities-current": "",
	"total-net-assets-liabilities-previous": "",
	"called-up-share-capital-current": "",
	"called-up-share-capital-previous": "",
	"share-premium-account-current": "",
	"share-premium-account-previous": "",
	"revaluation-reserve-current": "",
	"revaluation-reserve-previous": "",
	"other-reserves-current": "",
	"other-reserves-previous": "",
	"profit-and-loss-account-current": "",
	"profit-and-loss-account-previous": "",
	"total-shareholders-funds-current": "",
	"total-shareholders-funds-previous": "",

	//Small Full Policies
	"small-full-turnover-policy": "",
	"small-full-tangible-fixed-assets-depreciation-policy": "",
	"small-full-intangible-fixed-assets-amortisation-policy": "",
	"small-full-valuation-information-policy": "",
	"small-full-other-policies": "",

	//Intangible assets note
	"cost-start-goodwill": "",
	"cost-start-other": "",
	"cost-start-total": "",
	"additions-goodwill": "",
	"additions-other": "",
	"additions-total": "",
	"disposals-goodwill": "",
	"disposals-other": "",
	"disposals-total": "",
	"revaluations-goodwill": "",
	"revaluations-other": "",
	"revaluations-total": "",
	"transfers-goodwill": "",
	"transfers-other": "",
	"transfers-total": "",
	"cost-end-goodwill": "",
	"cost-end-other": "",
	"cost-end-total": "",
	"amortisation-start-goodwill": "",
	"amortisation-start-other": "",
	"amortisation-start-total": "",
	"charge-year-goodwill": "",
	"charge-year-other": "",
	"charge-year-total": "",
	"on-disposals-goodwill": "",
	"on-disposals-other": "",
	"on-disposals-total": "",
	"other-adjustments-goodwill": "",
	"other-adjustments-other": "",
	"other-adjustments-total": "",
	"amortisation-end-goodwill": "",
	"amortisation-end-other": "",
	"amortisation-end-total": "",
	"net-book-value-end-goodwill": "",
	"net-book-value-end-other": "",
	"net-book-value-end-total": "",
	"net-book-value-start-goodwill": "",
	"net-book-value-start-other": "",
	"net-book-value-start-total": "",
	"small-full-intangible-note-additional-info": "",


	//Tangible assets note
	"cost-start-land-buildings": "",
	"cost-start-plant-machinery": "",
	"cost-start-office-equipment": "",
	"cost-start-total": "",
	"additions-land-buildings": "",
	"additions-plant-machinery": "",
	"additions-office-equipment": "",
	"additions-total": "",
	"disposals-land-buildings": "",
	"disposals-plant-machinery": "",
	"disposals-office-equipment": "",
	"disposals-total": "",
	"revaluations-land-buildings": "",
	"revaluations-plant-machinery": "",
	"revaluations-office-equipment": "",
	"revaluations-total": "",
	"cost-end-land-buildings": "",
	"cost-end-plant-machinery": "",
	"cost-end-office-equipment": "",
	"cost-end-total": "",
	"depreciation-start-land-buildings": "",
	"depreciation-start-plant-machinery": "",
	"depreciation-start-office-equipment": "",
	"depreciation-start-total": "",
	"charge-year-land-buildings": "",
	"charge-year-plant-machinery": "",
	"charge-year-office-equipment": "",
	"charge-year-total": "",
	"on-disposals-land-buildings": "",
	"on-disposals-plant-machinery": "",
	"on-disposals-office-equipment": "",
	"on-disposals-total": "",
	"other-adjustments-land-buildings": "",
	"other-adjustments-plant-machinery": "",
	"other-adjustments-office-equipment": "",
	"other-adjustments-total": "",
	"depreciation-end-land-buildings": "",
	"depreciation-end-plant-machinery": "",
	"depreciation-end-office-equipment": "",
	"depreciation-end-total": "",
	"net-book-value-end-land-buildings": "",
	"net-book-value-end-plant-machinery": "",
	"net-book-value-end-office-equipment": "",
	"net-book-value-end-total": "",
	"net-book-value-start-land-buildings": "",
	"net-book-value-start-plant-machinery": "",
	"net-book-value-start-office-equipment": "",
	"net-book-value-start-total": "",
	"small-full-tangible-note-additional-info": "",

	//Small Full Stocks Note
	"stocks-stocks-current": "",
	"stocks-stocks-previous": "",
	"payment-on-account-current": "",
	"payment-on-account-previous": "",
	"total-stocks-current": "",
	"total-stocks-previous": "",

	//Small Full Debtors note
	"trade-debtors-current": "",
	"trade-debtors-previous": "",
	"prepayments-and-accrued-income-current": "",
	"prepayments-and-accrued-income-previous": "",
	"other-debtors-current": "",
	"other-debtors-previous": "",
	"total-debtors-current": "",
	"total-debtors-previous": "",
	"debtors-after-current": "",
	"debtors-after-previous": "",
	"stocks-note-additional-info": "",

	//Small Full Creditors amounts falling due WITHIN on year note
	"bank-loans-current": "",
	"bank-loans-previous": "",
	"finance-leases-current": "",
	"finance-leases-previous": "",
	"trade-creditors-current": "",
	"trade-creditors-previous": "",
	"social-security-current": "",
	"social-security-previous": "",
	"accruals-current": "",
	"accruals-previous": "",
	"other-creditors-current": "",
	"other-creditors-previous": "",
	"within-one-year-total-current": "",
	"within-one-year-total-previous": "",
	"within-one-year-additional-info": "",

	//Small Full Creditors amounts falling due AFTER on year note
	"creditors-after-bank-loans-current": "",
	"creditors-after-bank-loans-previous": "",
	"creditors-after-finance-leases-current": "",
	"creditors-after-finance-leases-previous": "",
	"creditors-after-other-creditors-current": "",
	"creditors-after-other-creditors-previous": "",
	"creditors-after-one-year-total-current": "",
	"creditors-after-one-year-total-previous": "",
	"creditors-after-one-year-additional-info": "",

	//Small Full Revaluation reserve note
	"revaluation-reserve-start": "",
	"surplus-deficit-previous": "",
	"bank-loans-end": "",
	"revaluation-reserve-end": "",
	"revaluation-reserve-note-additional-info": "",


	//Small Full Employees note
	"average-number-of-employees-current": "",
	"average-number-of-employees-previous": "",
	"employees-note-additional-info": "",

	//Small Full fixed assets investments note
	"small-full-fixed-assets-investments-note": "",

	//Small Full current assets investments note
	"small-full-current-assets-investments-note": "",

	//Small Full financial commitments note
	"small-full-financial-commitments-note": "",

	//Small Full loans to directors note
	// TO DO

	//Small Full changes in presentation and prior period adjustments note
	"small-full-changes-in-presentation-note": "",

	//Small Full related party transactions note
	// TO DO

	// Small Full post balance sheet events note
	"small-full-post-balance-sheet-events-note": ""


}