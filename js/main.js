// disables sign-up-card2 on page load for landing page
$(document).ready(function () {
   $("#sign-up-card2").toggle();
});

// toggles second sign up
$("#sign-up-button").click(function () {
   $("#sign-up-button").toggle();
   $("#sign-up-card2").toggle();
});

// toggles card save success when clicked

$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

// toggles error cue when clicked
$("#delete-imagery").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

// toggle delete button
$("#show-delete").click(function () {
   $("#delete-card").toggleClass("d-flex d-none");
});

// toggle delete success
$("#delete-card").click(function () {
   $("#delete-success").toggleClass("d-flex d-none");
});
