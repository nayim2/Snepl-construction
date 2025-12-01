import React from 'react'
import { assets } from '../assets/assets'

const Fabrication = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">

      {/* Image */}
      <img
        src={assets.fabrication}
        alt="Fabrication services"
        className="rounded-xl shadow-lg w-full object-cover mb-10"
      />

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Industrial Fabrication Services
      </h1>

      {/* Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        At SNEPL Construction, we specialize in end-to-end industrial fabrication
        services designed to meet the high standards of power plants,
        manufacturing units, and large-scale industrial facilities. Our
        fabrication division delivers precision, durability, and safety in every
        project — no matter the scale or complexity.
      </p>

      {/* Key Coverage */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Our expertise includes ducting fabrication, casing fabrication, and
        heavy structural fabrication for industrial systems. With state-of-the-art
        tools, qualified welders and fitters, and strict dimensional quality
        control, we ensure every component meets engineering specifications
        and site requirements. Whether fabrication is performed in-house or at
        the work site, we maintain full compliance with safety and quality standards.
      </p>

      {/* Strengths */}
      <p className="text-gray-700 text-lg leading-relaxed">
        From design review and material cutting to welding, NDT testing, and
        final assembly, our team follows a streamlined and controlled workflow.
        We take pride in delivering strong, reliable fabrication that supports
        long-term performance, reduces maintenance downtime, and accelerates
        project execution timelines.
      </p>

    </div>
  )
}

export default Fabrication
