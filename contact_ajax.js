// contact_ajax.js

document.addEventListener('DOMContentLoaded', function () {
    // Selecting the button and attach a click event listener
    const sendButton = document.querySelector('.button-vkC');
    sendButton.addEventListener('click', sendMessage);
  
    // Function to handle sending a message
    function sendMessage() {
      // Collecting user input
      const name = document.querySelector('.placebox-info-rwN-sub-0').value;
      const email = document.querySelector('.placebox-info-KyN-sub-0').value;
      const phone = document.querySelector('.placebox-info-fvk-sub-0').value;
      const message = document.querySelector('.placebox-info-dm6').value;
  
      // Preparing data to send to the server
      const data = {
        name: name,
        email: email,
        phone: phone,
        message: message
      };
  
      // Making an AJAX request
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://jsonplaceholder.typicode.com/todos/1', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
  
      // Setting up the callback function for when the request is complete
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          // Request was successful
          console.log('Message sent successfully!');
          
        } else {
          // Request failed
          console.error('Message sending failed. Status:', xhr.status);
          
        }
      };
  
      // Converting the data object to JSON and send the request
      xhr.send(JSON.stringify(data));
    }
  });
  