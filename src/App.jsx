import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import profilePhoto from "./assets/AkashProfile.jpg";
import { Github, Linkedin, Mail, Copy, Check, MapPin, Briefcase, Award } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

function App() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("akashkrsingh1104@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
    };

    return (
        <div className="bg-[#131c2e] text-slate-200 h-screen overflow-hidden flex selection:bg-emerald-500/20 selection:text-emerald-200">
            {/* Left Fixed Sidebar on Large Screens */}
            <aside className="hidden lg:flex w-[400px] shrink-0 h-screen sticky top-0 border-r border-slate-300 flex-col justify-between p-5 z-40 bg-slate-100 overflow-hidden">

                {/* Decorative gradient top strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-none" />

                {/* Subtle background radial glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-0" />

                {/* Top Section: Status & Photo */}
                <div className="flex flex-col items-center flex-1 min-h-0 relative z-10">
                    {/* Live Status Pill */}
                    <div className="w-full flex items-center justify-between mb-3 pb-3 border-b border-slate-300 text-xs">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 font-mono font-medium shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Available for hire
                        </div>
                        <span className="flex items-center gap-1 text-slate-400 font-mono">
                            <MapPin size={12} className="text-emerald-400" /> India
                        </span>
                    </div>

                    {/* Profile Portrait Container */}
                    <div className="relative w-full max-h-[35vh] max-w-[240px] rounded-2xl overflow-hidden border-2 border-emerald-200 bg-slate-200 shadow-xl shadow-emerald-200/50 group mb-3">
                        <img
                            src={profilePhoto}
                            alt="Akash Kumar"
                            className="w-full h-full object-cover object-top grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
                        {/* Gradient overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
                    </div>

                    {/* Bio & Details */}
                    <div className="text-center w-full">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-0.5">Akash Kumar</h2>
                        <p className="text-emerald-600 text-sm font-semibold font-mono mb-2">
                            Full Stack Engineer · MERN
                        </p>
                        <p className="text-slate-500 text-xs leading-relaxed max-w-[280px] mx-auto mb-3">
                            Building production-ready web applications with clean architecture and solving core algorithmic challenges.
                        </p>

                        {/* Quick Metrics Bar */}
                        <div className="grid grid-cols-2 gap-2 p-2.5 bg-gradient-to-br from-slate-200/80 to-emerald-100/60 rounded-xl border border-slate-300 mb-2 text-left text-xs shadow-sm">
                            <div className="p-1">
                                <div className="text-slate-400 text-[11px] font-mono">Problem Solving</div>
                                <div className="text-slate-800 font-semibold text-sm flex items-center gap-1.5 mt-0.5">
                                    <SiLeetcode className="text-amber-500" size={14} /> 500+ Solved
                                </div>
                            </div>
                            <div className="p-1 border-l border-slate-300 pl-3">
                                <div className="text-slate-400 text-[11px] font-mono">Specialization</div>
                                <div className="text-slate-800 font-semibold text-sm flex items-center gap-1.5 mt-0.5">
                                    <Briefcase className="text-teal-500" size={14} /> MERN Apps
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Quick Links & Actions */}
                <div className="pt-3 border-t border-slate-300 flex flex-col gap-2 relative z-10">
                    {/* Copy Email Button */}
                    <button
                        onClick={handleCopyEmail}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200 border border-emerald-300 text-slate-600 hover:text-emerald-800 text-xs font-mono font-medium transition-all duration-200 active:scale-[0.98] shadow-sm"
                    >
                        {copied ? (
                            <>
                                <Check size={14} className="text-emerald-500" />
                                <span className="text-emerald-600 font-semibold">Email Copied to Clipboard</span>
                            </>
                        ) : (
                            <>
                                <Copy size={14} className="text-emerald-500" />
                                <span>akashkrsingh1104@gmail.com</span>
                            </>
                        )}
                    </button>

                    {/* Social Media Links */}
                    <div className="flex items-center justify-center gap-2">
                        <a
                            href="https://github.com/akash010220221"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-slate-200 hover:bg-slate-900 border border-slate-300 hover:border-slate-800 text-slate-600 hover:text-white transition-all duration-200 shadow-sm"
                            aria-label="GitHub Profile"
                            title="GitHub Profile"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/akashkr0102"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-blue-50 hover:bg-blue-600 border border-blue-100 hover:border-blue-600 text-blue-400 hover:text-white transition-all duration-200 shadow-sm"
                            aria-label="LinkedIn Profile"
                            title="LinkedIn Profile"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="https://leetcode.com/u/akashkr0102/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-amber-50 hover:bg-amber-500 border border-amber-100 hover:border-amber-500 text-amber-500 hover:text-white transition-all duration-200 shadow-sm"
                            aria-label="LeetCode Profile"
                            title="LeetCode Profile"
                        >
                            <SiLeetcode size={18} />
                        </a>
                        <a
                            href="mailto:akashkrsingh1104@gmail.com"
                            className="p-2.5 rounded-lg bg-rose-50 hover:bg-rose-500 border border-rose-100 hover:border-rose-500 text-rose-400 hover:text-white transition-all duration-200 shadow-sm"
                            aria-label="Send Email"
                            title="Send Email"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </aside>


            {/* Main Content Area */}
            <div id="main-scroll-container" className="flex-1 w-full lg:w-[calc(100%-400px)] flex flex-col min-w-0 bg-[#131c2e] h-screen overflow-y-auto">
                <Navbar />
                <main className="flex-1">
                    <Hero />
                    <Skills />
                    <Projects />
                    <Education />
                    <Certificates />
                    <Achievements />
                    <Contact />
                </main>

                <footer className="py-10 border-t border-slate-700/60 bg-[#0f1828] text-center text-slate-500 text-xs font-mono">
                    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p>© {new Date().getFullYear()} Akash Kumar · Designed & Engineered with Care</p>
                        <p className="text-slate-400">Crafted with React, Tailwind CSS & Vite</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
