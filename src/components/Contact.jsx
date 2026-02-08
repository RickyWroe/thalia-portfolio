import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-primary">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-5xl md:text-7xl font-bold mb-8">
                    Ready to scale?
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-lg mx-auto">
                    Let's combine creative storytelling with data-driven strategy for your brand.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a
                        href="mailto:thalia.venous@gmail.com?subject=UGC-Proposal"
                        className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors text-lg"
                    >
                        <Mail className="w-5 h-5" />
                        Email Me
                    </a>
                    <a
                        href="tel:9492281169"
                        className="flex items-center gap-3 border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors text-lg"
                    >
                        <Phone className="w-5 h-5" />
                        Book a Call
                    </a>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 w-full text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} Thalia Venous. Miami, FL.</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
