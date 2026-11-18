// All site content lives here so text is easy to edit.
// Every fact below comes from Muhammad Mubasher's CV — nothing invented:
// no fake testimonials, clients, stats, or social links.

export const profile = {
  name: "Muhammad Mubasher",
  firstName: "Mubasher",
  title: "Full-Stack Developer | Agentic AI Developer",
  heroLine1: "I'm a Full-Stack Developer",
  heroLine2: "and Agentic AI Developer.",
  intro:
    "Full-stack developer focused on building modern web applications and exploring agentic AI systems. Works with JavaScript/TypeScript, React, Next.js, Node.js, and Supabase, with hands-on experience in API integrations, workflow automation, and AI-assisted development. Interested in building practical AI agents and intelligent tools that connect models, APIs, and business workflows.",
  heroShort:
    "I build modern web apps and intelligent AI workflows — from idea to live product. React, Next.js, Node.js, Supabase and AI APIs, connected into tools that work for real businesses.",
  email: "withm345@gmail.com",
  phone: "+92 329 434 0393",
  phoneHref: "tel:+923294340393",
  location: "Lahore, Pakistan",
  timezone: "PKT (GMT+5)",
  linkedin: "https://www.linkedin.com/in/muhammad-mubasher2/",
  cvHref: "/Muhammad_Mubasher_CV.pdf",
};

export const techStackRow1 = [
  "JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS",
];
export const techStackRow2 = [
  "Node.js", "Supabase", "OpenAI API", "Gemini API", "n8n", "REST APIs", "Git & GitHub", "WordPress",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: "Web Development" | "AI & Automation" | "Workflow";
  color: string; // solid panel colour, Twambi-style
  mock: "browser" | "phone" | "flow" | "sheet";
  mockLines: string[];
};

export const projects: Project[] = [
  {
    title: "SecureSite Studio",
    description:
      "Website-builder platform with reusable components, a dynamic page renderer and Supabase.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Web Development"],
    category: "Web Development",
    color: "#84cc16",
    mock: "browser",
    mockLines: ["SecureSite Studio", "Next.js · TypeScript · Tailwind", "Dynamic page renderer"],
  },
  {
    title: "AI & Workflow Automation",
    description:
      "Workflow concepts integrating AI APIs, webhooks and business processes using n8n.",
    tags: ["OpenAI API", "Gemini API", "n8n", "Webhooks", "AI & Automation"],
    category: "AI & Automation",
    color: "#f87171",
    mock: "flow",
    mockLines: ["AI API → n8n → Business process", "Webhook in · workflow · action out"],
  },
  {
    title: "WhatsApp Restaurant Ordering Workflow",
    description:
      "Automation connecting WhatsApp ordering with Google Sheets menu and inventory data and interactive customer options.",
    tags: ["WhatsApp", "Google Sheets", "n8n", "Automation", "Workflow"],
    category: "Workflow",
    color: "#7c3aed",
    mock: "phone",
    mockLines: ["WhatsApp ordering", "Menu from Google Sheets", "Interactive customer options"],
  },
  {
    title: "Lead Collection Workflow",
    description:
      "n8n workflow to collect business contact details from websites and organise results in Google Sheets.",
    tags: ["n8n", "Google Sheets", "Web Scraping", "Workflow"],
    category: "Workflow",
    color: "#111827",
    mock: "sheet",
    mockLines: ["Business · Contact · Website", "Collected → organised in Sheets"],
  },
];

export const projectFilters = ["All", "Web Development", "AI & Automation", "Workflow"] as const;

export const experience = [
  {
    role: "Off-Page SEO",
    company: "Red Vision LLC",
    date: "", // CV lists no dates for this role — leave blank rather than inventing them
    type: "Full time",
    location: "Remote",
    description:
      "Link building, guest posting, blogger outreach, business listings and citations — white-hat SEO. Additional website work: WordPress, HTML, CSS, JavaScript, responsive layouts and website maintenance.",
    initials: "RV",
    color: "#ea580c",
  },
];

export const education = [
  {
    degree: "Diploma of Associate Engineering (DAE)",
    school: "Malaysian Institute of Technology",
    date: "2022 – 2025",
    location: "Pakistan",
    description:
      "Diploma of Associate Engineering — technical diploma covering engineering fundamentals and applied study.",
    initials: "MIT",
    color: "#2563eb",
  },
  {
    degree: "Matric, Computer Science",
    school: "Govt. Farooqi Islamia Boys High School",
    date: "2019 – 2022",
    location: "Pakistan",
    description:
      "Matriculation in Computer Science — foundational computing, programming concepts and mathematics.",
    initials: "GF",
    color: "#059669",
  },
];

