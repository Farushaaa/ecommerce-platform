import type {ProductType} from "../../products/types/ProductType.ts";

export type CartItemTypes = ProductType & {
    quantity: number
}