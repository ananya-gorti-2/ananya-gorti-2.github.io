document.addEventListener("DOMContentLoaded", function () {
  // Selecting the menu icon and the navigation bar
    let menu = document.querySelector("#bar");
    let nav = document.querySelector(".navbar");

    // gettign the file by pathname
    let currentPage = window.location.pathname.split("/").pop();
  
    // Toggle the menu icon and navigation bar active class on click
    menu.onclick = () => {
      menu.classList.toggle("fa-times");
      nav.classList.toggle("active");
    };
  
    // navigation bar
    // for highlighting the button when its clicked
    let navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach((link) => {
      let linkPage = link.getAttribute("href").split("/").pop();
      if (linkPage === currentPage && linkPage !== "index.html") {
        link.classList.add("active");
      }
    });
  });
  
  // Checks for application
  // Job Application Form Validation
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('jobApplicationForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (validateForm()) {
        window.location.href = 'thankyou.html';
      }
    });

    function validateForm() {
      var fullName = document.getElementById('fullName').value.trim();
      var email = document.getElementById('email').value.trim();
      var dob = document.getElementById('dob').value.trim();
      var address = document.getElementById('address').value.trim();

      if (fullName === '') {
        alert('Please enter your full name.');
        return false;
      }

      if (email === '' || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
      }

      var dobDate = new Date(dob);
      var eighteenYearsAgo = new Date();
      eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
      if (dobDate > eighteenYearsAgo) {
        alert('You must be at least 18 years old.');
        return false;
      }

      return true;
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  }
});
  
  
  
  // Swiper Sliders
document.addEventListener('DOMContentLoaded', function () {
  new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 7000,
    breakpoints: {
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });
});
  

  // Scroll to Top
