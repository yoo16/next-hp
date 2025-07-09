'use client';

import { motion } from 'framer-motion';

export default function About() {
    const news = [
        { date: "2025-07-01", title: "新作クロワッサン販売開始！" },
        { date: "2025-06-20", title: "7月の営業日変更のお知らせ" },
        { date: "2025-06-10", title: "Lumièreが雑誌に掲載されました" },
    ];

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
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: false }}
            >
                Lumière について
            </motion.h2>

            <motion.p
                className="max-w-2xl mx-auto text-lg mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: false }}
            >
                ブーランジェリー・リュミエールは、フランス伝統のレシピを守りながら、日本の食卓に合うパンをお届けしています。
            </motion.p>

            <motion.div
                className="max-w-2xl mx-auto text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: false }}
            >
                <h3 className="text-2xl font-semibold mb-4 text-center">最新ニュース</h3>
                <ul className="space-y-3">
                    {news.map((item, index) => (
                        <li key={index} className="border-b pb-2">
                            <p className="text-sm text-gray-500">{item.date}</p>
                            <p className="text-md font-medium">{item.title}</p>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.section>
    );
}