import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            info: "akashkrsingh1104@gmail.com",
            link: "mailto:akashkrsingh1104@gmail.com"
        },
        {
            icon: Phone,
            title: "Phone",
            info: "+91 7485895414",
            link: "tel:+917485895414"
        },
        {
            icon: MapPin,
            title: "Location",
            info: "Jalandhar, Punjab",
            link: null
        }
    ];

    return (
        <section id="contact" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ x: 10, scale: 1.05 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4 group cursor-pointer"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-slate-800 p-3 rounded-lg text-emerald-400 group-hover:bg-emerald-500/20 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300"
                                >
                                    <item.icon size={24} />
                                </motion.div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">{item.title}</h3>
                                    {item.link ? (
                                        <a href={item.link} className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300">{item.info}</a>
                                    ) : (
                                        <p className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300">{item.info}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                                <input type="text" placeholder="Name" className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-500/20 hover:border-slate-600 transition-all placeholder-slate-500" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                                <input type="email" placeholder="Email" className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-500/20 hover:border-slate-600 transition-all placeholder-slate-500" />
                            </motion.div>
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <input type="text" placeholder="Subject" className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-500/20 hover:border-slate-600 transition-all placeholder-slate-500" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <textarea rows="4" placeholder="Message" className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-500/20 hover:border-slate-600 transition-all placeholder-slate-500 resize-none"></textarea>
                        </motion.div>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-2xl hover:shadow-emerald-500/40 transition-all flex justify-center items-center gap-2 group"
                        >
                            Send Message
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Send size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                            </motion.div>
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
