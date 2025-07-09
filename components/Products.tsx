import ProductCard from './ProductCard';

const products = [
    { id:1, name: "クロワッサン", image: "/images/croissant.webp" },
    { id:2, name: "バゲット", image: "/images/baguette.webp" },
    { id:3, name: "パン・オ・ショコラ", image: "/images/pain-au-chocolat.webp" },
];

export default function Products() {
    return (
        <section id="products" className="py-12 bg-white text-center h-screen scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8">おすすめのパン</h2>
            <div className="flex justify-center gap-8 flex-wrap">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
