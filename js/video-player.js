/* ==========================================================================
   VIDEO VAULT & CUSTOM PLAYER CONTROLLER
   ========================================================================== */

const videoDatabase = [
  {
    id: "vid-1",
    title: "Java Spring Boot Microservices: Production Architecture & Performance Tuning",
    category: "java",
    categoryLabel: "Java Enterprise",
    duration: "18:42",
    views: "14.2K",
    likes: 842,
    date: "Sep 2026",
    thumbnailText: "SPRING BOOT MICROSERVICES",
    accent: "#f89820",
    description: "Deep dive into building fault-tolerant microservices with Java 21, Spring Boot 3, Spring Cloud Gateway, Kafka event streaming, and JVM garbage collector optimization.",
    github: "https://github.com/pradip-csit/spring-microservices-core",
    chapters: [
      { time: "00:00", title: "Overview & Domain Architecture" },
      { time: "03:15", title: "Domain-Driven Design (DDD) Aggregates" },
      { time: "07:30", title: "Kafka Event-Driven Messaging" },
      { time: "12:10", title: "Resilience4j Circuit Breakers" },
      { time: "16:05", title: "JVM Heap Profiling & Benchmarks" }
    ],
    comments: [
      { user: "Aayush Sharma (CSIT Batchmate)", time: "2 days ago", text: "The explanation of Kafka partition rebalancing with Java Spring Boot was crystal clear! Proud to see this from Butwal Multiple Campus." },
      { user: "Sarah Jenkins (Senior Backend Dev)", time: "1 week ago", text: "Great JVM memory tuning insights. Bookmarking this for our engineering team." }
    ]
  },
  {
    id: "vid-2",
    title: "Building HyperStream: Real-time Video Streaming Engine in Java & WebSockets",
    category: "web",
    categoryLabel: "Full-Stack Web",
    duration: "24:15",
    views: "9.8K",
    likes: 610,
    date: "Aug 2026",
    thumbnailText: "VIDEO STREAMING ENGINE",
    accent: "#00f2fe",
    description: "Architecting a low-latency video streaming web platform from scratch. Covering chunked streaming, WebSockets signaling, HLS encoding, and responsive HTML5 canvas player UI.",
    github: "https://github.com/pradip-csit/hyperstream-video-hub",
    chapters: [
      { time: "00:00", title: "System Architecture & Low Latency Specs" },
      { time: "05:10", title: "Java Netty / WebSocket Server" },
      { time: "11:40", title: "Frontend Video Buffer & MediaSource API" },
      { time: "18:20", title: "Live Chat Synchronization" }
    ],
    comments: [
      { user: "Bikash Thapa", time: "3 days ago", text: "This inspired my final year CSIT project topic. Extremely well explained!" }
    ]
  },
  {
    id: "vid-3",
    title: "UI/UX to Production: Designing & Coding Modern Glassmorphic Web Apps",
    category: "design",
    categoryLabel: "UI/UX & Design",
    duration: "15:30",
    views: "18.5K",
    likes: 1240,
    date: "Jul 2026",
    thumbnailText: "UI/UX DESIGN SYSTEM",
    accent: "#ff0080",
    description: "From Figma wireframes to pixel-perfect code. Master human-centered design principles, accessibility (WCAG), micro-interactions, responsive CSS layouts, and dark mode systems.",
    github: "https://github.com/pradip-csit/aura-design-system",
    chapters: [
      { time: "00:00", title: "Figma Design System Tokens" },
      { time: "04:20", title: "CSS Glassmorphism & Backdrop Filters" },
      { time: "09:00", title: "Interactive Micro-animations with CSS/JS" },
      { time: "13:15", title: "Accessibility & Responsive Audit" }
    ],
    comments: [
      { user: "Elena Rostova", time: "5 days ago", text: "The UI design aesthetics are top-tier! Loving the subtle animations." }
    ]
  },
  {
    id: "vid-4",
    title: "Tribhuvan University CSIT Capstone: Smart Campus Automation System",
    category: "csit",
    categoryLabel: "CSIT Projects",
    duration: "21:05",
    views: "8.1K",
    likes: 540,
    date: "Oct 2026",
    thumbnailText: "BUTWAL CAMPUS PORTAL",
    accent: "#10b981",
    description: "Complete presentation and technical demo of the Smart Campus System designed for Butwal Multiple Campus, Tribhuvan University, Nepal. Features attendance tracking, grading portal, and role-based JWT auth.",
    github: "https://github.com/pradip-csit/smart-campus-butwal",
    chapters: [
      { time: "00:00", title: "CSIT Capstone Objective & Problem Statement" },
      { time: "04:45", title: "Role-Based Access Control & Spring Security" },
      { time: "10:15", title: "Database Schema (MySQL/PostgreSQL Normalization)" },
      { time: "16:30", title: "Live Demonstration & Campus Faculty Portal" }
    ],
    comments: [
      { user: "Prof. K. Gautam (Faculty)", time: "Yesterday", text: "Outstanding project presentation for Butwal Multiple Campus! Comprehensive software architecture." }
    ]
  },
  {
    id: "vid-5",
    title: "Java Concurrency Masterclass: Virtual Threads, Mutexes & Thread Pools",
    category: "java",
    categoryLabel: "Java Enterprise",
    duration: "16:48",
    views: "11.3K",
    likes: 720,
    date: "Jun 2026",
    thumbnailText: "JAVA VIRTUAL THREADS",
    accent: "#7928ca",
    description: "Exploring Project Loom in Java 21+. Benchmarking 100,000 concurrent tasks with Virtual Threads versus traditional OS platform threads with memory footprint analysis.",
    github: "https://github.com/pradip-csit/java-concurrency-loom",
    chapters: [
      { time: "00:00", title: "Platform Threads vs Virtual Threads" },
      { time: "05:00", title: "Structured Concurrency Patterns" },
      { time: "11:20", title: "Scattered-Gather Benchmark Simulation" }
    ],
    comments: [
      { user: "David Miller", time: "2 weeks ago", text: "Finally an intuitive explanation of carrier threads and pinning!" }
    ]
  },
  {
    id: "vid-6",
    title: "10-Minute Tech Short: Building an AI Idea Generator with Vanilla JS",
    category: "shorts",
    categoryLabel: "Quick Shorts",
    duration: "09:55",
    views: "22.7K",
    likes: 1890,
    date: "May 2026",
    thumbnailText: "CLIENT-SIDE AI WIDGET",
    accent: "#4facfe",
    description: "Quick architectural walkthrough on building lightweight client-side AI project generators, smart prompt engineering, and reactive code highlighting with zero heavy frameworks.",
    github: "https://github.com/pradip-csit/vanilla-ai-playground",
    chapters: [
      { time: "00:00", title: "UI Architecture & State Model" },
      { time: "03:40", title: "Prompt Engine & Heuristic Matching" },
      { time: "07:15", title: "Dynamic Code Generation & Markdown Parser" }
    ],
    comments: [
      { user: "Pooja Neupane", time: "3 days ago", text: "Short, crisp and extremely informative!" }
    ]
  }
];

