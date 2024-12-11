// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1200,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // Initialize filters
    const filterButtons = document.querySelectorAll('.filter_btn');
    const cases = document.querySelectorAll('.case_card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.dataset.filter;
            
            cases.forEach(caseCard => {
                if (filter === 'all' || caseCard.dataset.category === filter) {
                    caseCard.classList.remove('hidden');
                    setTimeout(() => {
                        caseCard.style.opacity = '1';
                        caseCard.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    caseCard.style.opacity = '0';
                    caseCard.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        caseCard.classList.add('hidden');
                    }, 300);
                }
            });

            // Refresh AOS animations
            setTimeout(() => {
                AOS.refresh();
            }, 400);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1200,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // Initialize filters
    const filterButtons = document.querySelectorAll('.filter_btn');
    const cases = document.querySelectorAll('.case_card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.dataset.filter;
            
            cases.forEach(caseCard => {
                if (filter === 'all' || caseCard.dataset.category === filter) {
                    caseCard.style.display = 'block';
                    setTimeout(() => {
                        caseCard.style.opacity = '1';
                        caseCard.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    caseCard.style.opacity = '0';
                    caseCard.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        caseCard.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Case expansion functionality
window.expandCase = function(button) {
    const caseCard = button.closest('.case_card');
    const details = caseCard.querySelector('.case_details');
    const isExpanded = details.style.display === 'block';

    if (isExpanded) {
        details.style.opacity = '0';
        setTimeout(() => {
            details.style.display = 'none';
            button.textContent = 'View Implementation Process';
        }, 300);
    } else {
        details.style.display = 'block';
        setTimeout(() => {
            details.style.opacity = '1';
            button.textContent = 'Hide Implementation Process';
        }, 10);
    }
};

// Animate metrics when they come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const metrics = entry.target.querySelectorAll('.metric_value');
            metrics.forEach(metric => {
                const value = parseInt(metric.textContent);
                animateValue(metric, 0, value, 1500);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.case_metrics').forEach(
    metrics => observer.observe(metrics)
);

function animateValue(element, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = range / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            clearInterval(timer);
            current = end;
        }
        element.textContent = Math.round(current) + '%';
    }, 16);
}