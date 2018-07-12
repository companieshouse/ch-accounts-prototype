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
	"cics-activities": "",
	"cics-consultation-stakeholders": "There has not been a consultation with stakeholders",
	"cics-directors-remuneration": "No remuneration was received",
	"cics-transfer-assets": "No transfer of assets other than for full consideration has been made",

	//Small Full Balance sheet
	"called-up-share-capital-not-paid-current": "0",
	"called-up-share-capital-not-paid-previous": "0",
	"intangible-assets-current": "0",
	"intangible-assets-previous": "0",
	"tangible-assets-current": "0",
	"tangible-assets-previous": "0",
	"investments-fixed-assets-current": "0",
	"investments-fixed-assets-previous": "0",
	"total-fixed-assets-current": "0",
	"total-fixed-assets-previous": "0",
	"stocks-current": "0",
	"stocks-previous": "0",
	"debtors-current": "0",
	"debtors-previous": "0",
	"cash-at-bank-and-in-hand-current": "0",
	"cash-at-bank-and-in-hand-previous": "0",
	"investments-current-assets-current": "0",
	"investments-current-assets-previous": "0",
	"total-current-assets-current": "0",
	"total-current-assets-previous": "0",
	"prepayments-and-and-accrued-income-current": "0",
	"prepayments-and-and-accrued-income-previous": "0",
	"creditors-amounts-falling-due-within-one-year-current": "0",
	"creditors-amounts-falling-due-within-one-year-previous": "0",
	"net-current-assets-liabilities-current": "0",
	"net-current-assets-liabilities-previous": "0",
	"total-assets-less-current-liabilities-current": "0",
	"total-assets-less-current-liabilities-previous": "0",
	"creditors-amounts-falling-due-after-more-than-one-year-current": "0",
	"creditors-amounts-falling-due-after-more-than-one-year-previous": "0",
	"provision-for-liabilities-current": "0",
	"provision-for-liabilities-previous": "0",
	"accruals-and-deferred-income-current": "0",
	"accruals-and-deferred-income-previous": "0",
	"total-net-assets-liabilities-current": "0",
	"total-net-assets-liabilities-previous": "0",
	"called-up-share-capital-current": "0",
	"called-up-share-capital-previous": "0",
	"share-premium-account-current": "0",
	"share-premium-account-previous": "0",
	"revaluation-reserve-current": "0",
	"revaluation-reserve-previous": "0",
	"other-reserves-current": "0",
	"other-reserves-previous": "0",
	"profit-and-loss-account-current": "0",
	"profit-and-loss-account-previous": "0",
	"total-shareholders-funds-current": "0",
	"total-shareholders-funds-previous": "0",

	//Small Full Policies
	"small-full-turnover-policy": "Not entered",
	"small-full-tangible-fixed-assets-depreciation-policy": "Not entered",
	"small-full-intangible-fixed-assets-amortisation-policy": "Not entered",
	"small-full-valuation-information-policy": "Not entered",
	"small-full-other-policies": "Not entered",

	//Intangible assets note
	"cost-start-goodwill": "0",
	"cost-start-other": "0",
	"cost-start-total": "0",
	"additions-goodwill": "0",
	"additions-other": "0",
	"additions-total": "0",
	"disposals-goodwill": "0",
	"disposals-other": "0",
	"disposals-total": "0",
	"revaluations-goodwill": "0",
	"revaluations-other": "0",
	"revaluations-total": "0",
	"transfers-goodwill": "0",
	"transfers-other": "0",
	"transfers-total": "0",
	"cost-end-goodwill": "0",
	"cost-end-other": "0",
	"cost-end-total": "0",
	"amortisation-start-goodwill": "0",
	"amortisation-start-other": "0",
	"amortisation-start-total": "0",
	"charge-year-goodwill": "0",
	"charge-year-other": "0",
	"charge-year-total": "0",
	"on-disposals-goodwill": "0",
	"on-disposals-other": "0",
	"on-disposals-total": "0",
	"other-adjustments-goodwill": "0",
	"other-adjustments-other": "0",
	"other-adjustments-total": "0",
	"amortisation-end-goodwill": "0",
	"amortisation-end-other": "0",
	"amortisation-end-total": "0",
	"net-book-value-end-goodwill": "0",
	"net-book-value-end-other": "0",
	"net-book-value-end-total": "0",
	"net-book-value-start-goodwill": "0",
	"net-book-value-start-other": "0",
	"net-book-value-start-total": "0",


	//Tangible assets note
	"cost-start-land-buildings": "0",
	"cost-start-plant-machinery": "0",
	"cost-start-office-equipment": "0",
	"cost-start-total": "0",
	"additions-land-buildings": "0",
	"additions-plant-machinery": "0",
	"additions-office-equipment": "0",
	"additions-total": "0",
	"disposals-land-buildings": "0",
	"disposals-plant-machinery": "0",
	"disposals-office-equipment": "0",
	"disposals-total": "0",
	"revaluations-land-buildings": "0",
	"revaluations-plant-machinery": "0",
	"revaluations-office-equipment": "0",
	"revaluations-total": "0",
	"cost-end-land-buildings": "0",
	"cost-end-plant-machinery": "0",
	"cost-end-office-equipment": "0",
	"cost-end-total": "0",
	"depreciation-start-land-buildings": "0",
	"depreciation-start-plant-machinery": "0",
	"depreciation-start-office-equipment": "0",
	"depreciation-start-total": "0",
	"charge-year-land-buildings": "0",
	"charge-year-plant-machinery": "0",
	"charge-year-office-equipment": "0",
	"charge-year-total": "0",
	"on-disposals-land-buildings": "0",
	"on-disposals-plant-machinery": "0",
	"on-disposals-office-equipment": "0",
	"on-disposals-total": "0",
	"other-adjustments-land-buildings": "0",
	"other-adjustments-plant-machinery": "0",
	"other-adjustments-office-equipment": "0",
	"other-adjustments-total": "0",
	"depreciation-end-land-buildings": "0",
	"depreciation-end-plant-machinery": "0",
	"depreciation-end-office-equipment": "0",
	"depreciation-end-total": "0",
	"net-book-value-end-land-buildings": "0",
	"net-book-value-end-plant-machinery": "0",
	"net-book-value-end-office-equipment": "0",
	"net-book-value-end-total": "0",
	"net-book-value-start-land-buildings": "0",
	"net-book-value-start-plant-machinery": "0",
	"net-book-value-start-office-equipment": "0",
	"net-book-value-start-total": "0",
	"small-full-tangible-note-additional-info": "Not entered",

	//Small Full Stocks Note
	"stocks-stocks-current": "0",
	"stocks-stocks-previous": "0",
	"payment-on-account-current": "0",
	"payment-on-account-previous": "0",
	"total-stocks-current": "0",
	"total-stocks-previous": "0",

	//Small Full Debtors note
	"trade-debtors-current": "0",
	"trade-debtors-previous": "0",
	"prepayments-and-accrued-income-current": "0",
	"prepayments-and-accrued-income-previous": "0",
	"other-debtors-current": "0",
	"other-debtors-previous": "0",
	"total-debtors-current": "0",
	"total-debtors-previous": "0",
	"debtors-after-current": "0",
	"debtors-after-previous": "0",
	"stocks-note-additional-info": "Not entered",

	//Small Full Creditors amounts falling due WITHIN on year note
	"bank-loans-current": "0",
	"bank-loans-previous": "0",
	"finance-leases-current": "0",
	"finance-leases-previous": "0",
	"trade-creditors-current": "0",
	"trade-creditors-previous": "0",
	"social-security-current": "0",
	"social-security-previous": "0",
	"accruals-current": "0",
	"accruals-current": "0",
	"other-creditors-current": "0",
	"other-creditors-previous": "0",
	"within-one-year-total-current": "0",
	"within-one-year-total-previous": "0",
	"within-one-year-additional-info": "Not entered",

	//Small Full Creditors amounts falling due AFTER on year note
	"creditors-after-bank-loans-current": "0",
	"creditors-after-bank-loans-previous": "0",
	"creditors-after-finance-leases-current": "0",
	"creditors-after-finance-leases-previous": "0",
	"creditors-after-other-creditors-current": "0",
	"creditors-after-other-creditors-previous": "0",
	"creditors-after-one-year-total-current": "0",
	"creditors-after-one-year-total-previous": "0",
	"creditors-after-after-one-year-additional-info": "Not entered",

	//Small Full Revaluation reserve note
	"revaluation-reserve-start": "0",
	"surplus-deficit-previous": "0",
	"bank-loans-end": "0",

	//Small Full Employees note
	"average-number-of-employees-current": "0",
	"average-number-of-employees-previous": "0",
	"employees-note-additional-info": "Not entered",

	//Small Full fixed assets investments note
	"small-full-fixed-assets-investments-note": "Not entered",

	//Small Full current assets investments note
	"small-full-current-assets-investments-note": "Not entered",

	//Small Full financial commitments note
	"small-full-financial-commitments-note": "Not entered",

	//Small Full loans to directors note
	// TO DO

	//Small Full changes in presentation and prior period adjustments note
	"small-full-changes-in-presentation-note": "Not entered",

	//Small Full related party transactions note
	// TO DO

	// Small Full post balance sheet events note
	"small-full-post-balance-sheet-events-note": "Not entered"


}