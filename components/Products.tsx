import Image from 'next/image';

const products = [
    { name: "クロワッサン", image: "/images/croissant.webp" },
    { name: "バゲット", image: "/images/baguette.webp" },
    { name: "パン・オ・ショコラ", image: "/images/pain-au-chocolat.webp" },
];

export default function Products() {
    return (
        <section id="products" className="py-12 bg-white text-center h-screen scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8">おすすめのパン</h2>
            <div className="flex justify-center gap-8 flex-wrap">
                {products.map((product) => (
                <div key={product.name} className="flex flex-col items-center rounded-lg p-4">
                    <Image src={product.image} alt={product.name} width={256} height={256} className="rounded shadow-md" />
                    <div className="w-64">
                        <p className="mt-4 text-lg font-bold">{product.name}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}
