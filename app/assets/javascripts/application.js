/* global $ */

// Warn about using the kit in production
if ( window.console && window.console.info ) {
	window.console.info( 'GOV.UK Prototype Kit - do not use for production' )
}

$( document )
	.ready( function () {
		window.GOVUKFrontend.initAll()
	} )

// Postcode lookup
$( '#button-to-reveal-hidden-div' )
	.on( 'click', function () {
		$( "#button-to-reveal-hidden-div" )
			.hide();
		$( "#manual-address-link" )
			.hide();
		if ( $( '#enter-address-details' )
			.css( 'display' ) != 'none' ) {
			$( '#hidden-div' )
				.show()
				.siblings( 'div' )
				.hide();
		} else if ( $( '#hidden-div' )
			.css( 'display' ) != 'none' ) {
			$( '#enter-address-details' )
				.show()
				.siblings( 'div' )
				.hide();
		}
	} );

// Add more companies (from DWP: https://dwp-patterns.herokuapp.com/additemstoalist)

$( document )
	.on( 'click', '.secondary-button', function ( e ) {
		var beforeThis = $( this )
			.parents( '.grid-row' );
		e.preventDefault();
		insertFields( beforeThis );
		sortFields();
	} );

$( document )
	.on( 'click', '.remove-list-item', function ( e ) {
		e.preventDefault();
		$( this )
			.parents( '.list-item-wrapper' )
			.remove();
		sortFields();
	} );

function insertFields( element ) {
	element.before(
		'<div class="list-item-wrapper govuk-!-margin-bottom-5">' +
		'<fieldset class="govuk-fieldset">' +
		'<div class="form-group list-item">' +
		'<label class="govuk-label govuk-!-margin-top-5 govuk-!-font-weight-bold" for="field-x">' +
		'Company number' +
		'</label>' +
		'<input type="number" class="govuk-input govuk-!-width-one-third" id="field-x" name="field-x">' +
		'</div>' +

		'<div class="list-item govuk-!-margin-top-2 govuk-!-margin-bottom-3">' +
		'</div>' +
		'</fieldset>' +
		'</div>'
	);
}

function sortFields() {
	var listCounter = 1;
	var inputCounter = 1;

	$( document )
		.find( '.list-item-wrapper' )
		.each( function () {
			$( this )
				.find( 'h2' )
				.text( 'Item ' + listCounter );

			if ( $( this )
				.find( '.remove-list-item' )
				.length === 0 ) {
				$( this )
					.find( '.list-item:last' )
					.append( '<a id="remove-item-' + listCounter + '" class="remove-list-item" href="#">Remove this</a>' );
			} else {
				$( this )
					.find( '.remove-list-item' )
					.attr( 'id', 'remove-item-' + listCounter );
			}

			$( this )
				.find( '.list-item' )
				.children( 'label' )
				.each( function () {
					$( this )
						.attr( 'for', 'field-' + inputCounter );
					inputCounter++;
				} );

			$( this )
				.find( '.list-item' )
				.children( 'input' )
				.each( function () {
					var labelNo = $( this )
						.parent()
						.find( 'label' )
						.attr( 'for' )
						.split( '-' )
						.pop();
					$( this )
						.attr( 'id', 'field-' + labelNo );
					$( this )
						.attr( 'name', 'field-' + labelNo );
				} );

			listCounter++;
		} );

	if ( $( document )
		.find( '.list-item-wrapper' )
		.length === 1 ) {
		$( '.remove-list-item' )
			.remove();
	}
}