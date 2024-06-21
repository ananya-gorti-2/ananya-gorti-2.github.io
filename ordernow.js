// ordernow.js
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemsArray = [
        { id: 1, name: 'Fish Tacos', price: 7.99 },
        { id: 2, name: 'Deep Dish Pizza', price: 12.99 },
        { id: 3, name: 'Fried Catfish', price: 10.99 },
        { id: 4, name: 'Fried Green Tomatoes', price: 7.99 },
        { id: 5, name: 'Lobster Mac & Cheese', price: 9.99 },
        { id: 6, name: 'Bobotie', price: 11.99 },
        { id: 7, name: 'Couscous', price: 10.99 },
        { id: 8, name: 'Fufu and Soup', price: 11.99 },
        { id: 9, name: 'Jollof Rice', price: 10.99 },
        { id: 10, name: 'Maatoke', price: 9.99 },
        { id: 11, name: 'Chicken Fried Rice', price: 11.99 },
        { id: 12, name: 'Noodles with Meatballs', price: 9.99 },
        { id: 13, name: 'Spicy Citrus Noodles', price: 9.99 },
        { id: 14, name: 'Stir Fry Noodles', price: 9.99 },
        { id: 15, name: 'Vegetable Dim Sum Soup', price: 9.99 },
        { id: 16, name: 'Bisque', price: 9.99 },
        { id: 17, name: 'Bouillabaisse', price: 12.99 },
        { id: 18, name: 'Croque Monsieur', price: 10.99 },
        { id: 19, name: 'French Onion Soup', price: 9.99 },
        { id: 20, name: 'Ratatouille', price: 10.99 },
        { id: 21, name: 'Butter Chicken with Naan', price: 12.99 },
        { id: 22, name: 'Dosa with Sambar', price: 12.99 },
        { id: 23, name: 'Hyderabadi Chicken Biryani', price: 12.99 },
        { id: 24, name: 'Samosas with Chutney', price: 9.99 },
        { id: 25, name: 'Tandoori Roti', price: 7.99 },
        { id: 26, name: 'Onigiri', price: 9.99 },
        { id: 27, name: 'Sushi and Sashimi', price: 11.99 },
        { id: 28, name: 'Takoyaki', price: 9.99 },
        { id: 29, name: 'Tempura', price: 9.99 },
        { id: 30, name: 'Yakitori', price: 10.99 },
        { id: 31, name: 'Green Curry', price: 10.99 },
        { id: 32, name: 'Pad Thai', price: 10.99 },
        { id: 33, name: 'Panang curry', price: 10.99 },
        { id: 34, name: 'Spicy Green Papaya Salad', price: 9.99 }
        ];
  
    const orderDetailsDiv = document.getElementById('order-details');
    const totalPriceSpan = document.getElementById('total-price');
  
    let totalPrice = 0;
  
    cart.forEach((cartItem, index) => {
      const itemInfo = itemsArray.find(item => item.id === cartItem.id);
  
      if (itemInfo) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
          <p>${itemInfo.name} - $${itemInfo.price.toFixed(2)} x ${cartItem.quantity}</p>
          <button data-index="${index}" data-id="${cartItem.id}" class="remove-button">Remove</button>
        `;
        orderDetailsDiv.appendChild(itemDiv);
  
        totalPrice += itemInfo.price * cartItem.quantity;
      }
    });
  
    totalPriceSpan.textContent = totalPrice.toFixed(2);
  
    orderDetailsDiv.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-button')) {
        const index = event.target.getAttribute('data-index');
        const id = parseInt(event.target.getAttribute('data-id'));
        const updatedCart = cart.map((cartItem, i) => {
          if (i == index && cartItem.id === id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        }).filter(cartItem => cartItem.quantity > 0);
  
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.location.reload();
      }
    });
  
    document.getElementById('checkout-button').addEventListener('click', () => {
      const address = document.getElementById('address').value;
      const date = document.getElementById('date').value;
      const phone = document.getElementById('phone').value;
  
      if (!address || !date || !phone) {
        alert('Please fill out all the fields');
        return;
      }
  
      const orderDetails = {
        cart,
        address,
        date,
        phone,
        totalPrice: totalPriceSpan.textContent,
      };
  
      // Replace the following URL with your Apps Script Web App URL
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbzMHFgAKO7hyBj8JeKDQgDONRl0bCSidkUEIqowPObqyiVHqKuCQuYdrBii1zVE_Z3c/exec';
  
      fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          alert('Order placed successfully!');
          localStorage.removeItem('cart');
          window.location.reload();
        } else {
          alert('Failed to place order. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occur3433red. Please try again.');
      });
    });
  });
  