import type {FilterTypes} from "../types/filterTypes.ts";

interface FilterComponentTypes {
    filter: FilterTypes,
    onChangeFilter: (id: number) => void
}

const FiltersComponent = ({filter, onChangeFilter}: FilterComponentTypes) => {
    return (
        <button
            onClick={() => onChangeFilter(filter.id)}
            className={`
                px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer
                ${filter.status
                ? 'bg-gray-900 text-white shadow-lg shadow-gray-200 scale-105'
                : 'bg-white text-gray-600 border border-gray-100 hover:border-gray-300 hover:bg-gray-50'
            }
            `}
        >
            {filter.name}
        </button>
    )
}

export default FiltersComponent