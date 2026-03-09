import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            info: "akashkrsingh1104@gmail.com",
            link: "mailto:akashkrsingh1104@gmail.com",
            color: "from-red-500 to-pink-400",
            hoverColor: "hover:shadow-red-500/50"
        },
        {
            icon: Phone,
            title: "Phone",
            info: "+91 7485895414",
            link: "tel:+917485895414",
            color: "from-green-500 to-emerald-500",
            hoverColor: "hover:shadow-emerald-500/50"
        }
    ];

    const socialLinks = [
        {
            icon: Linkedin,
            name: "LinkedIn",
            username: "@akashkr0102",
            link: "https://www.linkedin.com/in/akashkr0102",
            color: "from-blue-500 to-blue-700",
            bgColor: "bg-blue-500/10",
            hoverBg: "group-hover:bg-blue-500/20",
            iconColor: "text-blue-400",
            hoverShadow: "group-hover:shadow-blue-500/50"
        },
        {
            icon: Github,
            name: "GitHub",
            username: "@akash010220221",
            link: "https://github.com/akash010220221",
            color: "from-gray-600 to-gray-800",
            bgColor: "bg-gray-500/10",
            hoverBg: "group-hover:bg-gray-500/20",
            iconColor: "text-gray-400",
            hoverShadow: "group-hover:shadow-gray-500/50"
        },
        {
            icon: Instagram,
            name: "Instagram",
            username: "@ak_a_sh0102",
            link: "https://instagram.com/ak_a_sh0102",
            color: "from-pink-500 via-purple-500 to-orange-500",
            bgColor: "bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-orange-500/10",
            hoverBg: "group-hover:from-pink-500/20 group-hover:via-purple-500/20 group-hover:to-orange-500/20",
            iconColor: "text-pink-400",
            hoverShadow: "group-hover:shadow-pink-500/50"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Let's Connect
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 mx-auto rounded-full mb-6"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Feel free to reach out for collaborations, opportunities, or just a friendly chat!
                    </motion.p>
                </motion.div>

                {/* Contact Information Cards */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        {contactInfo.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.link}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`group relative bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl ${item.hoverColor} overflow-hidden`}
                            >
                                {/* Animated gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                <div className="relative flex items-center gap-6">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className={`bg-gradient-to-br ${item.color} p-4 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                                    >
                                        <item.icon size={32} className="text-white" />
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-400 group-hover:text-slate-200 transition-colors break-all">
                                            {item.info}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-white/5 to-white/0 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Social Media Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                        Follow Me On
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`group relative bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 transition-all duration-300 hover:border-slate-600 hover:shadow-2xl ${social.hoverShadow} overflow-hidden`}
                            >
                                {/* Animated background */}
                                <div className={`absolute inset-0 ${social.bgColor} ${social.hoverBg} transition-all duration-300`}></div>

                                <div className="relative flex flex-col items-center text-center">
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                                        transition={{ duration: 0.5 }}
                                        className={`mb-4 p-4 rounded-2xl bg-gradient-to-br ${social.color} shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                                    >
                                        <social.icon size={40} className="text-white" />
                                    </motion.div>
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                        {social.name}
                                    </h4>
                                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors font-mono text-sm">
                                        {social.username}
                                    </p>
                                </div>

                                {/* Decorative corner elements */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Footer text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-slate-500 text-sm">
                        © 2026 Akash Kumar Singh. Built with ❤️ using React & Tailwind CSS
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
