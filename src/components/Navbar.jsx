import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, User, FileText, Code2, FolderGit2, Award, Trophy, Send, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import resumePdf from "../assets/Akash_Kumar_Resume.pdf";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("about");
    const [clickedLink, setClickedLink] = useState(null);

    const handleNavClick = (to) => {
        setClickedLink({ to, ts: Date.now() });
        setTimeout(() => setClickedLink(null), 450);
    };

    useEffect(() => {
        const container = document.getElementById("main-scroll-container");
        const handleScroll = () => {
            setScrolled((container?.scrollTop ?? 0) > 40);
        };
        container?.addEventListener("scroll", handleScroll);
        return () => container?.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const container = document.getElementById("main-scroll-container");
        const sectionIds = ["about", "skills", "projects", "education", "certificates", "achievements", "contact"];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            {
                root: container,
                rootMargin: "-30% 0px -65% 0px",
                threshold: 0,
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: "About", to: "about", icon: User },
        { name: "Skills", to: "skills", icon: Code2 },
        { name: "Projects", to: "projects", icon: FolderGit2 },
        { name: "Education", to: "education", icon: GraduationCap },
        { name: "Certificates", to: "certificates", icon: Award },
        { name: "Achievements", to: "achievements", icon: Trophy },
        { name: "Contact", to: "contact", icon: Send },
        { name: "Resume", href: resumePdf, isExternal: true, icon: FileText },
    ];

    return (
        <header
            className={`fixed top-0 right-0 w-full lg:w-[calc(100%-400px)] z-50 transition-all duration-300 px-4 md:px-8 ${scrolled ? "py-3 bg-slate-900/75 backdrop-blur-xl border-b border-slate-700/50 shadow-lg shadow-black/20" : "py-5 bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Mobile Brand Title */}
                <div className="lg:hidden flex items-center gap-2">
                    <span className="font-bold text-white tracking-tight">Akash Kumar</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        MERN
                    </span>
                </div>

                {/* Desktop Nav Items */}
                <nav className="hidden lg:flex items-center gap-1 mx-auto bg-white/10 backdrop-blur-lg px-3 py-1.5 rounded-full border border-white/20 shadow-lg shadow-black/20">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = activeLink === link.to;
                        return (
                            <motion.div
                                key={link.name}
                                animate={{
                                    scale: isActive ? 1.1 : 1,
                                    y: isActive ? -1 : 0,
                                    boxShadow: isActive
                                        ? "0 4px 18px -4px rgba(52,211,153,0.50)"
                                        : "0 0px 0px 0px rgba(52,211,153,0)",
                                }}
                                whileHover={{
                                    scale: isActive ? 1.2 : 1.12,
                                    y: -2,
                                    boxShadow: "0 6px 22px -4px rgba(52,211,153,0.55)",
                                }}
                                whileTap={{ scale: isActive ? 1.05 : 0.93, y: 0 }}
                                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                                style={{ borderRadius: "9999px", display: "inline-flex" }}
                            >
                                {link.isExternal ? (
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download="Akash_Kumar_Resume.pdf"
                                        className="relative group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors duration-200 select-none overflow-hidden text-slate-200 hover:text-white hover:bg-white/15"
                                    >
                                        <Icon size={14} className="text-slate-300 group-hover:text-emerald-300" />
                                        <span>{link.name}</span>
                                        <span className="nav-shimmer-line absolute bottom-[3px] left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />
                                    </a>
                                ) : (
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={400}
                                        offset={-90}
                                        containerId="main-scroll-container"
                                        onClick={() => handleNavClick(link.to)}
                                        className={`relative group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors duration-200 select-none overflow-hidden ${
                                            clickedLink?.to === link.to
                                                ? "ring-2 ring-emerald-400/60 brightness-125"
                                                : ""
                                        } ${isActive
                                                ? "text-white bg-emerald-500/30 border border-emerald-400/50 shadow-sm shadow-emerald-400/20"
                                                : "text-slate-200 hover:text-white hover:bg-white/15"
                                            }`}
                                    >
                                        <Icon size={14} className={isActive ? "text-emerald-300" : "text-slate-300"} />
                                        <span>{link.name}</span>

                                        {/* Hover shimmer underline */}
                                        <span className="nav-shimmer-line absolute bottom-[3px] left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />

                                        {/* Click ripple wave */}
                                        {clickedLink?.to === link.to && (
                                            <motion.span
                                                key={clickedLink.ts}
                                                className="absolute inset-0 rounded-full bg-emerald-400/25 pointer-events-none"
                                                initial={{ scale: 0.4, opacity: 1 }}
                                                animate={{ scale: 2.2, opacity: 0 }}
                                                transition={{ duration: 0.45, ease: "easeOut" }}
                                            />
                                        )}
                                    </Link>
                                )}
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Mobile Menu Toggle Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-200 hover:text-white focus:outline-none transition-all duration-150 active:scale-90 active:bg-slate-700"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden mt-3 p-4 bg-slate-800/90 backdrop-blur-xl border border-slate-700/60 rounded-2xl shadow-2xl shadow-black/60"
                    >
                        <div className="grid grid-cols-2 gap-2">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = activeLink === link.to;
                                return link.isExternal ? (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download="Akash_Kumar_Resume.pdf"
                                        onClick={() => setIsOpen(false)}
                                        className="relative group flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium cursor-pointer transition-all duration-150 active:scale-95 overflow-hidden text-slate-400 hover:text-white hover:bg-slate-800/60"
                                    >
                                        <Icon size={16} />
                                        <span>{link.name}</span>
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.to}
                                        smooth={true}
                                        duration={400}
                                        offset={-80}
                                        containerId="main-scroll-container"
                                        onClick={() => { setIsOpen(false); handleNavClick(link.to); }}
                                        className={`relative group flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium cursor-pointer transition-all duration-150 active:scale-95 overflow-hidden ${isActive
                                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                                                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                                            }`}
                                    >
                                        <Icon size={16} />
                                        <span>{link.name}</span>
                                        {/* Hover shimmer underline */}
                                        <span className="nav-shimmer-line absolute bottom-[3px] left-1/2 -translate-x-1/2 h-[1.5px] w-0 group-hover:w-3/4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                        {/* Click ripple */}
                                        {clickedLink?.to === link.to && (
                                            <motion.span
                                                key={clickedLink.ts}
                                                className="absolute inset-0 rounded-xl bg-emerald-400/20 pointer-events-none"
                                                initial={{ scale: 0.5, opacity: 1 }}
                                                animate={{ scale: 1.8, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
