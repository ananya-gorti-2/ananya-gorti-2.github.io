import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDX5_CEU9gR9zdl2BBy2qUkF4kSyb0JYjE",
  authDomain: "fblawebdev2024.firebaseapp.com",
  databaseURL: "https://fblawebdev2024-default-rtdb.firebaseio.com",
  projectId: "fblawebdev2024",
  storageBucket: "fblawebdev2024.appspot.com",
  messagingSenderId: "1032509491070",
  appId: "1:1032509491070:web:fc458bc9c30ecfe810d52f",
  measurementId: "G-YV373ERG9K"
};

// initialize firebase db
firebase.initializeApp(firebaseConfig);

// reference your db
var GMapplicationDB = firebase.database().ref('General Manager Applications');

document.getElementById('General Manager Application Form').addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal('fullName');
  var email = getElementVal('email');
  var dob = getElementVal('dob');
  var address = getElementVal('address');
  var state = getElementVal('state');
  var zip = getElementVal('zip');
  var education = getElementVal('education');
  var coverletter = getElementVal('coverLetter');
  var employmenthistory = getElementVal('employmentHistory');
  var skillscertifications = getElementVal('skillsCertificationsText');
  var whyworkhere = getElementVal('whyWorkHere');
  var expectedsalary = getElementVal('expectedSalary');
  var bestcandidateskills = getElementVal('bestCandidateSkills');
  var motivationsatwork = getElementVal('motivationsAtWork');

  saveMessages(name, email, dob, address, state, zip, education, coverletter, employmenthistory, skillscertifications, whyworkhere, expectedsalary, bestcandidateskills, motivationsatwork);
}

const saveMessages = (name, email, dob, address, state, zip, education, coverletter, employmenthistory, skillscertifications, whyworkhere, expectedsalary, bestcandidateskills, motivationsatwork) => {
  var newGMapplication = GMapplicationDB.push();

  newGMapplication.set({
    name: fullName,
    email: email,
    dob: dob,
    address: address,
    state: state,
    zip: zip,
    education: education,
    coverletter: coverLetter,
    employmenthistory: employmentHistory,
    skillscertifications: skillsCertifications,
    whyworkhere: whyWorkHere,
    expectedsalary: expectedSalary,
    bestcandidateskills: bestCandidateSkills,
    motivationsatwork: motivationsAtWork,
  });
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}


