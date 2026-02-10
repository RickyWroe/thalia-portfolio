import React from 'react';
import { ArrowRight } from 'lucide-react';
import { brandResults } from '../data/brands';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-5 sm:px-8 lg:px-12 py-16 lg:py-20 relative overflow-hidden bg-background">
            <div className="absolute top-[-18%] right-[-12%] w-[60%] h-[55%] bg-highlight rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center z-10">
                <div className="order-2 lg:order-1">
                    <h2 className="text-accent text-xs sm:text-sm tracking-[0.2em] mb-4 uppercase">UGC Creator & Strategist</h2>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-5 font-sans text-secondary">
                        Thalia <br /> Venous
                    </h1>
                    <p className="text-accent/90 text-base sm:text-lg mb-8 max-w-xl font-serif">
                        Miami-based digital marketing specialist crafting high-converting UGC with over $2M in organic reach.
                    </p>

                    <a
                        href="mailto:thalia.venous@gmail.com?subject=UGC-Proposal"
                        className="group inline-flex items-center gap-3 bg-transparent text-primary px-7 py-3.5 rounded-full font-semibold border border-primary/40 hover:border-primary transition-colors"
                    >
                        Hire me
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 items-center">
                        {brandResults.map((brand) => (
                            <img
                                key={brand.name}
                                src={brand.logo}
                                alt={`${brand.name} logo`}
                                loading="lazy"
                                decoding="async"
                                className="h-12 sm:h-14 lg:h-[72px] w-auto object-contain"
                            />
                        ))}
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-[44%] overflow-hidden border-2 border-primary/60 shadow-[0_30px_60px_rgba(225,166,180,0.35)]">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0862/9157/9177/files/Facetune_05-07-2023-16-02-06.jpg?v=1770522502"
                            alt="Thalia Venous"
                            fetchPriority="high"
                            decoding="async"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
