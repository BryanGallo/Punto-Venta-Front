import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Product, ShoppingCart } from "./schemas";

interface Store {
    total: number;
    contents: ShoppingCart;
    addToCart: (product: Product) => void;
}

export const useStore = create<Store>()(
    devtools((set, get) => ({
        total: 0,
        contents: [],
        addToCart: (product: Product) => {
            // console.log("addToCart", product);
            const { id: productId } = product;

            let updateContents: ShoppingCart = [];

            const duplicate = get().contents.findIndex(
                (item) => item.productId === productId
            );

            if (duplicate !== -1) {
                if (get().contents[duplicate].quantity >= get().contents[duplicate].inventory) {
                    return;
                }
                updateContents = get().contents.map((item) =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updateContents = [
                    ...get().contents,
                    {
                        ...product,
                        quantity: 1,
                        productId: productId,
                    },
                ];
            }

            set(() => ({
                contents: updateContents,
            }));
        },
    }))
);