class VideoPlayerHub {
  constructor() {
    this.currentVideo = videoDatabase[0];
    this.isPlaying = false;
    this.currentTime = 0;
    this.totalDuration = 1122; // 18m 42s
    this.volume = 0.8;
    this.isMuted = false;
    this.playbackRate = 1.0;
    this.timer = null;

    this.initDOMElements();
    this.renderVideoGrid('all');
    this.setupFeaturedPlayer();
    this.initCanvasVisualizer();
    this.setupEventListeners();
  }

  initDOMElements() {
    this.featuredContainer = document.getElementById('featured-video-container');
    this.canvasPlayer = document.getElementById('featured-video-canvas');
    this.playOverlayBtn = document.getElementById('video-overlay-play');
    this.playToggleBtn = document.getElementById('ctrl-play-btn');
    this.timeDisplay = document.getElementById('ctrl-time-display');
    this.progressBar = document.getElementById('player-progress-bar');
    this.progressFill = document.getElementById('player-progress-fill');
    this.volumeSlider = document.getElementById('player-volume-slider');
    this.volumeBtn = document.getElementById('player-volume-btn');
    this.speedSelect = document.getElementById('player-speed-select');
    this.fullscreenBtn = document.getElementById('player-fullscreen-btn');
    this.theaterBtn = document.getElementById('player-theater-btn');
    this.videoGridContainer = document.getElementById('video-grid-container');
    this.filterButtons = document.querySelectorAll('.video-filter-bar .filter-btn');
    this.modalOverlay = document.getElementById('video-modal');
  }

