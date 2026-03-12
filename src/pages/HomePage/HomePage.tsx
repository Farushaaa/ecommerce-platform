import HeroSectionComponent from "./components/HeroSectionComponent.tsx";
import {getProducts} from "../../features/products/api/products-api.ts";
import {useQuery} from "@tanstack/react-query";
import {useFilterStore} from "../../features/catalog-filter/store/filterStore.ts";
import FiltersComponent from "../../features/catalog-filter/components/FiltersComponent.tsx";
import ProductCardComponent from "../../features/products/components/ProductCardComponent.tsx";

const HomePage = () => {

    const {data, error, isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })
    const {filters, activeFilter, setActiveFilter} = useFilterStore()

    const onChangeFilter = (id: number) => {
        setActiveFilter(id)
    }

    return(
        <div>
            <HeroSectionComponent/>

            {error && (
                <div className='flex-col justify-between items-center items-center m-auto'>
                    <h1>Oops...</h1>
                    <p>Sorry, error occured</p>
                </div>
            )}

            {isLoading && (
                <div className='m-auto w-fit'>
                    <p>Data is loading...</p>
                </div>
            )}

            <div className='flex items-center justify-center flex-wrap gap-3 mt-8 mb-8 px-4'>
                {filters.map((filter) => (
                    <FiltersComponent
                        key={filter.id}
                        filter={filter}
                        onChangeFilter={onChangeFilter}
                    />
                ))}
            </div>

            {data && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 p-5">
                    {data.filter((product) => product.category === activeFilter.name).map((p) => (
                        <ProductCardComponent key={p.id} product={p}/>
                    ))}
                </div>
            )}

        </div>
    )
}

export default HomePage