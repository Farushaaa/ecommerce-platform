import type {CartItemTypes} from "../types/cart-items-types.ts";
import {useCartStore} from "../store/CartStore.ts";
import CartQuantityHandlerComponent from "./cart-quantity-handler.component.tsx";
import deleteIcon from '../../../assets/x.png'

interface CartItemCardTypes {
    item: CartItemTypes,
}

const CartItemCardComponent = ({item}: CartItemCardTypes) => {
    const addCartItem = useCartStore(s => s.increaseItemQnt);
    const removeCartItem = useCartStore(s => s.removeCartItem);
    const decreaseItemQnt = useCartStore(s => s.decreaseItemQnt)

    return (
        /* Added 'relative' to allow absolute positioning of the delete icon */
        <div key={item.id} className='relative flex bg-white rounded-xl shadow-sm p-4
                    max-w-2xl w-full h-40 transition-all hover:shadow-md'>

            {/* Delete Icon Button */}
            <button
                onClick={() => removeCartItem(item.id)}
                className="absolute -top-2 -right-2 bg-white p-1.5 rounded-full shadow-md
                           hover:bg-red-50 transition-colors border border-gray-100 group/delete"
            >
                <img
                    src={deleteIcon}
                    alt="Remove item"
                    className="w-4 h-4 object-contain opacity-60 group-hover/delete:opacity-100"
                />
            </button>

            {/* Left Side: Image */}
            <div className='flex-shrink-0 w-32 h-full bg-gray-100 rounded-lg
                        flex items-center justify-center p-2'>
                <img
                    src={item.image}
                    alt={item.title}
                    className='max-h-full object-contain'
                />
            </div>

            {/* Right Side: Info */}
            <div className='ml-4 flex flex-col justify-between flex-grow py-1 pr-4'>
                <div>
                    <div className="flex justify-between items-start">
                        {/* Added pr-4 to title to ensure it doesn't overlap with the X button */}
                        <h1 className='font-semibold text-gray-800 line-clamp-1 pr-4'>{item.title}</h1>
                        <p className='font-bold text-blue-600'>${item.price}</p>
                    </div>
                    <p className='text-xs text-gray-500 line-clamp-2 mt-1'>
                        {item.description}
                    </p>
                </div>

                <div className='flex items-center justify-between'>
                    <CartQuantityHandlerComponent
                        decreaseQuantity={decreaseItemQnt}
                        increaseQuantity={addCartItem}
                        itemQuantity={item}
                    />
                    <span className='text-sm font-medium text-gray-400'>
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartItemCardComponent