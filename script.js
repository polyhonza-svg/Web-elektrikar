// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const faqIndex = this.dataset.faq;
            const faqItem = this.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const faqToggle = this.querySelector('.faq-toggle');

            // Close all other open FAQs
            document.querySelectorAll('.faq-answer').forEach(answer => {
                if (answer !== faqAnswer) {
                    answer.classList.remove('open');
                }
            });

            document.querySelectorAll('.faq-toggle').forEach(toggle => {
                if (toggle !== faqToggle) {
                    toggle.textContent = '+';
                }
            });

            // Toggle current FAQ
            faqAnswer.classList.toggle('open');
            faqToggle.textContent = faqAnswer.classList.contains('open') ? '−' : '+';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe gallery items and service cards
document.querySelectorAll('.gallery-item, .service-card, .review-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
