import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { NavLink } from "react-router-dom";
import { Container } from "@containers";
import Logo from "../../assets/logo.svg"
const index = () => {
    return (
        <header>
            <Container>
                <nav className="flex items-center justify-between gap-x-20 h-[80px]">
                    <div>
                        <NavLink to="/"><img className="w-[300px]" src={Logo} alt="Logo" /></NavLink>
                    </div>
                    <div className='w-full'>
                        <input type="text" placeholder="Search products" className="w-full ring-1 ring-[#ACA9AF] px-[10px] rounded-sm h-[40px] focus:ring-2 outline-none duration-150 focus:ring-[#04BEEC]" />
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='flex items-center gap-2 hover:bg-[#d2d1d24c] duration-150 px-3 py-[10px] rounded-[4px] active:bg-[#d2d1d286]'>
                            <LoginOutlinedIcon className="w-[30px] h-[30px] text-[#04BEEC]" />
                            <span className="text-[#04BEEC] font-medium">Login</span>
                        </button>
                        <button className='flex items-center gap-2 hover:bg-[#d2d1d24c] duration-150 px-3 py-[10px] rounded-[4px] active:bg-[#d2d1d286]'>
                            <FavoriteBorderOutlinedIcon className="w-[30px] h-[30px] text-[#04BEEC]" />
                            <span className="text-[#04BEEC] font-medium">Liked</span>
                        </button>
                        <button className='flex items-center gap-2 hover:bg-[#d2d1d24c] duration-150 px-3 py-[10px] rounded-[4px] active:bg-[#d2d1d286]'>
                            <ShoppingBagOutlinedIcon className="w-[30px] h-[30px] text-[#04BEEC]" />
                            <span className="text-[#04BEEC] font-medium">Cart</span>
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default index;
