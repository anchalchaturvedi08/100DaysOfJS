// Array of review objects
const reviews = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDU_TmMK9xYGD2Vhk7IkYO-9g5VOi4QHG0A&s",
        name: "Ziya Smith",
        job: "Web Developer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsum."
    },
    {
        img: "https://png.pngitem.com/pimgs/s/118-1181774_jason-profile-cirle-gentleman-hd-png-download.png",
        name: "Anna Johnson",
        job: "Web Designer",
        text: "Repellat ipsum dolor sit amet consectetur adipisicing elit. Ipsum."
    },
    {
        img: "https://p.kindpng.com/picc/s/41-415494_profile-picture-in-circle-hd-png-download.png",
        name: "Lily Jones",
        job: "Intern",
        text: "Ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsum."
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWi4bk1s8Q2HPdq4fAPfLVKO6I4UrbUGW93w&s",
        name: "Bill Anderson",
        job: "The Boss",
        text: "Lorem ipsum dolor sit amet consectetur elit. Repellat, ipsum."
    }
];

let currentIndex = 0; // Initial review index

// Select DOM elements
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Load initial review
window.addEventListener('DOMContentLoaded', showPerson);

// Show review based on currentIndex
function showPerson() {
    const item = reviews[currentIndex];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show next review
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > reviews.length - 1) {
        currentIndex = 0; // Loop back to first review
    }
    showPerson();
});

// Show previous review
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviews.length - 1; // Loop to last review
    }
    showPerson();
});
