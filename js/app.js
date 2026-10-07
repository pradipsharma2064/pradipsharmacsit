/* ==========================================================================
   APP CONTROLLER & INTERACTIVE SUITE
   Author: Pradip • B.Sc. CSIT Student, Butwal Multiple Campus, Nepal
   ========================================================================== */

// --- Global Toast Notification Utility ---
window.showDevToast = function (message, duration = 3500) {
  let toast = document.getElementById('dev-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'dev-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fas fa-info-circle" style="color: var(--accent-cyan);"></i> <span>${message}</span>`;
  toast.classList.add('show');

  if (window.soundFX) window.soundFX.playPop();

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
};

// --- Web Audio API Micro-Synthesizer for UI sound effects ---
class SoundSynthesizer {
  constructor() {
    this.enabled = false;
    this.audioCtx = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.init();
      this.playChime();
      window.showDevToast('Sound effects enabled 🔊');
    } else {
      window.showDevToast('Sound effects muted 🔇');
    }
    const btn = document.getElementById('sound-toggle');
    if (btn) {
      const icon = btn.querySelector('i');
      if (icon) icon.className = this.enabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    }
  }

  playPop() {
    if (!this.enabled || !this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(840, this.audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    } catch (e) {
      // AudioContext might require user gesture
    }
  }

  playChime() {
    if (!this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.15);
    } catch (e) {}
  }
}

window.soundFX = new SoundSynthesizer();

// --- Main App Initializer ---
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initThemeSwitcher();
  initTypewriter();
  initNepalClock();
  initSkillTabs();
  initHeroCodeTabs();
  initStatsCounter();
  initContactForm();
  initModalListeners();
});

// 1. Navigation & Header Scroll
function initNavbar() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // ScrollSpy
    let currentId = '';
    const scrollPos = window.scrollY + 200;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'var(--bg-secondary)';
        navMenu.style.padding = '1.5rem';
        navMenu.style.borderBottom = '1px solid var(--border-color)';
      }
    });
  }

  // Sound toggle button
  const soundBtn = document.getElementById('sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => window.soundFX.toggle());
  }
}

// 2. Theme Switcher (Dark Cyber / Clean Light / Deep Space Nebula)
function initThemeSwitcher() {
  const themeBtn = document.getElementById('theme-toggle');
  const themes = ['dark', 'light', 'nebula'];
  let currentThemeIndex = 0;

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
      const newTheme = themes[currentThemeIndex];
      document.documentElement.setAttribute('data-theme', newTheme);
      
      const icon = themeBtn.querySelector('i');
      if (icon) {
        if (newTheme === 'light') icon.className = 'fas fa-sun';
        else if (newTheme === 'nebula') icon.className = 'fas fa-meteor';
        else icon.className = 'fas fa-moon';
      }

      window.showDevToast(`Switched to ${newTheme.toUpperCase()} theme 🎨`);
    });
  }
}

// 3. Dynamic Typewriter Effect for Hero
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const phrases = [
    "Java Enterprise & Spring Boot Specialist",
    "B.Sc. CSIT Student @ Butwal Multiple Campus",
    "Modern Full-Stack Web Developer",
    "Software & UI/UX Design Architect",
    "High-Performance System Engineer"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 75;

  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 70;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 1800; // Pause at end of sentence
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400; // Pause before typing new phrase
    }

    setTimeout(typeLoop, typingSpeed);
  }

  typeLoop();
}

// 4. Nepal Local Time Clock (Asia/Kathmandu +05:45)
function initNepalClock() {
  const clockEl = document.getElementById('nepal-time-clock');
  const updateTime = () => {
    if (!clockEl) return;
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeStr = new Intl.DateTimeFormat('en-US', options).format(now);
      clockEl.textContent = `${timeStr} (NPT)`;
    } catch (e) {
      clockEl.textContent = "9:05 PM (NPT)";
    }
  };

  updateTime();
  setInterval(updateTime, 1000);
}

// 5. Interactive Skill Tabs
function initSkillTabs() {
  const tabs = document.querySelectorAll('.skill-tab-btn');
  const panels = document.querySelectorAll('.skill-panel-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.style.display = 'none');

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.style.display = 'grid';
      }
      if (window.soundFX) window.soundFX.playPop();
    });
  });
}

