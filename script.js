// LANGUAGE SYSTEM
function toggleLanguage() {
    document.body.classList.toggle("urdu-active");
    localStorage.setItem(
        "lang",
        document.body.classList.contains("urdu-active") ? "ur" : "en"
    );
}

window.addEventListener("load", () => {
    if (localStorage.getItem("lang") === "ur") {
        document.body.classList.add("urdu-active");
    }
});

// WHATSAPP FORM HELPERS (future use ready)
function sendWhatsApp(message) {
    window.open("https://wa.me/923009555334?text=" + encodeURIComponent(message));
}
