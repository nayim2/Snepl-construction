import React from 'react'
import { assets } from '../assets/assets'

const EquipmentErection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left – Image Section */}
        <div className="flex gap-4">
          <img
            src={assets.equipment}
            alt="Equipment Erection"
            className="h-[500px] w-1/2 object-cover rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-300"
          />
        </div>

        {/* Right – Content */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Equipment Erection Services
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Heavy industrial equipment requires high precision during installation
            to achieve smooth and safe plant operation. SNEPL Construction
            specializes in complete equipment erection, handling heavy machinery,
            rotating equipment, and process units with engineered safety and accuracy.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our expertise covers turbines, compressors, pumps, generators,
            heat exchangers, boilers, ESP systems, conveyor systems, ID / FD / PA fans,
            structural supports, and industrial machinery. Each unit is lifted,
            positioned, assembled, and aligned using advanced rigging techniques
            and precision measurement tools to achieve perfect operational accuracy.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            From foundation alignment and grouting to coupling alignment, vibration
            checks, trial runs, and handover, every stage is executed under strict
            supervision and performance validation. With strong technical capability
            and disciplined time management, we ensure safe, reliable, and timely
            commissioning of critical industrial equipment across multiple sectors.
          </p>
        </div>

      </div>
    </div>
  )
}

export default EquipmentErection
