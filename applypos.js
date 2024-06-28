function updateCartCountOnLoad() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCount = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
    document.getElementById('cart-count').textContent = totalCount;
  }


  function preventInspect(){
    // Prevent right-click
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
      }, false);
  
      // Prevent Ctrl+U
      document.addEventListener("keydown", function (e) {
        if (e.ctrlKey && e.key === "u") {
          e.preventDefault();
        }
      });
  
      // Prevent Ctrl+Shift+I, Ctrl+Shift+J, and Ctrl+Shift+C
      document.addEventListener("keydown", function (e) {
        if ((e.ctrlKey && e.shiftKey && (e.key === "i" || e.key === "I")) ||
          (e.ctrlKey && e.shiftKey && (e.key === "j" || e.key === "J")) ||
          (e.ctrlKey && e.shiftKey && (e.key === "c" || e.key === "C"))) {
          e.preventDefault();
        }
      });
  
      // Prevent F12
      document.addEventListener("keydown", function (e) {
        if (e.key === "F12") {
          e.preventDefault();
        }
      });
  }