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
function bacaMateri() {
    let text = document.getElementById("materi").innerText; // Mengambil teks dari materi
    let speech = new SpeechSynthesisUtterance(text); // Membuat objek suara
    speech.lang = "id-ID"; // Mengatur bahasa menjadi Bahasa Indonesia
    speech.rate = 1.0; // Kecepatan bicara (1.0 adalah normal)
    speech.pitch = 1.0; // Nada suara
    speech.volume = 1.0; // Volume suara (0.0 - 1.0)
    
    speechSynthesis.speak(speech); // Memulai pembacaan
}

// Fungsi untuk menghentikan suara
function hentikanSuara() {
    speechSynthesis.cancel(); // Menghentikan semua suara yang sedang berjalan
}

