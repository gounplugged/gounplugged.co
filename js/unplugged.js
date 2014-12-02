$(document).ready(function() {
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function toggleWelcomeButton(showOrHide) {
    $("#welcome-button").toggle(showOrHide);
    $("#welcome-form").toggle(!showOrHide);
  }

  toggleWelcomeButton(true);

  $( "#welcome-button" ).click(function() {
    toggleWelcomeButton();
  });
});