'use client';

import { Product } from '@/types/Product';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <motion.div
            className="relative flex flex-col items-center p-4"
            whileHover={{
                scale: 1.03,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
        >
            {product.recommend && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-sm px-4 py-1 rounded-full shadow">
                    {product.recommend}
                </div>
            )}

            <div className="rounded-3xl overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={256}
                    height={256}
                    className="rounded shadow-md"
                />
            </div>

            <div className="w-64">
                <p className="mt-4 text-lg font-bold">{product.name}</p>
            </div>
        </motion.div>
    );
}