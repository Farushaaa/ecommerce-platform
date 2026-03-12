import {api} from "../../../shared/api/api-instance.ts";
import type {ProductType} from "../types/ProductType.ts";

export const getProducts = async (): Promise<ProductType[]> => {
    const response = await api.get('/products')
    console.log("DATA: ", response.data)
    return response.data
}