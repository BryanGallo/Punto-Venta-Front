"use client";

import { useStore } from "@/src/store";
import ShoppingCartItem from "./ShoopingCartItem";
import Amount from "./Amount";
import CouponForm from "./CouponForm";

export default function ShoppingCart() {
    const contents = useStore((state) => state.contents);
    // console.log(contents);
    const total = useStore((state) => state.total);
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
                    <dl className="space-y-6 border-t bg-gray-300 rounded-lg p-6 mt-6 text-sm font-medium text-gray-500">
                        <Amount
                            label="Total a Pagar"
                            amount={total}
                        />
                    </dl>
                    <CouponForm />
                </>
            )}
        </>
    );
}
