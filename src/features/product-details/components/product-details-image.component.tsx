interface ProductImageProps {
    imageUrl: string,
    imageTitle: string
}

const ProductDetailsImageComponent = ({imageTitle, imageUrl}: ProductImageProps) => {
    return(
        <div className="bg-gray-100 rounded-3xl p-8 flex items-center justify-center aspect-square overflow-hidden shadow-sm">
            <img
                src={imageUrl}
                alt={imageTitle}
                className="max-h-full w-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300"
            />
        </div>
    )
}

export default ProductDetailsImageComponent