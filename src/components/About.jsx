import React from 'react';

const About = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 bg-background text-secondary relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-highlight rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold font-sans text-secondary">
                        Expertise & Strategy
                    </h2>

                    <div className="text-lg md:text-xl text-accent leading-relaxed space-y-6 font-light">
                        <p>
                            With <span className="text-secondary font-medium">6+ years of hands-on experience</span> as a Digital Marketing & eCommerce Specialist, I navigate the intersection of DTC, marketplaces, paid social, and lifecycle marketing.
                        </p>
                        <p>
                            I support both founder-led brands and contract performance teams, bringing a result-oriented approach to creativity.
                        </p>
                        <p>
                            As a proven winning-ad creator, I am responsible for performance-scaling paid-social creative that achieved:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-secondary/85">
                            <li>~2%+ CTR</li>
                            <li>~4.5× ROAS at six-figure spend</li>
                            <li>2.5M+ reach by compounding paid efficiency with organic virality</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
