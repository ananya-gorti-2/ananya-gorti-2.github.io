// Menu and Navbar Toggle
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
    if (linkPage === currentPage && linkPage !== "index.html") {
      link.classList.add("active");
    }
  });
});

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

// Loader
document.addEventListener('DOMContentLoaded', function () {
  function loader() {
    let loaderContainer = document.querySelector(".loader-container");
    if (loaderContainer) {
      loaderContainer.classList.add("fade-out");
    }
  }

  function fadeOut() {
    setInterval(loader, 3000);
  }

  window.onload = fadeOut();
});

// Card Slider
document.addEventListener('DOMContentLoaded', function () {
  const sillySliderSection = document.querySelector('.silly-slider-section');

  if (sillySliderSection) {
    const sillyCoaster = sillySliderSection.querySelector('.silly-slider-container');
    const leftGoof = sillySliderSection.querySelector('.silly-nav.silly-left');
    const rightGoof = sillySliderSection.querySelector('.silly-nav.silly-right');
    const goofyStack = sillySliderSection.querySelectorAll('.goofy-card');
    const goofySize = goofyStack[0].offsetWidth + 20; // card width + margin
    let currentSilliness = 0;
    const totalGoofs = goofyStack.length;

    // Clone first and last few cards for wrapping effect
    const firstGoofs = [];
    const lastGoofs = [];
    for (let i = 0; i < totalGoofs; i++) {
      firstGoofs.push(goofyStack[i].cloneNode(true));
      lastGoofs.push(goofyStack[totalGoofs - 1 - i].cloneNode(true));
    }

    firstGoofs.forEach(clone => sillyCoaster.appendChild(clone));
    lastGoofs.reverse().forEach(clone => sillyCoaster.insertBefore(clone, sillyCoaster.firstChild));

    // Adjust the initial position
    currentSilliness = totalGoofs;
    sillyCoaster.style.transform = `translateX(${-currentSilliness * goofySize}px)`;

    const moveSilliness = () => {
      sillyCoaster.style.transition = 'transform 0.5s ease';
      sillyCoaster.style.transform = `translateX(${-currentSilliness * goofySize}px)`;
    };

    const resetSilliness = () => {
      sillyCoaster.style.transition = 'none';
      if (currentSilliness >= totalGoofs * 2) {
        currentSilliness = totalGoofs;
        sillyCoaster.style.transform = `translateX(${-currentSilliness * goofySize}px)`;
      } else if (currentSilliness < totalGoofs) {
        currentSilliness = totalGoofs * 2 - 1;
        sillyCoaster.style.transform = `translateX(${-currentSilliness * goofySize}px)`;
      }
    };

    leftGoof.addEventListener('click', () => {
      currentSilliness--;
      moveSilliness();
    });

    rightGoof.addEventListener('click', () => {
      currentSilliness++;
      moveSilliness();
    });

    sillyCoaster.addEventListener('transitionend', resetSilliness);
  } else {
    console.error('silly-slider-section not found!');
  }
});
