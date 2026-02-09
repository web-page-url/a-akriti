"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 z-50 w-full glass-pink border-b border-white/20"
        >
            <nav className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="font-serif text-3xl font-black tracking-tighter text-berry flex items-center gap-3 cursor-pointer"
                >
                    Akriti <span className="h-3 w-3 rounded-full bg-neon-pink animate-ping neon-glow-pink" />
                </motion.div>

                <div className="hidden items-center gap-8 text-sm font-bold tracking-widest uppercase md:flex">
                    {["about", "projects", "skills", "achievements", "contact"].map((item) => (
                        <motion.a
                            key={item}
                            whileHover={{ scale: 1.1, color: "#FF007F" }}
                            href={`#${item}`}
                            className="text-berry/70 transition-all relative group"
                        >
                            {item === 'achievements' ? 'Victories' : item.charAt(0).toUpperCase() + item.slice(1)}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-pink transition-all group-hover:w-full" />
                        </motion.a>
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden sm:flex group items-center gap-2 bg-gradient-to-r from-neon-pink to-sakura px-8 py-3 text-sm font-black text-white transition-all soft-rounded neon-glow-pink"
                >
                    Resume <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </motion.button>
            </nav>
        </motion.header>
    );
};
