// Function to toggle main portfolio sections (defensive + accessible)
function toggleSection(id, headerElement) {
  const content = document.getElementById(id);
  if (!content) return; // defensive: no-op if id is wrong/missing

  const icon = headerElement
    ? headerElement.querySelector(".fa-chevron-down")
    : null;

  const isOpen = content.classList.toggle("active");

  // rotate chevron only if present
  if (icon) icon.classList.toggle("rotate", isOpen);

  // accessibility: update ARIA states
  if (headerElement)
    headerElement.setAttribute("aria-expanded", isOpen ? "true" : "false");
  content.setAttribute("aria-hidden", isOpen ? "false" : "true");
}

// DOM-ready logic: resume viewer guards + keyboard support for headers
document.addEventListener("DOMContentLoaded", () => {
  const resumeBtn = document.getElementById("toggle-resume");
  const resumeViewer = document.getElementById("resume-viewer");

  if (resumeBtn && resumeViewer) {
    resumeBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // harmless; keep interaction isolated
      resumeViewer.classList.toggle("hidden");
      resumeBtn.textContent = resumeViewer.classList.contains("hidden")
        ? "View Full Resume PDF"
        : "Close Resume PDF";
    });
  }

  // keyboard + fallback ARIA for all dropdown headers
  const headers = document.querySelectorAll(".section-header");
  headers.forEach((header) => {
    if (!header.hasAttribute("tabindex")) header.setAttribute("tabindex", "0");
    if (!header.hasAttribute("role")) header.setAttribute("role", "button");

    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        const content = header.nextElementSibling;
        if (content && content.id) toggleSection(content.id, header);
      }
    });
  });
});