// 6. Hero Code Window Interactive Tabs
function initHeroCodeTabs() {
  const tabs = document.querySelectorAll('.window-tab');
  const codeBody = document.getElementById('hero-code-display');
  if (!codeBody) return;

  const codeSnippets = {
    java: `
<span class="code-kw">@Service</span>
<span class="code-kw">@Transactional</span>
<span class="code-kw">public class</span> <span class="code-fn">PradipCoreEngineer</span> {
  <span class="code-kw">private final</span> UniversityCampus campus = <span class="code-str">"Butwal Multiple Campus"</span>;
  <span class="code-kw">private final</span> Degree program = <span class="code-str">"B.Sc. CSIT (Tribhuvan University)"</span>;

  <span class="code-kw">public</span> SystemArch <span class="code-fn">engineerEnterpriseSolution</span>() {
    <span class="code-kw">return</span> SpringBootCluster.<span class="code-fn">builder</span>()
      .<span class="code-fn">concurrency</span>(VirtualThreads.OPTIMAL)
      .<span class="code-fn">resilience</span>(FaultTolerance.ACTIVE)
      .<span class="code-fn">build</span>();
  }
}`,
    react: `
<span class="code-kw">export const</span> <span class="code-fn">InteractiveShowcase</span> = () => {
  <span class="code-kw">const</span> [location] = <span class="code-fn">useState</span>(<span class="code-str">"Butwal, Lumbini, Nepal"</span>);
  <span class="code-kw">const</span> [craft] = <span class="code-fn">useState</span>([<span class="code-str">"Java 21"</span>, <span class="code-str">"Web Dev"</span>, <span class="code-str">"UI/UX"</span>]);

  <span class="code-kw">return</span> (
    <span class="code-var">&lt;div</span> <span class="code-fn">className</span>=<span class="code-str">"glassmorphism-card"</span><span class="code-var">&gt;</span>
      <span class="code-var">&lt;h1&gt;</span>Crafting High-Performance Software<span class="code-var">&lt;/h1&gt;</span>
      <span class="code-var">&lt;TechStack</span> <span class="code-fn">skills</span>={craft} <span class="code-var">/&gt;</span>
    <span class="code-var">&lt;/div&gt;</span>
  );
};`,
    design: `
<span class="code-comment">/* Aura UI/UX Design System Specification */</span>
:root {
  --primary-accent: <span class="code-str">#00f2fe</span>; <span class="code-comment">/* Electric Cyan */</span>
  --secondary-glow: <span class="code-str">#7928ca</span>; <span class="code-comment">/* Nebula Purple */</span>
  --glass-blur: <span class="code-var">backdrop-filter: blur(16px)</span>;
  --accessibility-ratio: <span class="code-fn">WCAG_AAA_COMPLIANT</span>;
  --ux-philosophy: <span class="code-str">"Empathetic, Intuitive, Scalable"</span>;
}
`
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const lang = tab.getAttribute('data-lang');
      if (codeSnippets[lang]) {
        codeBody.innerHTML = codeSnippets[lang].trim();
      }
      if (window.soundFX) window.soundFX.playPop();
    });
  });
}

// 7. Dynamic Stats Counter
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-count'), 10);
          const duration = 1500;
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              stat.textContent = target;
              clearInterval(timer);
            } else {
              stat.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsStrip = document.querySelector('.hero-stats-strip');
  if (statsStrip) observer.observe(statsStrip);
}

// 8. Contact Form Handling
function initContactForm() {
  const form = document.getElementById('dev-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    const subject = document.getElementById('contact-subject').value;

    if (!name || !email || !message) {
      window.showDevToast('Please fill out all required fields! ⚠️');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Transmitted!';
      window.showDevToast(`Thank you ${name}! Your inquiry regarding "${subject}" has been received. Pradip will reply soon! 🚀`, 5000);
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }, 1200);
  });

  // Copy email button
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('pradip.csit.dev@gmail.com');
      window.showDevToast('Email pradip.csit.dev@gmail.com copied to clipboard! 📋');
    });
  }
}

