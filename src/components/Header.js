import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../assets/img/img2.jpeg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="py-6 mb-12 border-b">
    <div className="container mx-auto flex justify-between items-center">
      <Link
      className="flex items-center space-x-3"
       to="/">
        <img src={Logo} alt=""  width={50}/>
        <p className="text-2xl">Beetkom.</p>
      </Link>
      <div className="hidden sm:flex items-center gap-6">
        <a href="/#About" className="hover:text-violet-900 transition" to="/addprop">
         About US
        </a>
        <a href="/#services"className="hover:text-violet-900 transition" to="/fav">
          Services
        </a>
       
       <a
        href="/#services"
          className="bg-[#ffcb41]  text-white px-4 py-3 rounded-lg transition"
          
        >
         Learn More
        </a>
      </div>
      <div
        className="flex flex-col sm:hidden bg-violet-400 hover:bg-violet-500 text-white px-4 py-3 rounded-lg transition cursor-pointer"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        {showMenu ? (
          <div className="flex justify-end">
            <ImCancelCircle size={18} />
          </div>
        ) : (
          "Menu"
        )}
        {showMenu && (
          <ul className="flex flex-col">
            
           
            <a href="/#About" className="hover:text-violet-900 transition" to="/addprop">
         About US
        </a>
        <a href="/#services"className="hover:text-violet-900 transition" to="/fav">
          Services
        </a>
            <a
        href="/#services"
          className="bg-[#ffcb41]  text-white px-4 py-3 rounded-lg transition"
          
        >
         Learn More
        </a>
          </ul>
        )}
      </div>
    </div>
  </header>
  );
};

export default Header;
