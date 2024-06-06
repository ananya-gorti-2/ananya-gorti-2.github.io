// Array containing job objects with details
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
