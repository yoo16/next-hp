import Image from 'next/image'; // ← Imageも忘れずにimport

interface Props {
    product: { id: number, name: string; image: string };
}

export default function ProductCard({ product }: Props) {
    return (
        <div className="flex flex-col items-center p-4">
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
        </div>
    );
}
