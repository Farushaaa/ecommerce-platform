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
import ProductDetailsFavouriteBtnComponent
    from "../../features/product-details/components/product-details-favouriteBtn.component.tsx";

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

                        <ProductDetailsFavouriteBtnComponent product={product} handleFavourite={handleFavourites} isFavourite={isFavourite}/>
                    </div>

                    <hr className="border-gray-100" />

                    <ProductDetailsDescriptionComponent description={product.description} />
                </div>
            </div>
        </main>
    );
};

export default ProductDetailsPage;