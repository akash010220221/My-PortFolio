import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import dsaCertificate from "../assets/DSA.jpg";
import udemyCertificate from "../assets/udemy.png";
import infosysCertificate from "../assets/infosys1.png";

const Certificates = () => {
    const certificates = [
        {
            title: "Data Structure and Algorithms",
            platform: "Programming Pathsala",
            certificate: dsaCertificate
        },
        {
            title: "Python Programming",
            platform: "Udemy",
            certificate: udemyCertificate
        },
        {
            title: "Computational Theory: Language Principle & Finite Automata Theory",
            platform: "Infosys",
            certificate: infosysCertificate
        }
    ];

    return (
        <section id="certificates" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/20 transition-all group cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-emerald-400 group-hover:bg-emerald-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                <Award size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">{cert.title}</h3>
                            <p className="text-slate-400 text-sm mb-4 group-hover:text-slate-300 transition-colors duration-300">{cert.platform}</p>
                            <a
                                href={cert.certificate}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 text-sm flex items-center gap-1 hover:text-blue-300 hover:gap-2 transition-all duration-300"
                            >
                                View Certificate <ExternalLink size={14} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
