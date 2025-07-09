'use client';

import { motion } from 'framer-motion';

export default function Access() {
    return (
        <motion.section
            id="access"
            className="py-12 bg-white text-center px-4 scroll-mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
        >
            <motion.h2
                className="text-3xl font-bold p-4 mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: false }}
            >
                アクセス & 営業時間
            </motion.h2>

            <motion.p
                className="text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: false }}
            >
                東京都世田谷区パン通り3-14-7
            </motion.p>

            <motion.p
                className="text-lg mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: false }}
            >
                営業時間：8:00〜18:00（定休：水曜日）
            </motion.p>

            <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: false }}
            >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4161.911222477505!2d139.63478944645513!3d35.648421863905504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f38bdd6d8d61%3A0x4ebc10d2858da879!2z5p2x5Lqs6YO95LiW55Sw6LC35Yy6!5e0!3m2!1sja!2sjp!4v1752031386137!5m2!1sja!2sjp" 
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    >
                </iframe>
            </motion.div>
        </motion.section>
    );
}
