// homepage_ajax.js

document.addEventListener('DOMContentLoaded', function () {
  
  var contentToUpdate = document.getElementById('contentToUpdate');

  // Adding an event listener to a button or any other trigger
  var button = document.getElementById('ajaxButton');
  button.addEventListener('click', function () {
    // Making an AJAX request using the fetch API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        // Updating the content of the specified element with the received data
        contentToUpdate.innerHTML = 'AJAX Response: ' + JSON.stringify(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
});
