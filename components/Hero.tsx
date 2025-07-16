'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
    const fullText = "今日も、焼きたての香りから、あなたの一日が始まる。";
    const [displayedText, setDisplayedText] = useState('');

    // Re-enabled the typing effect for the text
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, i + 1));
            i++;
            if (i >= fullText.length) clearInterval(interval);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            id="hero"
            className="h-screen flex items-center justify-center scroll-mt-20 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            >
                <source src="/movies/main.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Video Mask Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-30 z-0"></div>

            <motion.div
                className="text-center bg-white p-8 w-1/2 rounded-xl z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 0.8, y: 0 }} // Changed back to 1 for the container's opacity
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <motion.h1
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Boulangerie Lumière
                </motion.h1>

                <motion.p
                    className="text-center text-xl whitespace-pre-wrap py-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                >
                    {displayedText} {/* Using displayedText for typing effect */}
                </motion.p>
            </motion.div>
        </motion.section>
    );
}