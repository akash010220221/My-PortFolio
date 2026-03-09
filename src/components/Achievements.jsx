import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { Trophy, Code2 } from "lucide-react";

const Achievements = () => {
    const achievements = [
        {
            Icon: SiLeetcode,
            title: "LeetCode Problem Solver",
            description: "Solved 450+ coding problems on LeetCode, demonstrating strong problem-solving skills and algorithmic expertise.",
            isReactIcon: true
        },
        {
            Icon: Trophy,
            title: "Hackathon Runner-Up 2024",
            description: "Finished as runner-ups in Hackathon 2024, showcasing innovative solutions and teamwork.",
            isReactIcon: false
        },
        {
            Icon: Code2,
            title: "Full Stack Developer",
            description: "Built and deployed multiple full-stack applications using MERN stack, delivering scalable and user-friendly solutions.",
            isReactIcon: false
        }
    ];

    return (
        <section id="achievements" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500 relative overflow-hidden group hover:shadow-2xl hover:shadow-emerald-500/30 transition-all cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                                <item.Icon size={100} />
                            </div>
                            <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">
                                <item.Icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
