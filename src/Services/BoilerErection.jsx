import React from 'react'
import { assets } from '../assets/assets'

const BoilerErection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left – Image Section */}
        <div>
          <img
            src={assets.Boiler}
            alt="Boiler erection"
            className="h-[500px] object-cover rounded-xl "
          />
         
        </div>

        {/* Right – Content */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Boiler Erection Services
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Boilers are among the most critical components in power plants and
            industrial facilities, requiring precise erection to ensure reliability,
            performance, and long-term safety. At SNEPL Construction, we specialize
            in the complete erection of industrial and power boilers, handling heavy
            structures and critical alignments with highly engineered precision.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our team executes the installation of pressure parts, ducting, ESP systems,
            boiler drums, water wall panels, superheaters, economizers, air preheaters,
            ID / FD / PA fans, and fuel handling systems. Every stage is carried out in
            compliance with boiler codes, OEM specifications, and strict safety
            protocols to ensure flawless steam generation and plant efficiency.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            With advanced lifting methods, skilled rigging experts, and precision
            alignment tools, we ensure safe and timely boiler erection even in
            challenging industrial environments. From structural installation to
            hydro testing and commissioning support, SNEPL delivers boilers that are
            performance-ready and built for continuous and safe operation.
          </p>
        </div>

      </div>
    </div>
  )
}

export default BoilerErection
