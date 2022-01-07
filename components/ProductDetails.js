import React from "react";

const ProductDetails = () => {
  return (
    <section>
      <div className="h-[560px] border-t-2 border-gray-700 bg-black flex flex-col items-center justify-center space-y-8">
        <div>
          <h2 className="text-xl md:text-3xl font-semibold text-white">
            What&apos;s included in the ebook?
          </h2>
        </div>

        <div className="space-y-4 md:space-y-2">
          <div className="flex flex-col md:flex-row  items-center justify-center space-y-4 md:space-y-0 md:space-x-2">
            <div className="center h-[50px] w-[300px] sm:w-[300px] sm:h-[50px] md:h-[200px] md:w-[240px] lg:w-[300px] text-red-700 bg-red-100 shadow-red-600/80 sm:text-md">
              JavaScript ES6 Fundamentals
            </div>
            <div className=" center h-[50px] w-[300px] sm:w-[300px] sm:h-[50px] md:h-[200px] md:w-[240px] lg:w-[300px] text-blue-700 bg-blue-100 shadow-blue-600/80 sm:text-md">
              Clean Code Tricks & Tips
            </div>
            <div className=" center h-[50px] w-[300px] sm:w-[300px] sm:h-[50px] md:h-[200px] md:w-[240px] lg:w-[300px] text-green-700 bg-green-100  shadow-green-600/80 sm:text-md">
              Developer Resources
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-2">
            <div className=" center h-[50px] w-[300px] sm:w-[300px] sm:h-[50px] md:h-[200px] md:w-[240px] lg:w-[300px] text-purple-700 bg-purple-100  shadow-purple-600/80 sm:text-md">
              JavaScript Cheat sheet
            </div>
            <div className=" center h-[50px] w-[300px] sm:w-[300px] sm:h-[50px] md:h-[200px] md:w-[240px] lg:w-[300px] text-yellow-700 bg-yellow-100 shadow-yellow-600/80 sm:text-md">
              Bonus 🎁
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
