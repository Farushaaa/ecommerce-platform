interface ProductCardImgTypes {
    imgUrl: string,
    altName: string
}

const ProductCardImageComponent = ({imgUrl, altName }: ProductCardImgTypes) => {
    return(
        <div className='bg-gray-100 rounded-lg py-8 flex justify-center items-center overflow-hidden'>
            <img
                src={imgUrl}
                alt={altName}
                className='h-32 object-contain group-hover:scale-105 transition-transform duration-300'
            />
        </div>
    )
}

export default ProductCardImageComponent