import './styles/input.css';

const text: string = 'Hello TypeScript';
console.log(text);

let errorMessageClass: string = "transition duration-200 bg-red-500 p-2 text-sm";

let form = document.getElementById('form');
let email = <HTMLInputElement>document.getElementById('email');
let emailError = document.querySelector("#email + span.error");

let country = <HTMLInputElement>document.getElementById('country');
let countryError = document.querySelector("#country + span.error")

let postal = <HTMLInputElement>document.getElementById('postal');
let postalError = document.querySelector("#postal + span.error");

let password = <HTMLInputElement>document.getElementById('password');
let passwordError = document.querySelector("#password + span.error");

let confirm = <HTMLInputElement>document.getElementById('pwconfirm');
let confirmError = document.querySelector("#pwconfirm + span.error");

if(form.addEventListener) {
  form.addEventListener('submit', formSubmit, false);
}

email.addEventListener("input", (event) => {
  // Check if the user is typing a valid email

  if(email.validity.valid) {
    //if input field is valid
    emailError.textContent = "";
    emailError.className = "";
  } else {
    // else check which email error to display
    showEmailError();
  }
});

country.addEventListener("input", (event) => {
  // Check if the user is inputting a correct country
  if(country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "";
  } else {
    showCountryError();
  }
});

postal.addEventListener("input", (event) => {
  if(postal.validity.valid) {
    postalError.textContent = "";
    postalError.className = "";
  } else {
    showPostalError();
  }
})

password.addEventListener("input", (event) => {
  if(password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "";
  } else {
    showPasswordError();
  }
});

confirm.addEventListener("input", (event) => {
  if(confirm.validity.valid) {
    confirmError.textContent = "";
    confirmError.className = "";
  } else {
    showConfirmError();
  }
});

function formSubmit() {
  alert("Form submitted!");
}

function showEmailError() {
  if(email.validity.valueMissing) {
    // If email input field is empty,
    // display error message
    emailError.textContent = "Please fill in an email address in this field";
  } else if(email.validity.typeMismatch) {
    // If email input field does not have the correct input,
    // display error message
    emailError.textContent = "Please fill in a correct email address in this field(johnsmith@email.com)";
  }

  // enable error message to showup
  emailError.className = errorMessageClass;
}

function showCountryError() {
  // if country input field does not have the correct input
  if(country.validity.valueMissing) {
    countryError.textContent = "Please select a country from this list!";
  }

  // enable error message to showup
  countryError.className = errorMessageClass;
}

function showPostalError() {
  if(postal.validity.valueMissing) {
    // if postal input field is blank
    postalError.textContent = "Please enter a postal code in the format of A1A 1A1";
  } else if(postal.validity.patternMismatch) {
    // else if the postal input is not matching the pattern
    postalError.textContent = "The postal code inputted is incorrect. Correct format is 'A1A 1A1'";
  }
  // enable error message to showup
  postalError.className = errorMessageClass;
}

function showPasswordError() {
  if(password.validity.valueMissing) {
    // if password input field is empty
    passwordError.textContent = "Please input a password(min 8 characters length)";
  } else if(password.validity.tooShort) {
    // if password inputted is too short
    passwordError.textContent = "Please make your password atleast 8 characters length";
  }

  passwordError.className = errorMessageClass;
}

function showConfirmError() {
  if(confirm.validity.valueMissing) {
    // if confirm password input field is empty
    confirmError.textContent = "Please re-input your password";
  } else if(confirm.validity.customError) {
    // else if the custom error occurs
    confirmError.textContent = "Make sure the passwords match in both fields";
  }

  confirmError.className = errorMessageClass;

}

function validatePassword() {
  console.log(password.value + " " + confirm.value);
  if(password.value != confirm.value) {
    confirm.setCustomValidity("Passwords don't match");
    confirm.reportValidity();
    
  } else {
    confirm.setCustomValidity('');
    confirmError.textContent = "";
    confirmError.className = ''
  }
}


confirm.onkeyup = validatePassword;