document.addEventListener("DOMContentLoaded", function () {
  let btnScrollToTop = document.getElementById("btnScrollToTop");
  let btnScrollToTop2 = document.getElementById("up-icon");

  if (btnScrollToTop) {
    btnScrollToTop.addEventListener("click", function () {
      scrollToTop();
    });
  }

  if (btnScrollToTop2) {
    btnScrollToTop2.addEventListener("click", function () {
      scrollToTop();
    });
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
});
  
  // loading screen in the home page
  function loader() {
    let loaderContainer = document.querySelector(".loader-container");
    if (loaderContainer) {
      loaderContainer.classList.add("fade-out");
    }
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  
  }
  
  window.onload = fadeOut();
  //test2


  document.addEventListener("DOMContentLoaded", function () {
    const itemsArray = [
      { id: 1, name: 'Fish Tacos', price: 7.99, elementId: 'menu-item-1' },
      { id: 2, name: 'Deep Dish Pizza', price: 12.99, elementId: 'menu-item-2' },
      { id: 3, name: 'Fried Catfish', price: 10.99, elementId: 'menu-item-3'},
      { id: 4, name: 'Fried Green Tomatoes', price: 7.99 , elementId: 'menu-item-4'},
      { id: 5, name: 'Lobster Mac & Cheese', price: 9.99 , elementId: 'menu-item-5'},
      { id: 6, name: 'Bobotie', price: 11.99 , elementId: 'menu-item-6'},
      { id: 7, name: 'Couscous', price: 10.99 , elementId: 'menu-item-7'},
      { id: 8, name: 'Fufu and Soup', price: 11.99 , elementId: 'menu-item-8'},
      { id: 9, name: 'Jollof Rice', price: 10.99 , elementId: 'menu-item-9'},
      { id: 10, name: 'Maatoke', price: 9.99 , elementId: 'menu-item-10'},
      { id: 11, name: 'Chicken Fried Rice', price: 11.99 , elementId: 'menu-item-11'},
      { id: 12, name: 'Noodles with Meatballs', price: 9.99 , elementId: 'menu-item-12'},
      { id: 13, name: 'Spicy Citrus Noodles', price: 9.99 , elementId: 'menu-item-13'},
      { id: 14, name: 'Stir Fry Noodles', price: 9.99 , elementId: 'menu-item-14'},
      { id: 15, name: 'Vegetable Dim Sum Soup', price: 9.99 , elementId: 'menu-item-15'},
      { id: 16, name: 'Bisque', price: 9.99 , elementId: 'menu-item-16'},
      { id: 17, name: 'Bouillabaisse', price: 12.99 , elementId: 'menu-item-17'},
      { id: 18, name: 'Croque Monsieur', price: 10.99 , elementId: 'menu-item-18'},
      { id: 19, name: 'French Onion Soup', price: 9.99 , elementId: 'menu-item-19'},
      { id: 20, name: 'Ratatouille', price: 10.99 , elementId: 'menu-item-20'},
      { id: 21, name: 'Butter Chicken with Naan', price: 12.99 , elementId: 'menu-item-21'},
      { id: 22, name: 'Dosa with Sambar', price: 12.99 , elementId: 'menu-item-22'},
      { id: 23, name: 'Hyderabadi Chicken Biryani', price: 12.99 , elementId: 'menu-item-23'},
      { id: 24, name: 'Samosas with Chutney', price: 9.99 , elementId: 'menu-item-24'},
      { id: 25, name: 'Tandoori Roti', price: 7.99 , elementId: 'menu-item-25'},
      { id: 26, name: 'Onigiri', price: 9.99 , elementId: 'menu-item-26'},
      { id: 27, name: 'Sushi and Sashimi', price: 11.99 , elementId: 'menu-item-27'},
      { id: 28, name: 'Takoyaki', price: 9.99 , elementId: 'menu-item-28'},
      { id: 29, name: 'Tempura', price: 9.99 , elementId: 'menu-item-29'},
      { id: 30, name: 'Yakitori', price: 10.99 , elementId: 'menu-item-30'},
      { id: 31, name: 'Green Curry', price: 10.99 , elementId: 'menu-item-31'},
      { id: 32, name: 'Pad Thai', price: 10.99 , elementId: 'menu-item-32'},
      { id: 33, name: 'Panang curry', price: 10.99 , elementId: 'menu-item-33'},
      { id: 34, name: 'Spicy Green Papaya Salad', price: 9.99 , elementId: 'menu-item-34'}, 
      { id: 35, name: 'Tom Yum', price: 11.99, elementId: 'menu-item-35'}
      // Add other items as needed, with their respective elementId
    ];


    /*{ id: 1, name: 'Fish Tacos', price: 7.99 },
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
  { id: 34, name: 'Spicy Green Papaya Salad', price: 9.99 } */
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    itemsArray.forEach(item => {
      const itemDiv = document.getElementById(item.elementId);
      if (itemDiv) {
        const button = document.createElement('button');
        button.textContent = `Add to Cart (${item.price.toFixed(2)})`;
        button.dataset.id = item.id;
        button.className = 'add-to-cart-button';
        itemDiv.appendChild(button);
      }
    });
  
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('add-to-cart-button')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        const existingItem = cart.find(cartItem => cartItem.id === id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({ id, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    });
  });


  // main.js
document.addEventListener("DOMContentLoaded", function () {
  // Selecting the menu icon and the navigation bar
  let menu = document.querySelector("#bar");
  let nav = document.querySelector(".navbar");

  // Get the file by pathname
  let currentPage = window.location.pathname.split("/").pop();

  // Toggle the menu icon and navigation bar active class on click
  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
  };

  // Navigation bar for highlighting the button when it's clicked
  let navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    let linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage && linkPage !== "index.html") {
      link.classList.add("active");
    }
  });
});

// Other general site-wide JavaScript code can go here...







document.addEventListener('DOMContentLoaded', () => {
  class CartContext {
      constructor() {
          this.cart = JSON.parse(localStorage.getItem('cart')) || [];
          this.listeners = [];
      }

      get cartCount() {
          return this.cart.reduce((count, item) => count + item.quantity, 0);
      }

      setCart(newCart) {
          this.cart = newCart;
          localStorage.setItem('cart', JSON.stringify(this.cart));
          this.notifyListeners();
      }

      subscribe(listener) {
          this.listeners.push(listener);
      }

      unsubscribe(listener) {
          this.listeners = this.listeners.filter(l => l !== listener);
      }

      notifyListeners() {
          this.listeners.forEach(listener => listener());
      }
  }

  const cartContext = new CartContext();

  class CartIcon {
      constructor(rootElement, context) {
          this.rootElement = rootElement;
          this.context = context;
          this.context.subscribe(() => this.render());
          this.render();
      }

      render() {
          this.rootElement.innerHTML = `<div class="cart-icon"><i class="fas fa-shopping-cart"></i> (${this.context.cartCount})</div>`;
      }
  }

  const cartIconRoot = document.getElementById('cart-icon-root');

  if (cartIconRoot) {
      new CartIcon(cartIconRoot, cartContext);
  }

  // Example usage: update cart and see the icon update
  setTimeout(() => {
      cartContext.setCart([{ id: 1, name: 'Product 1', quantity: 2 }, { id: 2, name: 'Product 2', quantity: 3 }]);
  }, 2000);
});
