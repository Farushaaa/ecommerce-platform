import { useCartStore } from "../../features/cart/store/CartStore.ts";
import CartItemCardComponent from "../../features/cart/components/cart-item-card.component.tsx";

const CartPage = () => {
    const cartItems = useCartStore(s => s.cartItems);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

            <div className="flex flex-col gap-4">
                {cartItems.map((cartItem) => (
                    <CartItemCardComponent item={cartItem}/>
                ))}
            </div>

            {cartItems.length === 0 && (
                <p className="text-gray-500 italic">Your cart is currently empty.</p>
            )}
        </div>
    );
};

export default CartPage;