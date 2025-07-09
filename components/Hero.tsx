'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <motion.section
            id="hero"
            className="h-[90vh] flex items-center justify-center scroll-mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="text-center backdrop-blur-sm p-8 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
                    className="text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    毎朝焼きたてのパンを、あなたに。
                </motion.p>
            </motion.div>
        </motion.section>
    );
}
