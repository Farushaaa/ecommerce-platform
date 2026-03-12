import type {ProductType} from "../types/ProductType.ts";

interface ProductBtnProps {
    product: ProductType,
    quantity: number,
    addToCart: (item:ProductType, qnt: number) => void,
    isClicked: boolean
}

const ProductCardButtonComponent = ({addToCart, isClicked, product, quantity}: ProductBtnProps) => {
    return(
        <button
            onClick={() => addToCart(product, quantity)}
            className={`
                            relative px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer
                            ${isClicked ? 'bg-green-500 scale-95' : 'bg-blue-600 hover:bg-blue-700'}
                            text-white
                        `}
        >
            Add to Cart
        </button>
    )
}

export default ProductCardButtonComponent