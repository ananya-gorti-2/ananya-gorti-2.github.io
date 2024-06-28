function updateCartCountOnLoad() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCount = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
    document.getElementById('cart-count').textContent = totalCount;
}


    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    function addToCart(event, button) {
        event.preventDefault();

        const card = button.closest('.box, .food-card');
        const itemName = card.getAttribute('data-name');
        const itemPrice = parseFloat(card.getAttribute('data-price'));

        const item = {
            name: itemName,
            price: itemPrice,
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push(item);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart count in the UI
        updateCartCountOnLoad();

        alert(itemName + " added to cart!");
    }

    function updateCartCountOnLoad() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalCount = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
        document.getElementById('cart-count').textContent = totalCount;
    }

    // Call the function on page load
