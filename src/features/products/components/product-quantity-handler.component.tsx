interface ProductCardHandlerProps {
    decreaseQnt: () => void,
    itemQuantity: number,
    increaseQnt: () => void
}

const ProductQuantityHandlerComponent = ({decreaseQnt, increaseQnt, itemQuantity}: ProductCardHandlerProps) => {
    return(
        <div className='flex items-center bg-gray-100 rounded-lg px-2 py-1 '>
            <button
                onClick={decreaseQnt}
                className='px-2 py-1 hover:text-blue-600 font-bold transition-colors cursor-pointer'
            >
                −
            </button>
            <span className='px-3 font-semibold text-gray-700 w-8 text-center'>
                        {itemQuantity}
                    </span>
            <button
                onClick={increaseQnt}
                className='px-2 py-1 hover:text-blue-600 font-bold transition-colors cursor-pointer'
            >
                +
            </button>
        </div>
    )
}

export default ProductQuantityHandlerComponent