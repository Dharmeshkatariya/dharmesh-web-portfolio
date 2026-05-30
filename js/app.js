
document.addEventListener("DOMContentLoaded", () => {

  // 1. DATA STORE: 8 REAL WORLD FLUTTER & WEB PORTFOLIO CASES
  const portfolioItems = [
    {
      id: "helix-care",
      category: "web",
      imageClass: "project-image-web-helix",
      title: "Helix Care - Comprehensive Healthcare Platform",
      buttonText: "View Live Site",
      siteUrl: "https://qa.helixdoc.com",
      tags: ["Flutter Web", "Dart", "Responsive Design", "Healthcare", "Telemedicine", "REST API", "Video Calling", "Stripe Integration", "Role-Based Access Control (RBAC)", "State Management"],
      isFeatured: true,
      description: `A full-stack Flutter web application serving as a complete healthcare ecosystem. This platform seamlessly integrates patient management, clinical operations, telemedicine, and billing into a single, responsive experience. It supports the entire workflow from patient registration and appointment scheduling to secure video consultations and complex billing management.

MODULES DEVELOPED:

User Management
Implemented secure, token-based password reset functionality via email.
Built a comprehensive admin panel for user activity monitoring and management.
Developed user profile management with photo upload and personal information editing.
Designed a robust role-based access control (RBAC) system with configurable permissions.
Created detailed user forms supporting name, gender, policy selection, and group assignment.
Implemented a full user list with admin capabilities for role changes, password resets, and status management.
Added user status management for locked accounts, pending invitations, and activations.

Health Center & Customer Management
Developed comprehensive customer profiles with full health history tracking.
Built a customer registration and editing system with full validation.
Implemented advanced search by customer name, health center, and location.
Created a system for allocating customers and practices across different health centers.
Implemented financial detail management with complete transaction history.
Built a working hours configuration system with time slot management.
Developed location-based filtering, reporting, and holiday management.
Designed a dynamic UI for adding and editing health center details, financials, and operational info.
Built a location hierarchy managing relationships between main centers and branches.

Role & Permission System
Created a dynamic sidebar navigation that updates based on user roles and permissions.
Built a comprehensive permission system to control module access across the entire application.
Implemented an admin interface for creating roles and assigning specific permissions.
Designed role categories and groups with tab-based list views, pagination, and search.
Developed four-level permission types (View, Create, Update, Delete) for all modules.
Ensured role permissions directly control UI element visibility and user accessibility.

Appointment Management
Developed real-time appointment booking with live doctor availability checks.
Built calendar synchronization across web and mobile platforms.
Implemented insurance verification and selection during the booking process.
Created a time slot selection system based on configurable doctor availability.
Built a comprehensive appointment list with advanced filtering and sorting by date, doctor, and status.
Implemented full status tracking (scheduled, confirmed, completed, cancelled, no-show).
Developed rescheduling and cancellation features with approval workflows.
Added calendar views and list views for complete appointment management.

Billing & Payments
Built support for multiple payment methods including bank transfer, cards, and digital wallets.
Developed payment gateway integration for secure transaction processing.
Implemented a split payment functionality allowing multiple payment methods per bill.
Created a wallet system with balance tracking, top-ups, and transaction history for patients and providers.
Built a secure bank account registration and credit card storage system with encryption.
Developed a comprehensive billing history with advanced search, filtering, and multi-status tracking.
Implemented a responsive billing dashboard with detailed bill views and bookmarkable UI states.

Patient Chart Management
Built a comprehensive patient chart system for complete medical records management.
Created a patient list view with advanced pagination, search, and multi-user selection.
Implemented detailed patient profile views with full medical history.
Developed multi-format export functionality (PDF, XML, HTML) and print support.

Policy Management
Built a comprehensive policy creation system with version control and change tracking.
Developed a rich text editor for terms and conditions with full formatting options.
Created policy templates for different services and consent requirements.
Designed a policy list view with advanced filtering by status, date, and type.
Implemented status management and an automated effective dating system for policy versions.

Face Meet Module (Telemedicine)
Built complete meeting lifecycle management (create, join, complete, cancel).
Developed meeting creation with participant management and invitation system.
Implemented meeting status tracking (scheduled, ongoing, completed, cancelled).
Designed an intuitive meeting list view with filters and advanced search.

Video Conference Features
Integrated video meeting functionality using WebRTC technology.
Developed a multi-participant grid layout with active speaker focus and screen sharing.
Implemented host controls for participant management and an interactive whiteboard.
Added in-meeting chat, note-taking, and file sharing capabilities.
Created a responsive meeting interface for web and mobile with recording indicators.`
    },
    {
      id: "resido-property",
      category: "web",
      imageClass: "project-image-web-resido",
      title: "Resido - Property Management Platform",
      buttonText: "View Live Site",
      siteUrl: "https://resido-dev.helixbeat.com",
      tags: ["Flutter Web", "Dart", "State Management", "Responsive Design", "Property Management", "Real Estate", "REST API", "Role-Based Access Control (RBAC)", "Form Validation"],
      isFeatured: true,
      description: `Resido is a comprehensive property management application designed to streamline operations for landlords and property managers. It provides a centralized system to manage properties, tenants, locations, and user roles, all through an intuitive and responsive web interface.

PROPERTY MANAGEMENT MODULE

Property Management
Developed a complete property listing system with advanced search and pagination.
Created dynamic add and edit property forms with auto-population and robust validation.
Built an action-oriented interface for each property (view, edit, delete).
Implemented customer-specific property assignment and management.

Location & Building Management
Designed a system to add and manage locations under properties with full detail tracking.
Created filtered and sorted list views for all locations.
Developed a building management system to add structures under specific locations.
Built hierarchical navigation: Property → Location → Building → Floor → Unit.

Floor & Unit Management
Built a detailed floor management system organized under buildings.
Developed unit creation, listing, and management within specific floors.
Implemented auto-population of data across forms for efficient data entry and updates.

DATA & USER MANAGEMENT

Centralized Data Management
Developed a centralized lookup system for all application data types.
Managed appointment statuses (Scheduled, Completed, Cancelled, No-Show).
Implemented reason status management for cancellations and changes.
Created a version control and dependency management system for critical lookup data.

User Management
Implemented a secure, token-based password reset system via email.
Built a comprehensive admin panel for user activity monitoring and management.
Created user profile management with photo upload and personal data editing.
Designed a detailed role-based user creation system with configurable permissions.
Managed user statuses: active, inactive, locked, and pending invitations.

Role & Permission System
Created a dynamic sidebar that updates automatically based on user roles and permissions.
Built a comprehensive permission system to control module access across the entire application.
Implemented an admin interface for creating roles and assigning granular permissions.
Designed four-level permission types (View, Create, Update, Delete) for all modules.
Ensured role permissions directly control UI element visibility and user accessibility.

TECHNICAL IMPLEMENTATION & FEATURES

App Structure
Utilized clean, feature-specific Dart screens for the UI.
Managed business logic with GetX controllers for state management and dependencies.
Built a library of reusable custom widgets for a consistent and efficient design.

Key Features
Fully responsive design for mobile and web.
Secure authentication with login and password recovery.
Comprehensive dashboard with a quick overview of properties and metrics.
Strict role-based access control (RBAC) for security.
Intuitive and easy navigation between complex features.

This project demonstrates my ability to architect and build complete, scalable business applications with a clean architecture, robust security, and a user-centric design for the real estate industry.`
    },
    {
      id: "mtz-infotech",
      category: "web",
      imageClass: "project-image-web-mtz",
      title: "MTZ Infotech - Corporate Website",
      buttonText: "View Live Site",
      siteUrl: "https://mtzinfotech.com/#/",
      tags: ["Flutter", "Web", "Responsive", "UI/UX"],
      isFeatured: true,
      description: `Designed and developed a modern, responsive portfolio website for MTZ Infotech showcasing company services and projects.

• Fully responsive design optimized for all devices
• Built with Flutter for cross-platform consistency
• Adaptive layout techniques and flexible design principles
• Professional UI/UX with smooth animations and transitions`
    },
    {
      id: "khata-app",
      category: "mobile",
      imageClass: "project-image-mobile-khata",
      title: "Khata App",
      buttonText: "Play Store",
      siteUrl: "https://play.google.com/store/apps/details?id=com.shree.khata",
      tags: ["Flutter", "Android", "iOS", "Dart", "Localization", "Role-Based Access", "Multi-User", "REST API"],
      isFeatured: false,
      description: `Dual Platform Application: A single codebase for both Android and iOS.
Multi-Language Support: Full localization for English, Hindi, and Punjabi.
Role-Based Access Control: Secure login with distinct permissions for Admin and Employee users.
Mobile-First Authentication: User registration and login using a mobile number.
Multi-User Management: Admins can add, edit, and manage multiple employees under one account.
Comprehensive Product Catalog: Features to add, edit, and view a list of all products.
Digital Ledger Management: Core functionality to record and track all Udhar/Jama (debit/credit) transactions.
Advanced Data Filtering:
Auto-Population of Data: Streamlined editing where forms are automatically filled with existing data for quick updates.
User-Friendly UI/UX: A clean, intuitive, and responsive design for easy navigation and use.Help & Support System: Integrated Help, Contact Us, and Employee Details pages.`
    },
    {
      id: "dhasa-patel",
      category: "mobile",
      imageClass: "project-image-mobile-patel",
      title: "Dhasa Patel Samaj - Community App",
      buttonText: "Download App",
      siteUrl: "https://play.google.com/store/apps/details?id=com.dhasagam.patelsamaj&pli=1",
      tags: ["Flutter", "Dart", "Firebase", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "Community App", "Social Network"],
      isFeatured: true,
      description: `Developed a dedicated community application for the members of Dhasa Village to connect, share information, and access important resources. The app serves as a digital hub for community engagement and information sharing.

Cross-Platform Development: Built a fully functional application for both Android and iOS using a single Flutter codebase.
Member Directory: Built complete member indexes.
Personalized News Feed: Developed a secure system where only verified members can receive and view important community news and announcements (both good and bad news).
Business Directory: Built a feature allowing members to add and showcase their businesses, creating a community-wide business directory.
User Profiles & Management: Custom profiling support.
Categorization System: Implemented user categorization (e.g., Business, Student, Family) for better organization and searchability.
Dashboard & Banner Management: Created an admin dashboard for managing content, including updating promotional banners and featured information.

Technologies Used: Flutter, Dart, Firebase (Authentication, Firestore, Storage)`
    },
    {
      id: "vision-news",
      category: "mobile",
      imageClass: "project-image-mobile-news",
      title: "Vision Magazine - News Platform",
      buttonText: "View App",
      siteUrl: "https://play.google.com/store/apps/details?id=tw.com.gvm.dailynews",
      tags: ["Flutter", "Dart", "REST API", "API Integration", "Pagination", "Localization", "HTML Rendering", "News App"],
      isFeatured: true,
      description: `Key Features & Responsibilities:

Cross-Platform Development: Built a high-performance news application using Flutter and Dart.
REST API Integration: Seamlessly integrated with a RESTful API to fetch and display real-time news data from various international sources (e.g., New York Times, Fortune, Bloomberg).
Dual View Modes: Implemented multiple viewing experiences for users:
Page View: For a magazine-like reading experience.
List View: For quickly scanning headlines.
Advanced Pagination: Efficiently managed large datasets with pagination for smooth scrolling and optimized performance.
Robust Search Functionality: Developed a comprehensive search feature allowing users to find specific news articles across the entire catalog.
Content Rendering: Engineered a system to fetch, parse, and cleanly display HTML content within the app's mobile UI, ensuring articles render correctly.
Social Sharing & Localization: Enabled easy sharing of articles and implemented localization features to cater to a wider audience.
News Feed Management: Created a personalized and curated news feed to showcase top stories and latest updates.

Technologies Used: Flutter, Dart, REST API, HTML Rendering, Pagination, Localization`
    },
    {
      id: "roommatik",
      category: "web",
      imageClass: "project-image-web-roommatik",
      title: "Roommatik - Roommate Finder",
      buttonText: "Visit Website",
      siteUrl: "https://roommatik-eae91.web.app",
      tags: ["Flutter", "Dart", "Cross-Platform", "Firebase Hosting", "REST API", "Biometric Auth", "QR Code", "Booking Platform"],
      isFeatured: false,
      description: `Designed and developed a comprehensive Flutter-based application and website for Roommatik, facilitating modern room management, selection, and booking. The platform provides a seamless user experience across mobile and web with advanced authentication and filtering capabilities.

Key Features & Responsibilities:

Cross-Platform Development: Built a single codebase application compatible with Android, iOS, and Web using Flutter and Dart.
Backend Integration & Hosting: Built scalable server communication architectures.
QR Code Integration: Incorporated QR code functionality for features like quick room access or information sharing.
Adaptive UI/UX: Applied flexible design principles and adaptive layout techniques to guarantee a consistent and user-friendly experience across all platforms and screen sizes.

Technologies Used: Flutter, Dart, REST API, Firebase Hosting, QR Code Integration, Biometric Authentication`
    },
    {
      id: "viosa",
      category: "mobile",
      imageClass: "project-image-mobile-viosa",
      title: "Viosa - AI Learning Platform",
      buttonText: "Learn More",
      siteUrl: "https://play.google.com/store/apps/details?id=com.viosa.app",
      tags: ["Flutter", "Dart", "Mobile App", "Cross-Platform", "AI Integration", "REST API", "State Management", "Mock Interview"],
      isFeatured: false,
      description: `• Developed a comprehensive Flutter-based application designed to revolutionize career development by leveraging Artificial Intelligence for resume building, personalized learning, and interview preparation.
• AI Mock Interviews: Built an interactive module that uses AI to conduct practice interviews, providing users with feedback and insights.
• User Profile Management: Created a complete user profile system where users can view and edit their personal information and preferences.
• Career Guidance: Integrated AI-driven tools to offer personalized career insights and guidance based on user profiles and goals.

Technologies Used:
• Flutter & Dart: For building a high-performance, cross-platform mobile application.
• REST API: For all communication with the backend server, AI models, and cloud services.
• WebView Plugin: To integrate and display external web-based content (like the resume builder) seamlessly within the app.
• PDF Downloading: Implemented functionality to save and download files locally to the user's device.`
    }
  ];

  // 2. AUDIO SYNTH MODULE
  const SoundEngine = {
    ctx: null,
    muted: true,

    init() {
      if (!this.ctx) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
    },

    playUiClick() {
      if (this.muted) return;
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(550, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.1);
      
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    },

    playUiHover() {
      if (this.muted) return;
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(750, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(950, this.ctx.currentTime + 0.05);
      
      gain.gain.setValueAtTime(0.012, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    },

    playCelebration() {
      if (this.muted) return;
      this.init();
      const now = this.ctx.currentTime;
      
      const playTone = (pitch, delay, duration) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(pitch, now + delay);
        gain.gain.setValueAtTime(0.06, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + duration);
      };

      playTone(523.25, 0, 0.15);     
      playTone(659.25, 0.08, 0.15);  
      playTone(783.99, 0.16, 0.15);  
      playTone(1046.50, 0.24, 0.3);  
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
      SoundEngine.playUiClick();
    }
    lucide.createIcons();
  });


  // 3. SMOOTH CUSTOM CURSOR
  const cursor = document.getElementById("custom-cursor");
  const follower = document.getElementById("cursor-follower");
  let cursorX = 0, cursorY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener("mousemove", (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    cursor.style.transform = `translate3d(${cursorX - 4}px, ${cursorY - 4}px, 0)`;
  });

  function renderCursorFollower() {
    followerX += (cursorX - followerX - 18) * 0.15;
    followerY += (cursorY - followerY - 18) * 0.15;
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    requestAnimationFrame(renderCursorFollower);
  }
  renderCursorFollower();

  const bindInteractiveElements = () => {
    const interactables = document.querySelectorAll(".magnetic, a, button, .service-card, .project-card, .premium-input-field, .split-row");
    interactables.forEach(el => {
      el.addEventListener("mouseenter", () => {
        SoundEngine.playUiHover();
        gsap.to(follower, { scale: 1.6, borderColor: "var(--text-accent)", duration: 0.25 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(follower, { scale: 1, borderColor: "var(--text-accent)", duration: 0.25 });
      });
      el.addEventListener("click", () => {
        SoundEngine.playUiClick();
      });
    });
  };


  // 4. THREE.JS PARTICLE AMBIENCE
  let scene, camera, renderer, starGeo, stars;
  const particleCount = 1000;

  function initThreeParticles() {
    const container = document.getElementById("three-canvas-container");
    if (!container) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 600 - 300;
      positions[i * 3 + 1] = Math.random() * 600 - 300;
      positions[i * 3 + 2] = Math.random() * 600 - 300;
      velocities.push(Math.random() * 0.18 + 0.04);
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const canvasParticle = document.createElement('canvas');
    canvasParticle.width = 16;
    canvasParticle.height = 16;
    const ctxParticle = canvasParticle.getContext('2d');
    const grad = ctxParticle.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctxParticle.fillStyle = grad;
    ctxParticle.fillRect(0,0,16,16);

    const texture = new THREE.CanvasTexture(canvasParticle);

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.3,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);
    stars.userData = { velocities };

    animateParticles();
  }

  function animateParticles() {
    requestAnimationFrame(animateParticles);

    const positions = stars.geometry.attributes.position.array;
    const velocities = stars.userData.velocities;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 1] -= velocities[i];
      if (positions[i * 3 + 1] < -300) {
        positions[i * 3 + 1] = 300;
      }
    }

    stars.geometry.attributes.position.needsUpdate = true;
    
    const targetRotX = (cursorY / window.innerHeight - 0.5) * 0.08;
    const targetRotY = (cursorX / window.innerWidth - 0.5) * 0.08;
    stars.rotation.x += (targetRotX - stars.rotation.x) * 0.05;
    stars.rotation.y += (targetRotY - stars.rotation.y) * 0.05;

    renderer.render(scene, camera);
  }

  window.addEventListener("resize", () => {
    if (camera && renderer) {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  });


  // 5. PRELOADER ENGINE
  const preloader = document.getElementById("preloader");
  const fill = document.querySelector(".progress-bar-fill");
  
  let percent = 0;
  const loadInterval = setInterval(() => {
    percent += Math.floor(Math.random() * 12) + 6;
    if (percent >= 100) {
      percent = 100;
      clearInterval(loadInterval);
      
      gsap.to(preloader, {
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
        onComplete: () => {
          preloader.style.display = "none";
          initThreeParticles();
          animateSkillFills();
          initTypewriter();
          animateMetricsCountUp();
          renderPortfolio(); 
        }
      });
    }
    fill.style.width = percent + "%";
  }, 40);


  // 6. THEME AND DYNAMIC PALETTES CONFIG
  const bodyEl = document.documentElement;
  const themeDrawer = document.getElementById("theme-drawer");
  const themePanelToggle = document.getElementById("theme-panel-toggle");
  const themeDrawerClose = document.getElementById("theme-drawer-close");
  const themePresetBtns = document.querySelectorAll(".theme-preset-btn");
  const modeToggle = document.getElementById("mode-toggle");

  let currentTheme = localStorage.getItem("dharmesh-theme") || "ocean";
  let currentMode = localStorage.getItem("dharmesh-mode") || "dark";

  const applyTheming = () => {
    bodyEl.setAttribute("data-theme", currentTheme);
    bodyEl.setAttribute("data-mode", currentMode);
    
    themePresetBtns.forEach(btn => {
      if (btn.getAttribute("data-theme-val") === currentTheme) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  };

  applyTheming();

  themePanelToggle.addEventListener("click", () => {
    themeDrawer.classList.toggle("open");
  });
  themeDrawerClose.addEventListener("click", () => {
    themeDrawer.classList.remove("open");
  });

  themePresetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentTheme = btn.getAttribute("data-theme-val");
      localStorage.setItem("dharmesh-theme", currentTheme);
      applyTheming();
    });
  });

  modeToggle.addEventListener("click", () => {
    currentMode = currentMode === "dark" ? "light" : "dark";
    localStorage.setItem("dharmesh-mode", currentMode);
    applyTheming();
  });


  // 7. HERO TYPEWRITER
  const typewriterText = document.getElementById("typewriter");
  const wordsToRotate = [
    "Flutter Developer", 
    "UI/UX Enthusiast", 
    "Mobile App Creator", 
    "Open Source Contributor"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function initTypewriter() {
    if (!typewriterText) return;
    const currentWord = wordsToRotate[wordIndex];
    
    if (isDeleting) {
      typewriterText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % wordsToRotate.length;
      speed = 350;
    }

    setTimeout(initTypewriter, speed);
  }


  // 8. COUNTER METRICS
  function animateMetricsCountUp() {
    const counters = document.querySelectorAll(".count-up");
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / target));
      
      let count = 0;
      const timer = setInterval(() => {
        count += 1;
        counter.textContent = count + "+";
        if (count >= target) {
          counter.textContent = target + "+";
          clearInterval(timer);
        }
      }, stepTime);
    });
  }


  // 9. PROGRESSIVE SKILL BARS
  function animateSkillFills() {
    const fills = document.querySelectorAll(".skill-fill");
    fills.forEach(fill => {
      const targetWidth = fill.getAttribute("data-progress");
      setTimeout(() => {
        fill.style.width = targetWidth;
      }, 200);
    });
  }


  // 10. GSAP SCROLL TRIGGERS
  gsap.registerPlugin(ScrollTrigger);

  const reveals = document.querySelectorAll(".scroll-reveal");
  reveals.forEach(element => {
    gsap.fromTo(element, 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  const header = document.getElementById("site-header");
  const scrollProgressBar = document.getElementById("scroll-progress-bar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    scrollProgressBar.style.width = `${progress}%`;
  });


  // 11. DYNAMIC PORTFOLIO RENDERING SYSTEM WITH 3 UNIQUE TYPE LAYOUTS
  const portfolioGrid = document.getElementById("portfolio-grid");
  const detailModal = document.getElementById("project-detail-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  const modalTitle = document.getElementById("modal-project-title");
  const modalBadge = document.getElementById("modal-project-badge");
  const modalTagsContainer = document.getElementById("modal-project-tags");
  const modalLink = document.getElementById("modal-project-link");
  const modalButtonText = document.getElementById("modal-button-text");
  const modalDesc = document.getElementById("modal-project-description");

  let activeLayout = "grid"; // grid, split, carousel
  let currentFilter = "all";

  // Function to build Layout 1: Grid Cards
  function renderGridLayout(items) {
    portfolioGrid.className = "portfolio-container layout-grid";
    portfolioGrid.innerHTML = "";

    items.forEach(proj => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-category", proj.category);

      const visibleTags = proj.tags.slice(0, 3).map(t => `<span class="proj-badge">${t}</span>`).join(" ");

      card.innerHTML = `
        <div class="project-media-wrapper">
          <div class="mock-screenshot ${proj.imageClass}"></div>
          <div class="project-overlay">
            <div class="project-links">
              <a href="${proj.siteUrl}" target="_blank" rel="noopener noreferrer" class="btn-icon circle magnetic" aria-label="${proj.buttonText}"><i data-lucide="external-link"></i></a>
            </div>
          </div>
        </div>
        <div class="project-info">
          <span class="proj-badge" style="color:var(--text-accent);">${proj.category.toUpperCase()}</span>
          <h3>${proj.title}</h3>
          <p>${proj.description.substring(0, 140)}...</p>
          <div style="margin-top: 12px; display:flex; gap:6px; flex-wrap:wrap;">
            ${visibleTags}
          </div>
          <button class="btn-text-link view-details-trigger" data-id="${proj.id}">
            <span>Read Details & Modules</span> <i data-lucide="arrow-right"></i>
          </button>
        </div>
      `;
      portfolioGrid.appendChild(card);
    });
  }

  // Function to build Layout 2: Interactive Split List
  function renderSplitLayout(items) {
    portfolioGrid.className = "portfolio-container layout-split";
    portfolioGrid.innerHTML = "";

    // Column Left: The detailed Rows
    const leftCol = document.createElement("div");
    leftCol.className = "split-list-column";

    items.forEach(proj => {
      const row = document.createElement("div");
      row.className = "project-card split-row";
      row.setAttribute("data-id", proj.id);
      row.setAttribute("data-category", proj.category);

      const visibleTags = proj.tags.slice(0, 3).map(t => `<span class="proj-badge">${t}</span>`).join(" ");

      row.innerHTML = `
        <span class="proj-badge" style="color:var(--text-accent);">${proj.category.toUpperCase()}</span>
        <h3>${proj.title}</h3>
        <p>${proj.description.substring(0, 110)}...</p>
        <div style="margin-top: 10px; display:flex; gap:6px; flex-wrap:wrap;">
          ${visibleTags}
        </div>
        <button class="btn-text-link view-details-trigger" data-id="${proj.id}">
          <span>Read Details & Modules</span> <i data-lucide="arrow-right"></i>
        </button>
      `;
      leftCol.appendChild(row);
    });

    // Column Right: Direct Absolute High fidelity image panel
    const rightCol = document.createElement("div");
    rightCol.className = "split-preview-panel";
    
    // Default initial image is Helix Care
    const initialScreenClass = items.length > 0 ? items[0].imageClass : "project-image-web-helix";
    rightCol.innerHTML = `
      <div class="split-preview-screen ${initialScreenClass}" id="split-display-screen"></div>
    `;

    portfolioGrid.appendChild(leftCol);
    portfolioGrid.appendChild(rightCol);

    // Attach real-time hover preview switches
    const splitRows = document.querySelectorAll(".split-row");
    const displayScreen = document.getElementById("split-display-screen");

    splitRows.forEach(row => {
      row.addEventListener("mouseenter", () => {
        const id = row.getAttribute("data-id");
        const match = items.find(p => p.id === id);
        if (match && displayScreen) {
          // Clear previous screenshot styles and apply the hovered one
          displayScreen.className = `split-preview-screen ${match.imageClass}`;
        }
      });
    });
  }

  // Function to build Layout 3: Horizontal Carousel
  function renderCarouselLayout(items) {
    portfolioGrid.className = "portfolio-container layout-carousel";
    portfolioGrid.innerHTML = "";

    items.forEach(proj => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-category", proj.category);

      const visibleTags = proj.tags.slice(0, 3).map(t => `<span class="proj-badge">${t}</span>`).join(" ");

      card.innerHTML = `
        <div class="project-media-wrapper">
          <div class="mock-screenshot ${proj.imageClass}"></div>
          <div class="project-overlay">
            <div class="project-links">
              <a href="${proj.siteUrl}" target="_blank" rel="noopener noreferrer" class="btn-icon circle magnetic" aria-label="${proj.buttonText}"><i data-lucide="external-link"></i></a>
            </div>
          </div>
        </div>
        <div class="project-info">
          <span class="proj-badge" style="color:var(--text-accent);">${proj.category.toUpperCase()}</span>
          <h3>${proj.title}</h3>
          <p>${proj.description.substring(0, 130)}...</p>
          <div style="margin-top: 12px; display:flex; gap:6px; flex-wrap:wrap;">
            ${visibleTags}
          </div>
          <button class="btn-text-link view-details-trigger" data-id="${proj.id}">
            <span>Read Details & Modules</span> <i data-lucide="arrow-right"></i>
          </button>
        </div>
      `;
      portfolioGrid.appendChild(card);
    });
  }

  function renderPortfolio() {
    if (!portfolioGrid) return;

    // First filter items based on category tabs
    const filtered = portfolioItems.filter(p => currentFilter === "all" || p.category === currentFilter);

    if (activeLayout === "grid") {
      renderGridLayout(filtered);
    } else if (activeLayout === "split") {
      renderSplitLayout(filtered);
    } else if (activeLayout === "carousel") {
      renderCarouselLayout(filtered);
    }

    lucide.createIcons();
    bindInteractiveElements();
    bindModalEvents();
  }

  // Modal display binding
  function bindModalEvents() {
    const triggers = document.querySelectorAll(".view-details-trigger");
    triggers.forEach(trigger => {
      trigger.addEventListener("click", () => {
        const projId = trigger.getAttribute("data-id");
        const proj = portfolioItems.find(p => p.id === projId);
        
        if (proj) {
          modalTitle.textContent = proj.title;
          modalBadge.textContent = proj.category.toUpperCase();
          modalButtonText.textContent = proj.buttonText;
          modalLink.setAttribute("href", proj.siteUrl);
          modalDesc.textContent = proj.description;

          modalTagsContainer.innerHTML = proj.tags.map(tag => `<span class="modal-tag-badge">${tag}</span>`).join("");

          detailModal.classList.add("open");
          lucide.createIcons();
        }
      });
    });
  }

  // Multi path modal close controls
  const closeModal = () => {
    detailModal.classList.remove("open");
  };

  modalCloseBtn.addEventListener("click", closeModal);

  // Close when clicking outside of the modal panel
  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) {
      closeModal();
    }
  });

  // Close on Escape Key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  // Filter tabs
  const filterBtns = document.querySelectorAll(".filter-tab-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderPortfolio();
    });
  });

  // Layout switcher triggers
  const layoutBtns = document.querySelectorAll(".layout-btn");
  layoutBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      layoutBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeLayout = btn.getAttribute("data-layout-val");
      renderPortfolio();
    });
  });


  // 12. CV DOWNLOAD
  const cvBtn = document.getElementById("cv-download-btn");
  cvBtn.addEventListener("click", () => {
    SoundEngine.playCelebration();

    confetti({
      particleCount: 160,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#00bcd4", "#d4af37", "#4fbc75", "#e040fb"]
    });

    const link = document.createElement("a");
    link.href = "Dharmesh_flutter.pdf";
    link.download = "Dharmesh_flutter.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });


  // 13. AI ASSISTANT
  const aiBubble = document.getElementById("ai-chat-bubble");
  const aiWindow = document.getElementById("ai-chat-window");
  const aiClose = document.getElementById("ai-chat-close");
  const aiSendBtn = document.getElementById("ai-send-btn");
  const aiInput = document.getElementById("ai-user-input");
  const aiMessageFeed = document.getElementById("ai-chat-messages");

  aiBubble.addEventListener("click", () => {
    aiWindow.classList.toggle("open");
  });
  aiClose.addEventListener("click", () => {
    aiWindow.classList.remove("open");
  });

  const appendMessage = (content, sender = "bot") => {
    const msg = document.createElement("div");
    msg.classList.add("ai-msg", sender);
    msg.textContent = content;
    aiMessageFeed.appendChild(msg);
    aiMessageFeed.scrollTop = aiMessageFeed.scrollHeight;
  };

  const processQuery = (query) => {
    const norm = query.toLowerCase();
    if (norm.includes("helix care") || norm.includes("healthcare")) {
      return "Helix Care is a health application with telemedicine features, patient records, payment gateways, and role-based permissions built in Flutter Web.";
    }
    if (norm.includes("resido") || norm.includes("property")) {
      return "Resido is a property management web application designed with GetX for tracking structures, landlords, rooms, and locations.";
    }
    if (norm.includes("experience") || norm.includes("years")) {
      return "Dharmesh Ahir has 3+ years of professional experience deploying cross-platform applications built with Flutter & Dart.";
    }
    if (norm.includes("skills") || norm.includes("state") || norm.includes("technology")) {
      return "Dharmesh specializes in GetX, BLoC, Provider, Riverpod, Firebase, REST APIs, Git, figma, and custom layouts.";
    }
    return "Thank you for asking! Dharmesh specializes in clean system architectures and animations. Feel free to use the contact form to discuss projects!";
  };

  const handleSend = () => {
    const txt = aiInput.value.trim();
    if (!txt) return;

    appendMessage(txt, "user");
    aiInput.value = "";

    setTimeout(() => {
      const response = processQuery(txt);
      appendMessage(response, "bot");
    }, 550);
  };

  aiSendBtn.addEventListener("click", handleSend);
  aiInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSend();
  });


  // 14. MOBILE NAVIGATION
  const hamburger = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });


  // 15. SECURE CONTACT FORM HANDLING
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  const submitBtn = document.getElementById("form-submit-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      
      feedback.textContent = "Your secure message has been received! Dharmesh will get back to you shortly.";
      feedback.className = "form-feedback success";
      form.reset();
    }, 1200);
  });

  const nBtn = document.getElementById("newsletter-btn");
  nBtn.addEventListener("click", () => {
    alert("Thank you for subscribing to Dharmesh's Flutter insights!");
  });


  // 16. MISCELLANEOUS SETUP
  const backToTopBtn = document.getElementById("back-to-top");
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});l̥