'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import ProductModal from '@/components/ProductDetail';
import { Product } from '@/types/Product';
import { Croissant } from 'lucide-react';

export default function ProductList() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/api/products');
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);


    return (
        <section
            id="products"
            className="py-12 bg-white text-center scroll-mt-20"
        >
            <motion.h2
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: false }}
            >
                <Croissant className="inline-block mr-2 text-brown-700" />
                Products
            </motion.h2>

            <div className="flex justify-center gap-8 flex-wrap">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                        viewport={{ once: false }}
                        onClick={() => setSelectedProduct(product)}
                        className="cursor-pointer"
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </div>

            {/* モーダル表示 */}
            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </section>
    );
}
