import React from "react";
import { ReactTyped } from "react-typed";
import backgroundImage from "../assets/backgrounds/home_bg.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="text-white bg-cover bg-center h-screen mt-24"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <ReactTyped
            className="text-white md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"
            strings={[
              "Hello",
              "Hola",
              "Bonjour",
              "你好",
              "مرحبا",
              "Բարեւ",
              "Привет",
              "Cześć",
              "こんにちは",
              "سلام.",
              "Hallo",
              "안녕하세요",
              "Ciao",
              "હેલો",
              "Olá",
              "नमस्ते",
              "Hej",
              "हैलो",
              "Hei",
              "שלום",
              "Ahoj",
              "ഹലോ",
              "Hoi",
              "Tere",
              "Sveiki",
              "வணக்கம்",
              "Szia",
              "ជំរាបសួរ",
              "Hallå",
              "ສະບາຍດີ",
              "สวัสดี",
              "Chào",
              "হ্যালো",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
