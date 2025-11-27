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
            With over 15 years of experience in industrial projects, our execution team
            understands every challenge of the field — from managing site logistics to
            handling critical alignments under tight schedules. Our workforce is our
            greatest asset, consisting of engineers, supervisors, and highly skilled
            technicians trained in the latest industrial standards.
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
            We deploy modern planning and monitoring systems that ensure proactive risk
            management, progress tracking, and timely completion — even in complex
            multi-stage projects. SNEPL Construction follows a strict Zero-Accident
            safety policy. Our safety team conducts toolbox meetings and daily audits,
            ensures PPE compliance, and enforces all statutory safety guidelines across
            every site.
            <br /><br />
            From fabrication to installation and commissioning, we handle all phases
            in-house — ensuring complete control over quality, cost, and timelines.
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
