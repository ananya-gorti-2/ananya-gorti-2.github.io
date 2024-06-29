// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, update, increment, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// web app's Firebase configuration
const firebaseConfig1 = {
  apiKey: "AIzaSyA8KxkL46u0BsqFWc0T3lq6RCaGLs7wpLA",
  authDomain: "ch-analytics-f7d03.firebaseapp.com",
  databaseURL: "https://ch-analytics-f7d03-default-rtdb.firebaseio.com",
  projectId: "ch-analytics-f7d03",
  storageBucket: "ch-analytics-f7d03.appspot.com",
  messagingSenderId: "462976003815",
  appId: "1:462976003815:web:6eb5ed5952144dedcbfc42",
  measurementId: "G-5JS69NW9GV"
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig1);
const db1 = getDatabase(app1);

console.log("hi1")

// Function to record Page views
function recordPageView() {
  const analyticsRef = ref(db1, 'analytics');
  update(analyticsRef, {
    totalPageViews: increment(1),
  });
}

console.log("hi1")

// Function to record session duration
function recordSessionDuration(duration) {
  const analyticsRef = ref(db1, 'analytics');
  update(analyticsRef, {
    totalSessionDuration: increment(duration)
  });
}

// Function to record Application Submissions
function recordApplicationSubmission() {
  const analyticsRef = ref(db1, 'analytics');
  update(analyticsRef, {
    totalApplications: increment(1)
  });
}

// Function to calculate average session duration
function calculateAverageSessionDuration() {
  const analyticsRef = ref(db1, 'analytics');
  onValue(analyticsRef, (snapshot) => {
    const data = snapshot.val();
    if (data && data.totalSessionDuration && data.totalPageViews) {
      const averageSessionDuration = data.totalSessionDuration / data.totalPageViews;
      console.log(data.totalSessionDuration)
      console.log(data.totalPageViews)
      update(analyticsRef, {
        AverageSessionDuration: averageSessionDuration
      });
    }
  }, {
    onlyOnce: true // Ensure this function only runs once
  });
}


console.log("hi1")

// using the functions
window.addEventListener('load', () => {
  const startTime = Date.now();

  // Record a page view when the page loads
  recordPageView();

  window.addEventListener('beforeunload', () => {
    const endTime = Date.now();
    const sessionDuration = (endTime - startTime) / 1000; // duration in seconds
    recordSessionDuration(sessionDuration);
    calculateAverageSessionDuration();
  });

  const form = document.getElementById('Dish Cleaner Application Form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    if (validateForm() && validateRecaptcha()) {
      recordApplicationSubmission();
    }

  });
});

// Function to validate forms for name, email & DOB
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
    return false;
  }

  return true; // Form is valid
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateRecaptcha() {
  var response = grecaptcha.getResponse();
  if (response.length === 0) {
    alert("Please complete the reCAPTCHA.");
    return false;
  }
  return true;
}