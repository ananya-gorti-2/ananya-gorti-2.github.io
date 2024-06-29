import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
      import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
      import { getStorage, ref as refsto, getDownloadURL, uploadBytes } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

      document.addEventListener('DOMContentLoaded', function () {
        var form = document.getElementById('Waiter/Waitress Application Form');

        form.addEventListener('submit', function (event) {
          event.preventDefault(); // Prevent form submission

          function validateRecaptcha() {
            var response = grecaptcha.getResponse();
            if (response.length === 0) {
              alert("Please complete the reCAPTCHA.");
              return false;
            }
            return true;
          }



          if (validateForm() && validateRecaptcha()) {
            // Firebase configuration
            const firebaseConfig = {
              apiKey: "AIzaSyAO9zhttsR2jhYQPBpsNiAzBPPMD8ZJtno",
              authDomain: "fbla-restaurant-db.firebaseapp.com",
              databaseURL: "https://fbla-restaurant-db-default-rtdb.firebaseio.com",
              projectId: "fbla-restaurant-db",
              storageBucket: "fbla-restaurant-db.appspot.com",
              messagingSenderId: "1032671063739",
              appId: "1:1032671063739:web:93e3567aade232b2db839e"
            };

            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const db = getDatabase(app);

            const storage = getStorage();

            const file = document.getElementById('resumeUpload').files[0];

            // Create a storage reference
            const storageRef = refsto(storage, 'resumes/' + document.getElementById("fullName").value + '/' + `${document.getElementById("fullName").value}.pdf`);

            // Upload file to Firebase Storage
            const uploadTaskSnapshot = uploadBytes(storageRef, file);
            console.log('File uploaded successfully:', uploadTaskSnapshot);

            // Get download URL
            const downloadURL = getDownloadURL(storageRef);
            console.log('File available at:', downloadURL);

            // Data submission to Firebase
            set(ref(db, "fullName/" + document.getElementById("fullName").value), {
              applicationForm: "Waiter/Waitress Application Form",
              fullName: document.getElementById("fullName").value,
              email: document.getElementById("email").value,
              dob: document.getElementById("dob").value,
              address: document.getElementById("address").value,
              education: document.getElementById("education").value,
              state: document.getElementById("state").value,
              zip: document.getElementById("zip").value,
              coverletter: document.getElementById("coverLetter").value,
              employmenthistory: document.getElementById("employmentHistory").value,
              accuracy: document.getElementById("accuracy").value,
              whyworkhere: document.getElementById("whyWorkHere").value,
              expectedsalary: document.getElementById("expectedSalary").value,
              bestcandidateskills: document.getElementById("bestCandidateSkills").value,
              motivationsatwork: document.getElementById("motivationsAtWork").value,
              resume: downloadURL
            }).then(() => {
              alert("Application Received! Be on the lookout for an email from us. Make sure to check your spam folder!");
              window.location.href = 'thankyou.html'; // Redirect to thankyou.html upon successful submission
            }).catch((error) => {
              console.error("Error adding document: ", error);
            });
          }
        });

        // Function to validate form
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