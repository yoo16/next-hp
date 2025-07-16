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
                    className="bg-white rounded-xl shadow-lg max-w-md w-full relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >

                    <Image src={product.image} alt={product.name} className="w-full" width={500} height={500} />

                    <div className="px-4">
                        <h3 className="text-xl font-semibold p-2">
                            {product.name}
                        </h3>

                        {product.recommend && (
                            <span className="bg-red-500 text-white text-sm px-4 py-1 rounded-full shadow">
                                {product.recommend}
                            </span>
                        )}

                        <p className="text-gray-600 text-left p-4">{product.description}</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
