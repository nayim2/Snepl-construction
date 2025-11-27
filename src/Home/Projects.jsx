import React from "react";
import { assets } from "../assets/assets";

const Projects = () => {
  return (
    <div className="w-full py-4 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        Projects
      </h2>

      <div className="max-w-[1300px] mx-auto grid md:grid-cols-3 gap-8">

        <img
          src={assets.project1}
          alt="project 1"
          className="w-full h-[380px] object-cover rounded-lg shadow-lg"
        />

        <img
          src={assets.project2}
          alt="project 2"
          className="w-full h-[380px] object-cover rounded-lg shadow-lg"
        />

        <img
          src={assets.project3}
          alt="project 3"
          className="w-full h-[380px] object-cover rounded-lg shadow-lg"
        />

         <img
          src={assets.project4}
          alt="project 3"
          className="w-full h-[380px] object-cover rounded-lg shadow-lg"
        />

         <img
          src={assets.project5}
          alt="project 3"
          className="w-full h-[380px] object-cover rounded-lg shadow-lg"
        />

         <img
          src={assets.project6}
          alt="project 3"
          className="w-full h-[380px] object-cover rounded-lg shadow-lg"
        />

      </div>
    </div>
  );
};

export default Projects;
