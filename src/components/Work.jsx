import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
    {
        src: "https://cdn.shopify.com/videos/c/o/v/3b7ad7ab9843434f870093aaba59e5c1.mp4",
        title: "Evergreen Ad 01",
        result: "2M impressions · 4X ROAS · $150K spend",
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/08913302125e45a7b986ccdda12379ed.mp4",
        title: "Bad Bunny Merch",
        result: "Organic result · 60K views",
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/f1b65a3fa8ec4f8eb3e23be6a0e78824.mp4",
        title: "Skims",
        result: "Organic result · 70% retention rate",
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/4b6701cd8f3b49d3a6c24ba3752f1453.mp4",
        title: "Bad Bunny Merch 02",
        result: "Organic result · 300K views",
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/8e5ca2bafa8d4a7b89acf545751214fb.mp4",
        title: "Pandora",
        result: "Organic result · 80% engagement rate",
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/85d46d46469c46279e14f452f981af5f.mp4",
        title: "Winner 02",
        result: "5X ROAS",
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/5a3cfcf8ecc9486daa427c422c12ff65.mp4",
        title: "Winner 03",
        result: "4X ROAS",
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/c354bacc3be54f3fa98948ff8ffda56a.mp4",
        title: "Winner 04",
        result: "6X ROAS",
    },
];

const Work = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const videoRefs = useRef([]);
    const total = videos.length;

    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + total) % total);
    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % total);

    const getPosition = (index) => {
        const offset = (index - activeIndex + total) % total;
        if (offset === 0) return 'center';
        if (offset === 1) return 'right';
        if (offset === total - 1) return 'left';
        return 'hidden';
    };

    const cardStyles = useMemo(() => {
        if (isMobile) {
            return {
                center: {
                    transform: 'translateX(-50%) translateZ(0) scale(1)',
                    opacity: 1,
                    zIndex: 30,
                },
                left: {
                    transform: 'translateX(calc(-50% - 98px)) scale(0.85) rotateY(15deg)',
                    opacity: 0.34,
                    zIndex: 20,
                },
                right: {
                    transform: 'translateX(calc(-50% + 98px)) scale(0.85) rotateY(-15deg)',
                    opacity: 0.34,
                    zIndex: 20,
                },
                hidden: {
                    transform: 'translateX(-50%) scale(0.72)',
                    opacity: 0.05,
                    zIndex: 10,
                },
            };
        }

        return {
            center: {
                transform: 'translateX(-50%) translateZ(0) scale(1)',
                opacity: 1,
                zIndex: 30,
                },
                left: {
                    transform: 'translateX(calc(-50% - 215px)) scale(0.85) rotateY(18deg)',
                    opacity: 0.5,
                    zIndex: 20,
                },
                right: {
                    transform: 'translateX(calc(-50% + 215px)) scale(0.85) rotateY(-18deg)',
                    opacity: 0.5,
                    zIndex: 20,
                },
            hidden: {
                transform: 'translateX(-50%) scale(0.75)',
                opacity: 0,
                zIndex: 10,
            },
        };
    }, [isMobile]);

    useEffect(() => {
        videoRefs.current.forEach((video, idx) => {
            if (!video) return;
            if (idx === activeIndex) {
                video.play().catch(() => { });
                return;
            }

            video.pause();
            video.currentTime = 0;
        });
    }, [activeIndex]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 640px)');
        const syncState = () => setIsMobile(mediaQuery.matches);
        syncState();

        mediaQuery.addEventListener('change', syncState);
        return () => mediaQuery.removeEventListener('change', syncState);
    }, []);

    return (
        <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 bg-background">
            <div className="max-w-6xl mx-auto overflow-hidden">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">Selected Work</h2>
                    <p className="text-accent max-w-2xl mx-auto">
                        3D carousel of winner creatives ordered by campaign performance.
                    </p>
                </div>

                <div className="relative grid grid-cols-[44px_1fr_44px] sm:grid-cols-[52px_1fr_52px] items-center gap-2 sm:gap-4">
                    <button
                        type="button"
                        onClick={prevSlide}
                        className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-primary/35 text-primary inline-flex items-center justify-center hover:bg-highlight transition-colors"
                        aria-label="Previous video"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="relative min-h-[505px] sm:min-h-[585px]" style={{ perspective: '1200px' }}>
                        {videos.map((video, index) => {
                            const position = getPosition(index);
                            return (
                                <article
                                    key={video.src}
                                    style={cardStyles[position]}
                                    className="absolute top-0 left-1/2 w-[min(78vw,388px)] transition-all duration-300 will-change-transform"
                                >
                                    <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-slate-900 border border-primary/25">
                                        <div className="absolute top-2 left-2 right-2 z-10 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                                            <p className="text-white text-sm font-semibold leading-tight">{video.title}</p>
                                            <p className="text-highlight text-xs sm:text-sm leading-tight mt-1">{video.result}</p>
                                        </div>

                                        <video
                                            ref={(node) => {
                                                videoRefs.current[index] = node;
                                            }}
                                            src={video.src}
                                            className="w-full h-full object-cover"
                                            muted
                                            playsInline
                                            loop
                                            preload={position === 'center' ? 'metadata' : 'none'}
                                        />
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        onClick={nextSlide}
                        className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-primary/35 text-primary inline-flex items-center justify-center hover:bg-highlight transition-colors"
                        aria-label="Next video"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="mt-7 flex items-center justify-center gap-2">
                    {videos.map((video, index) => (
                        <button
                            key={video.src}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-primary' : 'w-2.5 bg-primary/35'
                                }`}
                            aria-label={`Go to video ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
