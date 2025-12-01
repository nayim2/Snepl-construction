import React from 'react'
import { assets } from '../assets/assets'

const Ashilo = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left – Image Section */}
        <div className="flex gap-4">
          <img
            src={assets.ashilo}
            alt="Ash silo construction"
            className="h-[500px] object-cover rounded-xl shadow-lg "
          />
         
        </div>

        {/* Right – Content */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Ash Silo Construction
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Ash handling infrastructure is crucial for power plants and industrial
            units operating coal-based boilers. SNEPL Construction executes complete
            ash silo construction and installation with high structural precision,
            durability, and compliance with environmental and safety standards.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our team manages all phases including silo foundation works, RCC
            fabrication, structural erection, air slide connection, conveyor and
            feeding system integration, discharge chutes, and aeration systems.
            Every installation is aligned for smooth ash flow, zero clogging, and
            safe load transfer in heavy-duty industrial environments.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            With advanced execution capability and strict quality control, we ensure
            that silos withstand continuous operational stress, extreme temperatures,
            and long-term usage. From structural assembly to testing and handover,
            SNEPL delivers ash silo systems engineered for reliability, safety, and
            effortless maintenance.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Ashilo
