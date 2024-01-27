document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector("#bar");
  let nav = document.querySelector(".navbar");
  let currentPage = window.location.pathname.split("/").pop();

  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
  };

  let navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    let linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage && linkPage !== "main.html") {
      link.classList.add("active");
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('jobApplicationForm');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      if (validateForm()) {
          window.location.href = 'thankyou.html'; // Redirect to thankyou.html upon successful submission
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

      return true; // Form is valid
  }

  function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});




var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 0,  // Set delay to 0 for continuous movement
    disableOnInteraction: false,
  },
  loop: true,
  speed: 7000,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
    let btnScrollToTop = document.getElementById("btnScrollToTop");

    btnScrollToTop.addEventListener("click", function () {
        scrollToTop();
    });

    function scrollToTop() {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
});



