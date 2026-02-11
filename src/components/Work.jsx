import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const videos = [
    {
        type: 'mp4',
        src: "https://cdn.shopify.com/videos/c/o/v/c354bacc3be54f3fa98948ff8ffda56a.mp4",
        title: "High-Converting UGC"
    },
    {
        type: 'mp4',
        src: "https://cdn.shopify.com/videos/c/o/v/5a3cfcf8ecc9486daa427c422c12ff65.mp4",
        title: "Product Showcase"
    },
    {
        type: 'mp4',
        src: "https://cdn.shopify.com/videos/c/o/v/85d46d46469c46279e14f452f981af5f.mp4",
        title: "Viral Creative"
    }
];

const socialLinks = [
    {
        platform: "Instagram",
        url: "https://www.instagram.com/reel/DNIZKu_u7gb/",
        label: "View Winner Ad (5x ROAS)"
    },
    {
        platform: "TikTok",
        url: "https://www.tiktok.com/@thalia.unboxes/video/7584207487356718349",
        label: "Bad Bunny Contest"
    },
    {
        platform: "TikTok",
        url: "https://www.tiktok.com/@thalia.unboxes/video/7454414956965186862",
        label: "Pandora Collab"
    }
];

const Work = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">UGC Winner Ads</h2>
                    <p className="text-accent max-w-2xl mx-auto">
                        Content that Converts 5X with over 100K spend
                    </p>
                </div>

                {/* MP4 Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-14">
                    {videos.map((video, index) => (
                        <div key={index} className="relative aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden group shadow-lg border border-primary/20">
                            <video
                                src={video.src}
                                className="w-full h-full object-cover"
                                muted
                                playsInline
                                loop
                                autoPlay
                                preload="none"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Play className="w-12 h-12 text-white fill-white" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Links / Other Works */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-6 bg-white rounded-xl hover:bg-highlight transition-colors border border-primary/20 group"
                        >
                            <div>
                                <h3 className="font-semibold text-lg text-secondary">{link.platform}</h3>
                                <p className="text-sm text-accent">{link.label}</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-accent group-hover:text-secondary transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
