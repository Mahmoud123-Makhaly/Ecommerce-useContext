import { Link } from "react-router-dom";
import logo from "../assets/logo_big.png";
import instagram from "../assets/instagram_icon.png";
import pinterest from "../assets/pintester_icon.png";
import WhatsApp from "../assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="flex flex-col gap-4 items-center ">
      <div className="flex items-center gap-4">
        <img src={logo} alt="footer-logo" className="w-12 h-12" />
        <h2 className="font-semibold text-3xl text-[#353631]">SHOPPER</h2>
      </div>
      <ul className="flex items-center  gap-2 md:gap-4 text-sm md:text-[16px]">
        <li>
          <Link to="">Company</Link>
        </li>
        <li>
          <Link to="">Products</Link>
        </li>
        <li>
          <Link to="">Offices</Link>
        </li>
        <li>
          <Link to="">About</Link>
        </li>
        <li>
          <Link to="">Contact</Link>
        </li>
      </ul>
      <ul className="flex items-center gap-3 md:gap-4">
        <li className="w-10 h-10 bg-[#fcfcfc00] flex items-center justify-center">
          <a href="#" className="w-6 h-6">
            <img src={instagram} alt="instagram" className="w-full h-full" />
          </a>
        </li>
        <li className="w-10 h-10 bg-[#fcfcfc] flex items-center justify-center">
          <a href="#" className="w-6 h-6">
            <img src={pinterest} alt="pinterest" className="w-full h-full" />
          </a>
        </li>
        <li className="w-10 h-10 bg-[#fcfcfc] flex items-center justify-center">
          <a href="#" className="w-6 h-6">
            <img src={WhatsApp} alt="whatsapp" className="w-full h-full" />
          </a>
        </li>
      </ul>
      <div className="w-[80%] mx-auto h-[2px] bg-gray-300"></div>
      <p>© 2024 Shopper. All rights reserved.</p>
    </div>
  );
};

export default Footer;
