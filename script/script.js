// Prevents user from right click and drag

$(document).ready(function() {
  $(document).bind("contextmenu", function (e) {
    return false;
  });

  $('img').bind("contextmenu", function (e) {
    return false;
  });

  $('img').bind("selectstart", function (e) {
    return false;
  });
});
document.oncontextmenu = function () { return false; }
document.onselectstart = function () { return false; }

// Loads animation prior to the main contents

$(window).on('load',function() {
  $('.preloader').addClass('complete');
});