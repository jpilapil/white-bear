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

// LANDING PAGE--------------------

// FIRST CARD

// email for first card --
$("#lets-go").click(function () {
   var checkEmail = $("#inputEmail1").val().length;
   if (checkEmail == 0) {
      $("#inputEmail1").addClass("is-invalid");
      $(".email-error1").removeClass("d-none");
   } else {
      $("#inputEmail1").removeClass("is-invalid");
      $(".email-error1").addClass("d-none");
   }
});

// password for first card --

// please enter password if empty
$("#lets-go").click(function () {
   var checkPassword = $("#inputPassword1").val().length;
   if (checkPassword == 0) {
      $("#inputPassword1").addClass("is-invalid");
      $(".password-enter-error1").removeClass("d-none");
   } else {
      $("#inputPassword1").removeClass("is-invalid");
      $(".password-enter-error1").addClass("d-none");
   }
});

// password must contain 9 or more char first card
$("#lets-go").click(function () {
   var checkPassword = $("#inputPassword1").val().length;
   if (checkPassword == 0) {
      $("#inputPassword1").addClass("is-invalid");
      $(".password-enter-error1").removeClass("d-none");
   } else {
      $("#inputPassword1").removeClass("is-invalid");
      $(".password-enter-error1").addClass("d-none");
   }

   if (checkPassword < 9 && checkPassword !== 0) {
      $("#inputPassword1").addClass("is-invalid");
      $(".password-char-error1").removeClass("d-none");
   } else {
      $("#inputPassword1").removeClass("is-invalid");
      $(".password-char-error1").addClass("d-none");
   }
});

// SECOND CARD

// email for second card --
$("#log-in").click(function () {
   var checkEmail = $("#inputEmail2").val().length;
   if (checkEmail == 0) {
      $("#inputEmail2").addClass("is-invalid");
      $(".email-error2").removeClass("d-none");
   } else {
      $("#inputEmail2").removeClass("is-invalid");
      $(".email-error2").addClass("d-none");
   }
});

// password for second card --
// please enter password if empty
$("#log-in").click(function () {
   var checkPassword = $("#inputPassword2").val().length;
   if (checkPassword == 0) {
      $("#inputPassword2").addClass("is-invalid");
      $(".password-enter-error2").removeClass("d-none");
   } else {
      $("#inputPassword2").removeClass("is-invalid");
      $(".password-enter-error2").addClass("d-none");
   }

   // must contain 9 or more char
   if (checkPassword < 9 && checkPassword !== 0) {
      $("#inputPassword2").addClass("is-invalid");
      $(".password-char-error2").removeClass("d-none");
   } else {
      $("#inputPassword2").removeClass("is-invalid");
      $(".password-char-error2").addClass("d-none");
   }
});

// textarea character counter
$("textarea").keyup(function () {
   var characterCount = $(this).val().length,
      current = $("#current"),
      maximum = $("#maximum"),
      theCount = $("#the-count");

   current.text(characterCount);

   if (characterCount > 240) {
      $("#the-count").addClass("counter-color");
   } else if (characterCount < 240) {
      $("#the-count").removeClass("counter-color");
   }
});
