// Config
var defaultErrorHeading = 'There is a problem';
var defaultErrorDescription = 'Check the following';
var defaultErrorMessage = 'There is an error';

function clearValidation() {
	$( '.govuk-error-summary' )
		.remove();

	$( '.govuk-input--error' )
		.each( function () {
			$( this )
				.removeClass( 'govuk-input--error' );
		} );

	$( '.govuk-error-message' )
		.each( function () {
			$( this )
				.remove();
		} );

	$( '.govuk-form-group--error' )
		.each( function () {
			$( this )
				.removeClass( 'govuk-form-group--error' );
		} );
}

function checkTextFields( errors ) {
	$( document )
		.find( 'input[type="text"],input[type="password"], textarea' )
		.each( function () {
			var $formgroup = $( this )
				.parents( 'fieldset' );
			var label = $( this )
				.parent()
				.find( 'label' )
				.clone()
				.children()
				.remove()
				.end()
				.text();

			if ( $formgroup.attr( 'data-required' ) !== undefined && $( this )
				.val() === '' && !$( this )
				.parent()
				.hasClass( 'js-hidden' ) ) {
				if ( $( this )
					.attr( 'id' ) === undefined ) {
					$( this )
						.attr( 'id', $( this )
							.attr( 'name' ) );
				}

				errors.push( {
					id: $( this )
						.attr( 'id' ),
					name: $( this )
						.attr( 'name' ),
					//	errorMessage: $formgroup.attr( 'data-error' )
					//		.toLowerCase() || defaultErrorMessage.toLowerCase(),
					errorMessage: $formgroup.attr( 'data-error' ), // Don't need messages in lower case
					label: label,
					type: 'text, password'
				} );
			}
		} );
	return;
}

function checkSelectors( errors ) {
	var checked = [];

	$( document )
		.find( 'input[type="radio"], input[type="checkbox"]' )
		.each( function () {
			var $fieldset = $( this )
				.parents( 'fieldset' );
			var label = $fieldset.find( 'legend' )
				.clone()
				.children()
				.remove()
				.end()
				.text();

			if ( $fieldset.attr( 'data-required' ) !== undefined && $fieldset.find( ':checked' )
				.length === 0 ) {
				if ( $( this )
					.attr( 'id' ) === undefined ) {
					$( this )
						.attr( 'id', $( this )
							.attr( 'name' ) );
				}

				if ( checked.indexOf( $( this )
						.attr( 'name' ) ) < 0 ) {
					checked.push( $( this )
						.attr( 'name' ) );
					errors.push( {
						id: $( this )
							.attr( 'id' ),
						name: $( this )
							.attr( 'name' ),
						//	errorMessage: $fieldset.attr( 'data-error' )
						//		.toLowerCase() || defaultErrorMessage.toLowerCase(),
						errorMessage: $fieldset.attr( 'data-error' ), // Don't need messages in lower case
						//label: label,
						label: '', //Temporaily hiding label from error summary
						type: 'text, password'
					} );
				}
			}
		} );
}

function appendErrorSummary() {
	var summaryNotPresent = $( document )
		.find( '.govuk-error-summary' )
		.length === 0;
	var summary = '<div class="govuk-error-summary" role="alert" aria-labelledby="error-summary-heading" data-module="error-summary"  tabindex="-1">' +
		'<h2 class="govuk-error-summary__title" id="error-summary-title">' +
		defaultErrorHeading +
		'</h2>' +
		'<ul class="govuk-list govuk-error-summary__list">' +
		'</ul>' +
		'</div>';





	if ( summaryNotPresent ) {
		$( 'form' )
			.before( summary );
	}
}

function appendErrorMessages( errors ) {
	for ( var i = 0; i < errors.length; i++ ) {
		if ( $( document )
			.find( 'a[href="#' + errors[ i ].id + '"]' )
			.length === 0 ) {
			$( '.govuk-error-summary__list' )
				.append(
					//	'<li><a href="#' + errors[ i ].id + '">' + errors[ i ].label + ' - ' + errors[ i ].errorMessage + '</a></li>'
					'<li><a href="#' + errors[ i ].id + '">' + errors[ i ].errorMessage + '</a></li>' // Current GDS standard seems to be just to repeat the error message, NOT the label/legend

				);
			var $formgroup = $( document )
				.find( '#' + errors[ i ].id )
				.parents( '.govuk-form-group' );
			$formgroup.addClass( 'govuk-form-group--error' );

			if ( $formgroup.find( '.govuk-error-message' )
				.length === 0 ) {
				if ( $formgroup.find( 'input[type="text"], input[type="password"]' )
					.length > 0 || $formgroup.find( 'textarea' )
					.length > 0 ) {
					if ( $formgroup.find( '.govuk-date-input' ) // Date error not quite right, showing data-error three times in the summary - ie one for each input
						.length > 0 ) {
						$formgroup.find( '.govuk-date-input' )
							.before(
								'<span class="govuk-error-message">' +
								errors[ i ].errorMessage +
								'</span>'
							);
					} else {
						$formgroup.find( 'fieldset' ) // prepending to fieldset rather than appending to label for when form elements have hidden labels
							.prepend(
								'<span class="govuk-error-message">' +
								errors[ i ].errorMessage +
								'</span>'
							);
						$formgroup.find( '.govuk-textarea' )
							.addClass( 'govuk-textarea--error' );
						$formgroup.find( '.govuk-input' )
							.addClass( 'govuk-input--error' );
					}

				} else if ( $formgroup.find( 'input[type="radio"]' )
					.length > 0 || $formgroup.find( 'input[type="checkbox"]' ) ) {
					$formgroup.find( 'fieldset' ) // changing from legend to fieldset for instances where legend has a class of .govuk-visually-hidden
						.prepend( // changes append to prepend because error message needs to be shown BEFORE fieldset (rather than AFTER legend)
							'<span class="govuk-error-message">' +
							errors[ i ].errorMessage +
							'</span>'
						);
				}
			}
		}
	}
}

$( document )
	.on( 'submit', 'form', function ( e ) {
		var requiredFieldsPresent = $( document )
			.find( '[data-required]' )
			.length > 0;

		clearValidation();

		if ( requiredFieldsPresent ) {
			var errors = [];

			checkTextFields( errors );
			checkSelectors( errors );

			if ( errors.length > 0 ) {
				e.preventDefault();
				appendErrorSummary();
				appendErrorMessages( errors );
				$( document )
					.scrollTop( 0 );
			}

		}
	} );