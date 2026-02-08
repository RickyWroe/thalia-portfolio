import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Instagram } from 'lucide-react';

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
        <section className="py-24 px-6 bg-primary">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Work</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A curation of high-performing creative assets driving real revenue and engagement.
                    </p>
                </motion.div>

                {/* MP4 Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {videos.map((video, index) => (
                        <div key={index} className="relative aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden group shadow-lg border border-white/5">
                            <video
                                src={video.src}
                                className="w-full h-full object-cover"
                                muted
                                playsInline
                                loop
                                autoPlay
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Play className="w-12 h-12 text-white fill-white" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Links / Other Works */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 group"
                        >
                            <div>
                                <h3 className="font-semibold text-lg">{link.platform}</h3>
                                <p className="text-sm text-gray-400">{link.label}</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
