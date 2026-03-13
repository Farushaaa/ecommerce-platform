import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductDetailsById } from "../../features/product-details/api/product-details.api.ts";
import ProductQuantityHandlerComponent from "../../features/products/components/product-quantity-handler.component.tsx";
import { useState } from "react";
import ProductCardButtonComponent from "../../features/products/components/product-card-button.component.tsx";
import { useCartStore } from "../../features/cart/store/CartStore.ts";
import ProductDetailsImageComponent
    from "../../features/product-details/components/product-details-image.component.tsx";
import ProductDetailsHeaderComponent
    from "../../features/product-details/components/product-details-header.component.tsx";
import ProductDetailsDescriptionComponent
    from "../../features/product-details/components/product-details-description.component.tsx";
import {useFavouriteProductStore} from "../../features/favorites/store/favouriteStore.ts";
import type {ProductType} from "../../features/products/types/ProductType.ts";

const ProductDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [quantity, setQuantity] = useState(1);
    const [isClicked, setIsClicked] = useState(false);

    const addToCart = useCartStore(s => s.increaseItemQnt);
    const {favouritesArr, toggleFavourite} = useFavouriteProductStore()

    const { data: product, isLoading, error } = useQuery({
        queryKey: ['product_details', id], // Included id in queryKey
        queryFn: () => getProductDetailsById(Number(id)),
    });

    const handleIncreaseQuantity = () => setQuantity(prev => prev + 1);
    const handleDecreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    const isFavourite = favouritesArr.some((item) => product?.id === item.id)

    const handleItemAdding = () => {
        if (product) {
            addToCart(product, quantity);
            setQuantity(1);
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 200);
        }
    };

    const handleFavourites = (product: ProductType) => {
        toggleFavourite(product)
    }

    if (isLoading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
    if (error || !product) return <div className="h-screen flex items-center justify-center text-red-500">Product not found.</div>;

    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                <ProductDetailsImageComponent imageUrl={product.image} imageTitle={product.title} />

                <div className="flex flex-col space-y-8">
                    <ProductDetailsHeaderComponent title={product.title} price={product.price} />

                    <hr className="border-gray-100" />

                    {/* INTERACTION BAR */}
                    <div className="flex items-center gap-4">

                        {/* Quantity Selector */}
                        <div className="bg-gray-100 rounded-xl p-1 flex items-center">
                            <ProductQuantityHandlerComponent
                                decreaseQnt={handleDecreaseQuantity}
                                itemQuantity={quantity}
                                increaseQnt={handleIncreaseQuantity}
                            />
                        </div>

                        {/* Add to Cart Button - Now flex-grow to fill space */}
                        <div className="flex-grow">
                            <ProductCardButtonComponent
                                product={product}
                                quantity={quantity}
                                addToCart={handleItemAdding}
                                isClicked={isClicked}
                            />
                        </div>

                        <button onClick={() => handleFavourites(product)}
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
                    </div>

                    <hr className="border-gray-100" />

                    <ProductDetailsDescriptionComponent description={product.description} />
                </div>
            </div>
        </main>
    );
};

export default ProductDetailsPage;