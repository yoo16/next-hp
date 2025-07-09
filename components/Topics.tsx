'use client';

import React from 'react'
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa'

export default function Topics() {
    const topics = [
        { date: "2025-07-01", title: "新作クロワッサン販売開始！" },
        { date: "2025-06-20", title: "7月の営業日変更のお知らせ" },
        { date: "2025-06-10", title: "Lumièreが雑誌に掲載されました" },
    ];
    return (
        <motion.section
            id="topics"
            className="max-w-2xl mx-auto text-xl h-screen px-4 py-12 scroll-mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: false }}
        >
            <h3 className="text-3xl font-semibold p-4 mb-4 text-center">
                <FaInfoCircle className="inline-block mr-2 text-brown-700" />
                Topics
            </h3>
            <ul className="space-y-3">
                {topics.map((item, index) => (
                    <li key={index} className="border-b pb-2">
                        <p className="text-md py-2 text-gray-500">{item.date}</p>
                        <p className="py-2 font-medium">{item.title}</p>
                    </li>
                ))}
            </ul>
        </motion.section>
    )
}
