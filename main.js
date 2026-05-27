/* ============================================================
   AUGERFAB INDUSTRIAL — main.js
   All animations, scroll effects, and interactions
   ============================================================ */

'use strict';

// ─── PRELOADER & CANVAS ANIMATION ────────────────────────────
(function initPreloader() {
  const canvas = document.getElementById('preloader-canvas');
  const ctx    = canvas.getContext('2d');
  const logo   = document.getElementById('preloader-logo');
  const bar    = document.getElementById('preloader-bar-fill');
  const preloader = document.getElementById('preloader');

  let W, H, particles = [], animFrame, startTime;
  const PARTICLE_COUNT = 120;
  const DURATION_MS    = 3400;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  // Metallic particle class
  function Particle() { this.reset(true); }
  Particle.prototype.reset = function(init) {
    this.x  = Math.random() * W;
    this.y  = init ? Math.random() * H : H + 10;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = -(Math.random() * 1.2 + 0.4);
    this.size   = Math.random() * 2.5 + 0.5;
    this.alpha  = 0;
    this.maxAlpha = Math.random() * 0.5 + 0.1;
    this.fadeIn  = true;
    this.color   = Math.random() > 0.5
      ? `rgba(26,86,219,${this.maxAlpha})`
      : `rgba(249,115,22,${this.maxAlpha})`;
  };
  Particle.prototype.update = function() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.fadeIn) {
      this.alpha = Math.min(this.alpha + 0.015, this.maxAlpha);
      if (this.alpha >= this.maxAlpha) this.fadeIn = false;
    } else {
      this.alpha = Math.max(this.alpha - 0.008, 0);
    }
    if (this.y < -10 || this.alpha <= 0) this.reset(false);
  };
  Particle.prototype.draw = function() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle   = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur  = 6;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  // Blueprint grid lines that animate in
  let gridAlpha = 0;
  function drawGrid(alpha) {
    if (alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = alpha * 0.12;
    ctx.strokeStyle = '#1a56db';
    ctx.lineWidth   = 0.5;
    const spacing   = 60;
    for (let x = 0; x < W; x += spacing) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += spacing) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    ctx.restore();
  }

  // Auger screw SVG path drawn on canvas
  let augerProgress = 0;
  function drawAuger(t) {
    if (t < 0.3 || t > 0.75) return;
    const prog = Math.min((t - 0.3) / 0.35, 1);
    const cx   = W / 2, cy = H / 2;
    const len  = 180 * prog;
    const turns = 4;
    ctx.save();
    ctx.globalAlpha = prog * (t > 0.65 ? 1 - (t - 0.65) / 0.1 : 1);
    ctx.strokeStyle = '#3b7df8';
    ctx.lineWidth   = 2.5;
    ctx.shadowColor = '#1a56db';
    ctx.shadowBlur  = 12;
    // Helix spine
    ctx.beginPath();
    ctx.moveTo(cx - len, cy);
    ctx.lineTo(cx + len, cy);
    ctx.stroke();
    // Helix flights
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth   = 1.5;
    for (let i = 0; i <= turns * 2 * prog; i += 0.05) {
      const x = cx - len + (i / (turns * 2)) * len * 2;
      const y = cy + Math.sin(i * Math.PI) * 28;
      if (i < 0.05) ctx.beginPath(), ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();
  }

  function animate(ts) {
    if (!startTime) startTime = ts;
    const elapsed = ts - startTime;
    const t       = Math.min(elapsed / DURATION_MS, 1);

    // Update progress bar
    bar.style.width = (t * 100) + '%';

    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#0a0c10';
    ctx.fillRect(0, 0, W, H);

    // Grid fades in at t=0.5
    gridAlpha = t > 0.5 ? Math.min((t - 0.5) / 0.3, 1) : 0;
    drawGrid(gridAlpha);

    // Particles (start at t=0.05)
    if (t > 0.05) {
      particles.forEach(p => { p.update(); p.draw(); });
    }

    // Auger screw
    drawAuger(t);

    // Logo visibility
    if (t > 0.55 && !logo.classList.contains('visible')) {
      logo.classList.add('visible');
    }

    if (t < 1) {
      animFrame = requestAnimationFrame(animate);
    } else {
      // Done — hide preloader
      setTimeout(finishPreloader, 400);
    }
  }

  function finishPreloader() {
    cancelAnimationFrame(animFrame);
    preloader.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    // Trigger hero animations
    triggerHeroReveal();
  }

  // Init
  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
  animFrame = requestAnimationFrame(animate);
})();


