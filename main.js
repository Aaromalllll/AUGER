/* ============================================================
   AUGERFEED INDUSTRIAL — main.js
   All animations, scroll effects, and interactions
   ============================================================ */

'use strict';

// ─── PREMIUM CINEMATIC PRELOADER ─────────────────────────────
(function initPreloader() {
  const preloader = document.getElementById('preloader');
  const canvas    = document.getElementById('preloader-canvas');
  if (!canvas || !preloader) return;
  const ctx = canvas.getContext('2d');

  // ── DOM refs ────────────────────────────────────────────────
  const streakEl   = document.getElementById('pl-streak');
  const edgeGlow   = document.getElementById('pl-edge-glow');
  const iconEl     = document.getElementById('pl-icon');
  const letters    = document.querySelectorAll('#pl-logo-text .pl-letter');
  const shimmerEl  = document.getElementById('pl-shimmer');
  const taglineEl  = document.getElementById('pl-tagline');
  const ruleEl     = document.getElementById('pl-rule');
  const progressEl = document.getElementById('pl-progress');
  const fillEl     = document.getElementById('pl-fill');
  const msgEl      = document.getElementById('pl-msg');
  const pctEl      = document.getElementById('pl-pct');
  const bgAuger    = document.getElementById('pl-bg-auger');
  const corners    = document.querySelectorAll('.pl-corner');

  const MESSAGES = [
    'Engineering Precision...',
    'Building Industrial Excellence...',
    'Preparing Your Experience...',
    'Loading Advanced Machinery Solutions...'
  ];
  let msgIdx = 0;
  let animFrame;

  // ── Canvas setup ─────────────────────────────────────────────
  let W, H, particles = [];
  const PARTICLE_COUNT = 85;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  // Industrial spark particles
  function Particle() { this.reset(true); }
  Particle.prototype.reset = function(init) {
    this.x        = Math.random() * W;
    this.y        = init ? Math.random() * H : H + 10;
    this.vx       = (Math.random() - 0.5) * 0.55;
    this.vy       = -(Math.random() * 1.1 + 0.25);
    this.size     = Math.random() * 1.6 + 0.2;
    this.alpha    = 0;
    this.maxAlpha = Math.random() * 0.65 + 0.08;
    this.fadeIn   = true;
    const r = Math.random();
    if      (r < 0.5)  this.hue = 'rgba(255,88,0,';
    else if (r < 0.75) this.hue = 'rgba(255,155,50,';
    else               this.hue = 'rgba(255,215,130,';
  };
  Particle.prototype.update = function() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.fadeIn) {
      this.alpha = Math.min(this.alpha + 0.018, this.maxAlpha);
      if (this.alpha >= this.maxAlpha) this.fadeIn = false;
    } else {
      this.alpha = Math.max(this.alpha - 0.007, 0);
    }
    if (this.y < -10 || this.alpha <= 0) this.reset(false);
  };
  Particle.prototype.draw = function() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    const col = this.hue + this.alpha + ')';
    ctx.fillStyle   = col;
    ctx.shadowColor = col;
    ctx.shadowBlur  = 7;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  // Blueprint grid
  function drawGrid() {
    ctx.save();
    ctx.globalAlpha = 0.032;
    ctx.strokeStyle = '#ff6400';
    ctx.lineWidth   = 0.5;
    const sp = 56;
    for (let x = 0; x < W; x += sp) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += sp) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    ctx.restore();
  }

  // Central orange ambient glow
  function drawAmbient() {
    const g = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, Math.min(W, H) * 0.48);
    g.addColorStop(0, 'rgba(255,65,0,0.042)');
    g.addColorStop(0.6, 'rgba(255,35,0,0.016)');
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }

  function canvasLoop() {
    ctx.clearRect(0, 0, W, H);
    // Rich near-black gradient background
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#070707');
    bg.addColorStop(1, '#030303');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);
    drawAmbient();
    drawGrid();
    particles.forEach(p => { p.update(); p.draw(); });
    animFrame = requestAnimationFrame(canvasLoop);
  }

  // ── Helpers ──────────────────────────────────────────────────
  function swapMessage() {
    if (!msgEl) return;
    const gs = window.gsap;
    if (gs) {
      gs.to(msgEl, {
        opacity: 0, y: -5, duration: 0.22,
        onComplete() {
          msgIdx = (msgIdx + 1) % MESSAGES.length;
          msgEl.textContent = MESSAGES[msgIdx];
          gs.to(msgEl, { opacity: 1, y: 0, duration: 0.22 });
        }
      });
    } else {
      msgIdx = (msgIdx + 1) % MESSAGES.length;
      msgEl.textContent = MESSAGES[msgIdx];
    }
  }

  function finishPreloader() {
    cancelAnimationFrame(animFrame);
    const gs = window.gsap;
    if (gs) {
      gs.to(preloader, {
        opacity: 0,
        duration: 0.85,
        ease: 'power2.inOut',
        onComplete() {
          preloader.classList.add('hidden');
          document.body.classList.remove('no-scroll');
          triggerHeroReveal();
        }
      });
    } else {
      preloader.classList.add('hidden');
      document.body.classList.remove('no-scroll');
      triggerHeroReveal();
    }
  }

  // ── Init canvas ───────────────────────────────────────────────
  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
  canvasLoop();

  // ── GSAP animation sequence ───────────────────────────────────
  // If GSAP hasn't loaded yet (defer), wait for it
  function runTimeline() {
    const gs = window.gsap;
    if (!gs) { setTimeout(finishPreloader, 3200); return; }

    // Set initial hidden states
    gs.set([iconEl, taglineEl, ruleEl, progressEl], { opacity: 0 });
    gs.set(letters,   { opacity: 0, y: 22, filter: 'blur(12px)' });
    gs.set(shimmerEl, { opacity: 0, xPercent: -100 });
    gs.set(edgeGlow,  { opacity: 0 });
    gs.set(corners,   { opacity: 0, scale: 0.6 });
    gs.set(bgAuger,   { opacity: 0, rotation: 0 });
    gs.set(ruleEl,    { scaleX: 0, opacity: 0 });
    gs.set(progressEl,{ opacity: 0, y: 8 });

    const tl = gs.timeline({ onComplete: () => setTimeout(finishPreloader, 280) });

    // t=0.06  Light streak sweeps left → right
    tl.fromTo(streakEl,
      { xPercent: -130, opacity: 1 },
      { xPercent: 160,  opacity: 0, duration: 0.85, ease: 'power2.inOut' },
      0.06
    );

    // t=0.15  Edge glow materialises
    tl.to(edgeGlow, { opacity: 1, duration: 1.1, ease: 'power2.out' }, 0.15);

    // t=0.22  Corner brackets snap in (staggered)
    tl.to(corners, {
      opacity: 1, scale: 1, duration: 0.45, stagger: 0.07,
      ease: 'back.out(1.6)'
    }, 0.22);

    // t=0.38  Background auger wireframe fades + starts perpetual rotation
    tl.to(bgAuger, { opacity: 0.06, duration: 1.6, ease: 'power2.out' }, 0.38);
    gs.to(bgAuger,  { rotation: 360, duration: 38, repeat: -1, ease: 'none' });

    // t=0.55  Auger icon blooms in
    tl.fromTo(iconEl,
      { opacity: 0, scale: 0.75 },
      { opacity: 1, scale: 1,  duration: 0.58, ease: 'back.out(1.4)' },
      0.55
    );

    // t=0.95  Letters reveal one-by-one (blur → sharp)
    tl.to(letters, {
      opacity: 1, y: 0, filter: 'blur(0px)',
      duration: 0.52, stagger: 0.062, ease: 'power3.out'
    }, 0.95);

    // t=1.70  Metallic shimmer sweeps across logo
    tl.to(shimmerEl, {
      opacity: 1, xPercent: 220, duration: 0.72, ease: 'power2.inOut'
    }, 1.70);

    // t=1.85  Tagline fades up
    tl.fromTo(taglineEl,
      { opacity: 0, y: 6 },
      { opacity: 1, y: 0, duration: 0.48, ease: 'power2.out' },
      1.85
    );

    // t=2.0   Orange divider rule expands from centre
    tl.to(ruleEl, {
      scaleX: 1, opacity: 1, duration: 0.65, ease: 'power2.out'
    }, 2.0);

    // t=2.15  Progress section slides up + fades in
    tl.to(progressEl, {
      opacity: 1, y: 0, duration: 0.42, ease: 'power2.out'
    }, 2.15);

    // t=2.15  Progress fill animates 0→100% over 1.75s
    const prog = { v: 0 };
    let lastSwap = 0;
    tl.to(prog, {
      v: 100, duration: 1.75, ease: 'power1.inOut',
      onUpdate() {
        const p = Math.round(prog.v);
        if (fillEl) fillEl.style.width = p + '%';
        if (pctEl)  pctEl.textContent  = p + '%';
        if (p >= 30 && lastSwap === 0) { lastSwap = 1; swapMessage(); }
        if (p >= 62 && lastSwap === 1) { lastSwap = 2; swapMessage(); }
        if (p >= 88 && lastSwap === 2) { lastSwap = 3; swapMessage(); }
      }
    }, 2.15);

    // t=3.9   Subtle scale nudge before exit
    tl.to('#pl-center', { scale: 1.012, duration: 0.22, ease: 'power2.out' }, 3.90);
    tl.to('#pl-center', { scale: 1,     duration: 0.14 },                     4.12);

    // Total ~4.3s
    tl.to({}, { duration: 0.05 }, 4.26);
  }

  // GSAP is deferred — wait for DOMContentLoaded then check
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runTimeline);
  } else {
    // Give deferred script a tick to execute
    requestAnimationFrame(() => requestAnimationFrame(runTimeline));
  }

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
console.log('%cAugerFeed Industrial', 'color:#3b5bdb;font-size:20px;font-weight:900;font-family:Outfit,sans-serif');
console.log('%cEngineering Precision. Manufacturing Excellence.', 'color:#6b7280;font-size:12px');
