function updateCartCountOnLoad() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCount = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
    document.getElementById('cart-count').textContent = totalCount;
  }


function cartSendEmail(){
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
    
        // Get form values
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var contactNumber = document.getElementById("contactNumber").value;
        var message1 = document.getElementById("message").value;
        var address1 = document.getElementById("address").value;
        var orderType = document.querySelector('input[name="orderType"]:checked').value;
    
        // Log form values to console for debugging
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(contactNumber);
        console.log(message1);
    
        // Validate if all fields are filled
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || contactNumber.trim() === '' || message1.trim() === '') {
          alert("Please fill out all fields");
          return;
        }
    
        // Gather cart items details
        var items = [];
        var rows = document.querySelectorAll("#tbody1 tr");
        rows.forEach(function (row) {
          var name = row.cells[0].innerText;
          var quantity = row.cells[1].innerText;
          var subtotal = row.cells[2].innerText;
          items.push(`${name} (Quantity: ${quantity}, Subtotal: ${subtotal})`);
        });
        var itemsString = items.join("\n");
    
        // Get total cost
        var totalCost = document.getElementById("total-price").innerText;
    
        // Parameters to send in the email
        let parms = {
          message: message1,
          from_name: firstName,
          lastname: lastName,
          from_email: email,
          contactnum: contactNumber,
          order_items: itemsString,
          totalcost: totalCost,
          addressuser: address1,
          pickupordelivery: orderType
        }
    
        // Send email using Email.send()
        emailjs.send("service_tkhe4xh", "template_198tkel", parms).then(function (response) {
          alert("Order Sent");
          localStorage.removeItem('cart'); // Clear cart from local storage
          location.reload(); // Reload the page
        }, function (error) {
          alert("Failed to send email: " + JSON.stringify(error));
        });
    
        // Reset the form after submission
        document.getElementById("contactForm").reset();
      });
}


function cartUpdate(){
    document.addEventListener('DOMContentLoaded', () => {
        const cartItemsContainer = document.getElementById('tbody1');
        const totalPriceElement = document.getElementById('total-price');
    
        // Retrieve cart items from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Function to update the cart and table rows
        function updateCartAndTable() {
          // Clear existing table rows
          cartItemsContainer.innerHTML = '';
    
          // Reset total price
          let totalPrice = 0;
    
          // Filter out items with quantity 0
          cart = cart.filter(item => item.quantity > 0);
    
          // Re-populate the table
          cart.forEach((item, index) => {
            const itemSubtotal = item.price * item.quantity;
            totalPrice += itemSubtotal;
    
            const cartItem = document.createElement('tr');
            cartItem.innerHTML = `
              <td>${item.name}</td>
              <td>${item.quantity}</td>
              <td>$${itemSubtotal.toFixed(2)}</td>
              <td><span class="remove-icon" data-index="${index}">&times;</span></td>
            `;
    
            cartItemsContainer.appendChild(cartItem);
    
            // Add event listener to remove icon
            const removeIcon = cartItem.querySelector('.remove-icon');
            removeIcon.addEventListener('click', () => {
              location.reload();
              if (item.quantity > 0) {
                item.quantity--;
                updateLocalStorage();
                updateCartAndTable();
                totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
              }
            });
          });
    
          // Update the total price display
          totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
        }
    
        // Function to update localStorage
        function updateLocalStorage() {
          localStorage.setItem('cart', JSON.stringify(cart));
        }
    
        // Initial update of cart and table
        updateCartAndTable();
      });
}