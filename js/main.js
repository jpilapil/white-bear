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
$("#saveImagery").click(function () {
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

$("#letsGo").click(function () {
   var isValidEmail = false;
   var isValidPassword = false;

   //email first card
   var emailInput = $("#inputEmail1").val();
   if (emailInput == "") {
      $("#emailError1").show();
      $("#inputEmail1").addClass("is-invalid");
   } else {
      $("#inputEmail1").removeClass("is-invalid");
      $("#inputEmail1").addClass("is-valid");
      $("#emailError1").hide();
      isValidEmail = true;
   }

   // password first card
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
      $("#sameLocalError").show(); // email cannot be same as password
      $("#passwordLengthError1").hide();
      $("#passwordEnterError1").hide();
      $("#inputPassword1").addClass("is-invalid");
   } else {
      $("#inputPassword1").removeClass("is-invalid");
      $("#sameLocalError").removeClass("is-invalid");
      $("#inputPassword1").addClass("is-valid");
      $("#passwordLengthError1, #passwordEnterError1").hide();
      isValidPassword = true;
   }

   // USER OBJECT
   var user = {
      _id: "",
      email: emailInput,
      password: passwordInput,
      createdOn: "",
   };

   // if all requirements in email and password inputs are correct, log the user object to the console.
   if (isValidEmail === true && isValidPassword === true) {
      console.log(user);
   }

   // GETS CREATEDON VALUE

   // creates padding for the dates and adds a 0 if they are one digit
   function addPadding(num) {
      if (String(num).length < 2) {
         return "0" + String(num);
      } else {
         return num;
      }
   }

   var todaysDate = new Date(); // generate the current date
   // takes the current date
   // gets respective properties from the current date
   var todaysYear = todaysDate.getYear() - 100;
   var todaysMonth = todaysDate.getMonth() + 1; // months are 0 index. +1 to show current month
   var todaysDay = todaysDate.getDate();
   var todaysHour = todaysDate.getHours();
   var todaysMin = todaysDate.getMinutes();
   var todaysSec = todaysDate.getSeconds();
   var todaysMilli = todaysDate.getMilliseconds();
   var todaysDateTime = // concatenates all of the properties we need for todays date and time
      "" + // converts it to a string
      addPadding(todaysYear) +
      addPadding(todaysMonth) +
      addPadding(todaysDay) +
      addPadding(todaysHour) +
      addPadding(todaysMin) +
      addPadding(todaysSec);
   user.createdOn = todaysDateTime; // pushes the string of todaysDateTiome to the user object, createdOn property

   // _id VALUE

   function idPadding(num) {
      if (String(num).length == 1) {
         return "00" + String(num);
      } else if (String(num).length == 2) {
         return "0" + String(num);
      } else {
         return num;
      }
   }
   var randomNumber = Math.floor(Math.random() * 1000);
   var testNumber = "" + idPadding(todaysMilli) + idPadding(randomNumber);
   user._id = testNumber;
});

// SECOND CARD

// password second card
$("#logIn").click(function () {
   //email second card
   var emailInput = $("#inputEmail2").val();
   if (emailInput == "") {
      $("#emailError2").show();
      $("#inputEmail2").addClass("is-invalid");
   } else {
      $("#inputEmail2").removeClass("is-invalid");
      $("#inputEmail2").addClass("is-valid");
      $("#emailError2").hide();
   }

   // password second card
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

// CREATE IMAGERY PAGE -----------------
$("#saveImagery").click(function () {
   var lastSave = {
      _id: 002045,
      imagery:
         "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG.",
      answer:
         "The syntax for making a comment in HTML is <!-- Mike's comment here -->",
      levelNum: 1,
      successfulAttemptsNum: 0,
      createdOn: 200508232659,
      lastAttemptedOn: 200508232659, // same as createdOn
   };

   // GETS CREATEDON VALUE
   // creates padding for the dates and adds a 0 if they are one digit
   function addPadding(num) {
      if (String(num).length < 2) {
         return "0" + String(num);
      } else {
         return num;
      }
   }

   var todaysDate = new Date(); // generate the current date
   // takes the current date
   // gets respective properties from the current date
   var todaysYear = todaysDate.getYear() - 100;
   var todaysMonth = todaysDate.getMonth() + 1; // months are 0 index. +1 to show current month
   var todaysDay = todaysDate.getDate();
   var todaysHour = todaysDate.getHours();
   var todaysMin = todaysDate.getMinutes();
   var todaysSec = todaysDate.getSeconds();
   var todaysMilli = todaysDate.getMilliseconds();
   var todaysDateTime = // concatenates all of the properties we need for todays date and time
      "" + // converts it to a string
      addPadding(todaysYear) +
      addPadding(todaysMonth) +
      addPadding(todaysDay) +
      addPadding(todaysHour) +
      addPadding(todaysMin) +
      addPadding(todaysSec);
   lastSave.createdOn = todaysDateTime; // pushes the string of todaysDateTiome to the lastSave object, createdOn property
   lastSave.successfulAttemptsNum = todaysDateTime; // pushes the string of todaysDateTiome to the lastSave object, successfulAttemptsNum property

   // _id VALUE

   function idPadding(num) {
      if (String(num).length == 1) {
         return "00" + String(num);
      } else if (String(num).length == 2) {
         return "0" + String(num);
      } else {
         return num;
      }
   }
   var randomNumber = Math.floor(Math.random() * 1000);
   var testNumber = "" + idPadding(todaysMilli) + idPadding(randomNumber);
   lastSave._id = testNumber;

   console.log(lastSave);
});
