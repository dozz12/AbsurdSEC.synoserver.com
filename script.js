document.addEventListener("DOMContentLoaded", function() {
    // Glitch effect for the header title
    let title = document.querySelector(".glitch");
    setInterval(() => {
        title.style.textShadow = `0 0 15px #0f0, 0 0 30px #0f0`;
        setTimeout(() => {
            title.style.textShadow = `0 0 5px #0f0`;
        }, 200);
    }, 500);

    // Typing animation for the hero section
    const typingElement = document.querySelector(".typing");
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // speed of typing effect
        }
    }
    typeText();

    // Scroll effect for navbar items
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease-in-out';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Scroll animations for sections (fade in)
    const sections = document.querySelectorAll('.about, .services, .contact');
    const fadeInSection = (section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('fade-in');
        }
    };

    sections.forEach(section => {
        fadeInSection(section); // Check immediately on load
        window.addEventListener('scroll', () => fadeInSection(section)); // Check on scroll
    });

    // Background animation effect (hacker console)
    const background = document.querySelector('.background');
    let hue = 0;

    function animateBackground() {
        hue += 0.2;
        if (hue > 360) hue = 0;
        background.style.filter = `hue-rotate(${hue}deg)`;
        requestAnimationFrame(animateBackground);
    }
    animateBackground();

    // Contact button hover animation
    const contactButton = document.querySelector('.contact-btn');
    contactButton.addEventListener('mouseover', function() {
        contactButton.style.boxShadow = '0 0 20px #0f0';
        contactButton.style.transform = 'scale(1.1)';
    });
    contactButton.addEventListener('mouseout', function() {
        contactButton.style.boxShadow = 'none';
        contactButton.style.transform = 'scale(1)';
    });

    // Scroll to section smooth scroll
    const navLinksSmoothScroll = document.querySelectorAll('nav ul li a[href^="#"]');
    navLinksSmoothScroll.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for nav bar height
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Footer Year Update
    const footer = document.querySelector('footer p');
    const year = new Date().getFullYear();
    footer.textContent = `© ${year} Dark Hackers | Stay in the Shadows.`;

    // Custom Cursor effect
    const cursor = document.createElement('div');
    cursor.style.position = 'absolute';
    cursor.style.border = '2px solid #0f0';
    cursor.style.borderRadius = '50%';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
    });

    // Bounce animation on scroll for Contact Button
    const contactSection = document.querySelector('#contact');
    const bounceEffect = () => {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            contactButton.classList.add('bounce');
        }
    };

    window.addEventListener('scroll', bounceEffect);

    // Bounce effect keyframes
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes bounce {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
        }
    `, styleSheet.cssRules.length);

    // Adding bounce effect to contact button
    contactButton.classList.add('bounce');
    setInterval(() => {
        contactButton.classList.toggle('bounce');
    }, 2000);
});
