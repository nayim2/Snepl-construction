import React from "react";
import { assets } from "../assets/assets";

const DirectorMessage = () => {
  return (
    <section className="w-full bg-[#f7f9fc] py-12 md:py-16 px-5 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Director Photo */}
        <div className="flex justify-center">
          <img
            src={assets.mission}
            alt="Director"
            className="w-[260px] h-[320px] md:w-[330px] md:h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Director Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Director's Message
          </h2>
          <div className="w-20 h-[3px] bg-blue-600 mb-6"></div>

          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            “At our organization, we believe in building lasting relationships
            through dedication, transparency, and innovation. Every step we take
            is towards delivering quality and exceeding expectations. Together,
            we aim to create a better future for our clients and the communities
            we serve.”
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Mr. John Doe
          </h3>
          <p className="text-gray-600">Managing Director</p>
        </div>

      </div>
    </section>
  );
};

export default DirectorMessage;
