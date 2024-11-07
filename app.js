// Get the button and the skills section
var toggleButton = document.getElementById("toggleButton");
var skillsSection = document.getElementById("skillsSection");
if (toggleButton && skillsSection) {
    // Set up the click event listener on the button
    toggleButton.addEventListener("click", function () {
        // Toggle visibility of the skills section
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block"; // Show the section
        }
        else {
            skillsSection.style.display = "none"; // Hide the section
        }
    });
}
