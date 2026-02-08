import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 md:order-1"
                >
                    <h2 className="text-highlight text-sm tracking-[0.2em] mb-4 uppercase">UGC Creator & Strategist</h2>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-sans">
                        Thalia <br /> Venous
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-md font-serif">
                        Miami-based digital marketing specialist crafting high-converting UGC with over $2M in organic reach.
                    </p>

                    <a
                        href="mailto:thalia.venous@gmail.com?subject=UGC-Proposal"
                        className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium transition-transform hover:scale-105"
                    >
                        Let's work together
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 md:order-2 flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0862/9157/9177/files/Facetune_05-07-2023-16-02-06.jpg?v=1770522502"
                            alt="Thalia Venous"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
