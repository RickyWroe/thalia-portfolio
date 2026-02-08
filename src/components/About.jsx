import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-sans">
                        Expertise & Strategy
                    </h2>

                    <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6 font-light">
                        <p>
                            With <span className="text-white font-medium">6+ years of hands-on experience</span> as a Digital Marketing & eCommerce Specialist, I navigate the intersection of DTC, marketplaces, paid social, and lifecycle marketing.
                        </p>
                        <p>
                            I support both founder-led brands and contract performance teams, bringing a result-oriented approach to creativity.
                        </p>
                        <p>
                            As a proven winning-ad creator, I am responsible for performance-scaling paid-social creative that achieved:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-white/90">
                            <li>~2%+ CTR</li>
                            <li>~4.5× ROAS at six-figure spend</li>
                            <li>2.5M+ reach by compounding paid efficiency with organic virality</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
