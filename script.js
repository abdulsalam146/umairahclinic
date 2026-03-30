const WHATSAPP = "923225118889";
const GOOGLE = "https://calendar.google.com/calendar/appointments/schedules/YOUR_LINK";

// Language switch
function setLang(lang) {
    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerText = el.getAttribute(`data-${lang}`);
    });

    document.documentElement.lang = lang;

    // RTL for Urdu
    if (lang === "ur") {
        document.body.style.direction = "rtl";
    } else {
        document.body.style.direction = "ltr";
    }
}

// Default language
setLang("en");

// Modal
const modal = document.getElementById("modal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = (e) => {
    if (e.target === modal) closeModal();
};

// Form
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const type = document.getElementById("type").value;
    const msg = document.getElementById("msg").value;

    const text = `Appointment:
Name: ${name}
Phone: ${phone}
Type: ${type}
Message: ${msg}`;

    const encoded = encodeURIComponent(text);

    if(confirm("OK = WhatsApp | Cancel = Calendar")){
        window.open(`https://wa.me/${WHATSAPP}?text=${encoded}`, "_blank");
    } else {
        window.open(GOOGLE, "_blank");
    }

    this.reset();
    closeModal();
});

// Auto popup
setTimeout(openModal, 2000);
