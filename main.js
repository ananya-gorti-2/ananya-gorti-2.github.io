/*Yaswanth Kandra, Jaisharan Ashok, Vishesh Jain */
document.addEventListener('DOMContentLoaded', () => {
  const customCursor = document.querySelector('.custom-cursor');

  document.addEventListener('mousemove', (e) => {
      customCursor.style.top = `${e.clientY}px`;
      customCursor.style.left = `${e.clientX}px`;
  });

  document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseenter', () => {
          customCursor.classList.add('hover');
      });
      link.addEventListener('mouseleave', () => {
          customCursor.classList.remove('hover');
      });
  });
});

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
  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('jobApplicationForm');
  
    // Prevent form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 
  
      if (validateForm()) {
        // Redirect to thankyou.html upon successful submission
        window.location.href = 'thankyou.html'; 
      }
    });
  
    // Checks age and syntax
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
      
      //check DOB
      var dobDate = new Date(dob);
      var eighteenYearsAgo = new Date();
      eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
      if (dobDate > eighteenYearsAgo) {
        alert('You must be at least 18 years old.');
        return false;
      }
  
      return true; // Form is valid
    }
  
    // return if the email is valid or not
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  });
  
  
  
  // js for swiper
  // automate the slideshow
  var swiper = new Swiper(".home-slider", {
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
  
  // automate the review slider
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
  

  // Scroll to top function
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
  
  document.addEventListener("DOMContentLoaded", function () {
    let btnScrollToTop2 = document.getElementById("up-icon");
  
    btnScrollToTop2.addEventListener("click2", function () {
      scrollToTop2();
    });
  
    function scrollToTop2() {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  });
  
  // loading screen in the home page
  function loader(){
    document.querySelector(".loader-container").classList.add("fade-out");
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  
  }
  
  window.onload = fadeOut();
  
  