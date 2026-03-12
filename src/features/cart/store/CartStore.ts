import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"; // 1. Import persist
import type { ProductType } from "../../products/types/ProductType.ts";
import type { CartItemTypes } from "../types/cart-items-types.ts";

type CartStoreTypes = {
    cartItems: CartItemTypes[];
    increaseItemQnt: (item: ProductType, quantity: number) => void;
    decreaseItemQnt: (item: ProductType) => void;
    removeCartItem: (id: number) => void;
};

export const useCartStore = create<CartStoreTypes>()(
    persist(
        (set) => ({
            cartItems: [],

            increaseItemQnt: (item, quantity) => set((state) => {
                const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

                if (existingItem) {
                    return {
                        cartItems: state.cartItems.map((it) =>
                            it.id === item.id ? { ...it, quantity: it.quantity + quantity } : it
                        ),
                    };
                }

                return {
                    cartItems: [...state.cartItems, { ...item, quantity }]
                };
            }),

            decreaseItemQnt: (item) => set((state) => {
                const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

                if (existingItem?.quantity === 1) {
                    return {
                        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== item.id)
                    };
                }

                return {
                    cartItems: state.cartItems.map((cartItem) =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity - 1 }
                            : cartItem
                    )
                };
            }),

            removeCartItem: (id) => set((state) => ({
                cartItems: state.cartItems.filter((item) => item.id !== id)
            }))
        }),
        {
            name: "shopping-cart-storage", // Unique name for the item in localStorage
            storage: createJSONStorage(() => localStorage), // (Optional) defaults to localStorage
        }
    )
);