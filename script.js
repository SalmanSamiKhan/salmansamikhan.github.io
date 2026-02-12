// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active navigation link on scroll
function updateActiveNav() {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + 100;
    
    // Remove active class from all links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current section's link
    sections.forEach(section => {
        const sectionId = `#${section.id}`;
        const link = document.querySelector(`.nav-link[href="${sectionId}"]`);
        
        if (link && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            link.classList.add('active');
        }
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    // Set initial active link
    document.querySelector('.nav-link[href="#about"]').classList.add('active');
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);
});

// Close any open elements on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Add any cleanup logic here
    }
});