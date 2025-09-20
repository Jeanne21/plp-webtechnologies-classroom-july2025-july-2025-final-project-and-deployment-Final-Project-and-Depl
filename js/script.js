// Mobile nav toggle (click logo to show/hide menu on small screens)
const logo = document.querySelector('.logo');
const navLinks = document.querySelector('.navbar ul');

logo.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Accordion for About Page
const accordions = document.querySelectorAll('.accordion-header');
accordions.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Filter for Shop Page
const categoryFilter = document.getElementById('categoryFilter');
if (categoryFilter) {
  categoryFilter.addEventListener('change', function() {
    const selected = this.value;
    document.querySelectorAll('.product-card').forEach(item => {
      if (selected === 'all' || item.dataset.category === selected) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errors = [];

    if (!name) errors.push('Name is required.');
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) errors.push('Valid email required.');
    if (!message) errors.push('Message cannot be empty.');

    if (errors.length > 0) {
      alert(errors.join('\n'));
      event.preventDefault();
    } else {
      alert('Message sent successfully!');
    }
  });
}
