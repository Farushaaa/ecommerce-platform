import type {ProductType} from "../../products/types/ProductType.ts";
import type {CartItemTypes} from "../types/cart-items-types.ts";

interface QuantityHandlerComponentTypes {
    decreaseQuantity: (item: ProductType) => void,
    increaseQuantity: (item: ProductType, qnt: number) => void,
    itemQuantity: CartItemTypes
}

const QuantityHandlerComponent = ({increaseQuantity,decreaseQuantity, itemQuantity}: QuantityHandlerComponentTypes) => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center bg-gray-100 rounded-lg px-2 py-1 scale-90 origin-left'>
                <button onClick={() => decreaseQuantity(itemQuantity)} // Logic to decrease quantity
                        className='px-2 py-1 hover:text-red-500 font-bold'>
                    −
                </button>
                <span className='px-3 font-semibold text-gray-700 min-w-[30px] text-center'>
                    {itemQuantity.quantity}
                </span>
                <button onClick={() => increaseQuantity(itemQuantity, 1)}
                        className='px-2 py-1 hover:text-blue-600 font-bold'>
                    +
                </button>
            </div>
        </div>
    )
}

export default QuantityHandlerComponent

