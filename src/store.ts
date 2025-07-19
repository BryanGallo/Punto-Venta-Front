import { create } from "zustand";
import { Product, ShoppingCart } from "./schemas";

interface Store {
    total: number;
    contents: ShoppingCart;
    addToCart: (product: Product) => void;
}

export const useStore = create<Store>(() => ({
    total: 0,
    contents: [],
    addToCart: (product: Product) => {
        console.log("addToCart", product);
    },
}));
