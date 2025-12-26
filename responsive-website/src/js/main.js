// This file contains the JavaScript code for the responsive website, handling interactivity and dynamic content.

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle responsive navigation menu
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Function to handle smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    for (let link of anchorLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Function to handle dynamic content loading (example)
    const loadContentButton = document.querySelector('#load-content');
    loadContentButton.addEventListener('click', function() {
        fetch('path/to/content.json')
            .then(response => response.json())
            .then(data => {
                const contentArea = document.querySelector('#content-area');
                contentArea.innerHTML = data.content; // Assuming content.json has a 'content' field
            })
            .catch(error => console.error('Error loading content:', error));
    });
});