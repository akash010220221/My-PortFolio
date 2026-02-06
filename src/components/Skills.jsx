import { motion } from "framer-motion";
import StarBackground from "./StarBackground";

const skills = [
    {
        name: "C++",
        category: "Language",
        color: "from-blue-500 to-blue-700",
        icon: (
            <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8">
                <path fill="#00599C" d="M117.5 33.5l-15.3-8.8c.8-2.6 1.3-5.4 1.3-8.3 0-16.1-13.1-29.2-29.2-29.2-16.1 0-29.2 13.1-29.2 29.2 0 2.9.5 5.7 1.3 8.3L30.8 33.5c-7.9-5.1-17.3-8.1-27.4-8.1v97.2c10.1 0 19.5-3 27.4-8.1l15.3 8.8c-.8 2.6-1.3 5.4-1.3 8.3 0 16.1 13.1 29.2 29.2 29.2 16.1 0 29.2-13.1 29.2-29.2 0-2.9-.5-5.7-1.3-8.3l15.3-8.8c7.9 5.1 17.3 8.1 27.4 8.1V25.4c-10.1 0-19.5 3-27.4 8.1zM65.6 98.7l-9.5-5.5 9.5-5.5 9.5 5.5-9.5 5.5zm0-75.1l-9.5-5.5 9.5-5.5 9.5 5.5-9.5 5.5z" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="40" fontWeight="bold">C++</text>
            </svg>
        )
    },
    {
        name: "Java",
        category: "Language",
        color: "from-red-500 to-red-700",
        icon: (
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-9 h-9">
                <path d="M48.96 11.23c0-.9.6-1.63 1.3-1.63.73 0 1.3.73 1.3 1.63 0 .9-.6 1.63-1.3 1.63-.73 0-1.3-.73-1.3-1.63zM34.5 90c-6.8 0-12.8-2-15.5-3.6 2.3 2.1 9.8 4.2 16.5 4 6.7-.2 14-2.8 15.6-4.9-2.2 1.9-8.7 4.5-16.6 4.5zm16-56c2.7.2 4.1 2.2 4.1 2.2s.5-1.9 1.6-2.1c1.1-.2 1.9.4 1.9.4-.5-1.8-3.1-2.9-4.8-2.6-1.7.2-2.8.9-2.8 2.1zm-13.2 4.7c-6.6 2.5-5.8 8.1 1.7 10.7 7.5 2.6 19.8-1 14.1-8.5-4-5.2-11.4-3.5-15.8-2.2zM80.1 63.8c-2.2-14.7-22.3-21.8-22.3-21.8s15.9 7 15.3 21c-.1 1.8-1.5 8.1-8.2 8.2-7.1.1-12.5-4.8-12.5-4.8s4.4 7.2 14.3 6.9c9.5-.2 15.7-16.2 13.4-9.5z" fill="#FFF" />
                <path d="M50.4 75.5c16.3 0 24.3-5.3 24.3-5.3-2.1 6.8-9.4 15.8-25.5 15.8C35.8 86 31 77.2 31 77.2c3 4.8 12.3 8.3 19.4 8.3z" fill="#FFF" />
            </svg>
        )
    },
    {
        name: "JavaScript",
        category: "Language",
        color: "from-yellow-300 to-yellow-500",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M3 3h18v18H3V3zm13.1 14.24c.48.0 1.05-.1 1.48-.28V15.3c-.62.24-1.05.35-1.55.35-.9 0-1.52-.45-1.52-1.65v-3.75h-2.12v3.8c0 2.22 1.15 3.32 3.7 3.32zm-6.6 0c.92 0 1.62-.25 2.05-.48l-.3-1.45c-.4.18-.85.35-1.5.35-.95 0-1.5-.32-1.5-1.15 0-1.85 2.78-1.95 2.82-3.8.02-.75-.52-1.25-1.58-1.25-.75 0-1.55.2-2.12.48l.32 1.45c.42-.2.95-.35 1.55-.35.5 0 .95.2.95.75 0 1.45-2.75 1.55-2.8 3.72-.02.9.6 1.72 1.95 1.72z" fill="#000" />
                <path d="M0 0h24v24H0z" fill="none" />
            </svg>
        )
    },
    {
        name: "TypeScript",
        category: "Language",
        color: "from-blue-400 to-blue-600",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                <path d="M3 3h18v18H3V3z" fill="#3178C6" stroke="none" />
                <path d="M12 16v-4.5a3.5 3.5 0 1 1 7 0V16M8 16v-8" stroke="#FFF" />
            </svg>
        )
    },
    {
        name: "React",
        category: "Frontend",
        color: "from-cyan-300 to-cyan-500",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                <circle cx="12" cy="12" r="10" stroke="none" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#FFF" transform="rotate(0 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#FFF" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#FFF" transform="rotate(120 12 12)" />
                <circle cx="12" cy="12" r="2" fill="#FFF" stroke="none" />
            </svg>
        )
    },
    {
        name: "Node.js",
        category: "Backend",
        color: "from-green-400 to-green-600",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 11l-10-5v10l10 5 10-5V8l-10 5z" fill="#FFF" />
            </svg>
        )
    },
    {
        name: "Express",
        category: "Backend",
        color: "from-gray-400 to-gray-600",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm-1.5 5l-2.5 7h2l.5-2h3l.5 2h2l-2.5-7h-3z" fill="#FFF" fillOpacity="0.2" />
                <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">EX</text>
            </svg>
        )
    },
    {
        name: "MongoDB",
        category: "Database",
        color: "from-green-500 to-green-700",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v10h-2V7zm0 11h2v2h-2v-2z" fill="#FFF" />
            </svg>
        )
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        color: "from-sky-300 to-sky-500",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                <path d="M12.001 7.04c-.38-.41-1.42-.4-1.8.03-1.35 1.48-2.6 1.83-3.6 1.83-1.16 0-1.84-.57-2.3-1.5-.78-1.6-2.57-2.72-3.8-1.5-1.04 1.04-.6 3.03 1.3 4.8 1.4 1.3 3.04.85 3.9.15.2-.18.78-.18 1 .04 1.25 1.25 2.8 1.46 3.8.36 1.3-1.4 1.5-2.3 1.5-3.2 0-1.12.56-2.6 2.3-4.1.38-.4.2-1.2-.4-1.2zm6.6 2.4c-.38-.4-1.42-.4-1.8.02-1.35 1.48-2.6 1.84-3.6 1.84-1.16 0-1.85-.56-2.3-1.5-.78-1.6-2.58-2.7-3.8-1.5-1.05 1.05-.6 3.03 1.3 4.8.84.77 1.8.85 2.6.5.9-.38 2-.6 2.3 0 1.25 1.25 2.8 1.46 3.8.36 1.3-1.4 1.5-2.3 1.5-3.2 0-1.13.57-2.65 2.3-4.16.4-.38.2-1.18-.4-1.18z" fill="#FFF" />
            </svg>
        )
    },
    {
        name: "Redux",
        category: "State Management",
        color: "from-purple-400 to-purple-600",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 11l-10-5v10l10 5 10-5V8l-10 5z" fill="#FFF" transform="rotate(45 12 12)" />
            </svg>
        )
    },
    {
        name: "VS Code",
        category: "Tools",
        color: "from-blue-500 to-blue-700",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                <path d="M4 8L20 12L4 16V8Z" fill="#FFF" />
            </svg>
        )
    },
    {
        name: "Git",
        category: "Tools",
        color: "from-orange-400 to-orange-600",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                <path d="M2.6 10.59L8.38 4.8c.8-.8 2.1-.8 2.9 0l9.9 9.9c.8.8.8 2.1 0 2.9l-5.8 5.8c-.8.8-2.1.8-2.9 0l-9.9-9.9c-.8-.8-.8-2.1 0-2.9l5.8-5.8M12.5 7.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4" fill="#FFF" />
            </svg>
        )
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-900 border-t border-slate-800/50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

            <StarBackground />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical Skills</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-emerald-400 font-medium text-lg md:text-xl tracking-wide uppercase mb-4">
                        I am a MERN Stack Developer
                    </p>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Specializing in building exceptional digital experiences with modern technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                rotate: 1,
                                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3)"
                            }}
                            className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 relative overflow-hidden group cursor-pointer"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-white/5 to-white/0 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="relative z-10 flex flex-col items-center justify-center min-h-[120px]">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} p-3 mb-4 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow duration-300 flex items-center justify-center`}>
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">{skill.name}</h3>
                                <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{skill.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
