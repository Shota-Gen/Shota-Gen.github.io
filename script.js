// Function to toggle main portfolio sections
function toggleSection(id, headerElement) {
    const content = document.getElementById(id);
    const icon = headerElement.querySelector('.fa-chevron-down');
    
    // Toggle active class
    content.classList.toggle('active');
    
    // Rotate chevron
    if (content.classList.contains('active')) {
        icon.classList.add('rotate');
    } else {
        icon.classList.remove('rotate');
    }
}

// Logic for the nested Resume PDF viewer
document.addEventListener('DOMContentLoaded', () => {
    const resumeBtn = document.getElementById('toggle-resume');
    const resumeViewer = document.getElementById('resume-viewer');

    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents section from closing
            resumeViewer.classList.toggle('hidden');
            resumeBtn.textContent = resumeViewer.classList.contains('hidden') 
                ? "View Full Resume PDF" 
                : "Close Resume PDF";
        });
    }
});
