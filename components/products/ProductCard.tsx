import { Product } from "@/src/schemas";
import { formatCurrency } from "@/src/utils";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="rounded bg-white shadow relative p-5">
            <div>
                <Image
                    src={`${process.env.URL_IMAGE}/img/${product.image}`}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-52 object-contain"
                />
                <div className="p-3 space-y-2">
                    <h3 className="text-xl font-bold text-gray-600">
                        {product.name}
                    </h3>
                    <p className="text-gray-500">
                        Disponibles:{product.inventory}
                    </p>
                    <p className="text-2xl font-extrabold  text-gray-900">
                        {formatCurrency(product.price)}
                    </p>
                </div>
            </div>
            <AddProductButton product={product} />
        </div>
    );
}
