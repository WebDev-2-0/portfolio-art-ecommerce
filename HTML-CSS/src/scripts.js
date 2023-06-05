// *Implementation of the hamburger menu and its operations.*
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuDropdown = document.getElementById("menu-dropdown");
  const firstSpan = document.getElementById("firstSpan");
  const thirdSpan = document.getElementById("thirdSpan");

  menuToggle.addEventListener("click", () => {
    // Toggle the appearance of the dropdown menu
    menuDropdown.classList.toggle("opacity-0");
    menuDropdown.classList.toggle("pointer-events-none");

    // Animate the hamburger icon to X
    menuToggle.classList.toggle("close");    

    // Change the span icons to X
    if (menuToggle.classList.contains("close") === true) {
      firstSpan.classList.add("rotate-45", "translate-y-1");
      thirdSpan.classList.add("-rotate-45", "-translate-y-0.5");
    } else {
      // Change the span icons back to hamburger
     firstSpan.classList.remove("rotate-45", "translate-y-1");
     thirdSpan.classList.remove("-rotate-45", "-translate-y-0.5");
    }
  });
});
