// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, update, increment, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("hi1")


function recordPageView() {
  const analyticsRef = ref(db, 'analytics');
  update(analyticsRef, {
    totalPageViews: increment(1),
  });
}

console.log("hi1")

// Function to record session duration
function recordSessionDuration(duration) {
  const analyticsRef = ref(db, 'analytics');
  update(analyticsRef, {
    totalSessionDuration: increment(duration)
  });
}

// Function to calculate average session duration
function calculateAverageSessionDuration() {
  const analyticsRef = ref(db, 'analytics');
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

// Example of using the functions
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
});