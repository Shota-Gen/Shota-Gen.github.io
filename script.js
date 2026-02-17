document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.6s ease-out";
        observer.observe(section);
    });
});

// Added a small CSS injection for the animation class
const style = document.createElement('style');
style.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Existing DOMContentLoaded logic...

const resumeBtn = document.getElementById('toggle-resume');
const resumeViewer = document.getElementById('resume-viewer');
const icon = resumeBtn.querySelector('i');

resumeBtn.addEventListener('click', () => {
    const isHidden = resumeViewer.classList.contains('hidden');
    
    if (isHidden) {
        resumeViewer.classList.remove('hidden');
        icon.classList.add('rotate');
        resumeBtn.innerHTML = `Close Resume <i class="fas fa-chevron-down rotate"></i>`;
    } else {
        resumeViewer.classList.add('hidden');
        icon.classList.remove('rotate');
        resumeBtn.innerHTML = `View Full Resume <i class="fas fa-chevron-down"></i>`;
    }
});
