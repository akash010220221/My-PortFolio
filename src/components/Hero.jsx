import { motion } from "framer-motion";
import { ArrowRight, FileText, Send, Sparkles, Terminal, MapPin } from "lucide-react";
import { Link } from "react-scroll";
import { SiLeetcode } from "react-icons/si";
import resumePdf from "../assets/Akash_Kumar_Resume.pdf";
import profilePhoto from "../assets/AkashProfile.jpg";

const Hero = () => {
    return (
        <section id="about" className="min-h-[92vh] flex items-center pt-32 sm:pt-36 lg:pt-24 pb-16 px-6 md:px-12 relative overflow-hidden bg-grid-subtle">
            {/* Soft Ambient Radial Highlight */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-4xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Mobile Only: Profile Avatar & Status Bar */}
                    <div className="lg:hidden flex items-center gap-3.5 p-3 rounded-2xl bg-[#111724] border border-slate-800 mb-6 shadow-lg shadow-black/40">
                        <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-700/80 shrink-0">
                            <img src={profilePhoto} alt="Akash Kumar" className="w-full h-full object-cover" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-white text-sm">Akash Kumar</span>
                                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Available
                                </span>
                            </div>
                            <p className="text-xs font-mono text-indigo-400 truncate">Full Stack MERN Developer</p>
                            <p className="text-[11px] text-slate-400 font-mono">📍 India · 500+ Solved</p>
                        </div>
                    </div>

                    {/* Eyebrow Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-6">
                        <Terminal size={13} className="text-indigo-400" />
                        <span>MERN STACK & PROBLEM SOLVING</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                        Engineering scalable web applications with{" "}
                        <span className="text-slate-100 underline decoration-indigo-500/60 decoration-wavy underline-offset-8">
                            craftsmanship
                        </span>{" "}
                        & speed.
                    </h1>

                    {/* Bio Paragraph */}
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                        Hi, I'm <span className="text-slate-200 font-semibold">Akash Kumar</span>. I build responsive, production-grade digital products across the entire stack. With a strong algorithmic foundation and over 500+ coding problems solved across platforms, I write code that is clean, maintainable, and built for performance.
                    </p>

                    {/* Call to Actions */}
                    <div className="flex flex-wrap items-center gap-3.5 mb-14">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-90}
                            containerId="main-scroll-container"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 cursor-pointer active:scale-95"
                        >
                            <span>Explore Projects</span>
                            <ArrowRight size={16} />
                        </Link>

                        <a
                            href={resumePdf}
                            download="Akash_Kumar_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/70 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer active:scale-95"
                        >
                            <FileText size={16} className="text-slate-400" />
                            <span>Resume (CV)</span>
                        </a>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-90}
                            containerId="main-scroll-container"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl hover:bg-slate-800/50 text-slate-400 hover:text-slate-200 font-medium text-sm transition-all duration-200 cursor-pointer"
                        >
                            <Send size={15} />
                            <span>Get in Touch</span>
                        </Link>
                    </div>

                    {/* Engineering Proof Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
                        <div className="p-3 rounded-xl bg-[#111724]/70 border border-slate-800/80">
                            <div className="text-2xl font-bold font-mono text-white flex items-center gap-1.5">
                                <SiLeetcode className="text-amber-500" size={20} /> 500+
                            </div>
                            <div className="text-xs text-slate-400 mt-1">Problems Solved</div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#111724]/70 border border-slate-800/80">
                            <div className="text-2xl font-bold font-mono text-white">MERN</div>
                            <div className="text-xs text-slate-400 mt-1">Primary Tech Stack</div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#111724]/70 border border-slate-800/80">
                            <div className="text-2xl font-bold font-mono text-emerald-400">2024</div>
                            <div className="text-xs text-slate-400 mt-1">Hackathon Finalist</div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#111724]/70 border border-slate-800/80">
                            <div className="text-2xl font-bold font-mono text-indigo-400">100%</div>
                            <div className="text-xs text-slate-400 mt-1">Responsive Design</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
