import { NavLink } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
const Navbar = () => {
  return (
    <>
      <nav className="px-[2rem] flex justify-between items-center h-20 py-4 bg-gray-800 w-full">
        <NavLink to="/">
          <img className="w-48" src="/logo.png" />
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
            <NavLink to="/cart">
                <AiOutlineShoppingCart className="text-3xl" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
