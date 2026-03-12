import {create} from 'zustand'
import type {FilterTypes} from "../types/filterTypes.ts";
import {filters} from "../../../shared/utils/filters.ts";

type FilterStoreTypes = {
    activeFilter: FilterTypes,
    filters: FilterTypes[],
    setActiveFilter: (id: number) => void
}

export const useFilterStore = create<FilterStoreTypes>((set) => ({
    activeFilter: filters[0],
    filters: filters,
    setActiveFilter: (id: number) => set((state) => {
        const newFilters = state.filters.map((filter) => ({...filter, status: filter.id === id }))
        return {
            filters: newFilters,
            activeFilter: newFilters.find((filter) => filter.id === id)!
        }
    })
}))