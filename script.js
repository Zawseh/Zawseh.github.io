// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// // Dynamic Gallery Loading
// const galleryContainer = document.getElementById('mission-gallery');
// const missions = [
//     { imgSrc: 'path/to/image1.jpg', description: 'Mission 1' },
//     { imgSrc: 'path/to/image2.jpg', description: 'Mission 2' }
//     // Add more missions
// ];

// // Check if galleryContainer exists
// if (galleryContainer) {
//     // Loop through missions array
//     missions.forEach(mission => {
//         // Create a new div element for each mission
//         const missionDiv = document.createElement('div');
//         missionDiv.className = 'gallery-item';
//         missionDiv.innerHTML = `
//             <img src="${mission.imgSrc}" alt="${mission.description}">
//             <p class="mission-description">${mission.description}</p>
//         `;
//         // Append the missionDiv to galleryContainer
//         galleryContainer.appendChild(missionDiv);
//     });
// } else {
//     console.error("Error: galleryContainer is null or undefined.");
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     // Check if menuToggle and navLinks are not null
//     if (menuToggle && navLinks) {
//         menuToggle.addEventListener('click', () => {
//             navLinks.classList.toggle('active');
//         });
//     } else {
//         console.error("Error: menuToggle or navLinks is null or undefined.");
//     }
// });


// Animation on Scroll
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
});

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.href.includes(current)) {
            li.classList.add('active');
        }
    });
});

document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', () => {
        // Create and show a modal with a zoomed-in version of the image
        const zoomedImage = document.createElement('img');
        zoomedImage.src = image.src;
        zoomedImage.style.width = '100%';
        // Add zoomedImage to a modal and display it
    });
});


let prevScrollPos = window.scrollY || document.documentElement.scrollTop;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  let currentScrollPos = window.scrollY || document.documentElement.scrollTop;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0"; // Show navbar when scrolling up
  } else {
    navbar.style.top = "-200px"; // Hide navbar when scrolling down
  }
  prevScrollPos = currentScrollPos;
});

function showEventDetails(eventElement) {
    var allDetails = document.querySelectorAll('.event-details');
    for (var i = 0; i < allDetails.length; i++) {
        allDetails[i].style.display = 'none'; // Hide all details
    }
    var details = eventElement.querySelector('.event-details');
    details.style.display = 'block'; // Show the clicked event's details
}

// Hide event details when clicking anywhere in the window
window.onclick = function(event) {
    if (!event.target.matches('.event-dot, .event-year')) {
        var allDetails = document.querySelectorAll('.event-details');
        for (var i = 0; i < allDetails.length; i++) {
            allDetails[i].style.display = 'none';
        }
    }
}
