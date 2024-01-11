// error_ajax.js

$(document).ready(function () {
    // Attaching a click event listener to the button
    $('#backToHomePage').on('click', function () {
        // Making an AJAX request to your API endpoint
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos/1', // Replace with your actual API endpoint
            method: 'GET',
            success: function (data) {
                // Updating the UI based on the response
                console.log('API response:', data);
                // Redirecting to the home page or update UI as needed
                window.location.href = '/rav-homepage.html'; 
            },
            error: function (xhr, status, error) {
                // Handling error, update UI or show error message
                console.error('Error:', status, error);
            }
        });
    });
});
