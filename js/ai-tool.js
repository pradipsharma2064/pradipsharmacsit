/* ==========================================================================
   DEVGENIUS AI TOOL & ARCHITECTURAL IDEA GENERATOR
   Author: Pradip • B.Sc. CSIT Student @ Butwal Multiple Campus, Nepal
   ========================================================================== */

const aiIdeaDatabase = {
  "nepal-campus": {
    title: "UniVerse Nepal: Next-Gen Smart Campus & Academic ERP Engine",
    tagline: "Empowering Tribhuvan University Campuses with Scalable Cloud Microservices",
    problem: "Academic institutions in Nepal like Butwal Multiple Campus face fragmented student record management, manual attendance tracking, and lack of real-time faculty-student collaboration portals.",
    architecture: `
+--------------------------------------------------------------+
|                    React 18 + Tailwind UI                    |
+--------------------------------------------------------------+
                               | REST & WebSocket
                               v
+--------------------------------------------------------------+
|               Spring Cloud API Gateway (Port 8080)          |
|                 [JWT Auth + Rate Limiting]                   |
+--------------------------------------------------------------+
          |                         |                        |
          v                         v                        v
+------------------+      +------------------+     +------------------+
| Student Service  |      | Academic Service |     | Analytics Engine |
| (Java 21/Spring) |      | (Java 21/Spring) |     | (Java + Python)  |
+------------------+      +------------------+     +------------------+
          |                         |                        |
          +-------------------------+------------------------+
                               |
                        [Apache Kafka]
                               |
         +---------------------+---------------------+
         |                                           |
+--------------------+                      +--------------------+
| PostgreSQL Master  |                      | Redis Cache Cluster|
+--------------------+                      +--------------------+
    `,
    javaBackend: `// Core Spring Boot Service Implementation
@RestController
@RequestMapping("/api/v1/campus")
@RequiredArgsConstructor
public class CampusAcademicController {

    private final StudentAcademicService academicService;
    private final NotificationEventProducer eventProducer;

    @PostMapping("/attendance/bulk")
    @PreAuthorize("hasRole('FACULTY')")
    public ResponseEntity<ApiResponse<AttendanceSummary>> submitAttendance(
            @Valid @RequestBody BulkAttendanceRequest request,
            @AuthenticationPrincipal UserDetails user) {
        
        AttendanceSummary summary = academicService.recordAttendance(request, user.getUsername());
        eventProducer.publishAttendanceEvent(new AttendanceSubmittedEvent(summary));
        
        return ResponseEntity.ok(ApiResponse.success("Attendance synced successfully", summary));
    }
}`,
    frontendDesign: "Built with Glassmorphism UI tokens, Nepali Bikram Sambat (BS) & Gregorian calendar converter widget, offline-first PWA sync, dark mode toggle, and accessible typography.",
    databaseDesign: "PostgreSQL with normalized schemas: `students`, `departments`, `semesters`, `attendance_logs`, `grade_sheets`. Redis caching for student transcripts and active session tokens.",
    defensePoints: [
      "Highlights clean separation of concerns using Domain-Driven Design (DDD).",
      "Addresses bandwidth limitations in Nepal through aggressive client-side caching & WebSocket delta updates.",
      "Compliant with Tribhuvan University semester grading guidelines and GPA algorithms."
    ]
  },
  "nepal-fintech": {
    title: "HimalayaPay Core: High-Throughput Digital Payment & Reconciliation Engine",
    tagline: "Ultra-Low Latency Payment Gateway with Idempotency & Distributed Ledgers",
    problem: "High traffic during festive sales and bill payment deadlines requires sub-50ms transaction processing with absolute zero double-debit guarantees.",
    architecture: `
[Client App] --> [Cloudflare DDoS Shield] --> [Spring Cloud Gateway]
                                                    |
             +--------------------------------------+--------------------------------------+
             |                                                                             |
      [Auth Service]                                                                [Payment Orchestrator]
             |                                                                             |
             v                                                                             v
      (Redis Session)                                                               [Kafka Transaction Topic]
                                                                                           |
                                                             +-----------------------------+-----------------------------+
                                                             |                                                           |
                                                  [Ledger Accounting Worker]                                  [Fraud Detection Engine]
                                                  (Java 21 Virtual Threads)                                    (Rule Engine / ML API)
    `,
    javaBackend: `// Idempotent Transaction Processor
@Service
@Slf4j
public class PaymentProcessingService {

    private final RedisTemplate<String, String> redisTemplate;
    private final AccountLedgerRepository ledgerRepo;

    @Transactional(isolation = Isolation.SERIALIZABLE)
    public TransactionResult processPayment(PaymentRequest req, String idempotencyKey) {
        Boolean acquired = redisTemplate.opsForValue()
            .setIfAbsent("lock:" + idempotencyKey, "PROCESSING", Duration.ofSeconds(30));
        
        if (Boolean.FALSE.equals(acquired)) {
            throw new DuplicateTransactionException("Request currently in-flight: " + idempotencyKey);
        }

        // Debit Source -> Credit Destination with Double-Entry Accounting
        return ledgerRepo.executeDoubleEntry(req.getSenderId(), req.getReceiverId(), req.getAmount());
    }
}`,
    frontendDesign: "Minimalist neo-banking dashboard with biometric authentication simulation, real-time balance animation ticker, and dark-mode receipt generator.",
    databaseDesign: "PostgreSQL distributed ledger with immutable audit trails; Redis cluster for idempotency lock state; Kafka for durable event journal.",
    defensePoints: [
      "Demonstrates ACID transaction isolation levels and distributed locking mechanism in Java.",
      "Explains resilience during network partitions using Saga orchestration pattern."
    ]
  },
  "video-stream": {
    title: "HyperStream: Distributed Video On-Demand & Live Coding Platform",
    tagline: "Adaptive Bitrate Video Streaming with Java Netty & HTML5 MediaSource",
    problem: "Technical educators and students need low-latency, bandwidth-friendly video streaming with integrated synchronized code snippets and lecture notes.",
    architecture: `
[Video Producer] --> [FFmpeg Chunk Transcoder] --> [S3 / MinIO Storage]
                                                            |
                                                   [Java Video Service]
                                                   (Netty Byte Streaming)
                                                            |
                                                   [CDN Edge Cache]
                                                            |
                                          [HTML5 Canvas Player + WebSockets]
    `,
    javaBackend: `// Reactive Video Chunk Streamer
@GetMapping(value = "/stream/{videoId}", produces = "video/mp4")
public Mono<ResponseEntity<byte[]>> streamVideoChunk(
        @PathVariable String videoId,
        @RequestHeader(value = "Range", required = false) String httpRangeList) {
    
    return videoStorageService.getChunkRange(videoId, httpRangeList)
        .map(chunk -> ResponseEntity.status(HttpStatus.PARTIAL_CONTENT)
            .header("Content-Range", chunk.getContentRange())
            .body(chunk.getData()));
}`,
    frontendDesign: "Custom theater mode player, interactive synchronized code editor beside video, speed toggle (0.5x - 2x), and chapter bookmarking.",
    databaseDesign: "MongoDB for video metadata and interactive timestamped comments; MinIO / S3 object store for video chunks (HLS .m3u8 and .ts).",
    defensePoints: [
      "Explains HTTP 206 Partial Content range requests and reactive non-blocking I/O.",
      "Demonstrates media streaming optimizations suitable for varied network conditions in Nepal."
    ]
  },
  "health-telemedicine": {
    title: "SwasthyaNepal: Rural Telemedicine & AI Symptom Triaging Platform",
    tagline: "Bridging Healthcare Access Across Remote Himalayan Regions",
    problem: "Remote villages in Nepal lack immediate access to specialist doctors, requiring secure real-time video consultations and offline electronic health records.",
    architecture: `
[Mobile / Web Client] --> [WebRTC Signaling Server (Java Spring)] <--> [Doctor Portal]
                                     |
                          [EHR Encryption Service]
                                     |
                        [PostgreSQL Encrypted Vault]
    `,
    javaBackend: `// WebRTC Room Signaling Handler
@Component
public class TelemedicineSignalingHandler extends TextWebSocketHandler {
    private final Map<String, Set<WebSocketSession>> activeConsultationRooms = new ConcurrentHashMap<>();

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        SignalingPayload payload = parsePayload(message.getPayload());
        broadcastToPeer(payload.getRoomId(), session, message);
    }
}`,
    frontendDesign: "High contrast accessible UI, lightweight bandwidth footprint, multilingual support (Nepali & English), and intuitive appointment calendar.",
    databaseDesign: "HIPAA-compliant encrypted PostgreSQL storage with cryptographic key rotation; Redis for active doctor availability index.",
    defensePoints: [
      "Addresses public health impact in Nepal with high social value for CSIT project evaluation.",
      "Covers WebRTC STUN/TURN traversal and encrypted communications."
    ]
  }
};

