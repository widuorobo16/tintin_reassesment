// Function to toggle the visibility of elements
function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Function to toggle image size
function toggleImageSize(id) {
    const img = document.getElementById(id);
    if (img.classList.contains('small')) {
        img.classList.remove('small');
    } else {
        img.classList.add('small');
    }
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }
});

// JavaScript object for adventures
const adventures = [
    {
        title: "The Secret of the Unicorn",
        synopsis: "Tintin uncovers the mystery of a sunken treasure ship...",
        image: "images/adventure1.jpg"
    },
    {
        title: "Explorers on the Moon",
        synopsis: "Tintin and his friends travel to the Moon...",
        image: "images/adventure2.jpg"
    },
    {
        title: "The Blue Lotus",
        synopsis: "Tintin investigates a dangerous opium-smuggling ring in China...",
        image: "images/adventure3.jpg"
    }
];
// Function to display adventure details
function displayAdventure(index) {
    const adventure = adventures[index];
    document.getElementById('adventureTitle').innerText = adventure.title;
    document.getElementById('adventureImage').src = adventure.image;
    document.getElementById('adventureSynopsis').innerText = adventure.synopsis;
}