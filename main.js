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
    clickable: true,
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
    setTimeout(loader, 3000);
  
  }
  
  window.onload = fadeOut();






