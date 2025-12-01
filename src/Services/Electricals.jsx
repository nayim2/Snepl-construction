import React from 'react'
import { assets } from '../assets/assets'

const Electricals = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left – Image Section */}
        <div className="flex gap-4">
          <img
            src={assets.project3}
            alt="Electrical services"
            className="h-[500px] w-1/2 object-cover rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-300"
          />
          <img
            src={assets.project4}
            alt="Electrical services"
            className="h-[500px] w-1/2 object-cover rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-300"
          />
        </div>

        {/* Right – Content */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Industrial Electrical Work
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Electrical systems form the backbone of every industry, and precise
            installation ensures safety, performance, and equipment longevity. SNEPL
            Construction delivers complete industrial electrical services — right
            from cabling and power distribution to installation and integration of
            electrical equipment for new and existing plants.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our scope covers LT & HT cabling, cable tray installation, earthing and
            lightning protection systems, transformer and panel installation, motor
            and pump wiring, MCC / PCC connections, and control system integration.
            All electrical works are executed in accordance with statutory safety
            standards, OEM specifications, and industrial electrical codes.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our certified electricians and engineers follow a stringent testing and
            inspection process that includes insulation resistance testing, loop
            testing, relay testing, load testing, and trial runs. Whether the
            requirement is power distribution, industrial automation, or heavy
            electrical installation, we ensure long-term reliability with maximum
            operational safety.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Electricals
