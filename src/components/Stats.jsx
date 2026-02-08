import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Organic Reach", value: "$2M+" },
    { label: "ROAS on Winner Ad", value: "5x" },
    { label: "Ad Spend Managed", value: "$100K+" },
    { label: "Years Experience", value: "6+" }
];

const Stats = () => {
    return (
        <section className="py-20 bg-primary border-y border-white/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold font-sans mb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base uppercase tracking-widest font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
