import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import "./index.css";
const Navbar = () => {
  const links = [
    {
      id: 1,
      text: "Shop",
      href: "/",
    },
    {
      id: 2,
      text: "Men",
      href: "/men",
    },
    {
      id: 3,
      text: "Women",
      href: "/women",
    },
    {
      id: 4,
      text: "Kids",
      href: "/kid",
    },
  ];
  return (
    <div className="flex flex-wrap flex-col gap-4 md:flex-row  items-center  justify-around py-4 shadow-md navbar">
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="logo" />
        <h2 className="font-semibold text-3xl">SHOPPER</h2>
      </Link>
      <ul className="flex items-center gap-8 ">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.href}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-6 relative">
        <Link to="/login">
          {" "}
          <button className="border px-8 border-gray-400 py-2  rounded-3xl active:bg-gray-100 cursor-pointer">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="cart" />
          <span className="absolute block  w-[20px] text-center h-[20px] rounded-full bg-red-600 text-white end-0 top-0 ">
            0{" "}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
