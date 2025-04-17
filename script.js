document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
  
    mobileMenuBtn.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
  
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
  
          // Close mobile menu if open
          nav.classList.remove('active');
        }
      });
    });
  
    // Header Scroll Effect
    const header = document.querySelector('header');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
  
        // Display alert
        alert(`Thank you, ${name}! Your message has been received. We'll contact you soon.`);
  
        // Reset the form
        contactForm.reset();
      });
    }
  
    // Project Card Animation
    const projectCards = document.querySelectorAll('.project-card');
  
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.querySelector('.project-info').style.transform = 'translateY(0)';
      });
  
      card.addEventListener('mouseleave', function () {
        this.querySelector('.project-info').style.transform = 'translateY(100%)';
      });
    });
  
    // Typing Animation
    const text = "Optimal Construction & Engineering";
    const typingEl = document.getElementById("typing");
  
    if (typingEl) {
      let i = 0;
      const typeSpeed = 75;
  
      function typeWriter() {
        if (i < text.length) {
          typingEl.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, typeSpeed);
        }
      }
  
      typeWriter();
    }
  
    // Optional: ScrollReveal if you're using the library
    if (typeof ScrollReveal !== 'undefined') {
      const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        reset: false
      });
  
      scrollReveal.reveal('.section, .service-card, .project-card, .category, .contact-info, .contact-form', {
        interval: 100
      });
    }
  });
  