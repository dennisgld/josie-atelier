// Intro blink animation (plays once per browser session)
const introOverlay = document.getElementById('introOverlay');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (introOverlay) {
  if (reducedMotion || sessionStorage.getItem('introPlayed')) {
    introOverlay.classList.add('is-hidden');
  } else {
    document.body.style.overflow = 'hidden';
    setTimeout(() => introOverlay.classList.add('blink'), 1200);
    setTimeout(() => introOverlay.classList.add('fade-out'), 2500);
    setTimeout(() => {
      introOverlay.classList.add('is-hidden');
      document.body.style.overflow = '';
      sessionStorage.setItem('introPlayed', '1');
    }, 3000);
  }
}

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
