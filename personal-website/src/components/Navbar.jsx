import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        nav ? "bg-[#a0a8a0] bg-opacity-25" : ""
      }`}
    >
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#000300] text-opacity-0">
          {" "}
          V{" "}
        </h1>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="p-4 cursor-pointer capitalize hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
