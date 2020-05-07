// disables sign-up-card2 on page load

$(document).ready(function () {
   $("#sign-up-card2").toggle();
});

$("#sign-up-button").click(function () {
   $("#sign-up-button").toggle();
   $("#sign-up-card2").toggle();
});
