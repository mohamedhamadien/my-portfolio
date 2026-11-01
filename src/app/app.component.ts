import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  className: string;
  status: string;
  details: string[];
  github?: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="Mohamed Hamdeen Zaki home">
        <span class="brand-mark">&lt;/&gt;</span>
        <span>Mohamed <b>Hamdeen Zaki</b></span>
      </a>
      <button class="menu-toggle" type="button" (click)="menuOpen = !menuOpen" [attr.aria-expanded]="menuOpen" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
      <nav [class.open]="menuOpen" aria-label="Main navigation">
        <a href="#home" (click)="menuOpen = false">Home</a>
        <a href="#about" (click)="menuOpen = false">About</a>
        <a href="#projects" (click)="menuOpen = false">Projects</a>
        <a href="#skills" (click)="menuOpen = false">Skills</a>
        <a href="#experience" (click)="menuOpen = false">Experience</a>
        <a href="#contact" (click)="menuOpen = false">Contact</a>
      </nav>
      <a class="header-cta" href="assets/Mohamed-Hamadeen-CV.pdf" download>Download CV <span aria-hidden="true">↗</span></a>
    </header>

    <main>
      <section class="hero section-wrap" id="home">
        <div class="hero-copy">
          <div class="eyebrow"><span class="status-dot"></span> AVAILABLE FOR THE RIGHT OPPORTUNITY</div>
          <p class="hello">Hello, I'm</p>
          <h1>Mohamed <span class="gradient-text">Hamdeen Zaki</span></h1>
          <h2>Full-Stack .NET Developer</h2>
          <p class="hero-description">
            Full-stack .NET developer with 3+ years of experience delivering production web applications with
            <strong>ASP.NET Core, Angular, and SQL Server</strong>. Strong in RESTful API design, Clean Architecture,
            CQRS, and SQL performance tuning, with hands-on experience in containerized microservices.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">Explore my work <span>↗</span></a>
            <a class="button button-secondary" href="assets/Mohamed-Hamadeen-CV.pdf" download><span>↓</span> Download CV</a>
          </div>
          <div class="hero-meta">
            <a href="https://github.com/mohamedhamadien" target="_blank" rel="noreferrer" aria-label="GitHub" class="social-icon">GH</a>
            <a href="https://www.linkedin.com/in/mohamed-hamdeen" target="_blank" rel="noreferrer" aria-label="LinkedIn" class="social-icon">in</a>
            <a href="mailto:mohamedhmdeen@gmail.com" aria-label="Email" class="social-icon">✉</a>
            <span class="location"><span class="pin">⌖</span> Cairo, Egypt <i></i> +20 112 203 5202</span>
          </div>
        </div>
        <div class="hero-art" aria-label="Decorative developer illustration">
          <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <div class="art-glow"></div>
          <div class="code-card card-top"><span class="code-dots">● ● ●</span><code>const developer = &#123;<br>&nbsp; focus: <em>'quality'</em>,<br>&nbsp; mindset: <em>'growth'</em><br>&#125;;</code></div>
          <div class="monogram"><span>MH</span><small>BUILD · LEARN · IMPROVE</small></div>
          <div class="floating-chip chip-api"><span class="chip-icon">⌘</span><span><b>Backend</b><small>APIs & services</small></span></div>
          <div class="floating-chip chip-cloud"><span class="chip-icon">◇</span><span><b>Cloud native</b><small>Learning by building</small></span></div>
          <div class="art-caption"><span class="status-dot"></span> Clean code. Real impact.</div>
        </div>
        <div class="hero-bottom-line"><span>01 / INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section class="about section-wrap section-pad" id="about">
        <div class="section-heading">
          <p class="eyebrow">01 — ABOUT ME</p>
          <h2>Engineering with <span class="gradient-text">purpose.</span></h2>
          <p class="section-intro">Full-stack .NET developer building production applications end to end—from requirements and database design to deployment.</p>
        </div>
        <div class="about-grid">
          <div class="about-copy">
            <p>I'm a Full-stack .NET Developer with 3+ years of experience delivering production web applications with ASP.NET Core, Angular, and SQL Server.</p>
            <p>I design RESTful APIs, integrate Angular front ends, tune SQL performance, and apply Clean Architecture, CQRS, and SOLID principles to build scalable, testable systems.</p>
            <div class="value-points">
              <div class="value-point"><span class="value-icon">⌘</span><div><b>Enterprise systems</b><small>ASP.NET Core APIs, Angular UI, SQL Server and product features</small></div></div>
              <div class="value-point"><span class="value-icon">◇</span><div><b>Clean architecture</b><small>Clean Architecture, CQRS, SOLID and modular design</small></div></div>
              <div class="value-point"><span class="value-icon">↗</span><div><b>Continuous learning</b><small>Docker, Redis, RabbitMQ, Kubernetes and Minikube</small></div></div>
            </div>
          </div>
          <div class="experience-card" id="experience">
            <div class="card-heading"><span class="eyebrow">CAREER TIMELINE</span><span class="tiny-pill">EXPERIENCE</span></div>
            <div class="timeline">
              <div class="timeline-item">
                <span class="timeline-dot"></span><time>Jan 2025 — Present</time>
                <h3>Full-Stack .NET Developer</h3><p class="company">Health Insights Group · Cairo, Egypt</p>
                <ul><li>Build, test, and maintain full-stack applications across API and UI layers.</li><li>Design RESTful APIs and integrate them with Angular front ends.</li><li>Apply SOLID, Clean Architecture, and CQRS for modular, testable code.</li><li>Improve SQL Server performance with stored procedures, indexing, and query optimization.</li><li>Implement validation, mapping, and background processing with FluentValidation, AutoMapper, and Hangfire.</li></ul>
              </div>
              <div class="timeline-item">
                <span class="timeline-dot"></span><time>Nov 2023 — Dec 2024</time>
                <h3>.NET Developer</h3><p class="company">VetICare · Remote</p>
                <ul><li>Developed and maintained .NET Core applications for veterinary clinic operations.</li><li>Built and optimized data access layers with Entity Framework and SQL Server.</li><li>Contributed to architecture decisions and wrote clean, scalable C# code.</li></ul>
              </div>
              <div class="timeline-item">
                <span class="timeline-dot"></span><time>Apr 2023 — Nov 2023</time>
                <h3>Freelance .NET Developer (Backend / API)</h3><p class="company">Self-Employed · Remote</p>
                <ul><li>Delivered ASP.NET Core REST APIs for independent clients.</li><li>Modeled relational databases and implemented EF Core data access.</li><li>Secured endpoints with JWT authentication and input validation.</li></ul>
              </div>
              <div class="timeline-item">
                <span class="timeline-dot"></span><time>Education</time>
                <h3>Intensive Code Camp — .NET Full-Stack Development</h3><p class="company">Information Technology Institute (ITI) · Dec 2022 — Apr 2023</p>
                <h3>Bachelor of Commerce</h3><p class="company">Beni Suef University · Sep 2016 — Aug 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="projects section-wrap section-pad" id="projects">
        <div class="section-heading heading-row">
          <div><p class="eyebrow">02 — SELECTED WORK</p><h2>Projects that <span class="gradient-text">solve problems.</span></h2></div>
          <span class="section-counter">03 CASE STUDIES</span>
        </div>
        <div class="project-grid">
          <article class="project-card" *ngFor="let project of projects">
            <div class="project-visual" [ngClass]="project.className">
              <div class="visual-top"><span class="visual-dot"></span><span class="visual-dot"></span><span class="visual-dot"></span><span class="visual-label">{{ project.category }}</span></div>
              <ng-container [ngSwitch]="project.className">
                <div *ngSwitchCase="'visual-health'" class="health-visual">
                  <div class="mock-sidebar"><span></span><span></span><span></span><span></span></div>
                  <div class="mock-main"><div class="mock-title"></div><div class="mock-stats"><i></i><i></i><i></i></div><div class="mock-chart"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="mock-rows"><i></i><i></i><i></i></div></div>
                </div>
                <div *ngSwitchCase="'visual-micro'" class="micro-visual">
                  <div class="micro-node node-a">API Gateway</div><div class="micro-lines">↙　 ↓　 ↘</div>
                  <div class="micro-row"><span>Product</span><span>Order</span><span>Inventory</span></div>
                  <div class="micro-lines">　 ↘　 ↓　 ↙</div><div class="micro-db">Message broker · Database</div>
                </div>
                <div *ngSwitchDefault class="bot-visual">
                  <div class="bot-window"><div class="bot-window-head">JOB SCANNER <span>● LIVE</span></div><div class="bot-row"><i></i><span></span><b>NEW</b></div><div class="bot-row"><i></i><span></span><b>NEW</b></div><div class="bot-row"><i></i><span></span><b>NEW</b></div><div class="bot-status"><span class="status-dot"></span> Scheduled worker running</div></div>
                </div>
              </ng-container>
              <span class="project-number">{{ project.number }}</span>
            </div>
            <div class="project-body">
              <div class="project-label">{{ project.status }}</div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="tag-list"><span *ngFor="let tag of project.tags">{{ tag }}</span></div>
              <button class="text-link" type="button" (click)="openProject(project)">Explore case study <span>↗</span></button>
            </div>
          </article>
        </div>
        <p class="project-disclaimer">Selected projects from my CV. Add only screenshots, code, or implementation details you are authorized to share.</p>
      </section>

      <section class="skills section-wrap section-pad" id="skills">
        <div class="section-heading">
          <p class="eyebrow">03 — TOOLKIT</p>
          <h2>Technologies I <span class="gradient-text">work with.</span></h2>
          <p class="section-intro">A practical toolkit for building, shipping, and maintaining modern applications.</p>
        </div>
        <div class="skill-grid">
          <div class="skill-card" *ngFor="let group of skillGroups">
            <div class="skill-card-top"><span class="skill-symbol">{{ group.symbol }}</span><span class="skill-index">{{ group.index }}</span></div>
            <h3>{{ group.title }}</h3><p>{{ group.description }}</p>
            <div class="skill-tags"><span *ngFor="let item of group.items">{{ item }}</span></div>
          </div>
        </div>
        <div class="learning-strip"><span class="learning-icon">↗</span><div><b>Currently deepening my skills</b><p>Docker · Kubernetes · Microservices patterns · Messaging · Distributed tracing</p></div><span class="learning-badge">IN PROGRESS</span></div>
      </section>

      <section class="contact section-wrap section-pad" id="contact">
        <div class="contact-panel">
          <div class="contact-copy">
            <p class="eyebrow">04 — LET'S CONNECT</p>
            <h2>Let's build something <span class="gradient-text">useful.</span></h2>
            <p>I'm seeking a mid-level full-stack role building scalable, well-architected systems with ASP.NET Core, Angular, and SQL Server.</p>
            <a class="contact-line" href="mailto:mohamedhmdeen@gmail.com"><span class="contact-icon">✉</span><span><small>EMAIL ME</small><b>mohamedhmdeen&#64;gmail.com</b></span><span class="contact-arrow">↗</span></a>
            <a class="contact-line" href="https://www.linkedin.com/in/mohamed-hamdeen" target="_blank" rel="noreferrer"><span class="contact-icon">in</span><span><small>CONNECT ON LINKEDIN</small><b>linkedin.com/in/mohamed-hamdeen</b></span><span class="contact-arrow">↗</span></a>
            <a class="contact-line" href="https://github.com/mohamedhamadien" target="_blank" rel="noreferrer"><span class="contact-icon">GH</span><span><small>CODE & PROJECTS</small><b>github.com/mohamedhamadien</b></span><span class="contact-arrow">↗</span></a>
          </div>
          <div class="contact-form-card">
            <div class="form-title"><span class="eyebrow">QUICK MESSAGE</span><span class="form-icon">↗</span></div>
            <h3>Start a conversation</h3>
            <p>Use this form to open a pre-filled email in your mail app.</p>
            <form (submit)="sendMessage($event)">
              <label for="name">Your name</label><input id="name" name="name" type="text" placeholder="Jane Smith" required>
              <label for="email">Email address</label><input id="email" name="email" type="email" placeholder="jane@company.com" required>
              <label for="message">What would you like to discuss?</label><textarea id="message" name="message" rows="4" placeholder="Tell me a little about the opportunity..." required></textarea>
              <button class="button button-primary submit-button" type="submit">Prepare email <span>↗</span></button>
            </form>
            <p class="form-note">No data is stored by this website.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer section-wrap">
      <a class="brand" href="#home"><span class="brand-mark">&lt;/&gt;</span><span>Mohamed <b>Hamdeen Zaki</b></span></a>
      <p>Full-stack .NET developer. Built with intention.</p>
      <a href="#home" class="back-top">BACK TO TOP ↑</a>
      <div class="footer-bottom"><span>© {{ currentYear }} Mohamed Hamdeen Zaki</span><span>C# · ASP.NET Core · Angular · SQL Server</span><span class="footer-status"><span class="status-dot"></span> Always learning</span></div>
    </footer>

    <div class="modal-backdrop" *ngIf="selectedProject" (click)="closeProject()" role="presentation">
      <section class="project-modal" role="dialog" aria-modal="true" [attr.aria-label]="selectedProject.title + ' case study'" (click)="$event.stopPropagation()">
        <button type="button" class="modal-close" (click)="closeProject()" aria-label="Close case study">×</button>
        <p class="eyebrow">PROJECT CASE STUDY · {{ selectedProject.number }}</p>
        <h2>{{ selectedProject.title }}</h2>
        <p class="modal-description">{{ selectedProject.description }}</p>
        <h3>Focus areas</h3>
        <ul class="modal-list"><li *ngFor="let detail of selectedProject.details">{{ detail }}</li></ul>
        <div class="tag-list"><span *ngFor="let tag of selectedProject.tags">{{ tag }}</span></div>
        <p class="modal-note">Add your own implementation notes, screenshots, and repository link before sharing this case study publicly.</p>
        <button type="button" class="button button-primary" (click)="closeProject()">Close case study</button>
      </section>
    </div>
  `,
})
export class AppComponent {
  menuOpen = false;
  selectedProject: Project | null = null;
  currentYear = new Date().getFullYear();

  projects: Project[] = [
    {
      number: '01',
      category: 'CLOUD NATIVE',
      title: '.NET Microservices on Kubernetes',
      description: 'A personal project building and containerizing ASP.NET Core microservices with Redis caching, RabbitMQ messaging, SQL Server, and Kubernetes.',
      tags: ['.NET 10', 'ASP.NET Core', 'EF Core', 'SQL Server', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes'],
      icon: '◇',
      className: 'visual-micro',
      status: 'PERSONAL PROJECT',
      details: [
        'Built Product, Order, Inventory, and supporting services with ASP.NET Core Web API.',
        'Used Docker multi-stage builds and Docker Compose for local environments.',
        'Added Redis caching and asynchronous service-to-service communication with RabbitMQ.',
        'Deployed to Minikube using Deployments, Services, Persistent Volumes, and Persistent Volume Claims.',
      ],
    },
    {
      number: '02',
      category: 'REAL-TIME WEB',
      title: 'Private Lessons Platform',
      description: 'An online platform connecting students with private tutors, featuring tutor booking and real-time notifications via SignalR.',
      tags: ['ASP.NET Web API', 'EF Core', 'LINQ', 'SignalR', 'JavaScript', 'Bootstrap'],
      icon: '↗',
      className: 'visual-bot',
      status: 'ITI GRADUATION PROJECT',
      details: [
        'Connected students and tutors through an online lesson marketplace.',
        'Implemented private tutor booking flows and relational data access.',
        'Added real-time notifications with SignalR.',
        'Built the platform with ASP.NET Web API, EF Core, LINQ, JavaScript, and Bootstrap.',
      ],
    },
    {
      number: '03',
      category: 'DESKTOP APPLICATION',
      title: 'Clinic Management System',
      description: 'A Windows Forms desktop application for managing clinic patients, appointments, and medical records.',
      tags: ['Windows Forms', 'Entity Framework', 'LINQ'],
      icon: '＋',
      className: 'visual-health',
      status: 'PERSONAL PROJECT',
      details: [
        'Managed patient records and appointment workflows for a clinic.',
        'Implemented data access with Entity Framework and LINQ.',
        'Focused on a practical desktop workflow for day-to-day clinic operations.',
      ],
    },
  ];

  skillGroups = [
    { index: '01', symbol: '⌘', title: 'Languages', description: 'Application and query code', items: ['C#', 'TypeScript', 'JavaScript', 'SQL'] },
    { index: '02', symbol: '◈', title: 'Backend', description: 'APIs and application services', items: ['ASP.NET Core', 'ASP.NET MVC', 'Web API', 'EF Core', 'LINQ', 'SignalR', 'Hangfire', 'JWT'] },
    { index: '03', symbol: '▤', title: 'Frontend', description: 'Interfaces and client apps', items: ['Angular', 'HTML5', 'CSS3', 'Bootstrap'] },
    { index: '04', symbol: '⌁', title: 'Data', description: 'Persistence and performance', items: ['SQL Server', 'Stored procedures', 'Indexing', 'Query optimization', 'Redis'] },
    { index: '05', symbol: '◇', title: 'Architecture', description: 'Scalable engineering practices', items: ['Clean Architecture', 'CQRS', 'SOLID', 'OOP', 'Microservices', 'Messaging'] },
    { index: '06', symbol: '↗', title: 'DevOps & Tools', description: 'Containerization and delivery', items: ['Docker', 'Docker Compose', 'Kubernetes', 'Minikube', 'RabbitMQ', 'Git/GitHub', 'Firebase'] },
  ];

  openProject(project: Project): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

  sendMessage(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:mohamedhmdeen@gmail.com?subject=${subject}&body=${body}`;
  }
}
