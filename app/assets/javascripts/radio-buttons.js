/**
 * @module app/radio-buttons
 * @requires vendor/jquery
 */

 // To bind click events on radio buttons, inputs must include a
 // `data-target-text-field` attribute which matches the id of a text field to
 // show / hide. The radio button which shows the text field must have an
 // additional class: 'show-text'

require(["jquery"], function($) {

    $(document).ready(function() {

      $('[type=radio]').each(function() {

        var targetTextField = $(this).data('target-text-field');

        if (typeof targetTextField != 'undefined') {
			
		  $('#' + targetTextField).hide();

          $(this).click(function() {
            if ($(this).attr('class').includes('show-text')) {
              $('#' + targetTextField).show();
            } else {
              $('#' + targetTextField).hide();
            }
          });

          if ($(this).is(':checked')) {
            $(this).click();
          }
        }
      });
    });
});

 // fix for IE - includes() not supported in IE, so substitute with indexOf
if (!String.prototype.includes) {
    String.prototype.includes = function() {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}
