// Shared behaviors for all pages

// Mobile nav toggle
function toggleMobileNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  nav.classList.toggle('mobile-open');
}

// NAV active link highlight based on current path
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href && href === path) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});

// LIGHTBOX / GALLERY
window.openModal = function(imgEl) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const lbImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  lbImg.src = imgEl.src;
  caption.textContent = imgEl.alt || '';
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

window.closeModal = function(e) {
  // prevent click-through closing when clicking the image itself
  if (e && e.target && e.target.id === 'lightbox-img') return;
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.style.display = 'none';
  document.body.style.overflow = '';
};

// CONTACT FORM (simple client-side validation + fake send)
function validateContactForm(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const status = document.getElementById('formStatus');

  if (!name || !email || !message || !status) return false;
  if (name.value.trim().length < 2) {
    status.textContent = 'Please enter your full name.';
    return false;
  }
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    status.textContent = 'Please enter a valid email address.';
    return false;
  }
  if (message.value.trim().length < 10) {
    status.textContent = 'Please write a message with at least 10 characters.';
    return false;
  }

  // simulate send
  status.textContent = 'Sending…';
  setTimeout(() => {
    status.textContent = 'Thanks — your message has been received. We will contact you shortly.';
    // reset form
    if (document.getElementById('contactForm')) {
      document.getElementById('contactForm').reset();
    }
  }, 900);

  return false;
}
window.validateContactForm = validateContactForm;


// ============================accessoris==============================

