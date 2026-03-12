import {api} from "../../../shared/api/api-instance.ts";
import type {ProductType} from "../types/ProductType.ts";

export const getProducts = async (): Promise<ProductType[]> => {
    const response = await api.get('/products')
    return response.data
}