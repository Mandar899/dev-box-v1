import React from "react";
import BuyButton from "./BuyButton";

const Hero = () => {
  return (
    <main>
      <div className="relative bg-[#20242E] h-[560px] overflow-hidden">
        <div className="flex flex-col items-center justify-center space-y-8 text-center mt-14">
          {/* Title */}
          <h1 className="text-3xl font-bold text-white sm:text-5xl">
            Get started with{" "}
            <span className="underline decoration-wavy decoration-[3px] decoration-blue-400">
              React
            </span>
          </h1>

          {/* Custom Buy Button */}
          <BuyButton
            text="Learn More"
            link="https://manvimandar.gumroad.com/l/jsfundamentals"
          />
        </div>

        {/* product image */}
        <div className="absolute inset-x-0 flex justify-center -bottom-48">
          <img
            className="h-[500px] object-contain hover:-translate-y-5 duration-500 shadow-lg shadow-gray-700/90"
            src="/images/book-cover.png"
            alt="book-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