// ─── HERO REVEAL (after preloader) ───────────────────────────
function triggerHeroReveal() {
  const elements = document.querySelectorAll('#hero .reveal');
  elements.forEach((el, i) => {
    const delay = parseInt(el.dataset.delay || 0);
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.classList.add('revealed');
    }, delay * 180);
  });
}


// ─── STICKY NAV ───────────────────────────────────────────────
(function initNav() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('section[id]');

  // Scroll class
  function handleScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.id;
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
})();


// ─── SCROLL REVEAL (IntersectionObserver) ────────────────────
(function initScrollReveal() {
  const revealEls = document.querySelectorAll(
    '.reveal:not(#hero .reveal), .reveal-left, .reveal-right'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  revealEls.forEach(el => observer.observe(el));
})();


// ─── COUNTER ANIMATION ────────────────────────────────────────
(function initCounters() {
  // Stats section counters
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  // About section counters
  const aboutCounters = document.querySelectorAll('.about-counter-value[data-target]');

  function animateCount(el, target, suffix, duration) {
    const span    = el.querySelector('span') || el;
    const isSpan  = el.querySelector('span') !== null;
    let start     = 0;
    const step    = target / (duration / 16);
    const suffix_ = suffix || '';

    function update() {
      start = Math.min(start + step, target);
      const val = Math.floor(start);
      if (isSpan) {
        el.querySelector('span').textContent = val >= 1000
          ? (val / 1000).toFixed(val % 1000 === 0 ? 0 : 1) + 'k'
          : val;
      } else {
        el.textContent = val + suffix_;
      }
      if (start < target) requestAnimationFrame(update);
      else {
        if (isSpan) {
          const finalVal = target >= 1000 ? (target / 1000).toFixed(0) + 'k' : target;
          el.querySelector('span').textContent = finalVal;
        } else {
          el.textContent = target + suffix_;
        }
      }
    }
    requestAnimationFrame(update);
  }

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix !== undefined ? el.dataset.suffix : '';
        if (el.classList.contains('stat-number')) {
          animateCount(el, target, suffix, 1800);
        } else {
          animateCount(el, target, suffix, 1600);
        }
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => countObserver.observe(el));
  aboutCounters.forEach(el => countObserver.observe(el));
})();


// ─── PROCESS LINE FILL ────────────────────────────────────────
(function initProcessLine() {
  const line   = document.getElementById('process-line-fill');
  const steps  = document.querySelectorAll('.process-step');
  if (!line) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        line.style.width = '100%';
        steps.forEach((step, i) => {
          setTimeout(() => step.classList.add('active'), i * 200);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.querySelector('#process .process-timeline'));
})();


// ─── PRODUCT TABS ─────────────────────────────────────────────
(function initTabs() {
  const tabBtns     = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const content = document.getElementById('tab-content-' + target);
      if (content) {
        content.classList.add('active');
        // Re-trigger reveal for cards in this tab
        content.querySelectorAll('.reveal').forEach((el, i) => {
          el.classList.remove('revealed');
          setTimeout(() => el.classList.add('revealed'), i * 80);
        });
      }
    });
  });
})();


// ─── TESTIMONIAL CAROUSEL ────────────────────────────────────
(function initCarousel() {
  const track    = document.getElementById('testimonial-track');
  const dots     = document.querySelectorAll('.carousel-dot');
  const prevBtn  = document.getElementById('carousel-prev');
  const nextBtn  = document.getElementById('carousel-next');
  const slides   = document.querySelectorAll('.testimonial-slide');

  if (!track || slides.length === 0) return;

  let current  = 0;
  let autoTimer;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    autoTimer = setInterval(next, 5000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  prevBtn.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
  nextBtn.addEventListener('click', () => { stopAuto(); next(); startAuto(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAuto();
      goTo(parseInt(dot.dataset.dot));
      startAuto();
    });
  });

  // Keyboard support for dots
  dots.forEach(dot => {
    dot.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        stopAuto();
        goTo(parseInt(dot.dataset.dot));
        startAuto();
      }
    });
  });

  // Swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      stopAuto();
      diff > 0 ? next() : prev();
      startAuto();
    }
  });

  startAuto();
})();


