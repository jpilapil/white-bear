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

// first card

// email for first card
$("#lets-go").click(function () {
   var checkEmail = $("#exampleInputEmail1").val().length;
   if (checkEmail == 0) {
      $(".email-error1").removeClass("d-none");
      return false;
   } else if (checkEmail != 0) {
      $(".email-error1").addClass("d-none");
   }
});
// password for first card

$("#lets-go").click(function () {
   var checkPassword = $("#exampleInputPassword1").val().length;
   if (checkPassword === 0) {
      $(".password-enter-error1").removeClass("d-none");
   } else if (checkPassword != 0) {
      $(".password-enter-error1").addClass("d-none");
   }

   if (checkPassword < 9) {
      $(".password-error1").removeClass("d-none");
   } else if (checkPassword >= 9) {
      $(".password-error1").addClass("d-none");
   }
});

// second card

// email for second card
$("#log-in").click(function () {
   var checkEmail = $("#exampleInputEmail2").val().length;
   if (checkEmail == 0) {
      $(".email-error2").removeClass("d-none");
      return false;
   } else if (checkEmail != 0) {
      $(".email-error2").addClass("d-none");
   }
});

// password for second card
$("#log-in").click(function () {
   var checkPassword = $("#exampleInputPassword2").val().length;
   if (checkPassword === 0) {
      $(".password-enter-error2").removeClass("d-none");
   } else if (checkPassword != 0) {
      $(".password-enter-error2").addClass("d-none");
   }

   if (checkPassword < 9) {
      $(".password-error2").removeClass("d-none");
   } else if (checkPassword >= 9) {
      $(".password-error2").addClass("d-none");
   }
});

// textarea character counter
$("textarea").keyup(function () {
   var characterCount = $(this).val().length,
      current = $("#current"),
      maximum = $("#maximum"),
      theCount = $("#the-count");

   current.text(characterCount);

   if (characterCount >= 240) {
      $("#the-count").addClass("counter-color");
   } else if (characterCount < 240) {
      $("#the-count").removeClass("counter-color");
   }
});