const aiAssistantKnowledge = [
  {
    triggers: ["who", "about", "pradip", "background", "student"],
    response: "Pradip is a passionate Software Engineer, Java Expert, and Full-Stack Web Developer. He is a B.Sc. CSIT (Computer Science & Information Technology) student at **Butwal Multiple Campus** (affiliated with Tribhuvan University) in Nepal! He blends deep backend architecture with sleek UI/UX design."
  },
  {
    triggers: ["campus", "butwal", "tu", "csit", "nepal", "university"],
    response: "Pradip studies B.Sc. CSIT at **Butwal Multiple Campus** located in Butwal, Lumbini Province, Nepal. The campus is one of the premier constituent campuses of Tribhuvan University, known for rigorous computer science curriculum and bright tech talent."
  },
  {
    triggers: ["java", "spring", "backend", "oop", "expert"],
    response: "Pradip's Java expertise is comprehensive: Core Java 21, Spring Boot 3, Spring Security, Hibernate/JPA, Microservices architecture, Kafka event streaming, JVM garbage collection tuning, Multi-threading & Virtual Threads (Project Loom), and clean SOLID design patterns."
  },
  {
    triggers: ["web", "frontend", "react", "html", "css", "javascript"],
    response: "As a web developer, Pradip creates high-performance web applications using modern HTML5 semantic markup, CSS3/Tailwind (glassmorphism, dark/neon themes), JavaScript ES6+, React, WebSockets, REST APIs, and responsive mobile-first architectures."
  },
  {
    triggers: ["cert", "certification", "degree", "credential", "oracle"],
    response: "Pradip holds multiple prestigious certifications and credentials, including:\n• B.Sc. CSIT Degree (Ongoing, Butwal Multiple Campus, TU Nepal)\n• Oracle Certified Professional: Java SE Developer\n• Meta Full-Stack Web Developer Specialization\n• AWS Certified Cloud Foundations\n• Google UX Design Professional Certificate\n• HackerRank Java (Gold Badge) & Problem Solving Advanced."
  },
  {
    triggers: ["contact", "hire", "email", "reach", "freelance", "job"],
    response: "You can connect with Pradip directly! Email him at **pradip.csit.dev@gmail.com**, or reach out via LinkedIn, GitHub, or use the interactive Contact Form right on this website. He is open to remote roles, Java backend consulting, and full-stack software development projects worldwide."
  },
  {
    triggers: ["design", "ui", "ux", "figma"],
    response: "Pradip is also a skilled Software Designer! He focuses on user research, wireframing in Figma, design systems, human-centered UI/UX, WCAG accessibility standards, and converting complex system requirements into intuitive, elegant digital interfaces."
  }
];

