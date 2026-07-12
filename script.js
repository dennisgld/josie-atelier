// Mobile nav toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(isOpen));
  burger.classList.toggle('active', isOpen);
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Booking form (visual only — no backend wired up)
const form = document.getElementById('booking-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    note.textContent = 'Bitte füllen Sie alle Pflichtfelder aus.';
    note.style.color = '#b3261e';
    form.reportValidity();
    return;
  }

  const name = document.getElementById('name').value.trim();
  note.textContent = `Danke, ${name}! Ihre Anfrage wurde erfasst. Wir melden uns in Kürze.`;
  note.style.color = '#b8944f';
  form.reset();
});

// Header background on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 20px rgba(20,18,16,0.06)';
  } else {
    header.style.boxShadow = 'none';
  }
});
