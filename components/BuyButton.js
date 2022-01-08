import React from "react";

const BuyButton = ({ text, link }) => {
  return (
    <a
      href={link}
      className="shadow-red-600/70 shadow-lg relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
    >
      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
      <span className="relative px-6 py-3 transition-all ease-out bg-[#20242E] rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-white">{text}</span>
      </span>
    </a>
  );
};

export default BuyButton;