  setupFeaturedPlayer() {
    this.updateFeaturedMeta(this.currentVideo);
  }

  updateFeaturedMeta(video) {
    this.currentVideo = video;
    const titleEl = document.getElementById('fvideo-title');
    const descEl = document.getElementById('fvideo-desc');
    const viewsEl = document.getElementById('fvideo-views');
    const likesEl = document.getElementById('fvideo-likes-count');
    const tagsEl = document.getElementById('fvideo-tags');

    if (titleEl) titleEl.textContent = video.title;
    if (descEl) descEl.textContent = video.description;
    if (viewsEl) viewsEl.textContent = `${video.views} views • ${video.date}`;
    if (likesEl) likesEl.textContent = video.likes;

    if (tagsEl) {
      tagsEl.innerHTML = `
        <span class="tag-badge">#${video.categoryLabel.replace(/\s+/g, '')}</span>
        <span class="tag-badge">#JavaExpert</span>
        <span class="tag-badge">#CSITNepal</span>
        <span class="tag-badge">#ButwalCampus</span>
      `;
    }

    // Parse duration to seconds
    const parts = video.duration.split(':').map(Number);
    this.totalDuration = (parts[0] * 60) + parts[1];
    this.currentTime = 0;
    this.updateProgressUI();
  }

  initCanvasVisualizer() {
    if (!this.canvasPlayer) return;
    this.ctx = this.canvasPlayer.getContext('2d');
    this.canvasWidth = this.canvasPlayer.width = 1280;
    this.canvasHeight = this.canvasPlayer.height = 720;
    this.animFrame = 0;
    this.renderCanvasFrame();
  }

  renderCanvasFrame() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const w = this.canvasWidth;
    const h = this.canvasHeight;