class DevGeniusAITool {
  constructor() {
    this.currentMode = 'generator'; // 'generator' or 'chat'
    this.initDOMElements();
    this.setupEventListeners();
  }

  initDOMElements() {
    this.domainSelect = document.getElementById('ai-domain-select');
    this.stackSelect = document.getElementById('ai-stack-select');
    this.complexitySelect = document.getElementById('ai-complexity-select');
    this.customPromptInput = document.getElementById('ai-custom-prompt');
    this.generateBtn = document.getElementById('ai-generate-btn');
    this.outputArea = document.getElementById('ai-output-content');
    this.statusText = document.getElementById('ai-status-indicator');
    this.copyOutputBtn = document.getElementById('ai-copy-output-btn');
    this.exportMdBtn = document.getElementById('ai-export-md-btn');

    // Mode toggles
    this.modeGenBtn = document.getElementById('mode-btn-gen');
    this.modeChatBtn = document.getElementById('mode-btn-chat');
    this.genPanel = document.getElementById('ai-generator-panel');
    this.chatPanel = document.getElementById('ai-chat-panel');

    // Chat elements
    this.chatThread = document.getElementById('ai-chat-thread');
    this.chatInput = document.getElementById('ai-chat-input');
    this.chatSendBtn = document.getElementById('ai-chat-send-btn');
  }