// ─── PORTFOLIO LIGHTBOX ───────────────────────────────────────
(function initLightbox() {
  const lightbox    = document.getElementById('lightbox');
  const closeBtn    = document.getElementById('lightbox-close');
  const lbImg       = document.getElementById('lightbox-img');
  const lbTag       = document.getElementById('lightbox-tag');
  const lbTitle     = document.getElementById('lightbox-title');
  const lbDesc      = document.getElementById('lightbox-desc');
  const lbMetrics   = document.getElementById('lightbox-metrics');

  const projects = [
    {
      img:     'assets/portfolio_auger.png',
      alt:     'Large-scale industrial auger system installation',
      tag:     'Auger Systems',
      title:   'Large-Scale Grain Auger System — Midwest USA',
      desc:    'Designed and manufactured a 12-unit auger conveying system for one of the largest grain processing facilities in the Midwest. The project required custom-engineered 24" diameter stainless steel augers capable of handling 50 tonnes per hour of wheat, corn, and soy. Full PLC integration with remote monitoring was included.',
      metrics: [
        { val: '50T/hr',  lbl: 'Throughput Capacity' },
        { val: '12',      lbl: 'Auger Units' },
        { val: '8mo',     lbl: 'Lead Time' },
      ]
    },
    {
      img:     'assets/portfolio_packaging.png',
      alt:     'Automated packaging production line',
      tag:     'Packaging Machinery',
      title:   'Automated Packaging Line — Germany',
      desc:    'Complete design and installation of a high-speed packaging line for a leading European food manufacturer. The line integrates VFFS auger filling machines, checkweighers, metal detectors, case erectors, and robotic palletizers — achieving 120 bags per minute with zero line gaps.',
      metrics: [
        { val: '120 BPM', lbl: 'Output Speed' },
        { val: '€2.4M',   lbl: 'Project Value' },
        { val: '98.5%',   lbl: 'OEE Achieved' },
      ]
    },
    {
      img:     'assets/portfolio_conveyor.png',
      alt:     'Large industrial mining conveyor system',
      tag:     'Material Handling',
      title:   'Mining Conveyor Infrastructure — Australia',
      desc:    'Engineering design, supply, and commissioning of a 1.2km overland conveyor system for an Australian mining operation. The system transports crushed iron ore at 800 TPH with a 500m elevation change. Designed for 24/7 operation in extreme heat and dust conditions.',
      metrics: [
        { val: '1.2km',   lbl: 'System Length' },
        { val: '800 TPH', lbl: 'Belt Capacity' },
        { val: '18mo',    lbl: '100% Uptime' },
      ]
    },
    {
      img:     'assets/industry_pharma.png',
      alt:     'Pharmaceutical cGMP auger dosing system',
      tag:     'Pharmaceutical',
      title:   'Pharma cGMP Auger Dosing — Switzerland',
      desc:    'Development of a fully enclosed, wash-in-place auger dosing system for capsule filling in a Swiss pharmaceutical facility. The system meets strict FDA 21 CFR Part 11 and EU GMP Annex 1 requirements, with full audit trail, electronic batch records, and ±0.08% dosing accuracy.',
      metrics: [
        { val: '±0.08%', lbl: 'Dosing Accuracy' },
        { val: 'FDA',    lbl: '21 CFR Part 11' },
        { val: 'cGMP',   lbl: 'Compliant' },
      ]
    },
    {
      img:     'assets/industry_food.png',
      alt:     'Complete food factory automation',
      tag:     'Food Processing',
      title:   'Food Factory Automation — United Kingdom',
      desc:    'Turnkey automated production facility for a UK ready-meal manufacturer. Project scope included 8 VFFS packaging lines, bulk ingredient handling, sauce and solid dosing systems, conveyor networks, checkweighers, and full SCADA integration — all delivered under a single contract.',
      metrics: [
        { val: '8',      lbl: 'Packaging Lines' },
        { val: '+45%',   lbl: 'Capacity Increase' },
        { val: '£4.2M',  lbl: 'Total Project' },
      ]
    },
  ];

  function openLightbox(index) {
    const p = projects[index];
    lbImg.src        = p.img;
    lbImg.alt        = p.alt;
    lbTag.textContent   = p.tag;
    lbTitle.textContent = p.title;
    lbDesc.textContent  = p.desc;

    lbMetrics.innerHTML = p.metrics.map(m =>
      `<div>
        <div class="lightbox-metric-val">${m.val}</div>
        <div class="lightbox-metric-lbl">${m.lbl}</div>
      </div>`
    ).join('');

    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
      openLightbox(parseInt(item.dataset.project));
    });
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(parseInt(item.dataset.project));
      }
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
})();