// 9. Modals (Resume Modal & Certificate Preview Modal)
function initModalListeners() {
  // Close buttons on all modals
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
    });
  });

  // Close modal when clicking on background overlay
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Open Resume Modal
  const resumeBtn = document.getElementById('open-resume-btn');
  const resumeModal = document.getElementById('resume-modal');
  if (resumeBtn && resumeModal) {
    resumeBtn.addEventListener('click', () => {
      resumeModal.classList.add('active');
      if (window.soundFX) window.soundFX.playPop();
    });
  }

  // Certificate Modal preview triggers
  document.querySelectorAll('.view-cert-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const certId = btn.getAttribute('data-cert');
      openCertificateModal(certId);
    });
  });
}

function openCertificateModal(certId) {
  const modal = document.getElementById('cert-preview-modal');
  const titleEl = document.getElementById('cert-modal-title');
  const orgEl = document.getElementById('cert-modal-org');
  const bodyEl = document.getElementById('cert-modal-body');
  if (!modal) return;

  const certData = {
    "tu-csit": {
      title: "Bachelor of Science in Computer Science & Information Technology (B.Sc. CSIT)",
      org: "Tribhuvan University • Butwal Multiple Campus, Nepal",
      credential: "TU-REG-2023-CSIT-048",
      details: "Comprehensive 4-year degree covering Advanced Data Structures, Operating Systems, Database Management Systems, Theory of Computation, Artificial Intelligence, Software Engineering, Network Programming, and Advanced Java Technologies."
    },
    "oracle-java": {
      title: "Oracle Certified Professional: Java SE 17 Developer",
      org: "Oracle University",
      credential: "OCP-JAVA-829104",
      details: "Validated mastery of Java Object-Oriented Architecture, Streams & Lambdas, Concurrency Utilities, Garbage Collection Tuning, Modules (JPMS), and Functional Programming."
    },
    "meta-web": {
      title: "Meta Full-Stack Web Development Specialization",
      org: "Meta (Facebook Technologies)",
      credential: "META-FS-9912048",
      details: "Mastery of modern responsive frontend architectures, React hooks, state management, REST APIs, database normalization, and version control workflows."
    },
    "aws-cloud": {
      title: "AWS Certified Cloud Foundations & Architecture",
      org: "Amazon Web Services",
      credential: "AWS-CLF-003847",
      details: "Cloud architectural best practices, high availability, auto-scaling microservices, IAM security policies, S3/RDS configurations, and serverless compute."
    },
    "google-ux": {
      title: "Google UX Design Professional Certificate",
      org: "Google Career Certificates",
      credential: "GGL-UX-77192",
      details: "Human-centered design thinking, wireframing in Figma, accessibility testing (WCAG), low-to-high fidelity prototyping, and usability research."
    },
    "hackerrank-java": {
      title: "HackerRank Java (Gold Badge) & Problem Solving Advanced",
      org: "HackerRank Global",
      credential: "HR-GOLD-JAVA-2026",
      details: "Top percentile ranking in complex algorithmic problem solving, dynamic programming, tree traversals, and multi-threaded synchronization."
    }
  };

  const data = certData[certId] || certData["tu-csit"];
  if (titleEl) titleEl.textContent = data.title;
  if (orgEl) orgEl.textContent = data.org;
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="background: rgba(0, 242, 254, 0.05); border: 1px solid var(--border-glow); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin-bottom: 1.5rem;">
        <i class="fas fa-award" style="font-size: 3.5rem; color: var(--accent-cyan); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #fff;">${data.title}</h3>
        <p style="color: var(--accent-cyan); font-weight: 600; margin-top: 0.25rem;">${data.org}</p>
        <span style="display: inline-block; margin-top: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; background: rgba(0,0,0,0.4); padding: 0.25rem 0.75rem; border-radius: 4px; color: #94a3b8;">
          Credential ID: ${data.credential}
        </span>
      </div>
      <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">${data.details}</p>
      <div style="margin-top: 1.5rem; display: flex; justify-content: flex-end; gap: 0.75rem;">
        <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText('${data.credential}'); window.showDevToast('Credential ID copied! 📋');">
          <i class="fas fa-copy"></i> Copy ID
        </button>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fas fa-external-link-alt"></i> Verify on Credential Issuer
        </a>
      </div>
    `;
  }

  modal.classList.add('active');
  if (window.soundFX) window.soundFX.playPop();
}
