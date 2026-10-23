import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle } from "lucide-react";

const certificates = [
    {
        title: "JNCIA-Junos (Juniper Networks Certified Associate – Junos)",
        platform: "Juniper Networks",
        url: "https://drive.google.com/file/d/1CA7hb-BTRefp2gQgwVHaL4j2Lfe0wTcf/view?usp=drive_link",
        domain: "Enterprise Routing, Switching, Junos OS Architecture & Operational Monitoring",
        date: "Sep’ 26"
    },
    {
        title: "Networking Basics",
        platform: "Cisco Networking Academy",
        url: "https://drive.google.com/file/d/1zhTv11LCuzAAae5XY9KlIC7x8vZNeUw8/view?usp=drive_link",
        domain: "Network Protocols, IPv4/IPv6 Addressing, Subnetting & Infrastructure Fundamentals",
        date: "Sep’ 26"
    },
    {
        title: "Design and Analysis of Algorithms",
        platform: "Programming Pathsala",
        url: "https://drive.google.com/file/d/1UL_XpvFRPJoQI3KfIdyzXkZFssKE6DSv/view?usp=drive_link",
        domain: "Advanced Data Structures, Dynamic Programming, Graph Algorithms & O(1) LRU Caching",
        date: "Jul’ 25"
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-24 px-6 md:px-12 border-t border-slate-800/80 bg-[#0b0f17]">
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
                        <Award size={15} />
                        <span>Verified Learning</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Certifications & Coursework
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
                        Formal certifications validating algorithms, programming languages, and computational theory.
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#111724] border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-[#141b2a] transition-all duration-300 group shadow-lg shadow-black/30"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                                        <Award size={20} />
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                                        <CheckCircle size={10} />
                                        {cert.date}
                                    </span>
                                </div>

                                <div className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider mb-1">
                                    {cert.platform}
                                </div>

                                <h3 className="text-base font-bold text-white tracking-tight leading-snug mb-2 group-hover:text-indigo-300 transition-colors">
                                    {cert.title}
                                </h3>

                                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                                    {cert.domain}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-800/80">
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors group/link"
                                >
                                    <span>View Certificate</span>
                                    <ExternalLink size={12} className="text-indigo-400 group-hover/link:translate-x-0.5 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
