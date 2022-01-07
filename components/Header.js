import React from "react";

const Header = () => {
  return (
    <nav className="sticky top-0 shadow flex md:flex-row justify-evenly items-center z-50 pt-[12px] pb-[12px] bg-white">
      {/* logo */}
      <div className="flex items-center cursor-pointer">
        <a className="font-bold text-6xl md:text-4xl text-[#188038]">Dev Box</a>
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
