import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookOpen } from "lucide-react";

const educationData = [
    {
        degree: "Bachelor of Technology (B.Tech)",
        field: "Computer Science and Engineering",
        institution: "Lovely Professional University",
        location: "Phagwara, Punjab",
        duration: "Aug 2023 – Present",
        status: "Currently Enrolled",
        score: "CGPA: 8.0 / 10",
        scoreLabel: "Current Aggregate",
        scoreColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        highlights: [
            "Core curriculum in Data Structures & Algorithms, Systems Design, and Full Stack Architecture.",
            "Consistently applying theory to real-world AI, real-time networking, and cloud applications.",
            "Active in coding challenges and algorithmic problem solving across competitive platforms."
        ]
    },
    {
        degree: "Senior Secondary Education (Class XII)",
        field: "Higher Secondary · Science Stream",
        institution: "Senior Secondary School",
        location: "India",
        duration: "Completed",
        status: "Graduated",
        score: "83.2%",
        scoreLabel: "Aggregate Score",
        scoreColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
        highlights: [
            "Strong foundation in Advanced Mathematics, Physics, and Analytical Logic.",
            "Developed early interests in algorithmic thinking and computer technology."
        ]
    },
    {
        degree: "Secondary Education (Class X)",
        field: "Secondary School Examination",
        institution: "High School",
        location: "India",
        duration: "Completed",
        status: "Graduated",
        score: "95.2%",
        scoreLabel: "Top Academic Tier",
        scoreColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
        highlights: [
            "Outstanding academic performance securing 95.2% in matriculation.",
            "Recognized for top marks in Mathematics, Science, and Information Technology."
        ]
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 md:px-12 border-t border-slate-800/80 bg-[#0b0f17]">
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
                        <GraduationCap size={15} />
                        <span>Academic Milestones</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Education & Qualifications
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
                        Formal foundations in Computer Science and strong academic achievement across all education levels.
                    </p>
                </motion.div>

                {/* Education Timeline Cards */}
                <div className="space-y-6">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#111724] border border-slate-800/90 rounded-2xl p-6 sm:p-8 hover:border-slate-700 hover:bg-[#141b2a] transition-all duration-300 group shadow-xl shadow-black/30"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-slate-800/80">
                                <div>
                                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                                        <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                                            {item.field}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/60">
                                            <Calendar size={11} className="text-slate-400" />
                                            {item.duration}
                                        </span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                                        {item.degree}
                                    </h3>
                                    <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mt-1">
                                        <BookOpen size={14} className="text-slate-500 shrink-0" />
                                        <span>{item.institution}</span>
                                        {item.location && (
                                            <>
                                                <span className="text-slate-600">·</span>
                                                <span className="text-slate-500 flex items-center gap-1">
                                                    <MapPin size={12} />
                                                    {item.location}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Score Callout Pill */}
                                <div className="shrink-0 flex items-center lg:flex-col lg:items-end gap-2 lg:gap-1">
                                    <div className={`px-4 py-2 rounded-xl border font-mono font-bold text-base sm:text-lg ${item.scoreColor} shadow-sm`}>
                                        {item.score}
                                    </div>
                                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                                        {item.scoreLabel}
                                    </span>
                                </div>
                            </div>

                            {/* Highlights / Details */}
                            <div className="pt-5 space-y-2">
                                {item.highlights.map((highlight, hIdx) => (
                                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
