import React from "react";
import backgroundImage from "../assets/backgrounds/about_bg.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full py-[10rem] px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-8">Education</h2>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Associate's in Computer Science{" "}
                <div className="py-2">
                  (Langara College, Sep 2022 - Present)
                </div>
              </p>
              <p className="py-2 border-b mx-8">
                Bachelor of Science in Geodetic Engineering{" "}
                <div className="py-2">
                  (University of the Philippines, June 2019 - May 2022)
                </div>
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-8">About</h2>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-8">Experience</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
