export const profile = {
  name: "Sarath A",
  firstName: "Sarath",
  role: "MERN Stack Developer",
  location: "Thrissur, Kerala, India",
  email: "Sarathjithu89@gmail.com",
  phone: "+91 90734 4731",
  phoneHref: "+919074344731",
  availability: "Open to full-stack developer roles",
  tagline:
    "I build scalable, user-friendly web applications with React, Node.js and MongoDB.",
  summary: [
    "Full-stack web developer specializing in the MERN stack, with a strong interest in building and deploying scalable web applications.",
    "Experienced in JavaScript, Node.js, Express, React and MongoDB, with working knowledge of AWS, Nginx and MySQL. I care about clean architecture, responsive interfaces and real-world performance.",
  ],
  resumeUrl: "/resume/Sarath-A-Resume.pdf",
  links: {
    github: "https://github.com/Sarathjithu89",
    linkedin: "https://www.linkedin.com/in/sarath-a-8601a5201",
    leetcode: "https://leetcode.com/u/SdcKy3s6bH/",
  },
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const highlights = [
  {
    icon: "code",
    title: "Full-Stack Development",
    description:
      "Comfortable across the stack, from React interfaces and REST APIs to MongoDB data models.",
  },
  {
    icon: "cloud",
    title: "Scalable Deployment",
    description:
      "Hands-on experience deploying applications with AWS EC2, Nginx, Render and Vercel.",
  },
  {
    icon: "layers",
    title: "Clean Architecture",
    description:
      "I follow MVC and SOLID principles to keep code modular, readable and easy to maintain.",
  },
];

export const softSkills = [
  "Problem Solving & Debugging",
  "Team Collaboration & Communication",
  "Adaptability & Quick Learning",
  "Time Management & Ownership",
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Database",
    icon: "database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Cloud & Deployment",
    icon: "cloud",
    skills: ["AWS EC2", "Nginx", "Render", "Vercel"],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "Figma", "Blender", "CAD"],
  },
  {
    title: "Concepts",
    icon: "layers",
    skills: ["MVC Architecture", "SOLID Principles", "Responsive Design"],
  },
];

