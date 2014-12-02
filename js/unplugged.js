$(document).ready(function() {
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function toggleWelcomeForm(showOrHide) {
    $("#welcome-button").addClass('hidden');
    $("#welcome-form").removeClass('hidden');
  }

  function toggleSubmitButton(showOrHide) {
    $("#welcome-form").addClass('hidden');
    $("#welcome-submitted").removeClass('hidden');
  }

  function submitContactInfo(contactInfo) {
    // $.post( "example.php", { contact_info: contactInfo });
    var currentUrl = window.location.href;
    assert(currentUrl);
  }

  function submitHeaderForm() {
    var contactInfo = $("#header-email").val();
    submitContactInfo(contactInfo);
    // toggleSubmitButton(true);
  }

  function submitEndForm() {

  }

  // toggleWelcomeButton(true);

  $("#welcome-button").click(function() {
    toggleWelcomeForm();
  });

  $("#welcome-form-form").submit(function() {
    submitHeaderForm();
  });
});
