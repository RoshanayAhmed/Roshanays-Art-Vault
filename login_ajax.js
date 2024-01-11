// login_ajax.js

$(document).ready(function () {
  // Selecting the button and attach a click event listener
  const loginButton = $('.button-PTa');
  loginButton.on('click', loginUser);

  // Function to handle login
  function loginUser() {
    // Collect user input
    const emailOrPhoneNumber = $('.frame-755-n4U').text();
    const password = $('.frame-756-Ppx').text();

    // Preparing data to send to the server
    const data = {
      emailOrPhoneNumber: emailOrPhoneNumber,
      password: password,
      // Including other fields as needed
    };

    // Making an AJAX request
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos/1', 
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function (response) {
        
        console.log('Login successful!', response);
        
      },
      error: function (error) {
        // Handling errors
        console.error('Error logging in:', error);
        
      }
    });
  }
  function displaySuccessMessage() {
    
    alert('Login successful!'); 
  }

  function displayErrorMessage(message) {
    n
    alert('Login failed. ' + message); 
  }

  function redirectToDashboard() {
    // Redirecting the user to the dashboard or another page
    window.location.href = 'rav-homepage.html'; 
  }
});