export const projects = [
  {
    title: "vidMeet",
    subtitle: "Real-time Video Conferencing",
    featured: true,
    icon: "video",
    description:
      "A full-stack video conferencing platform for low-latency peer-to-peer calls, live chat, meeting history and subscription-based limits.",
    features: [
      "Create or join peer-to-peer video meetings with unique IDs",
      "Real-time chat with unread badges and persisted history",
      "Mic, camera, participant list and invite-link controls",
      "Clerk authentication, webhooks and free/premium plan limits",
      "Meeting history with participant logs and chat transcripts",
    ],
    tech: [
      "React 19",
      "Tailwind CSS",
      "WebRTC",
      "Socket.IO",
      "Node.js",
      "Express",
      "Clerk",
      "Neon PostgreSQL",
    ],
    github: "https://github.com/Sarathjithu89/vidMeet",
    live: "https://vid-meet-pearl.vercel.app",
    caseStudy: {
      problem:
        "Video calling is expensive to host when every stream passes through a media server. I wanted to build a practical meeting app where participants connect directly, while the backend handles rooms, permissions, chat and history.",
      architecture: [
        "React 19 client",
        "Clerk auth",
        "Express API",
        "Socket.IO signaling",
        "WebRTC peers",
        "Neon PostgreSQL",
      ],
      challenge: {
        title: "Connecting multiple peers without a media server",
        solution:
          "Socket.IO exchanges offers, answers and ICE candidates, then each browser opens a direct RTCPeerConnection. Room membership, plan limits and meeting status are verified on the server before a peer can join.",
      },
      decisions: [
        {
          title: "Socket.IO for signaling and chat",
          detail:
            "One persistent connection handles room presence, WebRTC signaling and real-time messages.",
        },
        {
          title: "Clerk for authentication and billing",
          detail:
            "Clerk webhooks sync users into PostgreSQL, while the pricing table handles upgrades.",
        },
        {
          title: "Server-side plan enforcement",
          detail:
            "Free-plan limits are checked in the API and socket layer instead of relying on the UI.",
        },
      ],
      next: "Add TURN servers for restrictive NATs, screen sharing, reconnection handling, and end-to-end tests around the WebRTC flow.",
    },
  },
  {
    title: "ZapStore",
    subtitle: "E-commerce Platform",
    featured: true,
    icon: "cart",
    description:
      "A server-rendered e-commerce platform for electronics with a customer storefront, admin dashboard, Razorpay checkout and full order management.",
    features: [
      "Product catalog with search, filters, wishlist and cart",
      "Razorpay checkout with coupons, offers and wallet credits",
      "Customer profiles, addresses, orders, returns and referrals",
      "Admin CRUD for products, brands, categories and inventory",
      "Sales reports plus customer and order management",
      "Reusable EJS views for consistent storefront and admin pages",
    ],
    tech: [
      "EJS",
      "Bootstrap",
      "Vanilla JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redis",
      "JWT",
      "Razorpay",
      "AWS",
    ],
    github: "https://github.com/Sarathjithu89/Zapstore",
    live: null,
    caseStudy: {
      problem:
        "An electronics store needs a catalog, cart, checkout, offers, order tracking and an admin view that shows what is actually selling, without requiring a separate frontend build pipeline.",
      architecture: [
        "EJS + Bootstrap",
        "Express routes",
        "Controllers",
        "MongoDB + Mongoose",
        "Redis sessions",
        "Razorpay",
      ],
      challenge: {
        title: "Keeping server-rendered pages consistent",
        solution:
          "Reusable EJS partials and an MVC controller structure keep the customer and admin screens consistent, while Multer and Sharp handle product image uploads and processing.",
      },
      decisions: [
        {
          title: "EJS over a single-page app",
          detail:
            "Server-side rendering keeps catalog and product pages SEO-friendly and fast on first load.",
        },
        {
          title: "Redis-backed sessions",
          detail:
            "Session state lives outside process memory, so the app is not tied to one server instance.",
        },
        {
          title: "Split admin and customer flows",
          detail:
            "Separate routes, controllers and views keep admin operations away from customer-facing logic.",
        },
      ],
      next: "Add automated tests, CDN-backed product images and a dedicated search index as the catalog grows.",
    },
  },
  {
    title: "Student Management",
    subtitle: "TypeScript Backend",
    featured: false,
    icon: "users",
    description:
      "A TypeScript and Node.js backend for managing student records with a modular repository structure.",
    features: [
      "Full CRUD operations for student records",
      "Input validation and consistent error handling",
      "Modular repository-based code structure",
    ],
    tech: ["TypeScript", "Node.js", "REST APIs"],
    github: "https://github.com/Sarathjithu89/Student-management",
    live: "https://student-management-liard-two.vercel.app",
    caseStudy: {
      problem:
        "Student records are often managed in spreadsheets, which makes validation, duplicate handling and consistent CRUD operations difficult.",
      architecture: [
        "TypeScript client",
        "Node.js API",
        "Validation layer",
        "Repository layer",
        "Database",
      ],
      challenge: {
        title: "Keeping CRUD logic maintainable as rules grow",
        solution:
          "Separated repository, validation and error-handling concerns so route handlers stay focused on HTTP and business rules do not leak across the codebase.",
      },
      decisions: [
        {
          title: "TypeScript for safer contracts",
          detail:
            "Types make request and response shapes explicit and catch integration mistakes early.",
        },
        {
          title: "Repository pattern",
          detail:
            "Database access lives behind a small module, which keeps controllers readable and testable.",
        },
        {
          title: "Central error handling",
          detail:
            "Validation failures and server errors return consistent responses instead of scattered try/catch blocks.",
        },
      ],
      next: "Add pagination, authentication and integration tests for the main CRUD workflows.",
    },
  },
  {
    title: "To-Do Application",
    subtitle: "React Task Manager",
    featured: false,
    icon: "check",
    description:
      "A task management app built with React functional components and hooks, with browser persistence.",
    features: [
      "Add, edit, complete and delete tasks",
      "localStorage persistence across refreshes",
      "Reusable components and conditional rendering",
    ],
    tech: ["React.js", "JavaScript", "localStorage"],
    github: "https://github.com/Sarathjithu89/React-todo-App",
    live: null,
    caseStudy: {
      problem:
        "I wanted a focused React exercise that covered real component state changes, editing flows and persistence rather than a static list.",
      architecture: [
        "React components",
        "Custom state logic",
        "localStorage",
      ],
      challenge: {
        title: "Keeping the UI in sync with persisted state",
        solution:
          "Tasks live in one state tree, with every create, edit, toggle and delete updating both the interface and localStorage so a refresh restores the same list.",
      },
      decisions: [
        {
          title: "Functional components and hooks",
          detail:
            "Kept state and behaviour close to the UI without adding a global state library.",
        },
        {
          title: "Reusable task components",
          detail:
            "A single task item handles display, edit and completion states through props.",
        },
        {
          title: "Conditional rendering",
          detail:
            "Empty, editing and completed states are handled explicitly instead of being hidden with CSS.",
        },
      ],
      next: "Add filters, drag-and-drop ordering and optional backend sync for multi-device use.",
    },
  },
];

export const experience = [
  {
    role: "Design Engineer",
    company: "EPCON Electrical Consulting",
    period: "2023 – 2024",
    description:
      "Worked as a design engineer in electrical consulting before moving into full-stack development. The role strengthened my attention to detail, structured problem-solving and ownership of complex projects.",
  },
];

export const education = [
  {
    title: "MERN Stack Development",
    institution: "Brototype",
    period: "2024 – 2025",
  },
  {
    title: "B.Tech",
    institution: "Electrical and Electronics Engineering",
    period: "2020 – 2023",
  },
  {
    title: "Diploma",
    institution: "Electrical and Electronics Engineering",
    period: "2017 – 2020",
  },
  {
    title: "Higher Secondary",
    institution: "Bio-Maths",
    period: "2015 – 2017",
  },
];
