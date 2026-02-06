import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import cuppuPreview from "../assets/cuppu.png";
import snazzyShopPreview from "../assets/snazzyShop.png";

const projects = [
    {
        title: "Cuppu",
        description: "A coupon organising platform build with MERN stack.",
        tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        links: { demo: "https://coupon-organizer.vercel.app/", code: "https://github.com/akash010220221/Cuppu" },
        image: cuppuPreview
    },
    {
        title: "SnazzyShop",
        description: "A shopping platform built with MERN stack.",
        tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        links: { demo: "https://snazzyshop.vercel.app/", code: "https://github.com/akash010220221/SnazzyShop" },
        image: snazzyShopPreview
    },
    {
        title: "EventDash",
        description: "A event planning dashboard built with html css javascript and php",
        tags: ["HTML", "CSS", "JavaScript", "PHP"],
        links: { demo: "#", code: "https://github.com/akash010220221/Planning_Dashboard" },
        image: "bg-gradient-to-br from-orange-500 to-red-500"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Here are some of the projects I've worked on recently.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:shadow-xl hover:shadow-emerald-500/10 transition-all group flex flex-col"
                        >
                            <div className={`h-48 relative overflow-hidden flex items-center justify-center group`}>
                                {typeof project.image === 'string' && project.image.startsWith('bg-') ? (
                                    <div className={`absolute inset-0 ${project.image}`}></div>
                                ) : (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                )}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-lg font-bold">View Project</span>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 mb-4 line-clamp-3 text-sm flex-1">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-auto">
                                    <a href={project.links.code} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
