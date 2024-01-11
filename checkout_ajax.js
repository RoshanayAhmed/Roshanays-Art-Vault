// checkout_ajax.js

$(document).ready(function () {
  // Selecting the button and attach a click event listener
  const placeOrderButton = $('.button-tUC');
  placeOrderButton.on('click', placeOrder);

  // Function to handle placing the order
  function placeOrder() {
    // Collect user input
    const firstName = $('.frame-803-pxL').text();
    const companyName = $('.frame-803-rPE').text();
    const streetAddress = $('.frame-804-YvG').text();
    const apartment = $('.frame-805-npc').text();
    const townCity = $('.frame-806-JwN').text();
    const phoneNumber = $('.frame-807-edr').text();
    const emailAddress = $('.frame-808-yZe').text();

    
    const saveInformation = $('.frame-828-vUt .icon-checkbox-GHr').hasClass('checked'); // Check if information should be saved

    // Preparing data to send to the server
    const data = {
      firstName: firstName,
      companyName: companyName,
      streetAddress: streetAddress,
      apartment: apartment,
      townCity: townCity,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      saveInformation: saveInformation,
      
    };

    // Making an AJAX request
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos/1', 
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function (response) {
        
        console.log('Order placed successfully!', response);
        
      },
      error: function (error) {
        // Handle errors
        console.error('Error placing the order:', error);
        
      }
    });
  }
});
