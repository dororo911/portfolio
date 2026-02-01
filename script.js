// =========================
// Profile Data
// =========================
const PROFILE = {
  name: "Houssam Salek",
  title: "PFA Intern | Web Development, Linux & AI Assistant Design",
  location: "Tanger–Tétouan–Al Hoceïma, Morocco",
  email: "houssamsalek0707@gmail.com",
  github: "https://github.com/dororo911",
  linkedin: "https://www.linkedin.com/in/houssam-salek",
  cv: "Profile.pdf",
  summary:
    "3rd-year IIR engineering student at EMSI, seeking a PFA internship starting 01/07. Focused on PHP/MySQL web development, Linux/Bash scripting, and AI assistant design."
};

const EXPERIENCE = [
  {
    date: "2025",
    title: "PFA Internship — Incoming",
    details:
      "Seeking a PFA internship starting 01/07 in web development, backend systems, Linux environments, and AI assistant design."
  },
  {
    date: "2022 — Present",
    title: "IIR Engineering Student — EMSI",
    details:
      "3rd-year engineering student focused on software engineering, web development, system programming, and practical academic projects."
  }
];

const PROJECTS = [
  {
    title: "LahekLibrary — Web Library Management System",
    description:
      "PHP/MySQL web application with authentication, role-based access, admin dashboard, media catalog, wishlist system, and secure CRUD operations using PDO.",
    tags: ["PHP", "MySQL", "PDO", "HTML", "CSS", "Linux"],
    image: "Screenshot 2026-01-03 155131.png",
    speed: 0.28,
    live: "#",
    code: "#"
  },
  {
    title: "Multimedia Library Management System (C++)",
    description:
      "C++ console application showcasing advanced OOP concepts, multi-role authentication, subscription management, borrowing logic, smart pointers, and persistent storage.",
    tags: ["C++", "OOP", "STL", "Smart Pointers", "File I/O"],
    image: "Screenshot 2025-12-31 111617.png",
    speed: 0.18,
    live: "#",
    code: "#"
  },
  {
    title: "SysAuditKit — Linux System Audit Toolkit",
    description:
      "Modular Bash-based Linux audit tool packaged as a Debian .deb, including system reports, file search, process monitoring, and user/permission management.",
    tags: ["Linux", "Bash", "Debian", "System Administration"],
    image: "Logo-pinguino-de-Linux.jpg",
    speed: 0.36,
    live: "#",
    code: "#"
  }
];

// =========================
// Render Functions
// =========================
function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html) e.innerHTML = html;
  return e;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  PROJECTS.forEach((p, i) => {
    const card = el("div", "card project-card reveal-scale");
    card.classList.add(`stagger-${(i % 5) + 1}`);

    // Visual thumbnail (parallax layer)
    if (p.image) {
      const visual = el("div", "project-visual parallax-layer");
      const img = document.createElement("img");
      img.src = p.image;
      img.alt = p.title;
      visual.appendChild(img);
      // per-item speed (used by ScrollEffects.updateParallax)
      if (p.speed) visual.dataset.speed = p.speed;
      card.appendChild(visual);
    }

    card.appendChild(el("h3", "", p.title));
    card.appendChild(el("p", "", p.description));

    const meta = el("div", "project-meta");
    p.tags.forEach((t) => meta.appendChild(el("span", "badge", t)));
    card.appendChild(meta);

    const actions = el("div", "project-actions");
    actions.appendChild(
      el("a", "btn ghost", `Live Demo`)
    ).href = p.live;
    actions.lastChild.target = "_blank";
    actions.lastChild.rel = "noreferrer";

    actions.appendChild(
      el("a", "btn ghost", `Code`)
    ).href = p.code;
    actions.lastChild.target = "_blank";
    actions.lastChild.rel = "noreferrer";

    grid.appendChild(card);
  });
}

function renderTimeline() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";

  EXPERIENCE.forEach((x, i) => {
    const row = el("div", "timeline-item card reveal-scale");
    row.classList.add(`stagger-${(i % 5) + 1}`);
    row.appendChild(el("div", "timeline-date", x.date));

    const content = el("div", "timeline-content");
    content.appendChild(el("h3", "", x.title));
    content.appendChild(el("p", "", x.details));

    row.appendChild(content);
    timeline.appendChild(row);
  });
}

function setLinks() {
  const githubA = document.getElementById("githubLink");
  const linkedinA = document.getElementById("linkedinLink");
  const cvA = document.getElementById("cvLink");

  const github2 = document.getElementById("githubLink2");
  const linkedin2 = document.getElementById("linkedinLink2");
  const emailLink = document.getElementById("emailLink");

  githubA.href = PROFILE.github;
  linkedinA.href = PROFILE.linkedin;
  cvA.href = PROFILE.cv;

  github2.href = PROFILE.github;
  github2.textContent = PROFILE.github.replace("https://", "");
  linkedin2.href = PROFILE.linkedin;
  linkedin2.textContent = PROFILE.linkedin.replace("https://", "");

  emailLink.href = `mailto:${PROFILE.email}`;
  emailLink.textContent = PROFILE.email;
}

