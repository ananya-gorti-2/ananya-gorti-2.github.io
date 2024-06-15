// Array containing job objects with details
const jobs = [
    {
        title: "General Manager",
        image: "General_Manager.jpg",
        details:
        "As the General Manager of Culinary Harbor, you will be the key orchestrator of operational excellence overseeing day-to-day restaurant management, ensuring exceptional guest experiences, and leading a dynamic team to culinary success.",
        openPositions: "2",
        link: "applypos1.html",
    },

    {
        title: "Cashier",
        image: "Cashier.jpg",
        details:
        "As our Cashier, you play a pivotal role in providing efficient and friendly service, handling transactions with a smile and ensuring a smooth flow at Culinary Harbor.",
        openPositions: "1",
        link: "applypos2.html",
    },

    {
        title: "Waiter/Waitress",
        image: "waiter.jpg",
        details:
        "Join us as a Waiter/Waitress, where your friendly demeanor and service expertise create memorable dining experiences, making Culinary Harbor a destination for exceptional hospitality.",
        openPosition: "3",
        link: "#",
    },

    {
        title: "Sous Chef",
        image: "Sous_Chef.jpg",
        details: 
        "As Sous Chef at Culinary Harbor, you'll be the creative force behind our culinary offerings, collaborating with the chef to execute exquisite dishes and maintain kitchen excellence.",
        openPosition: "1",
        link: "#",
    },

    {
        title: "Dishwasher",
        image: "dishwasher.jpg",
        details:
        "Join Culinary Harbor as a Dishwasher, playing a crucial role in kitchen operations by ensuring cleanliness, efficiency, and the smooth flow of culinary production.",
        openPosition: "4",
        linK: "#",
    },

    {
        title: "Prep Cook",
        image: "Prep_Cook.jpeg",
        details:
        "Embark on a culinary journey as a Prep Cook at Culinary Harbor, where your precision and dedication contribute to the creation of flavorful dishes, setting the stage for an exceptional dining experience.",
        openPosition: "2",
        link: "#",
    }
];




// Displaying the number of jobs
const jobsHeading = document.querySelector(".jobs-list-container h2");

// Checking the number of jobs and updating the heading accordingly
if(jobs.length == 1){
    jobsHeading.innerHTML = `${jobs.length} Job`;
}else{
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
}


document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const modal = document.getElementById("modal");
    const closeModal = document.getElementsByClassName("close")[0];
    const modalText = document.getElementById("modal-text");
  
    learnMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
        const jobId = this.getAttribute('data-job');
        const jobDetails = getJobDetails(jobId);
        modalText.innerHTML = jobDetails;
        modal.style.display = "block";
      });
    });
  
    closeModal.addEventListener('click', function() {
      modal.style.display = "none";
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    function getJobDetails(jobId) {
      // You can expand this function to get more details dynamically based on the jobId
      if (jobId === "1") {
        return `
          <strong>Responsibilities:</strong>
          <ul>
            <li>Oversee daily operations of the restaurant</li>
            <li>Manage staff, including hiring and training</li>
            <li>Monitor inventory and order supplies</li>
            <li>Ensure compliance with health and safety regulations</li>
            <li>Develop and implement strategies to increase profitability</li>
          </ul>`;
      }
      return "Details not found.";
    }
  });
  