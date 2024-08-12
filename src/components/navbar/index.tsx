import './Navbar.css'
import rasm from '../../assets/imgs/Logo.svg'
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='header'>
          <header>
            <nav className='container'>
              <Link to={'/'}>  <img src={rasm} alt="" /></Link>
                <ul>
                <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Brands</a>
                    </li>
                    <li>
                        <a href="">Recent Products</a>
                    </li>
                    <li>
                       <Link to={'/login'}>Contact</Link>
                    </li>
                    <li>
                        <Link to={''} ></Link>
                        <a href="">About</a>
                    </li>
                </ul>
                <div className="all">
                    <div className="icon">
                    <IoSearchOutline />
                    </div>
                    <div className="icon">
                    <FaUser />
                    </div>
                    <div className="icon">
                    <FaCartShopping />
                    <span className='span'>2</span>
                    </div>
                  
                </div>
            </nav>
          </header>
        </div>
    );
}

export default Navbar;
