import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2, Calendar, CheckCircle2, Youtube, Sparkles, Users, MessageSquare, Zap, ShieldCheck, Database, Layers } from "lucide-react";
import cuppuPreview from "../assets/cuppu.png";
import contextTubePreview from "../assets/contexttube.png";

const projects = [
    {
        title: "Context Tube",
        subtitle: "AI-Powered Video RAG & Semantic Intelligence",
        description: "An AI-powered Retrieval-Augmented Generation (RAG) platform that processes YouTube videos and enables interactive, context-aware question answering over video content with semantic vector retrieval.",
        highlights: [
            "Architected semantic search using PostgreSQL with pgvector, storing 768-dimensional embeddings generated through Google Gemini API.",
            "Designed an asynchronous processing pipeline using Upstash Workflow and QStash for transcript processing, translation, chunking, and vectorization.",
            "Implemented retry handling with exponential backoff and ScrapeOps proxy aggregation to handle Gemini API rate limits and YouTube IP restrictions.",
            "Containerized the application using multi-stage Next.js Docker builds, reducing the deployment image from approximately 1GB to 120MB."
        ],
        tags: ["Next.js", "PostgreSQL", "pgvector", "Drizzle ORM", "Upstash", "Google GenAI SDK", "Docker"],
        links: {
            demo: "https://context-tube.vercel.app/",
            code: "https://github.com/akash010220221/ContextTube"
        },
        image: contextTubePreview,
        mockupType: "image",
        badge: "AI · Full-Stack RAG"
    },
    {
        title: "Dev Match",
        subtitle: "Developer Networking & Real-Time Collaboration Hub",
        description: "A developer networking platform featuring a Tinder-style discovery feed and bidirectional connection system with Redux Toolkit-based state management, live chat, and premium subscription access.",
        highlights: [
            "Built a developer networking platform featuring a Tinder-style discovery feed and bidirectional connection system with Redux Toolkit state.",
            "Built a real-time chat system using Socket.io with optimistic UI updates, cursor-based pagination, and reverse infinite scrolling for efficient message loading.",
            "Designed scalable security and media pipelines with direct-to-cloud uploads using Cloudinary, Redis-backed rate limiting, OTP auth, and OAuth 2.0 (Google/GitHub).",
            "Integrated Razorpay payments with webhook signature verification for premium membership provisioning and access control."
        ],
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "Socket.io", "Cloudinary", "Razorpay"],
        links: {
            demo: "https://devmatch-connect.vercel.app/",
            code: "https://github.com/akash010220221/DevMatch"
        },
        mockupType: "devMatch",
        badge: "Real-Time SaaS"
    },
    {
        title: "Cuppu",
        subtitle: "Digital Coupon & Expiration Management Platform",
        description: "A comprehensive coupon organizer built to eliminate discount code loss and expiration through automated alerting, advanced search/sort, and secure JWT-based access control.",
        highlights: [
            "Created an automated background service using Nodemailer to trigger real-time expiration alerts, effectively mitigating user asset loss through timely notifications.",
            "Engineered a responsive frontend with advanced filtering and sorting algorithms, optimizing the retrieval of digital assets and improving application accessibility.",
            "Designed and implemented a secure authentication and authorization system using JWT, ensuring protected access to user-specific coupon data."
        ],
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Nodemailer"],
        links: {
            demo: "https://coupon-organizer.vercel.app/",
            code: "https://github.com/akash010220221/Cuppu"
        },
        image: cuppuPreview,
        mockupType: "image",
        badge: "Full-Stack Web App"
    },
    {
        title: "EventDash",
        subtitle: "Event Planning & Coordination Dashboard",
        description: "An intuitive event operations management dashboard engineered with PHP, MySQL, and modern front-end technologies for tracking event timelines, guest registries, and venue schedules.",
        highlights: [
            "Event analytics, guest registry management & real-time schedule coordinator",
            "Custom backend API handling with secure authentication and database persistence",
            "Modular, responsive dashboard interface engineered with responsive components"
        ],
        tags: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "Tailwind CSS"],
        links: {
            demo: "https://github.com/akash010220221/Planning_Dashboard",
            code: "https://github.com/akash010220221/Planning_Dashboard"
        },
        mockupType: "eventDash",
        badge: "Management Tool"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 border-t border-slate-800/80 bg-[#0b0f17]">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-2">
                        <FolderGit2 size={15} />
                        <span>Case Studies & Systems</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
                        A selection of full-stack web applications, AI systems, and real-time platforms engineered with modern production standards.
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            viewport={{ once: true }}
                            className="bg-[#111724] border border-slate-800/90 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 shadow-xl shadow-black/40"
                        >
                            {/* Browser Mockup Chrome Bar */}
                            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d121c] border-b border-slate-800/80">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60 inline-block"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60 inline-block"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60 inline-block"></span>
                                </div>
                                <div className="text-[11px] font-mono text-slate-500 bg-slate-900/60 px-3 py-0.5 rounded-full border border-slate-800/60 truncate max-w-[220px]">
                                    {project.title.toLowerCase().replace(/\s+/g, "")}.akash.dev
                                </div>
                                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded">
                                    {project.badge}
                                </span>
                            </div>

                            {/* Project Content Grid */}
                            <div className="grid lg:grid-cols-12 gap-0">
                                {/* Preview Showcase Area */}
                                <div className="lg:col-span-5 relative bg-[#090d15] overflow-hidden min-h-[220px] lg:min-h-full flex items-center justify-center p-4 border-b lg:border-b-0 lg:border-r border-slate-800/70">
                                    {project.mockupType === "contextTube" ? (
                                        /* Engineered Preview for Context Tube */
                                        <div className="w-full h-full p-4 rounded-xl bg-[#0f1420] border border-slate-800 flex flex-col justify-between">
                                            <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded bg-red-500/20 text-red-400 flex items-center justify-center">
                                                        <Youtube size={12} />
                                                    </div>
                                                    <span className="text-xs font-semibold text-white truncate max-w-[150px]">Context Tube AI</span>
                                                </div>
                                                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                                                    <Sparkles size={10} /> pgvector
                                                </span>
                                            </div>

                                            <div className="py-3 space-y-2">
                                                <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300">
                                                    <div className="text-[9px] font-mono text-indigo-400 uppercase">Semantic Query</div>
                                                    "Summarize key algorithms in this video..."
                                                </div>
                                                <div className="p-2 rounded bg-indigo-950/40 border border-indigo-500/30 text-[11px] text-indigo-200">
                                                    <div className="text-[9px] font-mono text-emerald-400 uppercase flex items-center gap-1">
                                                        <Sparkles size={9} /> Gemini RAG Response
                                                    </div>
                                                    Cosine similarity retrieved 3 relevant transcript chunks in 85ms.
                                                </div>
                                            </div>

                                            <div className="text-[10px] text-slate-500 font-mono pt-2 border-t border-slate-800 flex items-center justify-between">
                                                <span>Upstash Workflow</span>
                                                <span className="text-slate-400">Docker 120MB</span>
                                            </div>
                                        </div>
                                    ) : project.mockupType === "devMatch" ? (
                                        /* Engineered Preview for Dev Match */
                                        <div className="w-full h-full p-4 rounded-xl bg-[#0f1420] border border-slate-800 flex flex-col justify-between">
                                            <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                                                        <Users size={12} />
                                                    </div>
                                                    <span className="text-xs font-semibold text-white">DevMatch Feed</span>
                                                </div>
                                                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Socket.io Live
                                                </span>
                                            </div>

                                            <div className="py-3 space-y-2">
                                                <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                                                    <div>
                                                        <div className="text-xs font-semibold text-white">Senior Backend Dev</div>
                                                        <div className="text-[10px] font-mono text-slate-400">Node · Redis · MongoDB</div>
                                                    </div>
                                                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">
                                                        98% Match
                                                    </span>
                                                </div>
                                                <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center gap-2 text-[11px] text-slate-300">
                                                    <MessageSquare size={13} className="text-indigo-400 shrink-0" />
                                                    <span className="truncate">"Hey, let's collaborate on the system design..."</span>
                                                </div>
                                            </div>

                                            <div className="text-[10px] text-slate-500 font-mono pt-2 border-t border-slate-800 flex items-center justify-between">
                                                <span>Razorpay Webhooks</span>
                                                <span className="text-emerald-400">Cloudinary Direct</span>
                                            </div>
                                        </div>
                                    ) : project.mockupType === "eventDash" ? (
                                        /* Engineered Preview for EventDash */
                                        <div className="w-full h-full p-4 rounded-xl bg-[#0f1420] border border-slate-800 flex flex-col justify-between">
                                            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={16} className="text-amber-400" />
                                                    <span className="text-xs font-semibold text-white">Event Dashboard</span>
                                                </div>
                                                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                                    Active
                                                </span>
                                            </div>
                                            <div className="py-4 space-y-2">
                                                <div className="p-2 rounded bg-slate-900/80 border border-slate-800/80 flex items-center justify-between text-xs">
                                                    <span className="text-slate-300">Wedding Reception</span>
                                                    <span className="text-[11px] font-mono text-slate-400">140 Guests</span>
                                                </div>
                                                <div className="p-2 rounded bg-slate-900/80 border border-slate-800/80 flex items-center justify-between text-xs">
                                                    <span className="text-slate-300">Tech Conference Keynote</span>
                                                    <span className="text-[11px] font-mono text-indigo-400">Scheduled</span>
                                                </div>
                                            </div>
                                            <div className="text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-800">
                                                PHP Backend · Modular Architecture
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            href={project.links.demo || project.links.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full h-full rounded-xl overflow-hidden border border-slate-800/80 relative group block cursor-pointer"
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-indigo-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 text-white text-xs font-medium backdrop-blur-sm shadow-xl">
                                                    <span>View Live Site</span>
                                                    <ExternalLink size={12} className="text-indigo-400" />
                                                </span>
                                            </div>
                                        </a>
                                    )}
                                </div>

                                {/* Project Description & Specs */}
                                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="mb-3">
                                            <h3 className="text-2xl font-bold text-white tracking-tight">
                                                {project.title}
                                            </h3>
                                            <div className="text-xs font-medium text-indigo-400 font-mono mt-0.5">
                                                {project.subtitle}
                                            </div>
                                        </div>

                                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                                            {project.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="space-y-2 mb-6">
                                            {project.highlights.map((item, hIdx) => (
                                                <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                                                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tech Badges */}
                                        <div className="flex flex-wrap gap-1.5 mb-8">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[11px] font-mono text-slate-300 bg-slate-800/70 border border-slate-700/60 px-2.5 py-1 rounded-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/70">
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-sm shadow-indigo-600/30"
                                            >
                                                <span>Live Demo</span>
                                                <ExternalLink size={13} />
                                            </a>
                                        )}
                                        {project.links.code && (
                                            <a
                                                href={project.links.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white text-xs font-medium transition-colors"
                                            >
                                                <Github size={13} />
                                                <span>Source Code</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
