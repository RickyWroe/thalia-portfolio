import React, { useEffect, useMemo, useState } from 'react';
import { useInView } from 'framer-motion';
import { brandResults } from '../data/brands';

const CountUpValue = ({ target, duration = 1200, decimals = 0, prefix = '', suffix = '' }) => {
    const [value, setValue] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    useEffect(() => {
        if (!isInView) return;

        const start = performance.now();
        let rafId;

        const animate = (timestamp) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            setValue(target * progress);
            if (progress < 1) rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, [duration, isInView, target]);

    const formatted = useMemo(
        () => `${prefix}${value.toFixed(decimals)}${suffix}`,
        [decimals, prefix, suffix, value],
    );

    return (
        <span ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
            {formatted}
        </span>
    );
};

const Stats = () => {
    return (
        <section className="py-16 sm:py-20 bg-background">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="mb-10 sm:mb-12 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">Winner Projects</h2>
                    <p className="mt-3 text-accent">Top-performing brand results with animated performance metrics.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
                    {brandResults.map((brand) => (
                        <article
                            key={brand.name}
                            className="rounded-2xl border border-primary/20 p-6 bg-white shadow-[0_14px_35px_rgba(225,166,180,0.18)]"
                        >
                            <img
                                src={brand.logo}
                                alt={`${brand.name} logo`}
                                loading="lazy"
                                decoding="async"
                                className="h-14 sm:h-16 w-auto object-contain mb-6"
                            />

                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-secondary">{brand.name}</h3>
                                <p className="text-sm uppercase tracking-[0.12em] text-accent">{brand.metricLabel}</p>
                                <CountUpValue
                                    target={brand.value}
                                    decimals={brand.decimals}
                                    prefix={brand.prefix}
                                    suffix={brand.suffix}
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
