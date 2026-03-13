import type {ProductType} from "../../products/types/ProductType.ts";

interface ProductFavouriteBtnProps {
    product: ProductType,
    handleFavourite: (prd: ProductType) => void,
    isFavourite: boolean
}


const ProductDetailsFavouriteBtnComponent = ({product, handleFavourite, isFavourite}: ProductFavouriteBtnProps) => {
    return(
        <button onClick={() => handleFavourite(product)}
                className={`p-3 rounded-xl border border-gray-200 text-gray-400
                            hover:text-red-500 hover:bg-red-50 hover:border-red-100 transition-all
                            duration-300 group`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={`${isFavourite ? 'red' : 'none'}`}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 group-hover:scale-110 transition-transform"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
            </svg>
        </button>
    )
}

export default ProductDetailsFavouriteBtnComponent