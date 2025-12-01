import React from "react";
import { assets } from "../assets/assets";

const DirectorMessage = () => {
  return (
    <section className="w-full py-12 md:py-16 px-5 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Director Photo */}
        <div className="flex justify-center">
          <img
            src={assets.director}
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
            “At SNEPL Construction, we take pride in building the nation’s
            industrial backbone through precision, safety, and engineering
            excellence. Every project we undertake reflects our commitment to
            quality fabrication, erection, and commissioning of power plant and
            industrial systems. For us, every project is more than a contract —
            it is a long-term partnership built on trust, accountability, and
            timely delivery. Together, we continue to strengthen India’s
            industrial future, one successful execution at a time.”
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Mr. Subhakanta Sahoo
          </h3>
          <p className="text-gray-600">Managing Director</p>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
