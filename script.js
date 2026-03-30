// script.js

// 1. Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. Calendar Modal Logic
const calendarModal = document.getElementById('calendarModal');
const closeBtn = document.querySelector('.close-modal');
const openBtns = [document.getElementById('openCalendarBtnNav'), document.getElementById('openCalendarBtnHero')];

openBtns.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            calendarModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
});

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        calendarModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === calendarModal) {
        calendarModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// 3. Google Calendar Button Integration (Optional Overlay Button)
window.addEventListener('load', function() {
  if (window.calendar && window.calendar.schedulingButton) {
    window.calendar.schedulingButton.load({
      url: 'YOUR_CALENDAR_URL',
      color: '#ff4b91',
      label: 'Book Appointment',
      target: document.body,
    });
  }
});
