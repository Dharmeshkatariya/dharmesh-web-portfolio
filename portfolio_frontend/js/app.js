/**
 * ==========================================================================
 * DHARMESH AHIR PREMIUM ENGINE
 * Vanilla Javascript showcasing GSAP, Lenis, Custom Canvas, & Synth Audio.
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {

  // 1. PROJECT DATA CATALOG
  const portfolioItems = [
    {
      id: "helix-care",
      category: "web",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&h=400&q=80",
      title: "Helix Care Platform",
      siteUrl: "https://qa.helixdoc.com",
      tags: ["Flutter Web", "Dart", "Video WebRTC", "Stripe payment", "Role Permissions API"],
      description: "Comprehensive Healthcare Portal with integrated Doctor consult calendars, multi-tier permissions configuration, payment systems, and WebRTC streaming frameworks."
    },
    {
      id: "resido-property",
      category: "web",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&h=400&q=80",
      title: "Resido Management",
      siteUrl: "https://resido-dev.helixbeat.com",
      tags: ["Flutter Web", "GetX Framework", "API Integration", "UI/UX Optimization"],
      description: "Advanced property administration ecosystem tracking unit, building, and structural data points using automated Lookups and security role matrices."
    },
    {
      id: "mtz-infotech",
      category: "web",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80",
      title: "MTZ Corporate Portal",
      siteUrl: "https://mtzinfotech.com/#/",
      tags: ["Flutter Web", "Responsive Architecture", "Custom Animators"],
      description: "Fully responsive multi-platform presentation workspace utilizing responsive grid matrices and transition animations."
    },
    {
      id: "khata-app",
      category: "mobile",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&h=400&q=80",
      title: "Khata Digital Ledger",
      siteUrl: "https://play.google.com/store/apps/details?id=com.shree.khata",
      tags: ["Flutter Mobile", "Dart", "Localization", "Offline Syncing"],
      description: "Bilingual payment ledger supporting offline tracking modes and secure database restoration pipelines."
    },
    {
      id: "dhasa-patel",
      category: "mobile",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&h=400&q=80",
      title: "Samaj Social Hub",
      siteUrl: "https://play.google.com/store/apps/details?id=com.dhasagam.patelsamaj",
      tags: ["Flutter Mobile", "Firebase backend", "Custom directories"],
      description: "Community engagement directory compiling indices of verified records with automated real-time alerts."
    },
    {
      id: "vision-news",
      category: "mobile",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&h=400&q=80",
      title: "Vision Media Portal",
      siteUrl: "https://play.google.com/store/apps/details?id=tw.com.gvm.dailynews",
      tags: ["Flutter Mobile", "RESTful parsers", "HTML renderers"],
      description: "Advanced news portal processing real-time publications streams alongside localized bookmark controls."
    },
    {
      id: "roommatik",
      category: "web",
      imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&h=400&q=80",
      title: "Roommatik Finder",
      siteUrl: "https://roommatik-eae91.web.app",
      tags: ["Flutter Web", "Cloud Hosting", "QR system API"],
      description: "Unified cross-platform listing catalog matching parameters, complete with booking forms and automatic verification systems."
    },
    {
      id: "viosa",
      category: "mobile",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&h=400&q=80",
      title: "Viosa AI Prep Platform",
      siteUrl: "https://play.google.com/store/apps/details?id=com.viosa.app",
      tags: ["Flutter Mobile", "AI Model Core", "Native Downloader API"],
      description: "Platform designed to optimize interview practices using automated processing and feedback mechanisms."
    }
  ];

  // 2. SOUND SYNTHESIS ENGINE
  const SoundEngine = {
    ctx: null,
    muted: true,

    init() {
      if (!this.ctx) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
    },

    playHover() {
      if (this.muted) return;
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.04);
      
      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    },

    playClick() {
      if (this.muted) return;
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "triangle";
      osc.frequency.setValueAtTime(350, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.1);
      
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    },

    playCelebration() {
      if (this.muted) return;
      this.init();
      const now = this.ctx.currentTime;
      const playTone = (pitch, delay, length) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(pitch, now + delay);
        gain.gain.setValueAtTime(0.05, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + length);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + length);
      };
      playTone(523.25, 0, 0.12);
      playTone(659.25, 0.06, 0.12);
      playTone(783.99, 0.12, 0.12);
      playTone(1046.50, 0.18, 0.25);
    }
  };

  const soundToggle = document.getElementById("sound-toggle");
  soundToggle.addEventListener("click", () => {
    SoundEngine.muted = !SoundEngine.muted;
    const icon = soundToggle.querySelector("i");
    if (SoundEngine.muted) {
      icon.setAttribute("data-lucide", "volume-x");
      soundToggle.classList.remove("active");
    } else {
      SoundEngine.init();
      icon.setAttribute("data-lucide", "volume-2");
      soundToggle.classList.add("active");
      SoundEngine.playClick();
    }
    lucide.createIcons();
  });


  // 3. LENIS SMOOTH SCROLLING
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);


  // 4. CUSTOM MORPHING CURSOR ENGINE
  const cursor = document.getElementById("custom-cursor");
  const follower = document.getElementById("cursor-follower");
  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  function tickCursor() {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;
    follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    requestAnimationFrame(tickCursor);
  }
  requestAnimationFrame(tickCursor);

  const applyCursorListeners = () => {
    document.querySelectorAll("a, button, .magnetic, .tab-select-btn, .filter-tab-btn, .view-details-trigger").forEach(el => {
      el.addEventListener("mouseenter", () => {
        document.body.setAttribute("data-cursor-state", "pointer");
        SoundEngine.playHover();
      });
      el.addEventListener("mouseleave", () => {
        document.body.removeAttribute("data-cursor-state");
      });
      el.addEventListener("click", () => {
        SoundEngine.playClick();
      });
    });

    document.querySelectorAll(".premium-input-field").forEach(el => {
      el.addEventListener("mouseenter", () => {
        document.body.setAttribute("data-cursor-state", "text");
      });
      el.addEventListener("mouseleave", () => {
        document.body.removeAttribute("data-cursor-state");
      });
    });
  };


  // 5. CINEMATIC PRELOADER SEQUENCE
  const percentageLabel = document.getElementById("load-percentage");
  const preloaderTag = document.getElementById("preloader-tagline");
  const tags = [
    "Building Beautiful Apps...",
    "Crafting Pixel-Perfect UI...",
    "Optimizing System Frameworks...",
    "Injecting Interaction Paradigms..."
  ];
  let loadCount = 0;
  let tagIdx = 0;

  const tagInterval = setInterval(() => {
    preloaderTag.style.opacity = 0;
    setTimeout(() => {
      preloaderTag.textContent = tags[tagIdx];
      preloaderTag.style.opacity = 1;
      tagIdx = (tagIdx + 1) % tags.length;
    }, 300);
  }, 1000);

  const loadingInterval = setInterval(() => {
    loadCount += Math.floor(Math.random() * 8) + 4;
    if (loadCount >= 100) {
      loadCount = 100;
      clearInterval(loadingInterval);
      clearInterval(tagInterval);
      
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.5 }
      });

      gsap.to("#preloader", {
        opacity: 0,
        y: -100,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          document.getElementById("preloader").style.display = "none";
          initHeroParticlesCanvas();
          initTypewriter();
          animateCountUpMetrics();
          renderPortfolioSection();
          animateTabSkillFills();
          initOrbitalSphere();
          initTestimonialsSlider();
        }
      });
    }
    percentageLabel.textContent = loadCount;
  }, 50);


  // 6. DETAILED PALETTES & PRESET HANDLERS
  const bodyElement = document.documentElement;
  const themeDrawer = document.getElementById("theme-drawer");
  const themePanelToggle = document.getElementById("theme-panel-toggle");
  const themeDrawerClose = document.getElementById("theme-drawer-close");
  const themePresetBtns = document.querySelectorAll(".theme-preset-btn");
  const modeToggleBtn = document.getElementById("mode-toggle");

  let currentTheme = localStorage.getItem("dh-portfolio-theme") || "ocean";
  let currentMode = localStorage.getItem("dh-portfolio-mode") || "dark";

  const refreshAppliedTheming = () => {
    bodyElement.setAttribute("data-theme", currentTheme);
    bodyElement.setAttribute("data-mode", currentMode);
    themePresetBtns.forEach(btn => {
      if (btn.getAttribute("data-theme-val") === currentTheme) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  };

  refreshAppliedTheming();

  themePanelToggle.addEventListener("click", () => themeDrawer.classList.toggle("open"));
  themeDrawerClose.addEventListener("click", () => themeDrawer.classList.remove("open"));

  themePresetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentTheme = btn.getAttribute("data-theme-val");
      localStorage.setItem("dh-portfolio-theme", currentTheme);
      refreshAppliedTheming();
    });
  });

  modeToggleBtn.addEventListener("click", (e) => {
    currentMode = currentMode === "dark" ? "light" : "dark";
    localStorage.setItem("dh-portfolio-mode", currentMode);
    
    const ripple = document.createElement("div");
    ripple.className = "theme-ripple-overlay";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    document.body.appendChild(ripple);
    
    setTimeout(() => {
      refreshAppliedTheming();
      gsap.to(ripple, {
        scale: 150,
        opacity: 0,
        duration: 0.8,
        onComplete: () => ripple.remove()
      });
    }, 50);
  });


  // 7. MULTI STYLE LAYOUT SWITCHER
  const layoutToggle = document.getElementById("layout-menu-toggle");
  const layoutDropdown = document.getElementById("layout-dropdown");
  const layoutSelectBtns = document.querySelectorAll(".layout-select-btn");

  let activeSiteLayout = localStorage.getItem("dh-site-layout") || "glass";
  bodyElement.setAttribute("data-site-layout", activeSiteLayout);

  layoutToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    layoutDropdown.classList.toggle("open");
  });

  document.addEventListener("click", () => {
    layoutDropdown.classList.remove("open");
  });

  layoutSelectBtns.forEach(btn => {
    if (btn.getAttribute("data-layout") === activeSiteLayout) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }

    btn.addEventListener("click", () => {
      const state = Flip.getState(".hero-grid, .about-grid, .services-grid, .contact-grid");
      
      activeSiteLayout = btn.getAttribute("data-layout");
      localStorage.setItem("dh-site-layout", activeSiteLayout);
      bodyElement.setAttribute("data-site-layout", activeSiteLayout);
      
      layoutSelectBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      Flip.from(state, {
        duration: 0.8,
        ease: "power3.inOut"
      });
    });
  });


  // 8. HERO PARTICLES CANVAS (Attrat/Repel mechanics)
  let canvas, ctx, particlesArray;
  const maxDistance = 100;

  function initHeroParticlesCanvas() {
    canvas = document.getElementById("hero-particles-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    
    particlesArray = [];
    const count = Math.floor((canvas.width * canvas.height) / 9000);
    
    for (let i = 0; i < count; i++) {
      particlesArray.push(new Particle());
    }
    
    animateHeroParticles();
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.vx = Math.random() * 1.5 - 0.75;
      this.vy = Math.random() * 1.5 - 0.75;
    }
    draw() {
      ctx.fillStyle = "var(--text-accent)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
    update() {
      const dx = mouseX - this.x - canvas.getBoundingClientRect().left;
      const dy = mouseY - this.y - canvas.getBoundingClientRect().top;
      const dist = Math.hypot(dx, dy);

      if (dist < maxDistance) {
        const force = (maxDistance - dist) / maxDistance;
        this.x -= (dx / dist) * force * 3;
        this.y -= (dy / dist) * force * 3;
      }

      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
  }

  function animateHeroParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateHeroParticles);
  }

  window.addEventListener("resize", () => {
    if (canvas) {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
  });


  // 9. HIGH END TYPEWRITER ENGINE
  const words = ["Flutter Developer", "Mobile Architect", "UI/UX Specialist"];
  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typewriterTarget = document.getElementById("typewriter");

  function initTypewriter() {
    if(!typewriterTarget) return;
    const curWord = words[wordIdx];
    if (isDeleting) {
      typewriterTarget.textContent = curWord.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typewriterTarget.textContent = curWord.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 40 : 100;
    if (!isDeleting && charIdx === curWord.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      speed = 500;
    }
    setTimeout(initTypewriter, speed);
  }


  // 10. COUNTERS ENGINE
  function animateCountUpMetrics() {
    document.querySelectorAll(".count-up").forEach(el => {
      const target = parseInt(el.getAttribute("data-target"));
      let val = 0;
      const inc = target / 60;
      const timer = setInterval(() => {
        val += inc;
        if (val >= target) {
          el.textContent = target + "+";
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(val) + "+";
        }
      }, 25);
    });
  }


  // 11. ABOUT MODULE TABS & ORBITS
  const tabSelectBtns = document.querySelectorAll(".tab-select-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabSelectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabSelectBtns.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));
      
      btn.classList.add("active");
      const target = btn.getAttribute("data-tab-target");
      document.getElementById(target).classList.add("active");

      if (target === "skills-grid") {
        animateTabSkillFills();
      }
    });
  });

  function animateTabSkillFills() {
    document.querySelectorAll(".skill-fill").forEach(fill => {
      fill.style.width = fill.getAttribute("data-progress");
    });
  }

  function initOrbitalSphere() {
    const nodes = document.querySelectorAll(".orbital-node");
    const radius = 110; 
    let angle = 0;

    function orbitTick() {
      angle += 0.015;
      nodes.forEach((node, idx) => {
        const offsetAngle = angle + (idx * (Math.PI * 2 / nodes.length));
        const x = Math.cos(offsetAngle) * radius;
        const y = Math.sin(offsetAngle) * radius;
        node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
      requestAnimationFrame(orbitTick);
    }
    orbitTick();
  }


  // 12. PORTFOLIO COMPONENT RENDERING
  const portfolioGrid = document.getElementById("portfolio-grid");
  const modal = document.getElementById("project-detail-modal");
  const modalClose = document.getElementById("modal-close-btn");
  let activeLayout = "grid";
  let activeFilter = "all";

  function renderPortfolioSection() {
    portfolioGrid.innerHTML = "";
    
    const filtered = portfolioItems.filter(p => activeFilter === "all" || p.category === activeFilter);
    portfolioGrid.className = `portfolio-container layout-${activeLayout}`;

    filtered.forEach(proj => {
      const card = document.createElement("div");
      card.className = "project-card tilt-card";
      
      card.innerHTML = `
        <div class="project-media-wrapper">
          <img class="mock-screenshot" 
               src="${proj.imageUrl}" 
               alt="${proj.title}"
               loading="lazy"
               onerror="this.style.display='none';">
          <div class="project-overlay">
            <button class="btn-icon view-details-trigger magnetic" data-id="${proj.id}">
              <i data-lucide="eye"></i>
            </button>
          </div>
        </div>
        <div class="project-info">
          <span class="proj-badge">${proj.category.toUpperCase()}</span>
          <h3>${proj.title}</h3>
          <p>${proj.description.substring(0, 120)}...</p>
          <div class="proj-badge-row">
            ${proj.tags.slice(0, 3).map(t => `<span class="proj-badge">${t}</span>`).join('')}
          </div>
          <button class="btn-primary-modal view-details-trigger" style="margin-top:16px;" data-id="${proj.id}">
            View Details <i data-lucide="arrow-right"></i>
          </button>
        </div>
      `;
      portfolioGrid.appendChild(card);
    });

    lucide.createIcons();
    applyCursorListeners();
    apply3DTiltMechanics();
    bindDetailsModalTriggers();
  }

  const filterButtons = document.querySelectorAll(".filter-tab-btn");
  const activeIndicator = document.querySelector(".active-filter-indicator");

  const positionFilterUnderline = (activeBtn) => {
    if (!activeIndicator || !activeBtn) return;
    activeIndicator.style.width = activeBtn.offsetWidth + "px";
    activeIndicator.style.left = activeBtn.offsetLeft + "px";
  };

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      renderPortfolioSection();
      positionFilterUnderline(btn);
    });
  });

  document.querySelectorAll(".layout-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".layout-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeLayout = btn.getAttribute("data-layout-val");
      renderPortfolioSection();
    });
  });


  // 13. PROJECT MODALS SYSTEM
  function bindDetailsModalTriggers() {
    document.querySelectorAll(".view-details-trigger").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const match = portfolioItems.find(p => p.id === id);
        if (match) {
          document.getElementById("modal-project-badge").textContent = match.category.toUpperCase();
          document.getElementById("modal-project-title").textContent = match.title;
          document.getElementById("modal-project-link").setAttribute("href", match.siteUrl);
          document.getElementById("modal-project-description").textContent = match.description;
          document.getElementById("modal-project-tags").innerHTML = match.tags.map(t => `<span class="modal-tag-badge">${t}</span>`).join("");
          
          modal.classList.add("open");
          lenis.stop(); 
        }
      });
    });
  }

  const closeModalOverlay = () => {
    modal.classList.remove("open");
    lenis.start();
  };

  modalClose.addEventListener("click", closeModalOverlay);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModalOverlay(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModalOverlay(); });


  // 14. REAL CONTACT FORM BACKEND VIA FORMSPREE
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("form-submit-btn");
  const charCountLabel = document.getElementById("char-count");
  const feedbackMsg = document.getElementById("form-feedback");
  const messageArea = document.getElementById("message");

  if(messageArea) {
    messageArea.addEventListener("input", () => {
      charCountLabel.textContent = messageArea.value.length;
    });
  }

  if(contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      feedbackMsg.textContent = "";
      
      let invalid = false;
      document.querySelectorAll("#contact-form .premium-input-field").forEach(input => {
        if (!input.value.trim() || (input.type === 'email' && !input.value.includes('@'))) {
          invalid = true;
          input.parentElement.classList.add("shake-error");
          setTimeout(() => input.parentElement.classList.remove("shake-error"), 400);
        }
      });

      if (invalid) {
        feedbackMsg.textContent = "Please verify your input fields.";
        feedbackMsg.className = "form-feedback error";
        return;
      }

      submitBtn.querySelector(".btn-text").style.display = "none";
      submitBtn.querySelector(".btn-premium-send-icon").style.display = "none";
      submitBtn.querySelector(".btn-loading-spinner").style.display = "inline-block";

      const formData = new FormData(contactForm);

      fetch(contactForm.getAttribute('action'), {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        submitBtn.querySelector(".btn-text").style.display = "inline";
        submitBtn.querySelector(".btn-premium-send-icon").style.display = "inline";
        submitBtn.querySelector(".btn-loading-spinner").style.display = "none";

        if (response.ok) {
          feedbackMsg.textContent = "Your secure message has been delivered successfully via Formspree!";
          feedbackMsg.className = "form-feedback success";
          
          SoundEngine.playCelebration();
          confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
          
          contactForm.reset();
          charCountLabel.textContent = "0";
        } else {
          feedbackMsg.textContent = "Delivery error. Please try sending again later.";
          feedbackMsg.className = "form-feedback error";
        }
      }).catch(() => {
        submitBtn.querySelector(".btn-text").style.display = "inline";
        submitBtn.querySelector(".btn-premium-send-icon").style.display = "inline";
        submitBtn.querySelector(".btn-loading-spinner").style.display = "none";
        
        feedbackMsg.textContent = "Network error. Please try sending again later.";
        feedbackMsg.className = "form-feedback error";
      });
    });
  }


  // 15. 3D TILT EFFECT FOR PREMIUM CARDS
  function apply3DTiltMechanics() {
    document.querySelectorAll(".tilt-card").forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const bounds = card.getBoundingClientRect();
        const mouseXInCard = e.clientX - bounds.left;
        const mouseYInCard = e.clientY - bounds.top;
        
        const rX = ((mouseYInCard / bounds.height) - 0.5) * -12;
        const rY = ((mouseXInCard / bounds.width) - 0.5) * 12;
        
        card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
    });
  }


  // 16. PROGRESS BACK TO TOP LOGIC
  const backToTopBtn = document.getElementById("back-to-top");
  const ringFill = document.getElementById("scroll-progress-ring");

  // Sync scroll indicator directly via Lenis scroller
  lenis.on('scroll', (e) => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = window.scrollY / totalScroll;
    
    const offset = 113.1 - (progress * 113.1);
    if(ringFill) ringFill.style.strokeDashoffset = offset;

    // Track scroll active dots updates on scroll
    const secs = document.querySelectorAll("section");
    let currentActive = "hero";
    secs.forEach(sec => {
      const top = sec.offsetTop - 300;
      if (window.scrollY >= top) {
        currentActive = sec.getAttribute("id");
      }
    });
    
    document.querySelectorAll(".side-dot").forEach(dot => {
      if (dot.getAttribute("data-sec") === currentActive) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  });

  if(backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      lenis.scrollTo(0, { duration: 1.2 });
    });
  }


  // 17. MOBILE NAVIGATION OVERLAY
  const hamburger = document.getElementById("mobile-menu-toggle");
  const mobileOverlay = document.getElementById("mobile-nav-overlay");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if(hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileOverlay.classList.toggle("open");
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileOverlay.classList.remove("open");
    });
  });


  // 18. AI COMPANION SYSTEM RESPONSE CONTROLS
  const aiBubble = document.getElementById("ai-chat-bubble");
  const aiWindow = document.getElementById("ai-chat-window");
  const aiClose = document.getElementById("ai-chat-close");
  const aiSend = document.getElementById("ai-send-btn");
  const aiInput = document.getElementById("ai-user-input");
  const aiFeed = document.getElementById("ai-chat-messages");

  if(aiBubble) aiBubble.addEventListener("click", () => aiWindow.classList.toggle("open"));
  if(aiClose) aiClose.addEventListener("click", () => aiWindow.classList.remove("open"));

  const dispatchAiResponse = () => {
    const txt = aiInput.value.trim();
    if (!txt) return;

    const userBubble = document.createElement("div");
    userBubble.className = "ai-msg user";
    userBubble.textContent = txt;
    aiFeed.appendChild(userBubble);
    aiInput.value = "";

    setTimeout(() => {
      const botBubble = document.createElement("div");
      botBubble.className = "ai-msg bot";
      
      const norm = txt.toLowerCase();
      if (norm.includes("experience") || norm.includes("years")) {
        botBubble.textContent = "Dharmesh Ahir has 3+ years of professional experience building cross-platform Flutter applications.";
      } else if (norm.includes("skills") || norm.includes("state")) {
        botBubble.textContent = "Dharmesh specializes in GetX, BLoC, Riverpod, RESTful API integrations, WebRTC, and custom layouts.";
      } else {
        botBubble.textContent = "Thank you for inquiring! Dharmesh is available for senior cross-platform engineering contributions.";
      }
      
      aiFeed.appendChild(botBubble);
      aiFeed.scrollTop = aiFeed.scrollHeight;
    }, 450);
  };

  if(aiSend) aiSend.addEventListener("click", dispatchAiResponse);
  if(aiInput) aiInput.addEventListener("keydown", (e) => { if (e.key === "Enter") dispatchAiResponse(); });


  // 19. THREE.JS SYSTEM BACKGROUND PARTICLES (Static Ambient canvas)
  let scene, camera, renderer, starGeo, stars;
  const starsCount = 600;

  function initThreeParticles() {
    const container = document.getElementById("three-canvas-container");
    if (!container) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = Math.random() * 600 - 300;
      positions[i * 3 + 1] = Math.random() * 600 - 300;
      positions[i * 3 + 2] = Math.random() * 600 - 300;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const starMaterial = new THREE.PointsMaterial({
      color: 0x888888,
      size: 1.2,
      transparent: true,
      opacity: 0.8
    });

    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    animateAmbientParticles();
  }

  function animateAmbientParticles() {
    requestAnimationFrame(animateAmbientParticles);
    stars.rotation.y += 0.0008;
    renderer.render(scene, camera);
  }

  initThreeParticles();


  // 20. SCROLL REVEAL STAGGER ANIMATIONS
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".scroll-reveal").forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 30 }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  });


  // 21. PRINT-READY STRUCTURAL CV GENERATOR & DOWNLOAD
  const cvDownloadBtn = document.getElementById("cv-download-btn");
  if (cvDownloadBtn) {
    cvDownloadBtn.addEventListener("click", () => {
      // Direct high-quality printing via temporary structured frame
      const printWindow = window.open("", "_blank");
      const cvMarkup = `
        <html>
        <head>
          <title>Dharmesh Ahir - Flutter Engineer CV</title>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; color: #333; line-height: 1.6; }
            h1 { margin-bottom: 5px; color: #0c2340; }
            h2 { border-bottom: 2px solid #0c2340; padding-bottom: 5px; margin-top: 30px; color: #0d2644; }
            .meta { color: #555; margin-bottom: 20px; font-weight: 500; }
            .item { margin-bottom: 20px; }
            .item h3 { margin: 0 0 5px 0; color: #111; }
            .item .sub { color: #777; font-size: 0.9rem; margin-bottom: 8px; }
            ul { padding-left: 20px; margin: 5px 0; }
          </style>
        </head>
        <body>
          <h1>DHARMESH AHIR</h1>
          <div class="meta">Surat, Gujarat, India | katariyadharmesh658@gmail.com | +91 6354464371</div>
          
          <h2>Professional Summary</h2>
          <p>Senior Flutter Developer with 3+ years of experience building robust, pixel-perfect, and high-performance cross-platform applications. Specializing in state management architectures, clean layout transitions, and optimized WebRTC structures.</p>
          
          <h2>Experience</h2>
          <div class="item">
            <h3>Senior Flutter Engineer</h3>
            <div class="sub">HelixCare Platform | 2024 - Present</div>
            <ul>
              <li>Directed end-to-end multi-platform application execution.</li>
              <li>Engineered zero-latency WebRTC telemedicine consult video platforms.</li>
              <li>Integrated customized split billing schemas, dynamic lookup tables, and RBAC matrix.</li>
            </ul>
          </div>
          <div class="item">
            <h3>Flutter Mobile Developer</h3>
            <div class="sub">Local Teams / Projects | 2022 - 2024</div>
            <ul>
              <li>Published 3+ flagship cross-platform applications to Google Play Store & Apple App Store.</li>
              <li>Architected offline-first database systems and customized localized engines.</li>
            </ul>
          </div>
          
          <h2>Technical Expertise</h2>
          <p><strong>Frameworks:</strong> Flutter SDK, Android Native, iOS Swift (Bridge)</p>
          <p><strong>Languages:</strong> Dart, JavaScript, Java, Swift, Kotlin</p>
          <p><strong>State Management:</strong> GetX, BLoC, Provider, Riverpod</p>
          <p><strong>Databases:</strong> SQLite, Firebase Firestore, Hive, Realm</p>
          
          <script>window.onload = function() { window.print(); window.close(); }</script>
        </body>
        </html>
      `;
      printWindow.document.write(cvMarkup);
      printWindow.document.close();

      SoundEngine.playCelebration();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    });
  }


  // 22. NEWSLETTER SUBSCRIPTION CONTROLS
  const newsletterBtn = document.getElementById("newsletter-btn");
  const newsletterEmail = document.getElementById("newsletter-email");

  if (newsletterBtn && newsletterEmail) {
    newsletterBtn.addEventListener("click", () => {
      const email = newsletterEmail.value.trim();
      if (!email || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
      }
      newsletterBtn.textContent = "Subscribing...";
      setTimeout(() => {
        newsletterBtn.textContent = "Subscribed! ✓";
        newsletterEmail.value = "";
        setTimeout(() => {
          newsletterBtn.textContent = "Subscribe";
        }, 3000);
        SoundEngine.playClick();
      }, 1000);
    });
  }

  // 23. MOBILE NAVIGATION LINK INTERCEPTS
  const mobileNavLinksFixed = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinksFixed.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          lenis.scrollTo(targetElement, { duration: 1.2 });
        }
      }
    });
  });

  // 24. SIDE INDICATOR PIN-POINT ROUTINES
  const sideDots = document.querySelectorAll(".side-dot");
  sideDots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = dot.getAttribute("data-sec");
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          lenis.scrollTo(targetElement, { duration: 1.2 });
        }
      }
    });
  });

  // 25. FILTER UNDERLINE PINNING
  if (filterButtons.length > 0 && activeIndicator) {
    const activeBtn = document.querySelector(".filter-tab-btn.active");
    if (activeBtn) {
      positionFilterUnderline(activeBtn);
    }
    window.addEventListener("resize", () => {
      const currentActive = document.querySelector(".filter-tab-btn.active");
      if (currentActive) {
        positionFilterUnderline(currentActive);
      }
    });
  }

  // 26. PORTFOLIO LAYOUT CONFIG SYNC
  const savedLayout = localStorage.getItem("dh-portfolio-layout") || "grid";
  document.querySelectorAll(".layout-btn").forEach(btn => {
    if (btn.getAttribute("data-layout-val") === savedLayout) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  activeLayout = savedLayout;

  document.querySelectorAll(".layout-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const newLayout = btn.getAttribute("data-layout-val");
      localStorage.setItem("dh-portfolio-layout", newLayout);
    });
  });


  // 27. PREMIUM TESTIMONIALS SLIDER INSTANCE
  function initTestimonialsSlider() {
    const track = document.getElementById("testimonials-track");
    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".testimonial-dot");
    let currentSlideIndex = 0;

    if (!track || slides.length === 0) return;

    const transitionToSlide = (index) => {
      currentSlideIndex = index;
      
      // Calculate translateX offset based on the scale of slides
      track.style.transform = `translateX(-${index * 50}%)`;
      
      slides.forEach((slide, idx) => {
        if (idx === index) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });

      dots.forEach((dot, idx) => {
        if (idx === index) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    };

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.getAttribute("data-index"));
        transitionToSlide(index);
      });
    });

    // Auto rotater loop
    setInterval(() => {
      let nextIndex = (currentSlideIndex + 1) % slides.length;
      transitionToSlide(nextIndex);
    }, 6000);
  }


  // 28. SCROLL PROGRESS UPDATE CONTROLS
  const progressBar = document.getElementById("scroll-progress-bar");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + "%";
    });
  }

  // 29. HEADER SCROLL INTERCEPTORS
  const siteHeader = document.getElementById("site-header");
  if (siteHeader) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    });
  }

  // 30. CLEAN STYLES INJECTIONS (Typo Free)
  const style = document.createElement('style');
  style.textContent = `
    .theme-ripple-overlay {
      position: fixed;
      width: 30px;
      height: 30px;
      background: var(--accent-color);
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-50%, -50%) scale(0);
      z-index: 9999;
    }
  `;
  document.head.appendChild(style);

});