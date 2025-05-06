// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
    
    // Example JavaScript functionality
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
    }
    
    // Add a simple animation to the hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transition = 'opacity 1s ease-in-out';
        
        setTimeout(() => {
            hero.style.opacity = '1';
        }, 300);
    }
});