import cartIcon from "../../../assets/shopping-bag.webp";
import profileIcon from "../../../assets/user.webp";
import heartIcon from '../../../assets/heart.png'
import { Link } from "react-router-dom";
import { useCartStore } from "../../../features/cart/store/CartStore.ts";

const NavbarComponent = () => {
    const cartItemsArray = useCartStore(s => s.cartItems);

    const cartTotalQuantity = cartItemsArray.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    return (
        <div className='flex justify-between items-center px-10 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-50'>
            <Link to='/' className='text-[#6c63ff] font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity'>
                FADRO
            </Link>

            <div className='flex items-center gap-8'>

                <Link to='/cart' className='relative group'>
                    <img
                        className='w-6 h-6 object-contain group-hover:-translate-y-1 transition-transform duration-200'
                        src={cartIcon}
                        alt="Cart"
                    />
                    {cartTotalQuantity > 0 && (
                        <span className='absolute -top-2 -right-2 bg-[#6c63ff] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in'>
                            {cartTotalQuantity}
                        </span>
                    )}
                </Link>

                <Link to='/favorites' className='group'>
                    <img
                        className='w-6 h-6 object-contain group-hover:-translate-y-1 transition-transform duration-200'
                        src={heartIcon}
                        alt="Favorites"
                    />
                </Link>

                <Link to='/profile' className='group'>
                    <img
                        className='w-6 h-6 object-contain group-hover:-translate-y-1 transition-transform duration-200'
                        src={profileIcon}
                        alt="Profile"
                    />
                </Link>
            </div>
        </div>
    );
}

export default NavbarComponent;