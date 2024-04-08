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
            className="text-white underline"
          >
            upklyak
          </a>
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/valdezvan/"
            className="hover:underline"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/vanvaldez" title="Github"
          className="hover:underline">
            <FaGithubSquare size={30} />
          </a>
          <a
            href="https://www.behance.net/van-valdez"
            title="Behance"
            className="hover:underline"
          >
            <FaBehanceSquare size={30} />
          </a>
          <a
            href="https://www.instagram.com/_vanvaldez"
            title="Instagram"
            className="hover:underline"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-3 flex justify-between"></div>
      <div>
        <h6 className="font-medium text-gray-400">
          {" "}
          ©2024. All Rights Reserved.{" "}
        </h6>
      </div>
    </div>
  );
};

export default Footer;
