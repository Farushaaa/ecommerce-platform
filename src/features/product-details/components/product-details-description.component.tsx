interface ProductDescriptionProps {
    description: string
}

const ProductDetailsDescriptionComponent = ({description}: ProductDescriptionProps) => {
    return(
        <div className="pt-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">
                Description
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
                {description}
            </p>
        </div>
    )
}

export default ProductDetailsDescriptionComponent