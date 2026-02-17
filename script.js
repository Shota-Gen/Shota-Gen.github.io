document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    // Simple fade-in animation
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.8s ease-out';
        section.style.transitionDelay = `${index * 0.2}s`;
        
        setTimeout(() => {
            section.style.opacity = '1';
        }, 100);
    });
});
