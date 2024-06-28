function updateCartCountOnLoad() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCount = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
    document.getElementById('cart-count').textContent = totalCount;
}

function sendContactEmail(){
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var contactNumber = document.getElementById("contactNumber").value;
        var message1 = document.getElementById("message").value;

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

        let parms = {
            message: message1,
            from_name: firstName,
            lastname: lastName,
            from_email: email,
            contactnum: contactNumber
        }

        // Send email using Email.send()
        emailjs.send("service_tkhe4xh", "template_32l1ts4", parms).then(alert("Submitted"))
        document.getElementById("contactForm").reset();

    });
}