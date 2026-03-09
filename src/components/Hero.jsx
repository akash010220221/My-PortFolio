import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import StarBackground from "./StarBackground";
import profilePhoto from "../assets/Akash.jpeg";

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center pt-20 bg-slate-900 overflow-hidden relative">
            {/* Background blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <StarBackground />


            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-emerald-400 font-medium tracking-wider mb-4">HELLO, I'M AKASH</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Creative <br />
                        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            Developer
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                        I build exceptional digital experiences with modern technologies.
                        Passionate about creating beautiful, responsive, and user-friendly web applications,
                        I’m also a problem solver at heart, turning complex challenges into elegant, scalable solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <a href="#projects" className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-1">
                            View Projects <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="border border-slate-700 text-slate-300 px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-all transform hover:-translate-y-1">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex gap-6">
                        {[
                            { name: 'Github', icon: Github, link: 'https://github.com/akash010220221' },
                            { name: 'Linkedin', icon: Linkedin, link: 'https://www.linkedin.com/in/akashkr0102' },
                            { name: 'Mail', icon: Mail, link: 'mailto:akashkrsingh1104@gmail.com' }
                        ].map((platform, i) => (
                            <a key={i} href={platform.link} target={platform.name === 'Mail' ? '_self' : '_blank'} rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <platform.icon size={24} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-2xl rotate-6 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 group-hover:border-emerald-500 overflow-hidden transition-all duration-500">
                            <img
                                src={profilePhoto}
                                alt="Akash Kumar"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
