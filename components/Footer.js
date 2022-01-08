import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="h-[100px] sm:h-[150px] flex-col sm:flex-row bg-[#20242E] flex items-center justify-evenly sm:justify-between sm:pl-10 sm:pr-10">
        {/* social icons */}
        <div className="flex items-center justify-center text-gray-500 space-x-10">
          <a href="https://twitter.com/manvi_mandar">
            <FaTwitter size="30px" />
          </a>
          <a href="https://instagram.com/mandar_manvi">
            <FaInstagram size="30px" />
          </a>
          <a href="mailto:mandarmanvi899@gmail.com">
            <FiMail size="30px" />
          </a>
        </div>

        {/* copyrights */}
        <div className="">
          <h3 className="text-gray-500">
            &copy; Dev Box. All rights reserved.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
