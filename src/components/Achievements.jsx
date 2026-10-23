import { motion } from "framer-motion";
import { Trophy, Code2, ExternalLink, Flame, CheckCircle2, Award } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const achievements = [
    {
        Icon: SiLeetcode,
        iconColor: "text-amber-400",
        iconBg: "bg-amber-500/10 border-amber-500/20",
        badge: "Algorithmic Milestone",
        badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
        title: "500+ Coding Problems Solved",
        metric: "500+",
        metricLabel: "Problems Across Platforms",
        description: "Consistent problem solver across LeetCode and competitive coding platforms tackling data structures, graph theory, dynamic programming, and algorithm optimization with clean code.",
        linkText: "View LeetCode Profile",
        linkUrl: "https://leetcode.com/u/akashkr0102/"
    },
    {
        Icon: Award,
        iconColor: "text-indigo-400",
        iconBg: "bg-indigo-500/10 border-indigo-500/20",
        badge: "Community Impact",
        badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
        title: "Certificate of Volunteering & Community Service",
        metric: "NGO Award",
        metricLabel: "Community Service",
        description: "Awarded Certificate of Volunteering and Community Service by an NGO in recognition of dedicated social impact initiatives, youth mentorship, and civic contributions.",
        linkText: null,
        linkUrl: null
    },
    {
        Icon: Code2,
        iconColor: "text-emerald-400",
        iconBg: "bg-emerald-500/10 border-emerald-500/20",
        badge: "Production Deployment",
        badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        title: "Full-Stack Web Deployments",
        metric: "4+",
        metricLabel: "Shipped Projects",
        description: "Architected and shipped production applications including Context Tube (AI RAG platform), Dev Match (Real-time developer network), Cuppu, and EventDash with modern cloud infrastructure.",
        linkText: "Explore Projects",
        linkUrl: "#projects"
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 px-6 md:px-12 border-t border-slate-800/80 bg-[#090d15]/50">
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
                        <Trophy size={15} />
                        <span>Honors & Milestones</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Key Achievements
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
                        Measurable achievements in algorithmic problem solving, collaborative competitions, and full-stack engineering.
                    </p>
                </motion.div>

                {/* Achievements Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {achievements.map((item, index) => {
                        const Icon = item.Icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.12 }}
                                viewport={{ once: true }}
                                className="bg-[#111724] border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-[#141b2a] transition-all duration-300 group shadow-lg shadow-black/30"
                            >
                                <div>
                                    {/* Top Bar with Icon & Badge */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className={`p-2.5 rounded-xl ${item.iconBg} ${item.iconColor} border group-hover:scale-105 transition-transform`}>
                                            <Icon size={20} />
                                        </div>
                                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                                            {item.badge}
                                        </span>
                                    </div>

                                    {/* Big Metric Callout */}
                                    <div className="mb-3">
                                        <div className="text-2xl font-bold font-mono text-white tracking-tight">
                                            {item.metric}
                                        </div>
                                        <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                                            {item.metricLabel}
                                        </div>
                                    </div>

                                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-400 text-xs leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>

                                {item.linkUrl && (
                                    <div className="pt-4 border-t border-slate-800/80">
                                        <a
                                            href={item.linkUrl}
                                            target={item.linkUrl.startsWith("http") ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors group/link"
                                        >
                                            <span>{item.linkText}</span>
                                            <ExternalLink size={12} className="text-indigo-400 group-hover/link:translate-x-0.5 transition-transform" />
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
