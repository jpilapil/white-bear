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
//email first card
$("#letsGo").click(function () {
   var emailInput = $("#inputEmail1").val();
   if (emailInput == "") {
      $("#emailError1").show();
      $("#inputEmail1").addClass("is-invalid");
   } else {
      $("#inputEmail1").removeClass("is-invalid");
      $("#inputEmail1").addClass("is-valid");
      $("#emailError1").hide();
   }
});

// password first card
$("#letsGo").click(function () {
   var passwordInput = $("#inputPassword1").val();
   var emailInput = $("#inputEmail1").val();
   if (passwordInput.length === 0) {
      $("#passwordEnterError1").show(); // please enter password
      $("#inputPassword1").addClass("is-invalid");
   } else if (passwordInput.length < 9) {
      $("#passwordLengthError1").show(); // password must be 9 char
      $("#passwordEnterError1").hide(); // hides input pw warning
      $("#inputPassword1").addClass("is-invalid");
   } else if (passwordInput == emailInput) {
      $("#sameLocalError").show(); // email cannot be same as email
      $("#passwordLengthError1").hide();
      $("#passwordEnterError1").hide();
      $("#inputPassword1").addClass("is-invalid");
   } else {
      $("#inputPassword1").removeClass("is-invalid");
      $("#sameLocalError").removeClass("is-invalid");
      $("#inputPassword1").addClass("is-valid");
      $("#passwordLengthError1, #passwordEnterError1").hide();
   }

   // WORK ON THIS ---------------------------------------------------------------------------------------------
   var user = {
      _id: 678123,
      email: emailInput,
      password: passwordInput,
      createdOn: 2006192221700,
   };

   // function randomNumber(min, max) {
   //    var randomVal = min + Math.random() * (max - min);
   //    return Math.round(randomVal);
   // }

   for (var _id in user) {
   }

   console.log(user._id);
   // console.log(randomNumber(000, 999));
});

// SECOND CARD
//email second card
$("#logIn").click(function () {
   var emailInput = $("#inputEmail2").val();
   if (emailInput == "") {
      $("#emailError2").show();
      $("#inputEmail2").addClass("is-invalid");
   } else {
      $("#inputEmail2").removeClass("is-invalid");
      $("#inputEmail2").addClass("is-valid");
      $("#emailError2").hide();
   }
});

// password second card
$("#logIn").click(function () {
   var passwordInput = $("#inputPassword2").val();
   var emailInput = $("#inputEmail2").val();
   if (passwordInput.length === 0) {
      $("#passwordEnterError2").show(); // please enter password
      $("#inputPassword2").addClass("is-invalid");
   } else if (passwordInput.length < 9) {
      $("#passwordLengthError2").show(); // // password must be 9 char
      $("#passwordEnterError2").hide(); // hides input pw warning
      $("#inputPassword2").addClass("is-invalid");
   } else if (passwordInput == emailInput) {
      $("#sameLocalError").show(); // email cannot be same as email
      $("#passwordLengthError2").hide();
      $("#passwordEnterError2").hide();
      $("#inputPassword2").addClass("is-invalid");
   } else {
      $("#inputPassword2").removeClass("is-invalid");
      $("#sameLocalError").removeClass("is-invalid");
      $("#inputPassword2").addClass("is-valid");
      $("#passwordLengthError2, #passwordEnterError2").hide();
   }
});

// FIRST CARD

// // email for first card --
// $("#lets-go").click(function () {
//    var checkEmail = $("#inputEmail1").val().length;
//    if (checkEmail == 0) {
//       $("#inputEmail1").addClass("is-invalid");
//       $(".email-error1").removeClass("d-none");
//    } else {
//       $("#inputEmail1").removeClass("is-invalid");
//       $(".email-error1").addClass("d-none");
//    }
// });

// // password for first card --

// // please enter password if empty
// $("#lets-go").click(function () {
//    var checkPassword = $("#inputPassword1").val().length;
//    if (checkPassword == 0) {
//       $("#inputPassword1").addClass("is-invalid");
//       $(".password-enter-error1").removeClass("d-none");
//    } else {
//       $("#inputPassword1").removeClass("is-invalid");
//       $(".password-enter-error1").addClass("d-none");
//    }
// });

// // password must contain 9 or more char first card
// $("#lets-go").click(function () {
//    var checkPassword = $("#inputPassword1").val().length;
//    if (checkPassword == 0) {
//       $("#inputPassword1").addClass("is-invalid");
//       $(".password-enter-error1").removeClass("d-none"); // please enter your password
//    } else {
//       $("#inputPassword1").removeClass("is-invalid");
//       $(".password-enter-error1").addClass("d-none");
//    }

//    if (checkPassword < 9 && checkPassword !== 0) {
//       $("#inputPassword1").addClass("is-invalid");
//       $(".password-char-error1").removeClass("d-none"); // password must be at least 9 char
//    } else {
//       $("#inputPassword1").removeClass("is-invalid");
//       $(".password-char-error1").addClass("d-none");
//    }
//    // password cannot be same as email
//    var passwordSame = $("inputPassword1").val();
//    var emailSame = $("inputEmail1").val();
//    if (emailSame == passwordSame) {
//       $("#inputPassword1").addClass("is-invalid");
//       $(".check-email-password").removeClass("d-none"); // email cannot be used in password
//    } else {
//       $("#inputPassword1").removeClass("is-invalid");
//       $(".check-email-password").addClass("d-none");
//    }
// });

// // SECOND CARD

// // email for second card --
// $("#log-in").click(function () {
//    var checkEmail = $("#inputEmail2").val().length;
//    if (checkEmail == 0) {
//       $("#inputEmail2").addClass("is-invalid");
//       $(".email-error2").removeClass("d-none");
//    } else {
//       $("#inputEmail2").removeClass("is-invalid");
//       $(".email-error2").addClass("d-none");
//    }
// });

// // password for second card --
// // please enter password if empty
// $("#log-in").click(function () {
//    var checkPassword = $("#inputPassword2").val().length;
//    if (checkPassword == 0) {
//       $("#inputPassword2").addClass("is-invalid");
//       $(".password-enter-error2").removeClass("d-none");
//    } else {
//       $("#inputPassword2").removeClass("is-invalid");
//       $(".password-enter-error2").addClass("d-none");
//    }

//    // must contain 9 or more char
//    if (checkPassword < 9 && checkPassword !== 0) {
//       $("#inputPassword2").addClass("is-invalid");
//       $(".password-char-error2").removeClass("d-none");
//    } else {
//       $("#inputPassword2").removeClass("is-invalid");
//       $(".password-char-error2").addClass("d-none");
//    }
// });

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
