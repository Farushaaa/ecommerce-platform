interface ProductHeaderProps {
    title: string,
    price: number
}

const ProductDetailsHeaderComponent = ({title, price}: ProductHeaderProps) => {
    return(
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {title}
            </h1>
            <p className="text-2xl font-semibold text-blue-600 mt-4">
                ${price.toFixed(2)}
            </p>
        </div>
    )
}

export default ProductDetailsHeaderComponent