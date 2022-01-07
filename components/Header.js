import React from "react";

const Header = () => {
  return (
    <nav className="bg-black flex md:flex-row items-start px-2 md:pl-5  md:items-center z-50 pt-[12px] pb-[12px]">
      {/* logo */}
      <div className="flex items-center cursor-pointer">
        <a className="font-bold text-white text-7xl md:text-4xl"> Dev Box</a>
      </div>

      {/* nav options */}
      {/* <div className="flex items-center space-x-8 font-medium md:flex-row md:space-x-10 ">
        <a className="p-1 px-2 text-sm rounded-md sm:text-base focus:bg-gray-100 hover:bg-gray-100">
          Products
        </a>
      </div> */}
    </nav>
  );
};

export default Header;
