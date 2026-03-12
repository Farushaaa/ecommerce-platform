import type {ProductType} from "../../products/types/ProductType.ts";
import {api} from "../../../shared/api/api-instance.ts";

export const getProductDetailsById = async (id: number): Promise<ProductType> => {
    const response = await api.get(`/products/${id}`)
    return response.data
}