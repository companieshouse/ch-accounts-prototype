//Choose type of accounts - disabled next button, only undisable it if user selects Abridged, Micro or Dormant
$(document).ready(function() {
    $('#choose-accounts-button').attr('disabled', 'true'); // Disables Next button on page load
    $('input:radio[name=choosetypeaccounts]').click(function() {
        var checkval = $(this).val();
        $('#choose-accounts-button').prop('disabled', !(checkval == 'abridged' || checkval == 'micro' || checkval == 'dormant'));
    });
});
