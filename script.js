document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const expanded = nav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', expanded);
        });
    }

    // Contact Form Handling (Mailto)
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            // Construct email body
            const subject = `New Inquiry: ${service} - ${name}`;
            const body = `Name: ${name}%0D%0A` +
                         `Email: ${email}%0D%0A` +
                         `Phone: ${phone}%0D%0A` +
                         `Service Needed: ${service}%0D%0A%0D%0A` +
                         `Message:%0D%0A${message}`;

            // Open email client
            const mailtoLink = `mailto:info@citytireshop.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            window.location.href = mailtoLink;

            // Optional: clear form or show success message (simple alert for this static site)
            alert('Thank you! Your email client should open now with your message ready to send.');
            contactForm.reset();
        });
    }
});
