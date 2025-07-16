'use client';

import React, { useEffect, useState } from 'react'
import { FaInfoCircle, FaArrowCircleRight } from 'react-icons/fa'
import { Topic } from '@/types/Type';
import { motion } from 'motion/react';

export default function Topics() {
    const [topics, setTopics] = useState<Topic[]>([]);

    useEffect(() => {
        const fetchTopics = async () => {
            const res = await fetch('/api/topics');
            const data = await res.json();
            setTopics(data);
        };

        fetchTopics();
    }, []);

    return (
        <section
            id="topics"
            className="max-w-2xl mx-auto text-xl h-screen px-4 py-12 scroll-mt-20"
        >
            <motion.h2
                className="text-3xl font-bold p-4 mb-4 text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: false }}
            >
                <FaInfoCircle className="inline-block mr-2 text-brown-700" />
                Topics
            </motion.h2>
            <div>
                <ul className="space-y-3">
                    {topics.map((item, index) => (
                        <li key={index} className="border-b p-2">
                            <p className="text-md py-2 text-black">
                                <FaArrowCircleRight className="inline-block mr-2 text-brown-700" />
                                <span className="mt-1">{item.date}</span>
                            </p>
                            <p className="py-2 font-medium">{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