  setupEventListeners() {
    if (this.generateBtn) {
      this.generateBtn.addEventListener('click', () => this.generateArchitecture());
    }

    if (this.copyOutputBtn) {
      this.copyOutputBtn.addEventListener('click', () => this.copyOutputText());
    }

    if (this.exportMdBtn) {
      this.exportMdBtn.addEventListener('click', () => this.exportMarkdown());
    }

    // Quick prompt chips
    document.querySelectorAll('.quick-prompt-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const text = e.target.getAttribute('data-prompt');
        if (this.currentMode === 'generator') {
          if (this.customPromptInput) {
            this.customPromptInput.value = text;
            this.generateArchitecture();
          }
        } else {
          if (this.chatInput) {
            this.chatInput.value = text;
            this.handleUserChatMessage();
          }
        }
      });
    });

    // Mode switch
    if (this.modeGenBtn && this.modeChatBtn) {
      this.modeGenBtn.addEventListener('click', () => this.switchMode('generator'));
      this.modeChatBtn.addEventListener('click', () => this.switchMode('chat'));
    }

    // Chat events
    if (this.chatSendBtn) {
      this.chatSendBtn.addEventListener('click', () => this.handleUserChatMessage());
    }
    if (this.chatInput) {
      this.chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.handleUserChatMessage();
      });
    }
  }

  switchMode(mode) {
    this.currentMode = mode;
    if (mode === 'generator') {
      this.modeGenBtn.classList.add('active');
      this.modeChatBtn.classList.remove('active');
      this.genPanel.style.display = 'grid';
      this.chatPanel.style.display = 'none';
    } else {
      this.modeChatBtn.classList.add('active');
      this.modeGenBtn.classList.remove('active');
      this.genPanel.style.display = 'none';
      this.chatPanel.style.display = 'flex';
      this.chatInput && this.chatInput.focus();
    }
  }

  generateArchitecture() {
    const domainKey = this.domainSelect ? this.domainSelect.value : 'nepal-campus';
    const stack = this.stackSelect ? this.stackSelect.options[this.stackSelect.selectedIndex].text : 'Java + Spring Boot';
    const complexity = this.complexitySelect ? this.complexitySelect.options[this.complexitySelect.selectedIndex].text : 'B.Sc. CSIT Capstone';
    const customQuery = this.customPromptInput ? this.customPromptInput.value.trim() : '';

    if (this.statusText) {
      this.statusText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Synthesizing Architecture...';
    }

    setTimeout(() => {
      const spec = aiIdeaDatabase[domainKey] || aiIdeaDatabase['nepal-campus'];
      this.renderArchitectureSpec(spec, stack, complexity, customQuery);
      if (this.statusText) {
        this.statusText.innerHTML = '<i class="fas fa-check-circle" style="color: var(--accent-emerald);"></i> Spec Generated Ready';
      }
      window.showDevToast && window.showDevToast('Architectural Blueprint generated! 🚀');
    }, 450);
  }

  renderArchitectureSpec(spec, stack, complexity, customQuery) {
    if (!this.outputArea) return;

    this.rawMarkdown = `# ${spec.title}\n*${spec.tagline}*\n\n`
      + `### Scope & Classification\n- **Target Stack:** ${stack}\n- **Complexity:** ${complexity}\n`
      + (customQuery ? `- **Custom Focus:** ${customQuery}\n` : '')
      + `\n### Problem Statement\n${spec.problem}\n\n`
      + `### System Architecture Diagram\n\`\`\`\n${spec.architecture}\n\`\`\`\n\n`
      + `### Java Enterprise Backend Core\n\`\`\`java\n${spec.javaBackend}\n\`\`\`\n\n`
      + `### Frontend UI/UX Design System\n${spec.frontendDesign}\n\n`
      + `### Database & Persistence Strategy\n${spec.databaseDesign}\n\n`
      + `### B.Sc. CSIT Project Defense Points\n`
      + spec.defensePoints.map(p => `- ${p}`).join('\n');

    this.outputArea.innerHTML = `
      <div class="ai-spec-box">
        <h4>${spec.title}</h4>
        <p style="color: var(--accent-cyan); font-weight: 600; font-size: 0.9rem; margin-bottom: 1rem;">
          ${spec.tagline}
        </p>

        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
          <span class="tag-badge" style="color: var(--accent-amber); border-color: var(--accent-amber);"><i class="fas fa-layer-group"></i> ${stack}</span>
          <span class="tag-badge" style="color: var(--accent-cyan); border-color: var(--accent-cyan);"><i class="fas fa-graduation-cap"></i> ${complexity}</span>
          ${customQuery ? `<span class="tag-badge" style="color: #a78bfa;">Query: "${customQuery}"</span>` : ''}
        </div>

        <div class="spec-section-title"><i class="fas fa-bullseye"></i> Problem Statement & Nepal Context</div>
        <p style="color: var(--text-secondary); margin-bottom: 1rem;">${spec.problem}</p>

        <div class="spec-section-title"><i class="fas fa-network-wired"></i> Distributed Architecture Blueprint</div>
        <pre><code style="color: #38bdf8;">${spec.architecture.trim()}</code></pre>

        <div class="spec-section-title"><i class="fab fa-java"></i> Java 21 Spring Boot Backend Implementation</div>
        <pre><code style="color: #4ade80;">${this.escapeHtml(spec.javaBackend.trim())}</code></pre>

        <div class="spec-section-title"><i class="fas fa-paint-brush"></i> UI/UX & Web Developer Implementation</div>
        <p style="color: var(--text-secondary);">${spec.frontendDesign}</p>

        <div class="spec-section-title"><i class="fas fa-database"></i> Database & Persistence Schema</div>
        <p style="color: var(--text-secondary);">${spec.databaseDesign}</p>

        <div class="spec-section-title"><i class="fas fa-user-graduate"></i> B.Sc. CSIT Defense & Viva Talking Points</div>
        <ul style="color: var(--text-secondary);">
          ${spec.defensePoints.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  copyOutputText() {
    if (!this.rawMarkdown) {
      window.showDevToast && window.showDevToast('Please generate an idea first!');
      return;
    }
    navigator.clipboard.writeText(this.rawMarkdown);
    window.showDevToast && window.showDevToast('Architecture copied to clipboard as Markdown! 📋');
  }

  exportMarkdown() {
    if (!this.rawMarkdown) {
      window.showDevToast && window.showDevToast('Please generate an idea first!');
      return;
    }
    const blob = new Blob([this.rawMarkdown], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CSIT-Project-Architecture-Idea.md';
    link.click();
    URL.revokeObjectURL(url);
    window.showDevToast && window.showDevToast('Downloaded project architecture file! 💾');
  }

  handleUserChatMessage() {
    if (!this.chatInput) return;
    const query = this.chatInput.value.trim();
    if (!query) return;

    // Append user message
    this.appendChatBubble(query, 'user');
    this.chatInput.value = '';

    // Simulate AI thinking
    setTimeout(() => {
      const reply = this.getAIAvatarResponse(query);
      this.appendChatBubble(reply, 'ai');
    }, 400);
  }

  appendChatBubble(text, sender) {
    if (!this.chatThread) return;
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender === 'user' ? 'bubble-user' : 'bubble-ai'}`;
    
    // Format bold and linebreaks
    const formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
    
    bubble.innerHTML = formatted;
    this.chatThread.appendChild(bubble);
    this.chatThread.scrollTop = this.chatThread.scrollHeight;
  }

  getAIAvatarResponse(query) {
    const qLower = query.toLowerCase();
    for (const item of aiAssistantKnowledge) {
      if (item.triggers.some(t => qLower.includes(t))) {
        return item.response;
      }
    }
    return `Hello! As Pradip's AI Avatar, I can answer anything regarding his **B.Sc. CSIT studies at Butwal Multiple Campus**, his **Core Java and Spring Boot mastery**, his **modern web developer portfolio**, or his **certifications & software design**. What specific details would you like to explore?`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.devGeniusAI = new DevGeniusAITool();
  // Trigger initial blueprint load
  setTimeout(() => {
    if (window.devGeniusAI && window.devGeniusAI.generateArchitecture) {
      window.devGeniusAI.generateArchitecture();
    }
  }, 100);
});
