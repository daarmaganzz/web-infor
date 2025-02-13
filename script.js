document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const bioBtn = document.getElementById("bio-btn");
    const bioSection = document.getElementById("bio");

    // Toggle Sidebar Menu
    menuToggle.addEventListener("click", function() {
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-250px";
        } else {
            sidebar.style.left = "0px";
        }
    });

    // Toggle Bio Data Section
    bioBtn.addEventListener("click", function(event) {
        event.preventDefault();
        if (bioSection.classList.contains("hidden")) {
            bioSection.classList.remove("hidden");
        } else {
            bioSection.classList.add("hidden");
        }
    });
});
