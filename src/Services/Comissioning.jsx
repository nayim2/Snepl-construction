import React from 'react'
import { assets } from '../assets/assets'

const Commissioning = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">

      {/* Image
      <img
        src={assets.commissioning}
        alt="Commissioning services"
        className="rounded-xl shadow-lg w-full object-cover mb-10"
      /> */}

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Industrial Commissioning Services
      </h1>

      {/* Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Commissioning is the most critical stage of any industrial project — it
        ensures that each system, each piece of equipment, and every safety and
        performance parameter is functioning exactly as designed. At SNEPL
        Construction, we carry out systematic and controlled commissioning
        procedures to make plants fully operational with complete reliability,
        safety, and efficiency.
      </p>

      {/* Coverage */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Our commissioning team works closely with clients, OEM engineers, and
        project management teams to execute gradual and safe start-ups. This
        includes system flushing, leak testing, alignment checks, hydro testing,
        calibration of instruments, electrical energizing, and trial runs of major
        and auxiliary equipment. Every result is monitored, logged, and validated
        before handover.
      </p>

      {/* Strengths */}
      <p className="text-gray-700 text-lg leading-relaxed">
        With years of experience in power plant and industrial commissioning, we
        ensure reliable performance from day one — reducing downtime, improving
        efficiency, and supporting smooth plant operations. When we commission a
        system, our goal is not just to start it, but to ensure it continues to
        run safely and efficiently for years to come.
      </p>

    </div>
  )
}

export default Commissioning
