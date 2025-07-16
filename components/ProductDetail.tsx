"use client";

import { Product } from "@/types/Product";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

type ProductModalProps = {
    product: Product | null;
    onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
    useEffect(() => {
        if (product) {
            // モーダル表示時にスクロール禁止
            document.body.style.overflow = "hidden";
        }

        return () => {
            // 閉じたら解除
            document.body.style.overflow = "";
        };
    }, [product]);

    if (!product) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >

                    <Image src={product.image} alt={product.name} className="rounded w-full mb-4" width={500} height={500} />

                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-left">{product.description}</p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
