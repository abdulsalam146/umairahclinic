const WHATSAPP = "923225118889";

// 🔴 Replace this
const GOOGLE = "https://calendar.google.com/calendar/appointments/schedules/YOUR_LINK";

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

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const type = document.getElementById("type").value;
    const msg = document.getElementById("msg").value;

    const text = `Appointment Request:
Name: ${name}
Phone: ${phone}
Type: ${type}
Issue: ${msg || "N/A"}`;

    const encoded = encodeURIComponent(text);

    const choice = confirm("OK = WhatsApp\nCancel = Google Booking");

    if(choice){
        window.open(`https://wa.me/${WHATSAPP}?text=${encoded}`, "_blank");
    } else {
        window.open(GOOGLE, "_blank");
    }

    this.reset();
    closeModal();
});

// Auto popup
setTimeout(openModal, 2000);
