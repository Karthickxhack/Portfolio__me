/* =====================
   MOBILE NAV TOGGLE
===================== */
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* Close menu when clicking a link (mobile UX) */
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

/* =====================
   THEME & COLOR PICKER
===================== */
const themeSelect = document.getElementById('theme-select');
const colorPicker = document.getElementById('color-picker');
const body = document.body;
const heroContent = document.querySelector('.hero-content');
const buttons = document.querySelectorAll('.cta-buttons .btn');

themeSelect.addEventListener('change', () => {
  body.classList.remove('dark-mode', 'light-mode', 'transparent-mode');
  body.classList.add(`${themeSelect.value}-mode`);
});

colorPicker.addEventListener('input', () => {
  const color = colorPicker.value;

  heroContent.style.color = color;
  heroContent.style.textShadow = `0 0 10px ${color}, 0 0 25px ${color}`;

  buttons.forEach(btn => {
    btn.style.background = color;
    btn.style.borderColor = color;
    btn.style.color = '#000';
  });
});

/* =====================
   MATRIX CANVAS EFFECT
===================== */
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');

let cols;
let ypos;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cols = Math.floor(canvas.width / 20);
  ypos = Array(cols).fill(0);
}

resizeCanvas();

function matrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = colorPicker.value || '#00ffea';
  ctx.font = '20px JetBrains Mono';

  ypos.forEach((y, index) => {
    const char = String.fromCharCode(33 + Math.random() * 94);
    ctx.fillText(char, index * 20, y);
    ypos[index] = y > canvas.height ? 0 : y + 20;
  });
}

setInterval(matrix, 50);

window.addEventListener('resize', resizeCanvas);







/* =========================
   BIO SECTION SCROLL ANIMATION
========================= */
const bioSection = document.querySelector('.bio');

function animateBio() {
    if (!bioSection) return;

    const triggerPoint = window.innerHeight * 0.8;
    const bioTop = bioSection.getBoundingClientRect().top;

    if (bioTop < triggerPoint) {
        bioSection.classList.add('show');
    }
}

window.addEventListener('scroll', animateBio);
window.addEventListener('load', animateBio);






//SKILL//
window.addEventListener("load", () => {
  document.querySelectorAll(".progress-fill").forEach(bar => {
    const value = bar.getAttribute("data-progress");
    bar.style.width = value + "%";
  });
});







// ================= SCROLL REVEAL ANIMATION =================
const revealElements = document.querySelectorAll(
  '.project-card, .cert-card'
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 80;

  revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
          el.classList.add('show');
      }
  });
};

// Initial styles
revealElements.forEach(el => {
  el.classList.add('reveal');
});

// Event listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);









// ================= TIMELINE SCROLL REVEAL =================
const timelineItems = document.querySelectorAll('.timeline-item');

function revealTimeline() {
    const triggerPoint = window.innerHeight * 0.85;

    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerPoint) {
            item.classList.add('show');
        }
    });
}

// Throttle scroll events for performance
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            revealTimeline();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Initial reveal on page load
revealTimeline();

// ================= TOOLS CARD INTERSECTION OBSERVER =================
const toolCards = document.querySelectorAll('.tool-card');

const observerOptions = {
    threshold: 0.3
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 0.6s ease-out';
        }
    });
}, observerOptions);

toolCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    cardObserver.observe(card);
});

/* experience*/
// Animate skill bars on scroll
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.progress');
  const trigger = window.innerHeight - 100;

  skills.forEach(skill => {
    const top = skill.getBoundingClientRect().top;
    if(top < trigger) {
      skill.style.width = skill.getAttribute('style').split('width:')[1];
    }
  });
});




/*experiencr*/
const certCards = document.querySelectorAll(".cert-card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

certCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  observer.observe(card);
});








/* contact*/
/* Typing Animation */
const text = "Secure Communication Channel Initialized...";
let index = 0;
const speed = 70;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();

/* Contact Form Feedback */
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("status").innerText =
    "✔ Message transmitted securely. Await response.";
  this.reset();
});






/* footer*/
// Example: blinking cybersecurity alert
const quote = document.querySelector('.footer-quote p');

setInterval(() => {
  quote.style.color = quote.style.color === 'cyan' ? '#e0e0e0' : 'cyan';
}, 1000);


