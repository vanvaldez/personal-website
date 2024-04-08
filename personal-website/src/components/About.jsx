import React from "react";
import backgroundImage from "../assets/backgrounds/about_bg.webp";
import profileImage from "../assets/profile.jpeg";

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
            <h2 className="text-2xl font-bold text-center py-8">Hi, I'm Van!</h2>
            <div className='flex justify-center items-center'>
              <img src={profileImage} alt="Profile" className="rounded-full w-32 h-32" />
            </div>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                - curious (of just about everything!){" "}
              </p>
              <p className="py-2 border-b mx-8">
                {" "}
                - loves learning and trying out new things{" "}
              </p>
              <p className="py-2 border-b mx-8">
                - enjoys reading, drawing, and getting lost in nature
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-center py-8">Experience</h2>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Mathematics and Statistics Peer Tutor (Langara College, Jan 2023
                - Present)
              </p>
              <p className="py-2 border-b mx-8">
                Mental Health Ambassador{" "}
                <div className="py-2">
                  (Langara College, Jan 2023 - Present)
                </div>{" "}
              </p>
              <p className="py-2 border-b mx-8">
                {" "}
                Langara Global Volunteer{" "}
                <div className="py-2">
                  (Langara College, May 2023 - Present){" "}
                </div>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
