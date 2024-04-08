import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import backgroundImage from "../assets/backgrounds/home_bg.webp";

const Typewriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText("");
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

const Home = () => {
  return (
    <div
      name="home"
      className="text-white bg-cover bg-center h-screen mt-24"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="flex justify-center items-center text-black md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          
          <Typewriter text="Welcome" delay={150} infinite />
        </div>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group w-fit px-6 flex items-center rounded-md font-medium my-6 mx-auto py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-300"
          >
            {" "}
            ENTER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