// ─── NEWSLETTER FORM ──────────────────────────────────────────
(function initNewsletter() {
  const btn   = document.getElementById('newsletter-btn');
  const input = document.getElementById('newsletter-email');
  if (!btn || !input) return;

  btn.addEventListener('click', () => {
    const email = input.value.trim();
    if (!email || !email.includes('@')) {
      input.style.borderColor = 'var(--color-orange)';
      input.focus();
      setTimeout(() => input.style.borderColor = '', 2000);
      return;
    }
    btn.textContent = '✓ Subscribed!';
    btn.style.background = 'linear-gradient(135deg,#065f46,#059669)';
    input.value    = '';
    input.disabled = true;
    btn.disabled   = true;
  });
})();


// ─── SMOOTH PARALLAX on HERO ──────────────────────────────────
(function initParallax() {
  const heroBg = document.querySelector('.hero-bg-img');
  if (!heroBg) return;

  function onScroll() {
    const scrolled = window.scrollY;
    const rate     = scrolled * 0.3;
    heroBg.style.transform = `translateY(${rate}px) scale(1.05)`;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();


// ─── PRODUCT CARD HOVER TILT (subtle 3D) ─────────────────────
(function initCardTilt() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) / (rect.width  / 2);
      const dy     = (e.clientY - cy) / (rect.height / 2);
      const rotX   = -dy * 4;
      const rotY   =  dx * 4;
      card.style.transform = `translateY(-6px) perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s ease, border-color 0.35s, box-shadow 0.35s';
    });
  });
})();


// ─── STAT CARD MICRO ANIMATIONS ───────────────────────────────
(function initStatCards() {
  document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'all 0.35s cubic-bezier(0.4,0,0.2,1)';
    });
  });
})();


// ─── FOOTER NEWSLETTER ENTER KEY ─────────────────────────────
(function initKeyHandlers() {
  const input = document.getElementById('newsletter-email');
  const btn   = document.getElementById('newsletter-btn');
  if (input && btn) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') btn.click();
    });
  }
})();


// ─── SMOOTH ANCHOR SCROLL ─────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')) || 76;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


// ─── INDUSTRY CARDS MOUSE PARALLAX ───────────────────────────
(function initIndustryCards() {
  document.querySelectorAll('.industry-card').forEach(card => {
    const img = card.querySelector('.industry-card-img');
    card.addEventListener('mousemove', e => {
      const rect  = card.getBoundingClientRect();
      const dx    = (e.clientX - rect.left) / rect.width  - 0.5;
      const dy    = (e.clientY - rect.top)  / rect.height - 0.5;
      if (img) img.style.transform = `scale(1.1) translate(${dx * 8}px, ${dy * 8}px)`;
    });
    card.addEventListener('mouseleave', () => {
      if (img) img.style.transform = '';
    });
  });
})();


// ─── PERFORMANCE: lazy load images ───────────────────────────
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading supported — already set in HTML
} else {
  // Fallback IntersectionObserver for older browsers
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const lazyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src   = img.dataset.src || img.src;
        lazyObserver.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => lazyObserver.observe(img));
}


// ─── SCROLL TO TOP BUTTON ─────────────────────────────────────
(function initScrollTop() {
  // Create the button dynamically
  const btn = document.createElement('button');
  btn.id   = 'scroll-top-btn';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20"><path d="M18 15l-6-6-6 6"/></svg>`;
  Object.assign(btn.style, {
    position:   'fixed',
    bottom:     '32px',
    right:      '32px',
    zIndex:     '500',
    width:      '48px',
    height:     '48px',
    borderRadius: '50%',
    background: 'var(--gradient-blue)',
    border:     'none',
    color:      '#fff',
    cursor:     'pointer',
    display:    'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow:  'var(--shadow-blue)',
    opacity:    '0',
    visibility: 'hidden',
    transition: 'opacity 0.3s ease, visibility 0.3s ease, transform 0.2s ease',
    transform:  'translateY(8px)',
  });
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.style.opacity     = '1';
      btn.style.visibility  = 'visible';
      btn.style.transform   = 'translateY(0)';
    } else {
      btn.style.opacity    = '0';
      btn.style.visibility = 'hidden';
      btn.style.transform  = 'translateY(8px)';
    }
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.1)');
  btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
})();


// ─── INIT LOG ────────────────────────────────────────────────
console.log('%cAugerFab Industrial', 'color:#f97316;font-size:20px;font-weight:900;font-family:Outfit,sans-serif');
console.log('%cEngineering Precision. Manufacturing Excellence.', 'color:#3b7df8;font-size:12px');
