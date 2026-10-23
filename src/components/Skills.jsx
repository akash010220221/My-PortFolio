import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Layers, Cpu, Sparkles, Users, Compass, Lightbulb } from "lucide-react";

const skillCategories = [
    {
        title: "Languages & Core CS",
        icon: Cpu,
        description: "Algorithmic problem solving, object-oriented principles, and scalable system design.",
        skills: [
            {
                name: "C++",
                badge: "DSA & Core",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            },
            {
                name: "Java",
                badge: "OOP Foundations",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            },
            {
                name: "JavaScript",
                badge: "ES6+ / Modern",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
                name: "Data Structures",
                badge: "500+ Solved",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg"
            }
        ]
    },
    {
        title: "Frameworks & Libraries",
        icon: Layers,
        description: "Modern frontend and backend frameworks for high-performance responsive web applications.",
        skills: [
            {
                name: "React.js",
                badge: "Primary",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            },
            {
                name: "Next.js",
                badge: "SSR / RAG",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                invertDark: true
            },
            {
                name: "Node.js",
                badge: "Runtime",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            },
            {
                name: "Express.js",
                badge: "REST APIs",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                invertDark: true
            },
            {
                name: "HTML5 & CSS3",
                badge: "Foundations",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            },
            {
                name: "Tailwind CSS",
                badge: "Styling",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
            }
        ]
    },
    {
        title: "Databases & Storage",
        icon: Database,
        description: "Relational and document storage, vector search databases, and low-latency cache stores.",
        skills: [
            {
                name: "MySQL",
                badge: "Relational SQL",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            },
            {
                name: "MongoDB",
                badge: "NoSQL Store",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            },
            {
                name: "PostgreSQL",
                badge: "pgvector & SQL",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            },
            {
                name: "Redis",
                badge: "Cache & Rate Limit",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
            }
        ]
    },
    {
        title: "Tools, DevOps & Platforms",
        icon: Wrench,
        description: "DevOps containerization, real-time WebSockets, cloud asset handling, and API workflows.",
        skills: [
            {
                name: "Docker",
                badge: "Containers",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            },
            {
                name: "Git & GitHub",
                badge: "VCS & CI/CD",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            },
            {
                name: "Postman",
                badge: "API Testing",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
            },
            {
                name: "Socket.io",
                badge: "Real-time",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
                invertDark: true
            }
        ]
    }
];

const softSkills = [
    { name: "Problem-Solving", desc: "Structured algorithmic decomposition & analytical debugging", icon: Lightbulb },
    { name: "Leadership", desc: "Driving architectural decisions & guiding project delivery", icon: Compass },
    { name: "Team Collaboration", desc: "Agile communication, code reviews & cross-functional alignment", icon: Users },
    { name: "Adaptability", desc: "Rapid adoption of emerging tech stacks, AI APIs & paradigms", icon: Sparkles }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 md:px-12 border-t border-slate-800/80 bg-[#090d15]/50">
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
                        <Code2 size={15} />
                        <span>Technical Repertoire</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Skills & Technologies
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
                        A versatile tech stack grounded in C++, Java, JavaScript, Next.js/React, relational & NoSQL databases, and cloud tooling.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {skillCategories.map((category, catIndex) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#101624] border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/80 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-white tracking-tight">
                                            {category.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-xs mb-5">
                                    {category.description}
                                </p>

                                <div className="grid grid-cols-2 gap-2.5">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center justify-between p-2.5 rounded-xl bg-[#0c101a] border border-slate-800 hover:border-slate-700 hover:bg-[#131a29] transition-all group"
                                        >
                                            <div className="flex items-center gap-2.5 min-w-0">
                                                <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                                                    <img
                                                        src={skill.iconUrl}
                                                        alt={skill.name}
                                                        className={`w-full h-full object-contain ${skill.invertDark ? "invert" : ""}`}
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <span className="text-xs font-medium text-slate-200 group-hover:text-white truncate">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-1.5 py-0.5 rounded border border-slate-700/50 shrink-0">
                                                {skill.badge}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Soft Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-[#101624]/70 border border-slate-800/80"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
                            <Sparkles size={14} />
                            <span>Professional Core Competencies</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500">Soft Skills</span>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {softSkills.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.name}
                                    className="p-3.5 rounded-xl bg-[#0c101a] border border-slate-800/80 hover:border-indigo-500/40 transition-all group"
                                >
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <div className="p-1 rounded bg-indigo-500/10 text-indigo-400">
                                            <Icon size={14} />
                                        </div>
                                        <span className="text-xs font-semibold text-white group-hover:text-indigo-300 transition-colors">
                                            {item.name}
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-slate-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
