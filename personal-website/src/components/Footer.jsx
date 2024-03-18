import React from "react";
import {
  FaBehanceSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      name="footer"
      className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300"
    >
      <div>
        <h1 className="w-full text-3xl font-bold text-[#a046ca]">Links</h1>
        <p className="py-4">
          Background Images by{" "}
          <a
            href="https://www.freepik.com/author/upklyak"
            className="text-gray-500 underline"
          >
            upklyak
          </a>
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaLinkedin size={30} />
          <FaGithubSquare size={30} />
          <FaBehanceSquare size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
