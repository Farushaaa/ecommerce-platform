interface ProductCardDetailsTypes {
    productTitle: string,
    productPrice: number
}

const ProductCardDetailsComponent = ({productPrice, productTitle}: ProductCardDetailsTypes) => {
    return(
        <div className='mt-4'>
            <h1 className='font-semibold text-lg truncate text-gray-800'>{productTitle}</h1>
            <p className='text-gray-600 font-medium'>{productPrice} $</p>
        </div>
    )
}

export default ProductCardDetailsComponent