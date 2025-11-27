import React, { useState } from "react";
import { assets } from "../assets/assets";
import { FaPlus, FaMinus } from "react-icons/fa";

const MissionVision = () => {
  const [active, setActive] = useState("mission");

  const handleToggle = (section) => {
    setActive(active === section ? null : section);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGES */}
      <div className="relative flex flex-col justify-start">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          OUR MISSION & VISION
        </h1>

        <img
          src={assets.mission}
          className="rounded-xl shadow-lg w-full h-[400px]  object-cover"
          alt="blueprint"
        />

      </div>

      {/* RIGHT TABS */}
      <div className="space-y-4">

        {/* Mission */}
        <div
          className={`rounded-xl cursor-pointer border border-gray-200 transition flex justify-between items-start ${
            active === "mission" ? "bg-white shadow-md p-6" : "bg-[#f7f7f7] p-4"
          }`}
          onClick={() => handleToggle("mission")}
        >
          <div className="w-[90%]">
            <h2 className="text-2xl font-semibold">Our Mission</h2>

            {/* Smooth expand animation */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                active === "mission" ? "max-h-[500px] mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">
                To continuously innovate, maintain the highest safety and quality
                standards, and ensure customer satisfaction through every stage of
                project execution — while building trust and delivering value.
              </p>
            </div>
          </div>

          {/* Rotating icon */}
          <div
            className={`mt-1 transition-transform duration-500 ${
              active === "mission" ? "rotate-[360deg]" : "rotate-0"
            }`}
          >
            {active === "mission" ? <FaMinus size={20} /> : <FaPlus size={20} />}
          </div>
        </div>

        {/* Vision */}
        <div
          className={`rounded-xl cursor-pointer border border-gray-200 transition flex justify-between items-start ${
            active === "vision" ? "bg-white shadow-md p-6" : "bg-[#f7f7f7] p-4"
          }`}
          onClick={() => handleToggle("vision")}
        >
          <div className="w-[90%]">
            <h2 className="text-2xl font-semibold">Our Vision</h2>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                active === "vision" ? "max-h-[500px] mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">
                To be a nationally recognized leader in industrial construction —
                known for reliability, technical excellence, timely commitment, and
                long-term customer relationships.
              </p>
            </div>
          </div>

          <div
            className={`mt-1 transition-transform duration-500 ${
              active === "vision" ? "rotate-[360deg]" : "rotate-0"
            }`}
          >
            {active === "vision" ? <FaMinus size={20} /> : <FaPlus size={20} />}
          </div>
        </div>

        {/* History */}
        <div
          className={`rounded-xl cursor-pointer border border-gray-200 transition flex justify-between items-start ${
            active === "history" ? "bg-white shadow-md p-6" : "bg-[#f7f7f7] p-4"
          }`}
          onClick={() => handleToggle("history")}
        >
          <div className="w-[90%]">
            <h2 className="text-2xl font-semibold">Our History</h2>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                active === "history" ? "max-h-[500px] mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">
                With over 15 years of experience in industrial projects, we have
                grown through dedication, engineering excellence, and a commitment to
                safe & efficient execution on every site.
              </p>
            </div>
          </div>

          <div
            className={`mt-1 transition-transform duration-500 ${
              active === "history" ? "rotate-[360deg]" : "rotate-0"
            }`}
          >
            {active === "history" ? <FaMinus size={20} /> : <FaPlus size={20} />}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MissionVision;
