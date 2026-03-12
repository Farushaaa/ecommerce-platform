import shoppingImg from "../../../assets/shopping.svg";

const HeroSectionComponent = () => {
    return(
        <div className='flex justify-around items-center mt-10'>
            <div className='flex-col items-center gap-2'>
                <h1 className='text-8xl w-130 mb-3'>SALE OF THE YEAR</h1>
                <p className='text-lg text-gray-500 font-light'>Be ready for the summer season with FADRO</p>
            </div>
            <div>
                <img alt='Shopping Image' src={shoppingImg} className='w-60'/>
            </div>
        </div>
    )
}

export default HeroSectionComponent