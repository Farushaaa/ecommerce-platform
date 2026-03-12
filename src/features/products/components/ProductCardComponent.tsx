import { useState } from "react";
import type { ProductType } from "../types/ProductType.ts";
import { useCartStore } from "../../cart/store/CartStore.ts";
import ProductCardImageComponent from "./product-card-image.component.tsx";
import ProductCardDetailsComponent from "./product-card-details.component.tsx";
import ProductCardHandlerComponent from "./product-card-handler.component.tsx";
import ProductCardButtonComponent from "./product-card-button.component.tsx";

interface ProductCardTypes {
    product: ProductType
}

const ProductCardComponent = ({ product }: ProductCardTypes) => {
    const [quantity, setQuantity] = useState(1);
    const [isClicked, setIsClicked] = useState(false); // For the click animation

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const addToCart = useCartStore(s => s.increaseItemQnt)
    const cartItems = useCartStore(s => s.cartItems)

    const existingCartItem = cartItems.find((item) => item.id === product.id)

    const handleItemAdding = (item: ProductType, qnt: number) => {
        addToCart(item, qnt);
        setQuantity(1);

        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 200); // Reset after 200ms
    }

    return (
        <div className='w-full h-auto p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group cursor-pointer'>

            <ProductCardImageComponent imgUrl={product.image} altName={product.title}/>

            <ProductCardDetailsComponent productTitle={product.title} productPrice={product.price}/>

            <div className='mt-6 flex items-center justify-end gap-4 '>

                <ProductCardHandlerComponent decreaseQnt={decrement} itemQuantity={quantity}
                                             increaseQnt={increment}/>

                <div className="relative">
                    <ProductCardButtonComponent product={product} quantity={quantity}
                                                addToCart={handleItemAdding} isClicked={isClicked}/>

                    {existingCartItem && (
                        <div className="absolute -top-2 -right-2 bg-red-500
                        text-white text-[10px] font-bold w-5 h-5 flex items-center
                         justify-center rounded-full border-2 border-white shadow-sm
                         animate-in zoom-in duration-300">
                            {existingCartItem.quantity}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCardComponent;