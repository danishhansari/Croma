import { NavLink } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
const Navbar = () => {
  return (
    <>
      <nav className="w-[90%] mx-auto flex justify-between items-center h-20">
        <NavLink to="/">
          <img className="w-40 md:w-60 " src="./logo.png" />
        </NavLink>
        <ul className="flex items-center nav-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/contact">
                <AiOutlineShoppingCart className="text-3xl" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
