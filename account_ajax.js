// account_ajax.js

document.addEventListener('DOMContentLoaded', function () {
  // Selecting the button and attach a click event listener
  const saveChangesButton = document.querySelector('.button-2dA');
  saveChangesButton.addEventListener('click', saveChanges);

  // Function to handle saving changes
  function saveChanges() {
    // Collecting user input
    const firstName = document.querySelector('.placebox-info-dVE').innerText;
    const lastName = document.querySelector('.placebox-info-P72').innerText;
    const email = document.querySelector('.placebox-info-Wqr').innerText;
    const address = document.querySelector('.placebox-info-KoJ').innerText;

    
    const currentPassword = document.querySelector('.placebox-info-fkg').innerText;
    const newPassword = document.querySelector('.placebox-info-AhS').innerText;
    const confirmNewPassword = document.querySelector('.placebox-info-rqA').innerText;

    // Preparing data to send to the server
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword,
      
    };

    // Making an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Setting up the callback function for when the request is complete
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Request was successful
        console.log('Changes saved successfully!');
        
      } else {
        // Request failed
        console.error('Saving changes failed. Status:', xhr.status);
        
      }
    };

    
    xhr.send(JSON.stringify(data));
  }
});
