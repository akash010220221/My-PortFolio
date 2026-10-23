import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Instagram, Copy, Check, Send, Clock, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
    const [errorMessage, setErrorMessage] = useState("");

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === "email") {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

    const handleMailtoFallback = () => {
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || "Colleague"}`);
        const body = encodeURIComponent(`Hi Akash,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
        window.location.href = `mailto:akashkrsingh1104@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            setStatus("error");
            setErrorMessage("VITE_WEB3FORMS_ACCESS_KEY is not set in .env. You can dispatch via email client below.");
            return;
        }

        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `Portfolio Message from ${formData.name}`,
                    from_name: "Portfolio Contact Form",
                    botcheck: false,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Failed to deliver message directly.");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Network error occurred. You can dispatch via email client below.");
        }
    };

    const socialProfiles = [
        {
            name: "LinkedIn",
            handle: "akashkr0102",
            link: "https://www.linkedin.com/in/akashkr0102",
            Icon: Linkedin
        },
        {
            name: "GitHub",
            handle: "akash010220221",
            link: "https://github.com/akash010220221",
            Icon: Github
        },
        {
            name: "LeetCode",
            handle: "akashkr0102",
            link: "https://leetcode.com/u/akashkr0102/",
            Icon: SiLeetcode
        },
        {
            name: "Instagram",
            handle: "@ak_a_sh0102",
            link: "https://instagram.com/ak_a_sh0102",
            Icon: Instagram
        }
    ];

    return (
        <section id="contact" className="py-24 px-6 md:px-12 border-t border-slate-800/80 bg-[#0b0f17]">
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
                        <Send size={15} />
                        <span>Get In Touch</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Let's Start a Conversation
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
                        Open for full-time engineering roles, freelance builds, and technical discussions.
                    </p>
                </motion.div>

                {/* Main Contact Grid */}
                <div className="grid lg:grid-cols-12 gap-8 mb-12">
                    {/* Direct Contact Cards */}
                    <div className="lg:col-span-5 space-y-4">
                        {/* Email Card */}
                        <div className="bg-[#111724] border border-slate-800/90 rounded-2xl p-5 hover:border-slate-700 transition-all">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2.5">
                                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                        <Mail size={16} />
                                    </div>
                                    <span className="text-xs font-semibold text-white">Direct Email</span>
                                </div>
                                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                    <Clock size={10} /> &lt;24h reply
                                </span>
                            </div>
                            <div className="text-xs font-mono text-slate-300 break-all mb-4 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                                akashkrsingh1104@gmail.com
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleCopy("akashkrsingh1104@gmail.com", "email")}
                                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-slate-200 text-xs font-medium transition-colors"
                                >
                                    {copiedEmail ? (
                                        <>
                                            <Check size={13} className="text-emerald-400" />
                                            <span className="text-emerald-400">Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={13} />
                                            <span>Copy Address</span>
                                        </>
                                    )}
                                </button>
                                <a
                                    href="mailto:akashkrsingh1104@gmail.com"
                                    className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-sm shadow-indigo-600/30"
                                >
                                    <span>Compose</span>
                                    <ArrowUpRight size={13} />
                                </a>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-[#111724] border border-slate-800/90 rounded-2xl p-5 hover:border-slate-700 transition-all">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2.5">
                                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        <Phone size={16} />
                                    </div>
                                    <span className="text-xs font-semibold text-white">Telephone</span>
                                </div>
                                <span className="text-[11px] font-mono text-slate-400">
                                    IST (UTC+5:30)
                                </span>
                            </div>
                            <div className="text-xs font-mono text-slate-300 mb-4 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                                +91 7485895414
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleCopy("+917485895414", "phone")}
                                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-slate-200 text-xs font-medium transition-colors"
                                >
                                    {copiedPhone ? (
                                        <>
                                            <Check size={13} className="text-emerald-400" />
                                            <span className="text-emerald-400">Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={13} />
                                            <span>Copy Number</span>
                                        </>
                                    )}
                                </button>
                                <a
                                    href="tel:+917485895414"
                                    className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white text-xs font-medium transition-colors"
                                >
                                    <span>Call</span>
                                    <ArrowUpRight size={13} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Message Form */}
                    <div className="lg:col-span-7 bg-[#111724] border border-slate-800/90 rounded-2xl p-6 sm:p-7 shadow-xl shadow-black/40 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                                <h3 className="text-base font-bold text-white tracking-tight">
                                    Quick Message
                                </h3>
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    Direct In-Browser Delivery
                                </span>
                            </div>

                            {status === "success" ? (
                                <div className="py-8 text-center my-auto flex flex-col items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                                        <CheckCircle2 size={28} />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-1.5 tracking-tight">
                                        Message Sent Successfully!
                                    </h4>
                                    <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6 leading-relaxed">
                                        Thank you for reaching out. Your message has been delivered directly to Akash's inbox, and you'll receive a response within 24 hours.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setStatus("idle")}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-mono transition-colors border border-slate-700 active:scale-95"
                                    >
                                        <span>Send another message</span>
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSendMessage} className="space-y-4">
                                    {/* Honeypot field for bot spam prevention */}
                                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

                                    <div className="grid sm:grid-cols-2 gap-3.5">
                                        <div>
                                            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                disabled={status === "submitting"}
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Jane Doe"
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0f17] border border-slate-800 text-slate-200 placeholder-slate-600 text-xs focus:outline-none focus:border-indigo-500/80 transition-colors disabled:opacity-60"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                disabled={status === "submitting"}
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="jane@company.com"
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0f17] border border-slate-800 text-slate-200 placeholder-slate-600 text-xs focus:outline-none focus:border-indigo-500/80 transition-colors disabled:opacity-60"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            required
                                            disabled={status === "submitting"}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Hi Akash, we'd love to chat about a full stack developer role..."
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0f17] border border-slate-800 text-slate-200 placeholder-slate-600 text-xs focus:outline-none focus:border-indigo-500/80 transition-colors resize-none disabled:opacity-60"
                                        ></textarea>
                                    </div>

                                    {status === "error" && (
                                        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-start gap-2.5">
                                            <AlertCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                                            <div className="flex-1">
                                                <p className="font-medium leading-relaxed">{errorMessage}</p>
                                                <button
                                                    type="button"
                                                    onClick={handleMailtoFallback}
                                                    className="text-[11px] font-mono text-indigo-300 hover:text-white underline underline-offset-2 mt-1.5 inline-block font-semibold"
                                                >
                                                    Open default email app to send directly →
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-semibold transition-all duration-200 shadow-md shadow-indigo-600/30 active:scale-95"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                <Loader2 size={13} className="animate-spin" />
                                                <span>Sending Directly...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send size={13} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Professional Social Grid */}
                <div className="pt-8 border-t border-slate-800/80">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                        Professional Profiles & Networks
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {socialProfiles.map((social) => {
                            const Icon = social.Icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl bg-[#111724] border border-slate-800/80 hover:border-slate-700 hover:bg-[#141b2a] transition-all flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <div className="p-1.5 rounded-lg bg-slate-800/70 text-slate-300 group-hover:text-white transition-colors">
                                            <Icon size={16} />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-xs font-semibold text-white truncate">
                                                {social.name}
                                            </div>
                                            <div className="text-[10px] font-mono text-slate-400 truncate">
                                                {social.handle}
                                            </div>
                                        </div>
                                    </div>
                                    <ArrowUpRight size={13} className="text-slate-400 group-hover:text-indigo-400 transition-colors shrink-0" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
