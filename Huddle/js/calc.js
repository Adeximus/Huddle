const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function (e) {
   e.preventDefault();


   checkInputs();
})

function checkInputs() {
   // get the value from the inputs
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const password2Value = password2.value.trim();


   if (usernameValue === '') {
      //show error
      //add error
      SetErrorFor(username, 'Username cannot be blank');
   } else {
      //add success class
      SetSucessFor(username);
   };

   if(emailValue === ''){
      SetErrorFor(email, 'Email cannot be blank');
   } else if(!isEmail(emailValue)){
      SetErrorFor(email, 'Email is not Valid');
   } else {
      SetSucessFor(email);
   };

   if (passwordValue === '') {
      SetErrorFor(password, 'Email cannot be blank');
   } else {
      SetSucessFor(password);
   };

   if (password2Value === '') {
      SetErrorFor(password2, 'Email cannot be blank');
   } else if (passwordValue !== password2Value) {
      SetErrorFor(password2, 'password dose not match')
   }
   else {
      SetSucessFor(password2);
   };
}

function SetErrorFor(input, message) {
   const formControl = input.parentElement; // .form-control class
   const small = formControl.querySelector('small'); // selecting the small Element from HTML 

   // add error message inside small
   small.innerText = message;

   // add error class to HTML
   formControl.className = 'form-control error';
}

function SetSucessFor(input) {
   const formControl = input.parentElement; // .form-control class

   // add sucess class to HTML
   formControl.className = 'form-control sucess';
}

function isEmail(email) {
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'); 
  return regex.test(email);
}

// let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

// let testEmails = ["notanemail.com", "workingexample@email.com", "another_working@somethingelse.org", "notworking@1.com"];

// testEmails.forEach((address) => {
//     console.log(regex.test(address))
// });
