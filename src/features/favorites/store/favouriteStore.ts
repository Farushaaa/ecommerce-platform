import {create} from "zustand";
import type {ProductType} from "../../products/types/ProductType.ts";

interface FavouriteStoreTypes {
    favouritesArr: ProductType[],
    toggleFavourite: (item: ProductType) => void
}

export const useFavouriteProductStore = create<FavouriteStoreTypes>(
        (set => ({
            favouritesArr: [],

            toggleFavourite: (product) => set((state) => {
                const isAlreadyFav = state.favouritesArr.some((item) => item.id === product.id)

                if(isAlreadyFav) {
                    return {
                        favouritesArr: state.favouritesArr.filter((item) => item.id !== product.id)
                    }
                }

                return {
                    favouritesArr: [...state.favouritesArr, product]
                }
            })
        }))
)