    // Draw background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, '#060911');
    bgGrad.addColorStop(0.5, '#0a1020');
    bgGrad.addColorStop(1, '#05070f');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Glowing grid lines
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 60) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Dynamic sine wave visualizer (audio/video activity)
    const waveCount = 4;
    for (let j = 0; j < waveCount; j++) {
      ctx.beginPath();
      const alpha = this.isPlaying ? (0.25 + j * 0.15) : 0.1;
      ctx.strokeStyle = j % 2 === 0 ? `rgba(0, 242, 254, ${alpha})` : `rgba(121, 40, 202, ${alpha})`;
      ctx.lineWidth = 3;

      for (let x = 0; x < w; x += 8) {
        const freq = 0.005 + j * 0.002;
        const speed = this.isPlaying ? (this.animFrame * 0.04 * this.playbackRate) : (this.animFrame * 0.005);
        const amp = this.isPlaying ? (40 + j * 18) : 15;
        const y = (h / 2) + Math.sin(x * freq + speed + j) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Code Stream text effect on screen
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.font = '14px JetBrains Mono, monospace';
    const lines = [
      `// Video Stream: ${this.currentVideo.id} [${this.isPlaying ? 'PLAYING' : 'PAUSED'}]`,
      `// Tech Stack: Java 21 • Spring Boot • React • Tailwind • Tribhuvan Univ. CSIT`,
      `public class VideoStreamService implements HighSpeedStreaming {`,
      `    @Async public CompletableFuture<Chunk> streamChunk(UUID videoId) {`,
      `        return pipeline.fetchFrameData("${this.currentVideo.thumbnailText}");`,
      `    }`,
      `}`
    ];
    lines.forEach((line, i) => {
      ctx.fillText(line, 60, 100 + i * 26);
    });

    // Center Badge / Title watermark
    ctx.save();
    ctx.textAlign = 'center';
    ctx.font = 'bold 36px Plus Jakarta Sans, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 242, 254, 0.8)';
    ctx.shadowBlur = 20;
    ctx.fillText(this.currentVideo.thumbnailText, w / 2, h / 2 - 20);

    ctx.font = '16px Plus Jakarta Sans, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.shadowBlur = 0;
    ctx.fillText("PRADIP • CSIT BUTWAL MULTIPLE CAMPUS • VIDEO VAULT", w / 2, h / 2 + 25);
    ctx.restore();

    this.animFrame++;
    requestAnimationFrame(() => this.renderCanvasFrame());
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    const playIcon = this.playToggleBtn.querySelector('i');
    const overlay = this.playOverlayBtn;

    if (this.isPlaying) {
      if (playIcon) playIcon.className = 'fas fa-pause';
      if (overlay) overlay.style.display = 'none';
      this.startPlaybackTicker();
    } else {
      if (playIcon) playIcon.className = 'fas fa-play';
      if (overlay) overlay.style.display = 'flex';
      this.stopPlaybackTicker();
    }
  }

  startPlaybackTicker() {
    this.stopPlaybackTicker();
    this.timer = setInterval(() => {
      if (this.currentTime >= this.totalDuration) {
        this.currentTime = 0;
        this.togglePlay();
        return;
      }
      this.currentTime += 1 * this.playbackRate;
      this.updateProgressUI();
    }, 1000);
  }

  stopPlaybackTicker() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  formatTime(seconds) {
    const s = Math.floor(seconds);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${m.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  }

  updateProgressUI() {
    if (this.timeDisplay) {
      this.timeDisplay.textContent = `${this.formatTime(this.currentTime)} / ${this.formatTime(this.totalDuration)}`;
    }
    if (this.progressFill) {
      const pct = (this.currentTime / this.totalDuration) * 100;
      this.progressFill.style.width = `${Math.min(pct, 100)}%`;
    }
  }

  seek(pct) {
    this.currentTime = this.totalDuration * pct;
    this.updateProgressUI();
  }

  setupEventListeners() {
    // Play overlay & button
    if (this.playOverlayBtn) this.playOverlayBtn.addEventListener('click', () => this.togglePlay());
    if (this.playToggleBtn) this.playToggleBtn.addEventListener('click', () => this.togglePlay());

    // Canvas click toggle
    if (this.canvasPlayer) this.canvasPlayer.addEventListener('click', () => this.togglePlay());

    // Progress bar click
    if (this.progressBar) {
      this.progressBar.addEventListener('click', (e) => {
        const rect = this.progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = clickX / rect.width;
        this.seek(pct);
      });
    }

    // Volume
    if (this.volumeSlider) {
      this.volumeSlider.addEventListener('input', (e) => {
        this.volume = parseFloat(e.target.value);
        this.isMuted = this.volume === 0;
        this.updateVolumeIcon();
      });
    }

    if (this.volumeBtn) {
      this.volumeBtn.addEventListener('click', () => {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
          this.volumeSlider.value = 0;
        } else {
          this.volumeSlider.value = 0.8;
          this.volume = 0.8;
        }
        this.updateVolumeIcon();
      });
    }

    // Speed
    if (this.speedSelect) {
      this.speedSelect.addEventListener('change', (e) => {
        this.playbackRate = parseFloat(e.target.value);
        if (this.isPlaying) {
          this.startPlaybackTicker();
        }
      });
    }

    // Fullscreen
    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          this.featuredContainer.requestFullscreen().catch(err => console.log(err));
        } else {
          document.exitFullscreen();
        }
      });
    }

    // Like button
    const likeBtn = document.getElementById('fvideo-like-btn');
    if (likeBtn) {
      likeBtn.addEventListener('click', () => {
        this.currentVideo.likes++;
        const countEl = document.getElementById('fvideo-likes-count');
        if (countEl) countEl.textContent = this.currentVideo.likes;
        likeBtn.style.color = '#ff0080';
        window.showDevToast && window.showDevToast(`Liked: "${this.currentVideo.title}"! ❤️`);
      });
    }

    // Share button
    const shareBtn = document.getElementById('fvideo-share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href);
        window.showDevToast && window.showDevToast('Video Link copied to clipboard! 📋');
      });
    }

    // Filter Buttons
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-filter');
        this.renderVideoGrid(cat);
      });
    });
  }

  updateVolumeIcon() {
    const icon = this.volumeBtn.querySelector('i');
    if (!icon) return;
    if (this.isMuted || this.volume === 0) icon.className = 'fas fa-volume-mute';
    else if (this.volume < 0.5) icon.className = 'fas fa-volume-down';
    else icon.className = 'fas fa-volume-up';
  }

  renderVideoGrid(category) {
    if (!this.videoGridContainer) return;
    const filtered = category === 'all' 
      ? videoDatabase 
      : videoDatabase.filter(v => v.category === category);

    this.videoGridContainer.innerHTML = filtered.map(v => `
      <div class="video-card glass-panel" onclick="window.videoHub.openVideoModal('${v.id}')">
        <div class="video-thumbnail-box">
          <div style="background: radial-gradient(circle, ${v.accent}33 0%, #0d121f 90%); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <i class="fas fa-play-circle" style="font-size: 2.5rem; color: ${v.accent}; margin-bottom: 0.5rem;"></i>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: #fff; letter-spacing: 0.05em; padding: 0 1rem; text-align: center;">${v.thumbnailText}</span>
          </div>
          <span class="thumbnail-category">${v.categoryLabel}</span>
          <span class="thumbnail-duration">${v.duration}</span>
          <div class="play-hover-btn">
            <i class="fas fa-play"></i>
          </div>
        </div>
        <div class="video-card-content">
          <h4 class="video-card-title">${v.title}</h4>
          <p class="video-card-desc">${v.description}</p>
          <div class="video-card-footer">
            <span><i class="fas fa-eye"></i> ${v.views} views</span>
            <span><i class="fas fa-heart"></i> ${v.likes} likes</span>
            <span><i class="fas fa-calendar-alt"></i> ${v.date}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  openVideoModal(videoId) {
    const video = videoDatabase.find(v => v.id === videoId);
    if (!video) return;

    // Load into featured player and scroll smoothly or open modal
    this.updateFeaturedMeta(video);
    this.isPlaying = true;
    this.startPlaybackTicker();

    const overlay = this.playOverlayBtn;
    if (overlay) overlay.style.display = 'none';
    const playIcon = this.playToggleBtn.querySelector('i');
    if (playIcon) playIcon.className = 'fas fa-pause';

    // Populate modal with chapters & comments
    const modalTitle = document.getElementById('modal-video-title');
    const modalDesc = document.getElementById('modal-video-desc');
    const modalChapters = document.getElementById('modal-video-chapters');
    const modalComments = document.getElementById('modal-video-comments');
    const modalRepoLink = document.getElementById('modal-video-github');

    if (modalTitle) modalTitle.textContent = video.title;
    if (modalDesc) modalDesc.textContent = video.description;
    if (modalRepoLink) modalRepoLink.href = video.github;

    if (modalChapters) {
      modalChapters.innerHTML = video.chapters.map(c => `
        <div class="chapter-item" style="display: flex; justify-content: space-between; padding: 0.6rem 0.8rem; background: rgba(255,255,255,0.03); border-radius: 6px; margin-bottom: 0.5rem; font-size: 0.85rem; cursor: pointer;" onclick="window.videoHub.jumpToChapter('${c.time}')">
          <span style="color: var(--accent-cyan); font-family: var(--font-mono); font-weight: 600;">${c.time}</span>
          <span style="color: #e2e8f0;">${c.title}</span>
        </div>
      `).join('');
    }

    if (modalComments) {
      modalComments.innerHTML = video.comments.map(cm => `
        <div class="comment-item" style="border-bottom: 1px solid rgba(255,255,255,0.06); padding: 0.75rem 0;">
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.3rem;">
            <strong style="color: var(--accent-cyan);">${cm.user}</strong>
            <span style="color: var(--text-muted);">${cm.time}</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${cm.text}</p>
        </div>
      `).join('');
    }

    if (this.modalOverlay) {
      this.modalOverlay.classList.add('active');
    }
  }

  jumpToChapter(timeStr) {
    const [m, s] = timeStr.split(':').map(Number);
    const totalSec = (m * 60) + s;
    this.currentTime = totalSec;
    this.updateProgressUI();
    this.closeModal();
    window.showDevToast && window.showDevToast(`Jumped to chapter [${timeStr}] ⏱️`);
    document.getElementById('video-vault').scrollIntoView({ behavior: 'smooth' });
  }

  closeModal() {
    if (this.modalOverlay) {
      this.modalOverlay.classList.remove('active');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.videoHub = new VideoPlayerHub();
});