function initTheme() {
  const btn = document.getElementById("themeBtn");
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  function updateIcon() {
    const theme = document.documentElement.getAttribute("data-theme");
    btn.textContent = theme === "light" ? "🌞" : "🌙";
  }

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "" : "light";
    if (next) document.documentElement.setAttribute("data-theme", next);
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", next || "");
    updateIcon();
  });

  updateIcon();
}

function initForm() {
  const form = document.getElementById("contactForm");
  const hint = document.getElementById("formHint");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

    hint.textContent = "Opening your email app… (Add a backend later if you want real sending.)";
    form.reset();
  });
}

// =========================
// Advanced Scroll System
// =========================
class ScrollEffects {
  constructor() {
    this.scrollY = 0;
    this.targetScrollY = 0;
    this.lastScrollY = 0;
    this.scrollVelocity = 0;
    this.ticking = false;
    this.scrollDirection = 'none';
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.initParallax();
    this.initVelocitySkew();
    this.initTextDecode();
    this.initBlurSections();
    this.initProgressRing();
    this.initTiltCards();
    this.initLineDraw();
    this.initRevealObserver();
    this.initCursorGlow();
  }
  
  bindEvents() {
    window.addEventListener('scroll', () => {
      this.targetScrollY = window.scrollY;
      this.scrollVelocity = this.targetScrollY - this.lastScrollY;
      this.scrollDirection = this.scrollVelocity > 0 ? 'down' : 'up';
      
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.update();
          this.ticking = false;
        });
        this.ticking = true;
      }
    }, { passive: true });
  }
  
  update() {
    this.scrollY += (this.targetScrollY - this.scrollY) * 0.1;
    this.lastScrollY = this.targetScrollY;
    
    this.updateProgressRing();
    this.updateParallax();
  }
  
  initParallax() {
    this.parallaxElements = document.querySelectorAll('.parallax-layer');
  }
  
  updateParallax() {
    const viewportCenter = window.innerHeight / 2;
    this.parallaxElements.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      const img = el.querySelector('img');

      // If the element is far off-screen, reset to center and skip expensive work
      if (rect.bottom < -120 || rect.top > window.innerHeight + 120) {
        if (img) img.style.transform = '';
        else el.style.transform = '';
        return;
      }

      const speedAttr = parseFloat(el.dataset.speed);
      const speed = !isNaN(speedAttr) ? speedAttr : (i + 1) * 0.2;

      // distance from viewport center (-..+)
      const elementCenter = rect.top + rect.height / 2;
      const distance = viewportCenter - elementCenter;
      const normalized = distance / (window.innerHeight / 2); // roughly -1..1

      // clamp movement so images never slide completely out of view
      const maxOffset = 28; // px
      const y = Math.max(-maxOffset, Math.min(maxOffset, normalized * speed * maxOffset * -1));

      // subtle horizontal sway & rotate for more life
      const xPos = Math.sin((rect.top + window.scrollY) * 0.001 + i) * 10;
      const rotate = xPos * 0.03;

      if (img) {
        img.style.transform = `translate3d(${xPos}px, ${y}px, 0) rotate(${rotate}deg)`;
      } else {
        el.style.transform = `translate3d(${xPos}px, ${y}px, 0) rotate(${rotate}deg)`;
      }
    });
  }
  
  initVelocitySkew() {
    let lastDirection = '';
    
    window.addEventListener('scroll', () => {
      const velocity = Math.min(Math.abs(this.scrollVelocity) * 0.1, 2);
      const direction = this.scrollDirection === 'down' ? -1 : 1;
      
      if (this.scrollDirection !== lastDirection && this.scrollDirection !== 'none') {
        document.body.classList.remove('scrolling-down', 'scrolling-up');
        document.body.classList.add(`scrolling-${this.scrollDirection}`);
        lastDirection = this.scrollDirection;
      }
      
      document.querySelectorAll('.velocity-skew').forEach(el => {
        el.style.transform = `skewY(${velocity * direction * 0.5}deg)`;
      });
      
      clearTimeout(this.skewTimeout);
      this.skewTimeout = setTimeout(() => {
        document.querySelectorAll('.velocity-skew').forEach(el => {
          el.style.transform = 'skewY(0deg)';
        });
        document.body.classList.remove('scrolling-down', 'scrolling-up');
      }, 100);
    }, { passive: true });
  }
  
 
  
  initTextDecode() {
    const elements = document.querySelectorAll('.decode-text');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.scrambleText(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    elements.forEach(el => observer.observe(el));
  }
  
  scrambleText(element) {
    const originalText = element.innerHTML;
    const chars = '!<>-_/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let iteration = 0;
    
    const interval = setInterval(() => {
      element.innerHTML = originalText
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          if (letter === ' ' || letter === '<' || letter === '>' || letter === '/' || letter === 's' || letter === 'p' || letter === 'a' || letter === 'n' || letter === 'c' || letter === 'l' || letter === 'a' || letter === 's' || letter === 's' || letter === '=' || letter === '"' || letter === 'a' || letter === 'c' || letter === 'c' || letter === 'e' || letter === 'n' || letter === 't' || letter === '"') {
            return letter;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      
      if (iteration >= originalText.length) {
        clearInterval(interval);
        element.innerHTML = originalText;
      }
      
      iteration += 1/2;
    }, 30);
  }
  
  initBlurSections() {
    const sections = document.querySelectorAll('.blur-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.3 });
    
    sections.forEach(section => observer.observe(section));
  }
  
  initProgressRing() {
    const container = document.createElement('div');
    container.className = 'progress-ring-container';
    container.innerHTML = `
      <svg class="progress-ring" width="60" height="60">
        <circle cx="30" cy="30" r="28" fill="none" stroke="rgba(124,92,255,0.2)" stroke-width="2"/>
        <circle cx="30" cy="30" r="28" fill="none" stroke="#7c5cff" stroke-width="2" 
                stroke-dasharray="175.9" stroke-dashoffset="0" stroke-linecap="round"/>
      </svg>
    `;
    document.body.appendChild(container);
    this.progressCircle = container.querySelector('circle:last-child');
  }
  
  updateProgressRing() {
    if (!this.progressCircle) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / docHeight;
    const circumference = 2 * Math.PI * 28;
    const offset = circumference - (progress * circumference);
    this.progressCircle.style.strokeDashoffset = offset;
  }
  
  initTiltCards() {
    const cards = document.querySelectorAll('.tilt-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        const inner = card.querySelector('.tilt-card-inner') || card;
        inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      
      card.addEventListener('mouseleave', () => {
        const inner = card.querySelector('.tilt-card-inner') || card;
        inner.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }
  
  initLineDraw() {
    const lines = document.querySelectorAll('.line-draw');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('drawn');
          }, 200);
        }
      });
    }, { threshold: 0.5 });
    
    lines.forEach(line => observer.observe(line));
  }
  
  initRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.reveal-scale').forEach(el => {
      observer.observe(el);
    });
  }
  
  initCursorGlow() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(updateCursor);
    };
    updateCursor();
    
    const clickables = document.querySelectorAll('a, button, .card, .tilt-card, input, textarea');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
  }
}

