'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: "クロワッサン", image: "/images/croissant.webp" },
    { id: 2, name: "バゲット", image: "/images/baguette.webp" },
    { id: 3, name: "パン・オ・ショコラ", image: "/images/pain-au-chocolat.webp" },
    { id: 4, name: "ブリオッシュ", image: "/images/brioche.webp" },
    { id: 5, name: "カンパーニュ", image: "/images/campagne.webp" },
    { id: 6, name: "キッシュ", image: "/images/quiche.webp" },
];


export default function Products() {
    return (
        <motion.section
            id="products"
            className="py-12 bg-white text-center h-screen scroll-mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
        >
            <motion.h2
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: false }}
            >
                人気商品
            </motion.h2>

            <div className="flex justify-center gap-8 flex-wrap">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                        viewport={{ once: false }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
