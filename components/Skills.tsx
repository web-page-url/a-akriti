"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Database, Globe, Gamepad2, Smartphone, Sparkles } from "lucide-react";

const mainSkills = [
    { name: "Python", icon: <Terminal />, color: "from-neon-pink/20 to-sakura/20", neon: "neon-glow-pink" },
    { name: "C++", icon: <Code2 />, color: "from-neon-purple/20 to-lavender-mist/20", neon: "shadow-[0_0_15px_rgba(191,0,255,0.3)]" },
    { name: "SQL", icon: <Database />, color: "from-blue-400/20 to-cyan-300/20", neon: "shadow-[0_0_15px_rgba(34,197,254,0.3)]" },
    { name: "ReactJS", icon: <Globe />, color: "from-rose-blush/20 to-peach-cream/20", neon: "shadow-[0_0_15px_rgba(255,194,209,0.3)]" },
    { name: "Unity3D", icon: <Gamepad2 />, color: "from-sakura/20 to-rose-blush/20", neon: "neon-glow-pink" },
    { name: "OpenCV", icon: <Smartphone />, color: "from-peach-cream/20 to-sakura/20", neon: "shadow-[0_0_15px_rgba(255,209,188,0.3)]" }
];

const secondarySkills = [
    "HTML", "CSS", "JS", "Pandas", "NumPy", "Matplotlib", "Jupyter", "MS Excel", "Leadership", "Teamwork", "Problem Solving"
];

export const Skills = () => {
    return (
        <section id="skills" className="py-32 relative">
            <div className="absolute top-0 right-0 p-20 opacity-10 animate-twinkle">
                <Sparkles className="h-40 w-40 text-sakura" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 space-y-4"
                >
                    <h2 className="font-serif text-5xl font-black text-berry">Superpowers ✨</h2>
                    <p className="gradient-text font-black uppercase tracking-[0.4em] text-sm italic">My magical digital toolkit</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {mainSkills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2 }}
                            className={`group bg-gradient-to-br ${skill.color} p-8 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 cursor-default border-2 border-white/60 ${skill.neon} backdrop-blur-sm`}
                        >
                            <div className="bg-white/80 p-5 rounded-2xl text-berry group-hover:bg-neon-pink group-hover:text-white transition-all duration-500 shadow-sm">
                                {skill.icon}
                            </div>
                            <span className="font-black text-xs uppercase tracking-widest text-berry group-hover:text-neon-pink transition-colors">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 flex flex-wrap justify-center gap-4"
                >
                    {secondarySkills.map((s, i) => (
                        <motion.span
                            key={i}
                            whileHover={{ scale: 1.1, backgroundColor: "#FF007F", color: "#fff" }}
                            className="px-6 py-3 bg-white/40 backdrop-blur-md rounded-full border border-neon-pink/10 text-xs font-bold uppercase tracking-widest text-berry/60 transition-all cursor-default shadow-sm"
                        >
                            {s}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
