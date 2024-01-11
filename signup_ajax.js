// ajax-signup.js

document.addEventListener('DOMContentLoaded', function () {
  // Selecting the button and attach a click event listener
  const signUpButton = document.querySelector('.button-Za4');
  signUpButton.addEventListener('click', signUp);

  // Function to handle the sign-up process
  function signUp() {
    // Collect user input
    const name = document.querySelector('.name-eAG').value;
    const emailOrPhoneNumber = document.querySelector('.email-or-phone-number-Uuz').value;
    const password = document.querySelector('.password-vX6').value;

    // Preparing data to send to the server
    const data = {
      name: name,
      emailOrPhoneNumber: emailOrPhoneNumber,
      password: password
    };

    // Making an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Setting up the callback function for when the request is complete
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Request was successful
        console.log('Sign-up successful!');
        
      } else {
        // Request failed
        console.error('Sign-up failed. Status:', xhr.status);
        
      }
    };

    // Converting the data object to JSON and send the request
    xhr.send(JSON.stringify(data));
  }
});
