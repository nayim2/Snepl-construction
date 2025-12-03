import React from "react";
import { assets } from "../assets/assets";

const AboutSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">

        {/* WHO WE ARE */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            With over 25 years of experience in the industrial construction and power sector,
            SNEPL Construction has earned a strong reputation for executing complex projects with
            precision, safety, and speed. Our expertise spans across all types of fabrication
            work including ducting, casing, and structural fabrication, along with piping projects
            such as IBR piping, cooling water piping, oil and gas piping.
            <br /><br />
            Our workforce is our greatest strength — a skilled team of engineers, supervisors,
            and technicians trained in the latest industrial standards. From equipment erection
            and boiler erection to ash silo execution and complete electrical installation works,
            we ensure every project is delivered with accuracy and long-term reliability.
          </p>

          <img
            src={assets.image1}
            alt="who we are"
            className="rounded-xl shadow-lg mt-8 w-full object-cover"
          />
        </div>

        {/* WHY US */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Why Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Projects at SNEPL are driven by strong planning, modern monitoring systems, and a
            strict Zero-Accident safety policy. Our dedicated safety team conducts toolbox
            meetings, daily audits, PPE compliance checks, and enforces statutory safety
            guidelines across every site to ensure risk-free execution.
            <br /><br />
            From fabrication and piping to boiler erection, equipment erection, ash silo
            installation, and complete electrical works — all phases are handled in-house.
            This end-to-end control gives us unmatched command over quality, timelines,
            and cost efficiency, making SNEPL a trusted partner for turnkey industrial projects
            across India.
          </p>

          <img
            src={assets.image2}
            alt="why us"
            className="rounded-xl shadow-lg mt-8 w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
