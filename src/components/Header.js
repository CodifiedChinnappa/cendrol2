import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow-lg">
      <div className="mx-auto flex items-center justify-between px-3 py-3">
        <div className="flex items-center ">
          <img
            src="https://landsandhomes.com/front/images/logo4.svg"
            alt="landsandhomes"
            className="w-[70%]  mr-4"
          />
          <button className="px-4 py-2 text-black  hover:text-red-400 hidden lg:flex">
            City
            <i className="fa fa-caret-down mt-1 px-2"></i>
          </button>
        </div>
        <div className="hidden lg:flex space-x-3 ">
          <button className="px-4 py-2 text-black  hover:text-red-400">
            <i className=" fas fa-arrows-alt-h text-[#EC1B26] mr-1"></i>
            Compare
          </button>
          <button className="px-4 py-2 text-black  hover:text-red-400">
            <i className="fa-regular fa-heart text-[#EC1B26]"></i>
          </button>
          <button className="px-4 py-2 text-black  hover:text-red-400">
            <i className="fa-regular fa-rectangle-list text-[#EC1B26] mr-2"></i>
            Shorlist
          </button>
          <button className="px-4 py-2 text-white  hover:bg-red-400 bg-red-600 rounded-md">
            + Add Property
          </button>
          <button className="px-4 py-2 text-white hover:bg-red-400 bg-red-600 rounded-md">
            Login
          </button>
        </div>
        <div className="lg:hidden self-end">
          <button
            className="px-3 py-2 text-black rounded-md border-[1px] border-gray-300  focus:border-4  focus:border-gray-500"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 py-2 flex flex-col items-center space-y-2">
            <button className="px-4 py-2 text-black  hover:text-red-400 flex lg:hidden">
              City
              <i className="fa fa-caret-down mt-1 px-2"></i>
            </button>
            <button className="px-4 py-2 text-black  hover:text-red-400">
              <i className=" fas fa-arrows-alt-h text-[#EC1B26] mr-1"></i>
              Compare
            </button>
            <button className="px-4 py-2 text-black  hover:text-red-400">
              <i className="fa-regular fa-heart text-[#EC1B26]"></i>
            </button>
            <button className="px-4 py-2 text-black  hover:text-red-400">
              <i className="fa-regular fa-rectangle-list text-[#EC1B26] mr-2"></i>
              Shorlist
            </button>
            <button className="px-4 py-2 text-white  hover:bg-red-400 bg-red-600 rounded-md w-full">
              + Add Property
            </button>
            <button className="px-4 py-2 text-white hover:bg-red-400 bg-red-600 rounded-md w-full">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
