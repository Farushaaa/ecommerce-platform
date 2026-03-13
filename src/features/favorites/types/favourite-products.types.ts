import type {ProductType} from "../../products/types/ProductType.ts";

export type FavouriteProductsTypes = ProductType & {
    isFavourite: boolean
}