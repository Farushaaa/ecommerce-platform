import type {FilterTypes} from "../../features/catalog-filter/types/filterTypes.ts";

export const filters: FilterTypes[] = [
    {
        id: 1,
        name: "men's clothing",
        status: true,
    },
    {
        id: 2,
        name: "women's clothing",
        status: false
    },
    {
        id: 3,
        name: 'jewelery',
        status: false
    },
    {
        id: 4,
        name: 'electronics',
        status: false
    },
]