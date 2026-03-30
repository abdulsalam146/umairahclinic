const WHATSAPP = "923225118889";

// Language toggle
function setLang(lang) {
    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerText = el.getAttribute(`data-${lang}`);
    });

    document.documentElement.lang = lang;

    if (lang === "ur") {
        document.body.setAttribute("dir", "rtl");
    } else {
        document.body.setAttribute("dir", "ltr");
    }
}

// Default
setLang("en");

// Modal
const bookingModal = document.getElementById('bookingModal');

window.openModal = (e) => {
    if (e) e.preventDefault();
    bookingModal.classList.add('active');
};

document.querySelector('.close-modal').onclick = () => {
    bookingModal.classList.remove('active');
};

window.onclick = (e) => {
    if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
    }
};

// Form
document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    const msg = `Appointment Request:
Name: ${name}
Phone: ${phone}`;

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");

    this.reset();
    bookingModal.classList.remove('active');
});

// Auto popup
setTimeout(() => {
    openModal();
}, 2000);
