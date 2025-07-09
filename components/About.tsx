'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.section
            id="about"
            className="py-12 text-center h-screen px-4 scroll-mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
        >
            <motion.h2
                className="text-3xl font-bold p-4 mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: false }}
            >
                Lumière について
            </motion.h2>

            <div className="my-8 text-xl">
                <p className="p-4">
                    ブーランジェリー・リュミエールは、フランス伝統のレシピと職人技を大切にしながら、
                    <br />
                    毎朝一つひとつ丁寧に焼き上げたパンをお届けしています。
                </p>
                <p className="p-4">
                    素材は国産小麦と天然酵母を使用し、安心・安全にもこだわっています。
                </p>
                <p className="p-4">
                    地域の皆さまに愛されるパン屋を目指し、日本の食卓に合う優しい味わいを日々探求しています。
                </p>
            </div>
        </motion.section>
    );
}