export const processSteps = [
  { n: "01", title: "Research", text: "Understanding user needs, business goals, and the problem before writing any code." },
  { n: "02", title: "Define & Ideate", text: "Defining the problem clearly, then exploring solutions, structure and workflows." },
  { n: "03", title: "Design", text: "Clean, responsive interfaces and component structure that are simple to use and maintain." },
  { n: "04", title: "Testing", text: "Checking the build across screens and flows, fixing issues, and refining the details." },
  { n: "05", title: "Development", text: "Building scalable, working solutions — then optimising and deploying them." },
];

export const services = [
  {
    title: "Full-Stack Web Development",
    text: "Modern, responsive web applications built with React, Next.js, TypeScript and Tailwind CSS — backed by Node.js, REST APIs and Supabase.",
    color: "#dbeafe",
    mock: "browser" as const,
    mockLines: ["<Next.js />  React · TypeScript", "Tailwind CSS · Supabase · REST APIs"],
  },
  {
    title: "Agentic AI & Automation",
    text: "Practical AI agents and intelligent tools that connect models, APIs and business workflows — OpenAI and Gemini integrations, n8n workflows and webhooks.",
    color: "#ede9fe",
    mock: "flow" as const,
    mockLines: ["LLM → n8n → webhook → action", "AI-assisted development"],
  },
  {
    title: "Off-Page SEO & WordPress",
    text: "White-hat link building, guest posting, blogger outreach and business listings/citations — plus WordPress sites, responsive layouts and maintenance.",
    color: "#fef3c7",
    mock: "browser" as const,
    mockLines: ["WordPress · Elementor", "Link building · Citations · Outreach"],
  },
];

export const whyChooseMe = [
  {
    title: "Popular Services",
    text: "End-to-end web development and AI workflow automation — from idea to a live, working product.",
    dark: false,
    pills: ["Full-Stack", "Agentic AI", "Automation"],
  },
  {
    title: "Robust products",
    text: "Clean, maintainable code with reusable components, typed schemas and structured data — built to keep working, not just to launch.",
    dark: true,
    pills: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    title: "Vast Knowledge",
    text: "Broad expertise across frontend, backend, AI APIs, automation and SEO — so one person can carry a project across the stack.",
    dark: false,
    pills: ["React", "Node.js", "n8n", "WordPress", "SEO"],
  },
];

export const tools = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js",
  "Supabase", "OpenAI API", "Gemini API", "n8n", "Git", "GitHub", "WordPress", "Elementor",
];

export const stats = [
  { value: 4, suffix: "", label: "Selected Projects" },
  { value: 15, suffix: "+", label: "Tools & Technologies" },
  { value: 2, suffix: "", label: "Languages" },
];

export const languages = [
  { name: "Urdu", level: "Native" },
  { name: "English", level: "Basic" },
];

export const faqs = [
  {
    q: "Are you available for freelance or full-time work?",
    a: "Yes — I'm open to freelance collaborations and full-time opportunities working on web development and AI automation. Reach out with the details of your project and we can discuss fit and timing.",
  },
  {
    q: "Where are you based? Can you work remotely?",
    a: "I'm based in Lahore, Pakistan (PKT, GMT+5) and fully set up for remote work. I collaborate with clients online and adapt to different time zones.",
  },
  {
    q: "How can I contact you?",
    a: "You can reach me by email at withm345@gmail.com, by phone at +92 329 434 0393, through LinkedIn, or using the contact form on this site.",
  },
  {
    q: "What tools and technologies do you work with?",
    a: "React, Next.js, TypeScript and JavaScript with Tailwind CSS on the frontend; Node.js, REST APIs and Supabase on the backend; OpenAI and Gemini APIs for AI features; n8n and webhooks for automation; plus Git/GitHub, WordPress and Elementor.",
  },
  {
    q: "How do you charge for a project?",
    a: "Pricing depends on the scope and complexity of the project — we discuss the requirements first and agree on a fair price before work starts. No fixed rate is listed here because every project is different.",
  },
  {
    q: "What is your process?",
    a: "Research first — understanding the goal and the users — then defining the scope, designing and building, testing across screens, and finally deploying. I keep you involved throughout so the final product matches the goal.",
  },
];

export const timeSlots = ["09:00", "10:30", "13:00", "14:30", "16:00"];
