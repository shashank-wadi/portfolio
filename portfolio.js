
// Function to count up numbers
function countUpDown(elementId, startValue, targetValue, duration) {
    const increment = Math.abs(targetValue - startValue) / (duration / 10); // Calculate increment based on direction
    const element = document.getElementById(elementId);
    let currentValue = startValue;

    const counter = setInterval(() => {
        currentValue += (startValue < targetValue) ? increment : -increment; // Increment or decrement based on direction

        if ((startValue < targetValue && currentValue >= targetValue) || (startValue > targetValue && currentValue <= targetValue)) {
            element.textContent = targetValue;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(currentValue); // Display whole numbers
        }
    }, 10); // Update every 10ms
}

// When the page loads, start counting
window.onload = function () {
    countUpDown('achievements-count', 0, 2, 2000); // Count up to 20
    countUpDown('projects-count', 20, 1, 2000);   // Count down from 20 to 10
    countUpDown('students-count', 0, 0, 2000);   // Count up to 100
    countUpDown('coffee-count', 300, 3, 2000);   // Count down from 500 to 300
};



document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.item');
    const animationCompleted = localStorage.getItem('animationCompleted');

    if (!animationCompleted) {
        items.forEach(item => {
            const percentageText = item.querySelector('.item-text span:last-child');
            const progressBar = item.querySelector('.progress-bar');
            const percentage = parseInt(percentageText.textContent);

            // Delay before starting the animation (2 seconds)
            setTimeout(() => {
                // Animate the width of the progress bar from 0 to the percentage
                progressBar.style.width = percentage + '%';

                // Animate the percentage text
                let count = 0;
                const delayBetweenUpdates = 10; // Delay between percentage updates (in milliseconds)

                const interval = setInterval(() => {
                    if (count >= percentage) {
                        clearInterval(interval);
                        // Set the animation as completed in localStorage
                        localStorage.setItem('animationCompleted', 'true');
                    } else {
                        count++;
                        percentageText.textContent = count + '%';
                    }
                }, delayBetweenUpdates);
            }, 500); // 2-second delay before starting the animation
        });
    } else {
        // If animation is already completed, set the progress bars to their final state
        items.forEach(item => {
            const percentageText = item.querySelector('.item-text span:last-child');
            const progressBar = item.querySelector('.progress-bar');
            const percentage = parseInt(percentageText.textContent);

            progressBar.style.width = percentage + '%';
            percentageText.textContent = percentage + '%';
        });
    }
});

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']')
            });
        };
    });
    // sticky navbar 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);
}
// remove toggle icon and navbar 
menuicon.classList.remove('fa-xmark');
navbar.classList.remove('active');
// scroll revel
// ScrollReveal settings
ScrollReveal({
    distance: '90px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, h1', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.skills-container', { origin: 'right' });

// Typed.js settings
const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Developer', 'Frontend Developer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});