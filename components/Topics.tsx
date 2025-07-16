'use client';

import React, { useEffect, useState } from 'react';
import { FaInfoCircle, FaArrowCircleRight } from 'react-icons/fa';
import { Topic } from '@/types/Topic';
import { motion, AnimatePresence } from 'framer-motion';

export default function Topics() {
    const [topics, setTopics] = useState<Topic[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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

            <ul className="space-y-4">
                {topics.map((item, index) => (
                    <li
                        key={index}
                        className="border-b p-4 cursor-pointer"
                        onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                        }
                    >
                        <p className="text-md text-black">
                            <FaArrowCircleRight className="inline-block mr-2 text-brown-700" />
                            <span>{item.date}</span>
                        </p>
                        <p className="font-semibold text-lg mt-1">{item.title}</p>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-700 text-base mt-2 overflow-hidden"
                                >
                                    <p className="mb-1 font-medium">{item.description}</p>
                                    <p className="text-sm whitespace-pre-wrap">{item.content}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>
        </section>
    );
}
