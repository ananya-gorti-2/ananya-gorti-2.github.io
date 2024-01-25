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

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name.trim() === "" || email.trim() === "") {
    alert("Please fill in all required fields.");
    return false;
  }

  return true;
}

function validateForm(formId) {
  var form = document.getElementById(formId);
  var name = form.elements["name"].value;
  var email = form.elements["email"].value;
  var dob = form.elements["dob"].value;

  if (name.trim() === "" || email.trim() === "") {
      alert("Please fill in all required fields.");
      return false;
  }

  if (!validateDOB(dob)) {
      alert("You must be at least 18 years old to apply.");
      return false;
  }

  return true;
}

function validateForm(formId) {
  var form = document.getElementById(formId);
  var name = form.elements["name"].value;
  var email = form.elements["email"].value;
  var dob = form.elements["dob"].value;

  if (name.trim() === "" || email.trim() === "") {
      alert("Please fill in all required fields.");
      return false;
  }

  if (!validateDOB(dob)) {
      alert("You must be at least 18 years old to apply.");
      return false;
  }

  return true;
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
