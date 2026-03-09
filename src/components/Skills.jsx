import { motion } from "framer-motion";
import StarBackground from "./StarBackground";

const skills = [
    {
        name: "C++",
        category: "Language",
        color: "from-blue-500 to-blue-700",
        icon: (
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
                className="w-full h-full object-contain"
            />
        )
    },
    {
        name: "Java",
        category: "Language",
        color: "from-red-500 to-red-700",
        icon: (
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
                className="w-full h-full object-contain"
            />
        )
    },
    {
        name: "JavaScript",
        category: "Language",
        color: "from-yellow-300 to-yellow-500",
        icon: (
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-full h-full object-contain"
            />
        )
    },
    {
        name: "TypeScript",
        category: "Language",
        color: "from-blue-400 to-blue-600",
        icon: (
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-full h-full object-contain"
            />
        )
    },
    {
        name: "React",
        category: "Frontend",
        color: "from-cyan-300 to-cyan-500",
        icon: (
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-full h-full object-contain"
            />
        )
    },
    {
        name: "Node.js",
        category: "Backend",
        color: "from-green-400 to-green-600",
        icon: (
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-full h-full object-contain"
            />
        )
    },
    {
        name: "Express",
        category: "Backend",
        color: "from-gray-400 to-gray-600",
        icon: (
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Express"
                className="w-full h-full object-contain invert"
            />
        )
    },
    {
        name: "MongoDB",
        category: "Database",
        color: "from-green-500 to-green-700",
        icon: (
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                className="w-full h-full object-contain"
            />
        )
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        color: "from-teal-400 to-cyan-600",
        icon: (
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind CSS"
                className="w-full h-full object-contain"
            />
        )
    },
    {
        name: "Redux",
        category: "State Management",
        color: "from-purple-400 to-purple-600",
        icon: (
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                alt="Redux"
                className="w-full h-full object-contain"
            />
        )
    },
    {
        name: "VS Code",
        category: "Tools",
        color: "from-blue-500 to-blue-700",
        icon: (
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                alt="VS Code"
                className="w-full h-full object-contain"
            />
        )
    },
    {
        name: "Git",
        category: "Tools",
        color: "from-orange-400 to-orange-600",
        icon: (
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                className="w-full h-full object-contain"
            />
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
