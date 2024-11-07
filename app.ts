
const toggleButton = document.getElementById("toggleButton");
const skillsSection = document.getElementById("skillsSection");

if (toggleButton && skillsSection) {
  
  toggleButton.addEventListener("click", () => {
   
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block"; // Show the section
    } else {
      skillsSection.style.display = "none"; // Hide the section
    }
  });
}
