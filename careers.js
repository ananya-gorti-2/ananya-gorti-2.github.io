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
        openPositions: "4",
        linK: "#",
    },

    {
        title: "Prep Cook",
        image: "Prep_Cook.jpeg",
        details:
        "Embark on a culinary journey as a Prep Cook at Culinary Harbor, where your precision and dedication contribute to the creation of flavorful dishes, setting the stage for an exceptional dining experience.",
        openPositions: "2",
        link: "#",
    }
];


// Displaying the number of jobs
const jobsHeading = document.querySelector(".jobs-list-container h2");

// Calculate the number of visible jobs
function updateJobCount() {
    const visibleJobs = document.querySelectorAll('.job:not([style*="display: none"])').length;
    if (visibleJobs === 1) {
        jobsHeading.textContent = `${visibleJobs} Job Available`;
    } else {
        jobsHeading.textContent = `${visibleJobs} Jobs Available`;
    }
}


// Function to open a modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    document.getElementById(modalId).style.display = "block";
    document.body.classList.add("modal-active");
    window.scrollTo({ top: 130, behavior: 'smooth' }); // Scroll to the top smoothly
    modal.scrollTo({ top: 100, behavior: 'smooth' }); 
}
  
// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.classList.remove("modal-active");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  
// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        closeModal(modal.id);
      }
    });
}

// Event listener for DOMContentLoaded to set up job filtering functionality
document.addEventListener('DOMContentLoaded', function () {
    const jobs = document.querySelectorAll('.job');

    // Function to filter jobs based on search term
    function filterJobs(searchTerm) {
        jobs.forEach(job => {
            const title = job.querySelector('.job-title').textContent.toLowerCase();
            if (title.includes(searchTerm.toLowerCase())) {
                job.style.display = 'flex';
            } else {
                job.style.display = 'none';
            }
        });
    }

    // Adding event listeners to the search input for various events
    document.querySelector('.job-search').addEventListener('input', function () {
        const searchTerm = this.value.trim();
        filterJobs(searchTerm);
    });

    document.querySelector('.job-search').addEventListener('search', function () {
        const searchTerm = this.value.trim();
        filterJobs(searchTerm);
    });

    document.querySelector('.job-search').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            const searchTerm = this.value.trim();
            filterJobs(searchTerm);
        }
    });

    document.querySelector('.job-search').addEventListener('change', function () {
        const searchTerm = this.value.trim();
        filterJobs(searchTerm);
    });

    document.querySelector('.job-search').addEventListener('click', function () {
        const searchTerm = this.value.trim();
        filterJobs(searchTerm);
    });

    document.querySelector('.job-search').addEventListener('search', function () {
        const searchTerm = this.value.trim();
        filterJobs(searchTerm);
    });

    document.querySelector('.job-search').addEventListener('search', function () {
        const searchTerm = this.value.trim();
        filterJobs(searchTerm);
    });

    document.querySelector('.job-search').addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
            this.value = '';
            filterJobs('');
        }
    });
});
