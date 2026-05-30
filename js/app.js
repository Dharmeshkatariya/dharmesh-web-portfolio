
document.addEventListener("DOMContentLoaded", () => {

  // 1. PROJECT DATA CATALOG
  const portfolioItems = [
    {
      id: "helix-care",
      category: "web",
      placeholderSeed: "project1",
      title: "Helix Care Platform",
      siteUrl: "https://qa.helixdoc.com",
      tags: ["Flutter Web", "Dart", "Video WebRTC", "Stripe payment", "Role Permissions API"],
      description: "Comprehensive Healthcare Portal with integrated Doctor consult calendars, multi-tier permissions configuration, payment systems, and WebRTC streaming frameworks."
    },
    {
      id: "resido-property",
      category: "web",
      placeholderSeed: "project2",
      title: "Resido Management",
      siteUrl: "https://resido-dev.helixbeat.com",
      tags: ["Flutter Web", "GetX Framework", "API Integration", "UI/UX Optimization"],
      description: "Advanced property administration ecosystem tracking unit, building, and structural data points using automated Lookups and security role matrices."
    },
    {
      id: "mtz-infotech",
      category: "web",
      placeholderSeed: "project3",
      title: "MTZ Corporate Portal",
      siteUrl: "https://mtzinfotech.com/#/",
      tags: ["Flutter Web", "Responsive Architecture", "Custom Animators"],
      description: "Fully responsive multi-platform presentation workspace utilizing responsive grid matrices and transition animations."
    },
    {
      id: "khata-app",
      category: "mobile",
      placeholderSeed: "project4",
      title: "Khata Digital Ledger",
      siteUrl: "https://play.google.com/store/apps/details?id=com.shree.khata",
      tags: ["Flutter Mobile", "Dart", "Localization", "Offline Syncing"],
      description: "Bilingual payment ledger supporting offline tracking modes and secure database restoration pipelines."
    },
    {
      id: "dhasa-patel",
      category: "mobile",
      placeholderSeed: "project5",
      title: "Samaj Social Hub",
      siteUrl: "https://play.google.com/store/apps/details?id=com.dhasagam.patelsamaj",
      tags: ["Flutter Mobile", "Firebase backend", "Custom directories"],
      description: "Community engagement directory compiling indices of verified records with automated real-time alerts."
    },
    {
      id: "vision-news",
      category: "mobile",
      placeholderSeed: "project6",
      title: "Vision Media Portal",
      siteUrl: "https://play.google.com/store/apps/details?id=tw.com.gvm.dailynews",
      tags: ["Flutter Mobile", "RESTful parsers", "HTML renderers"],
      description: "Advanced news portal processing real-time publications streams alongside localized bookmark controls."
    },
    {
      id: "roommatik",
      category: "web",
      placeholderSeed: "project7",
      title: "Roommatik Finder",
      siteUrl: "https://roommatik-eae91.web.app",
      tags: ["Flutter Web", "Cloud Hosting", "QR system API"],
      description: "Unified cross-platform listing catalog matching parameters, complete with booking forms and automatic verification systems."
    },
    {
      id: "viosa",
      category: "mobile",
      placeholderSeed: "project8",
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


  // 8. HERO PARTICLES CANVAS
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
        <div class="project-media-wrapper" style="background-image: url('https://picsum.photos/seed/${proj.placeholderSeed}/600/400')">
          <div class="project-overlay">
            <button class="btn-icon view-details-trigger magnetic" data-id="${proj.id}">
              <i data-lucide="eye"></i>
            </button>
          </div>
        </div>
        <div class="project-info">
          <span class="proj-badge">${proj.category.toUpperCase()}</span>
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
          <button class="btn-primary-modal view-details-trigger" style="margin-top:16px;" data-id="${proj.id}">View Project Specs</button>
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


  // 14. SECURE CONTACT VERIFICATION
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("form-submit-btn");
  const charCountLabel = document.getElementById("char-count");
  const feedbackMsg = document.getElementById("form-feedback");
  const messageArea = document.getElementById("message");

  messageArea.addEventListener("input", () => {
    charCountLabel.textContent = messageArea.value.length;
  });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    feedbackMsg.textContent = "";
    
    let invalid = false;
    document.querySelectorAll("#contact-form .premium-input-field").forEach(input => {
      if (!input.value.trim()) {
        invalid = true;
        input.parentElement.classList.add("shake-error");
        setTimeout(() => input.parentElement.classList.remove("shake-error"), 400);
      }
    });

    if (invalid) return;

    submitBtn.querySelector(".btn-text").style.display = "none";
    submitBtn.querySelector(".btn-premium-send-icon").style.display = "none";
    submitBtn.querySelector(".btn-loading-spinner").style.display = "inline-block";

    setTimeout(() => {
      submitBtn.querySelector(".btn-text").style.display = "inline";
      submitBtn.querySelector(".btn-premium-send-icon").style.display = "inline";
      submitBtn.querySelector(".btn-loading-spinner").style.display = "none";

      feedbackMsg.textContent = "Your secure message has been delivered successfully!";
      feedbackMsg.className = "form-feedback success";
      
      SoundEngine.playCelebration();
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
      
      contactForm.reset();
      charCountLabel.textContent = "0";
    }, 1500);
  });


  // 15. 3D TILT EFFECT
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

  lenis.on('scroll', (e) => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = window.scrollY / totalScroll;
    
    const offset = 113.1 - (progress * 113.1);
    ringFill.style.strokeDashoffset = offset;

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

  backToTopBtn.addEventListener("click", () => {
    lenis.scrollTo(0, { duration: 1.2 });
  });


  // 17. MOBILE NAVIGATION OVERLAY
  const hamburger = document.getElementById("mobile-menu-toggle");
  const mobileOverlay = document.getElementById("mobile-nav-overlay");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileOverlay.classList.toggle("open");
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileOverlay.classList.remove("open");
    });
  });


  // 18. AI COMPANION SYSTEM
  const aiBubble = document.getElementById("ai-chat-bubble");
  const aiWindow = document.getElementById("ai-chat-window");
  const aiClose = document.getElementById("ai-chat-close");
  const aiSend = document.getElementById("ai-send-btn");
  const aiInput = document.getElementById("ai-user-input");
  const aiFeed = document.getElementById("ai-chat-messages");

  aiBubble.addEventListener("click", () => aiWindow.classList.toggle("open"));
  aiClose.addEventListener("click", () => aiWindow.classList.remove("open"));

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

  aiSend.addEventListener("click", dispatchAiResponse);
  aiInput.addEventListener("keydown", (e) => { if (e.key === "Enter") dispatchAiResponse(); });


  // 19. THREE.JS BACKGROUND PARTICLES
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

  // 21. CV DOWNLOAD FUNCTIONALITY
  const cvDownloadBtn = document.getElementById("cv-download-btn");
  if (cvDownloadBtn) {
    cvDownloadBtn.addEventListener("click", () => {
      const cvContent = `
        DHARMESH AHIR - SENIOR FLUTTER DEVELOPER
        =========================================
        
        CONTACT
        -------
        Email: katariyadharmesh658@gmail.com
        Phone: +91 6354464371
        Location: Surat, Gujarat, India
        
        PROFESSIONAL SUMMARY
        --------------------
        Senior Flutter Developer with 3+ years of experience building robust, 
        pixel-perfect, and high-performance cross-platform applications. 
        Specializing in state management architectures, clean layout transitions, 
        and fluid UI experiences.
        
        WORK EXPERIENCE
        ---------------
        Senior Flutter Engineer (2024 - Present)
        • Directing end-to-end multi-platform application execution
        • Crafting secure WebRTC video structures and role-based controls
        • Implementing payment models and complex client structures
        
        Flutter Developer (2022 - 2024)
        • Developed and scaled cross-platform mobile apps
        • Configured reliable data synchronization mechanisms
        • Built offline-first database systems and localized multi-language apps
        
        TECHNICAL SKILLS
        ----------------
        • Flutter & Dart Architecture - 95%
        • State Management (GetX / BLoC / Riverpod) - 90%
        • Firebase Systems & Cloud Integrations - 88%
        • REST & WebSockets Protocols - 85%
        
        TOOLS
        -----
        Android Studio, VS Code, Git, Figma, Postman, CI/CD
        
        PORTFOLIO PROJECTS
        ------------------
        • Helix Care Platform - Healthcare Portal with WebRTC
        • Resido Management - Property administration ecosystem
        • Khata Digital Ledger - Bilingual payment ledger system
        • Viosa AI Prep Platform - Interview practice platform
      `;
      
      const blob = new Blob([cvContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Dharmesh_Ahir_Flutter_CV.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      SoundEngine.playCelebration();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    });
  }

  // 22. NEWSLETTER SUBSCRIBE FUNCTIONALITY
  const newsletterBtn = document.getElementById("newsletter-btn");
  const newsletterEmail = document.getElementById("newsletter-email");

  if (newsletterBtn && newsletterEmail) {
    newsletterBtn.addEventListener("click", () => {
      const email = newsletterEmail.value.trim();
      if (!email || !email.includes("@")) {
        const feedback = document.createElement("div");
        feedback.textContent = "Please enter a valid email address";
        feedback.style.color = "#ff3366";
        feedback.style.fontSize = "0.8rem";
        feedback.style.marginTop = "8px";
        newsletterEmail.parentElement.appendChild(feedback);
        setTimeout(() => feedback.remove(), 3000);
        return;
      }
      
      newsletterBtn.textContent = "Subscribing...";
      newsletterBtn.disabled = true;
      
      setTimeout(() => {
        newsletterBtn.textContent = "Subscribed! ✓";
        newsletterEmail.value = "";
        
        setTimeout(() => {
          newsletterBtn.textContent = "Subscribe";
          newsletterBtn.disabled = false;
        }, 2000);
        
        SoundEngine.playClick();
        
        const successMsg = document.createElement("div");
        successMsg.textContent = "Thanks for subscribing! You'll receive updates soon.";
        successMsg.style.color = "#00ff00";
        successMsg.style.fontSize = "0.8rem";
        successMsg.style.marginTop = "8px";
        newsletterEmail.parentElement.appendChild(successMsg);
        setTimeout(() => successMsg.remove(), 4000);
      }, 1000);
    });
  }

  // 23. FIX HAMBURGER CLOSE ON NAVIGATION
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
      hamburger.classList.remove("active");
      mobileOverlay.classList.remove("open");
    });
  });

  // 24. FIX SIDE NAVIGATION DOTS CLICK
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

  // 25. FIX FILTER UNDERLINE INITIAL POSITION
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

  // 26. FIX PORTFOLIO LAYOUT BUTTONS INITIAL STATE
  const layoutBtns = document.querySelectorAll(".layout-btn");
  const savedLayout = localStorage.getItem("dh-portfolio-layout") || "grid";
  layoutBtns.forEach(btn => {
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

  // 27. FIX MODAL BUTTON TEXT
  const modalProjectLink = document.getElementById("modal-project-link");
  if (modalProjectLink) {
    modalProjectLink.addEventListener("click", (e) => {
      const url = modalProjectLink.getAttribute("href");
      if (!url || url === "#") {
        e.preventDefault();
        const feedback = document.createElement("div");
        feedback.textContent = "Live demo link available upon request";
        feedback.style.color = "var(--text-accent)";
        feedback.style.fontSize = "0.8rem";
        feedback.style.padding = "8px";
        document.querySelector(".modal-action-bar").appendChild(feedback);
        setTimeout(() => feedback.remove(), 3000);
      }
    });
  }

  // 28. ADD SCROLL PROGRESS BAR UPDATE
  const progressBar = document.getElementById("scroll-progress-bar");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + "%";
    });
  }

  // 29. FIX HEADER SCROLL EFFECT
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

  // 30. ADD MISSING THEME RIPPLE STYLE
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
    }l̥l̥
  `;
  document.head.appendChild(style);

});