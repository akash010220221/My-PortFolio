import { motion } from "framer-motion";
import { Download } from "lucide-react";
import resumeImg from "../assets/AkashResume_page-0001.jpg";

const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>

                    <div className="flex justify-center mt-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative group max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl shadow-emerald-900/20"
                        >
                            <img
                                src={resumeImg}
                                alt=""
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <a
                                    href={resumeImg}
                                    download="Akash_Kumar_Resume.jpg"
                                    className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105"
                                >
                                    <Download size={20} /> Download CV
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8"
                    >
                        <a
                            href={resumeImg}
                            download="Akash_Kumar_Resume.jpg"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
                        >
                            <Download size={16} /> Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;


