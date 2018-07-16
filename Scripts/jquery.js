$(".button" ).click(function() {
  showpopup();
});

function showpopup() {
  $(".form").fadeIn();
  $(".button").hide();
}

$(".cancel" ).click(function() {
  hidepopup();
});

function hidepopup() {
  $(".form").fadeOut();
  $(".button").show();
}
