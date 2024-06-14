

/*Yaswanth Kandra, Jaisharan Ashok, Vishesh Jain */

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
  document.addEventListener("DOMContentLoaded", function () {
    loader();
  });
}

  // function fadeOut(){
  //   setInterval(loader, 3000);
  // }

  
  window.onload = fadeOut();

document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector("#bar");
  let nav = document.querySelector(".navbar");
  let btnScrollToTop = document.getElementById("btnScrollToTop");
  let btnScrollToTop2 = document.getElementById("up-icon");

  if (menu) {
    menu.addEventListener("click", () => {
      menu.classList.toggle("fa-times");
      nav.classList.toggle("active");
    });
  }

  if (btnScrollToTop) {
    btnScrollToTop.addEventListener("click", function () {
      scrollToTop();
    });
  }

  if (btnScrollToTop2) {
    btnScrollToTop2.addEventListener("click", function () {
      scrollToTop2();
    });
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  function scrollToTop2() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  let currentPage = window.location.pathname.split("/").pop();

  let navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    let linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage && linkPage !== "index.html") {
      link.classList.add("active");
    }
  });

  var form = document.getElementById('jobApplicationForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (validateForm()) {
        window.location.href = 'thankyou.html';
      }
    });
  }

  function validateForm() {
    var fullName = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var dob = document.getElementById('dob').value.trim();

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
    delay: 3500,
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

  if (btnScrollToTop) {
    btnScrollToTop.addEventListener("click", function () {
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

document.addEventListener("DOMContentLoaded", function () {
  let btnScrollToTop2 = document.getElementById("up-icon");

  if (btnScrollToTop2) {
    btnScrollToTop2.addEventListener("click", function () {
      scrollToTop2();
    });
  }

  function scrollToTop2() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
});

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  document.addEventListener("DOMContentLoaded", function () {
    loader();
  });
}

window.onload = fadeOut();

document.addEventListener("DOMContentLoaded", function() {
  const image = document.getElementById("spinning-image");
  const setRotation = gsap.quickSetter(image, "rotation", "deg");

  // Scaling factor to adjust spinning speed
  const speedFactor = 0.5;  // Adjust this value to make spinning slower or faster

  // Function to update the rotation based on scroll position
  function updateRotation() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setRotation(scrollTop * speedFactor);
  }

  // Debounced scroll event handler to limit the rate of function execution
  function debounce(func, wait) {
      let timeout;
      return function() {
          const context = this, args = arguments;
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), wait);
      };
  }

  const handleScroll = debounce(updateRotation, 10);

  // Attach the debounced scroll event handler
  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector("#bar"),t=document.querySelector(".navbar"),n=window.location.pathname.split("/").pop();e.onclick=(()=>{e.classList.toggle("fa-times"),t.classList.toggle("active")}),document.querySelectorAll(".navbar a").forEach(e=>{let t=e.getAttribute("href").split("/").pop();t===n&&"index.html"!==t&&e.classList.add("active")})}),document.addEventListener("DOMContentLoaded",function(){document.getElementById("jobApplicationForm").addEventListener("submit",function(e){e.preventDefault(),function(){var e=document.getElementById("fullName").value.trim(),t=document.getElementById("email").value.trim(),n=document.getElementById("dob").value.trim();document.getElementById("address").value.trim();if(""===e)return alert("Please enter your full name."),!1;if(""===t||!function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}(t))return alert("Please enter a valid email address."),!1;var o=new Date(n),a=new Date;if(a.setFullYear(a.getFullYear()-18),o>a)return alert("You must be at least 18 years old."),!1;return!0}()&&(window.location.href="thankyou.html")})});var swiper=new Swiper(".home-slider",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},loop:!0});swiper=new Swiper(".review-slider",{spaceBetween:20,centeredSlides:!0,autoplay:{delay:0,disableOnInteraction:!1},loop:!0,speed:7e3,breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}});function loader(){document.querySelector(".loader-container").classList.add("fade-out")}function fadeOut(){document.addEventListener("DOMContentLoaded",function(){loader()})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("btnScrollToTop").addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})}),document.addEventListener("DOMContentLoaded",function(){document.getElementById("up-icon").addEventListener("click2",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})}),window.onload=fadeOut(),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector("#bar"),t=document.querySelector(".navbar"),n=document.getElementById("btnScrollToTop"),o=document.getElementById("up-icon");e&&e.addEventListener("click",()=>{e.classList.toggle("fa-times"),t.classList.toggle("active")}),n&&n.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),o&&o.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})});let a=window.location.pathname.split("/").pop();document.querySelectorAll(".navbar a").forEach(e=>{let t=e.getAttribute("href").split("/").pop();t===a&&"index.html"!==t&&e.classList.add("active")});var l=document.getElementById("jobApplicationForm");l&&l.addEventListener("submit",function(e){e.preventDefault(),function(){var e=document.getElementById("fullName").value.trim(),t=document.getElementById("email").value.trim(),n=document.getElementById("dob").value.trim();if(""===e)return alert("Please enter your full name."),!1;if(""===t||!function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}(t))return alert("Please enter a valid email address."),!1;var o=new Date(n),a=new Date;if(a.setFullYear(a.getFullYear()-18),o>a)return alert("You must be at least 18 years old."),!1;return!0}()&&(window.location.href="thankyou.html")})});swiper=new Swiper(".home-slider",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},loop:!0}),swiper=new Swiper(".review-slider",{spaceBetween:20,centeredSlides:!0,autoplay:{delay:0,disableOnInteraction:!1},loop:!0,speed:7e3,breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}});function loader(){document.querySelector(".loader-container").classList.add("fade-out")}function fadeOut(){document.addEventListener("DOMContentLoaded",function(){loader()})}document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("btnScrollToTop");e&&e.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})}),document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("up-icon");e&&e.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})}),window.onload=fadeOut();
>>>>>>> c775b5621b25021a2258773f0eb560f790f60c2d
