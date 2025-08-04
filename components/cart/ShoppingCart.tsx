"use client";

import { useStore } from "@/src/store";
import ShoppingCartItem from "./ShoopingCartItem";

export default function ShoppingCart() {
    const contents = useStore((state) => state.contents);
    // console.log(contents);
    return (
        <>
            {contents.length === 0 ? (
                <p className="text-center text-gray-500 text-xl">
                    No hay productos en el carrito
                </p>
            ) : (
                <>
                    <h2 className="text-2xl font-bold">Resumen de la compra</h2>
                    <ul
                        role="list"
                        className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm text-gray-500"
                    >
                        {contents.map((item) => (
                            <ShoppingCartItem
                                key={item.productId}
                                item={item}
                            />
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}