// =========================
// Decrypt Tooltip
// =========================
function initDecryptTooltip() {
  const tooltip = document.createElement('div');
  tooltip.className = 'decrypt-tooltip';
  document.body.appendChild(tooltip);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  
  document.querySelectorAll('[data-tooltip]').forEach(el => {
    const originalText = el.getAttribute('data-tooltip');
    let interval = null;
    
    el.addEventListener('mouseenter', (e) => {
      tooltip.classList.add('visible');
      let iteration = 0;
      
      if (interval) clearInterval(interval);
      
      interval = setInterval(() => {
        tooltip.textContent = originalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        
        tooltip.style.left = el.getBoundingClientRect().left + (el.offsetWidth / 2) + 'px';
        tooltip.style.top = el.getBoundingClientRect().top + 'px';
        
        if (iteration >= originalText.length) {
          clearInterval(interval);
        }
        
        iteration += 1/3;
      }, 30);
    });
    
    el.addEventListener('mouseleave', () => {
      tooltip.classList.remove('visible');
      if (interval) clearInterval(interval);
    });
    
    el.addEventListener('mousemove', (e) => {
      tooltip.style.left = e.clientX + 'px';
      tooltip.style.top = e.clientY + 'px';
    });
  });
}

// =========================
// Mouse Glow (Original)
// =========================
function initMouseGlow() {
  const glow = document.getElementById("mouse-glow");
  if (!glow) return;
  
  let mouseX = window.innerWidth / 2;
  let mouseY = 0;
  let currentX = mouseX;
  let currentY = mouseY;

  function animateGlow() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    glow.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
    requestAnimationFrame(animateGlow);
  }

  animateGlow();

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });
  
  window.addEventListener("mouseenter", () => {
    glow.style.opacity = "1";
  });
}

// =========================
// Initialize Everything
// =========================
document.getElementById("year").textContent = new Date().getFullYear();

setLinks();
renderProjects();
renderTimeline();
initTheme();
initForm();
initMouseGlow();

document.addEventListener('DOMContentLoaded', () => {
  new ScrollEffects();
  initDecryptTooltip();
});