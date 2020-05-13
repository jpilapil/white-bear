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

// LANDING PAGE

// email for first card
$("#lets-go").click(function () {
   var checkEmail = $("#exampleInputEmail1").val().length;
   if (checkEmail == 0) {
      $(".email-error1").toggleClass("d-none");
      return false;
   }
});

// email for second card
$("#log-in").click(function () {
   var checkEmail = $("#exampleInputEmail2").val().length;
   if (checkEmail == 0) {
      $(".email-error2").toggleClass("d-none");
      return false;
   }
});

// password for first card
$("#lets-go").click(function () {
   var checkPassword = $("#exampleInputPassword1").val().length;
   if (checkPassword < 8) {
      $(".password-error1").toggleClass("d-none");
      return false;
   }
});

// password for second card
$("#log-in").click(function () {
   var checkPassword = $("#exampleInputPassword2").val().length;
   if (checkPassword < 8) {
      $(".password-error2").toggleClass("d-none");
      return false;
   }
});
