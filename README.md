# 🚀 Pradip • Java Specialist, Web Developer & Software Designer Portfolio & Video Hub

> **B.Sc. CSIT Student @ Butwal Multiple Campus, Tribhuvan University, Nepal 🇳🇵**  
> A high-performance, responsive portfolio and video website featuring interactive custom video player controls, a real-time AI Project Architecture Engine, certificate credential verifications, and modern neon/glassmorphism design.

---

## ✨ Features & Architecture

### 1. 🎬 Dedicated Video Platform & Player ("The Video Vault")
- **Custom Video Player Engine:** Interactive timeline scrub bar with thumb tracking, play/pause controls, speed adjustments (`0.75x`, `1.0x`, `1.25x`, `1.5x`, `2.0x`), volume slider, mute toggle, and full-screen support.
- **Dynamic Stream Canvas Visualizer:** Real-time audio waveform and reactive code stream animations generated directly with HTML5 Canvas.
- **Filterable Media Categories:**
  - `Java Enterprise` (Spring Boot 3, Kafka, Virtual Threads)
  - `Full-Stack Web` (React 18, WebSockets, HTML5 MediaSource)
  - `UI/UX Design` (Figma Design Systems, Glassmorphism, WCAG AAA)
  - `CSIT Projects` (Butwal Multiple Campus Capstone Walkthroughs)
  - `Quick Shorts` (10-minute microarchitecture lectures)
- **Interactive Video Modal:** Timestamps and chapters with instant seek jumps, developer discussion comments, and direct GitHub source code links.

### 2. ⚡ DevGenius: Interactive AI Idea & Architecture Tool
- **Mode 1: Project & Architecture Generator:**
  - Select domain (e.g. *Nepal Higher Education / Smart Campus ERP*, *FinTech Payment Gateway like eSewa/Khalti*, *Distributed Video Streaming*, *Himalayan Telemedicine*).
  - Select tech stack (Java 21 Spring Boot, React, Kafka, Docker).
  - Select complexity level (TU CSIT Capstone, Production SaaS MVP, Enterprise Microservices).
  - Generates full architectural specifications with ASCII system topology, production Java code snippets, UI/UX guidelines, database persistence schemas, and B.Sc. CSIT viva defense talking points.
  - One-click **Copy to Clipboard** and **Export to Markdown (`.md`)**.
- **Mode 2: Pradip's AI Avatar Chat:**
  - Interactive conversational assistant answering questions about Pradip's education at **Butwal Multiple Campus**, his Java expertise, web developer skills, certifications, and hire availability.

### 3. 🎓 Academic & Student Profile (CSIT Nepal)
- Highlighted narrative celebrating his studies as a **B.Sc. CSIT student at Butwal Multiple Campus, Tribhuvan University, Nepal**.
- Campus emblem, Tribhuvan University constituent badge, and live **Nepal Standard Time (NPT, GMT+5:45)** real-time clock widget.

### 4. 📜 Certifications & Degree Verification Hub
- Interactive credential cards with verification modal:
  1. *B.Sc. CSIT Degree* (Tribhuvan University, Butwal Multiple Campus)
  2. *Oracle Certified Professional: Java SE 17 Developer* (1Z0-829)
  3. *Meta Full-Stack Web Development Specialization*
  4. *AWS Certified Cloud Foundations*
  5. *Google UX Design Professional Certificate*
  6. *HackerRank Java (Gold Badge) & Problem Solving Advanced*

### 5. 🎨 Aesthetic & Feature-Rich Polish
- **Neural Particle Canvas Background:** Interactive particle mesh that reacts to cursor proximity and physics.
- **Theme Switcher:** Seamlessly switch between **Dark Cyber Neon**, **Clean Minimal Light**, and **Deep Space Nebula** themes.
- **Micro-Sound Synthesizer:** Built-in Web Audio API sound effects (subtle high-tech audio tones on interaction with mute toggle; zero external dependencies).
- **Curriculum Vitae / Resume Viewer:** Interactive in-app resume modal with direct copy and download options.
- **Interactive Contact Suite:** Pre-validated contact form with feedback toasts, copy-to-clipboard email (`pradip.csit.dev@gmail.com`), and social links.

---

## 📁 Project Structure

```
csit-dev-portfolio/
│
├── index.html              # Semantic, accessible HTML5 single-page hub
├── README.md               # Documentation and setup guide
│
├── css/
│   └── styles.css          # Glassmorphism design system, responsive breakpoints, animations
│
├── js/
│   ├── app.js              # Theme switcher, typewriter effect, Nepal clock, stats ticker, modals
│   ├── video-player.js     # Custom video player, canvas code stream visualizer, chapters, filters
│   ├── ai-tool.js          # DevGenius AI Idea Generator & AI Avatar chat engine
│   └── canvas-bg.js        # Responsive particle network canvas animation
│
└── assets/                 # Icons, badges, and project assets
```

---

## 🚀 How to Run Locally

Because the project is written in clean, modern vanilla web standards (HTML5, CSS3, JavaScript ES6+), it requires **zero external installations** or build tools:

### Option 1: Using Python (Recommended)
Open PowerShell in this directory and run:
```powershell
python -m http.server 8000
```
Then open your browser at:
`http://localhost:8000`

### Option 2: Direct Browser Open
Simply double-click `index.html` or run:
```powershell
Start-Process "index.html"
```

---

## 🌐 Deployment to GitHub Pages / Vercel / Netlify

1. **GitHub Pages:**
   - Push this repository to GitHub.
   - Go to **Settings > Pages > Branch: main / root**.
   - Your site will be live at `https://<username>.github.io/<repo-name>/`.
2. **Vercel or Netlify:**
   - Drag and drop the `csit-dev-portfolio` folder directly into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for instant deployment!
