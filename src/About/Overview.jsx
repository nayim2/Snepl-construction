import React from "react";
import { assets } from "../assets/assets";

const CompanyProfile = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 py-16">

      {/* Page Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Company Profile
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Text Section */}
        <div className="bg-[#f5f5f5] rounded-md p-8 leading-relaxed text-[17px] text-gray-800 shadow-sm">
          <p className="mb-4">
            Established in 2006 by <strong>Mr. Subhakanta Sahoo</strong>, SNEPL Construction has grown into 
            a trusted name in the industrial construction and power sector. For more than 15 years, we have 
            consistently delivered engineering excellence across India through our expertise in fabrication, 
            erection, and commissioning of power plant and industrial systems.
          </p>

          <p className="mb-4">
            We operate with a strong belief — <strong>“Every Project is a Partnership.”</strong> Our clients 
            trust us because we combine technical expertise with safety-focused execution and an unwavering 
            commitment to timelines and quality. With successful executions across major industrial hubs in India, 
            SNEPL stands as a dependable partner for turnkey industrial construction solutions.
          </p>

          <p className="mb-2">
            Our areas of proven capability include:
          </p>

          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Boilers (CFBC, AFBC, PF, HRSG, WHRB)</li>
            <li>Heavy structures, pipe racks & supports</li>
            <li>Steam & water line testing</li>
            <li>Pressure, hydro & pneumatic checks</li>
            <li>Annual shutdowns & boiler retrofits</li>
            <li>Equipment servicing</li>
            <li>3-tier inspection process & documentation compliance</li>
            <li>On-site safety audits & PPE enforcement</li>
          </ul>

          <p>
            With a safety-first approach and an experienced project execution team, we ensure reliable, 
            timely and cost-effective delivery without compromising quality or safety.
          </p>
        </div>

        {/* Image Section */}
        <img
          src={assets.image1}
          alt="Company"
          className="rounded-md shadow-md w-full h-[450px] object-cover"
        />

      </div>
    </div>
  );
};

export default CompanyProfile;
