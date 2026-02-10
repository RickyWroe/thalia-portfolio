import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center bg-background">
            <div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-secondary">
                    Ready to scale?
                </h2>
                <p className="text-lg sm:text-xl text-accent mb-12 max-w-lg mx-auto">
                    Let's combine creative storytelling with data-driven strategy for your brand.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a
                        href="mailto:thalia.venous@gmail.com?subject=UGC-Proposal"
                        className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-lg"
                    >
                        <Mail className="w-5 h-5" />
                        Email Me
                    </a>
                    <a
                        href="tel:9492281169"
                        className="flex items-center gap-3 border border-primary/40 text-secondary px-8 py-4 rounded-full font-medium hover:bg-highlight transition-colors text-lg"
                    >
                        <Phone className="w-5 h-5" />
                        Book a Call
                    </a>
                </div>

                <div className="mt-20 pt-10 border-t border-primary/20 w-full text-accent text-sm">
                    <p>© {new Date().getFullYear()} Thalia Venous. Miami, FL.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
