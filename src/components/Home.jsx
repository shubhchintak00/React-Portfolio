import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ParticlesBackground from "./ParticlesBackground"; 

const Home = () => {
  return (
    <div
      name="home"
      className="relative h-screen w-full bg-gradient-to-b from-black via-black to-[#25013b] overflow-hidden"
    >
      
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ParticlesBackground />
      
      </div>

      
      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        <div className="flex flex-col justify-center h-full items-start text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I'm Shalini Chongdar, a full-stack developer and UI/UX designer passionate about creating seamless, user-friendly web and mobile experiences.  
            I work with technologies like React, React Native, Firebase, and backend integrations to build impactful digital products.  
            Currently pursuing B.Tech at IIIT Allahabad and co-founder of Chaskaa, I love blending design and code to solve real-world problems.
          </p>

          
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-4 flex items-center gap-2 rounded-md bg-gradient-to-r from-[#d488ff] to-purple-700 hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-[450px] md:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
