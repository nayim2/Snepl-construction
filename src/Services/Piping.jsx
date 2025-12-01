import React from 'react'
import { assets } from '../assets/assets'

const Piping = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left – Image (Attractive Dual Layout) */}
        <div className="flex gap-4">
          <img
            src={assets.Piping}
            alt="Piping services"
            className="h-[500px] w-1/2 object-cover rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-300"
          />

          <img
            src={assets.project6}
            alt="Piping services"
            className="h-[500px] w-1/2 object-cover rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-300"
          />
        </div>

        {/* Right – Content */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Industrial Piping Services
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Piping plays a vital role in every industrial plant, and precision during
            installation ensures safe and smooth operation of the entire system. At
            SNEPL Construction, we provide complete piping solutions from layout,
            fabrication, and installation to testing and commissioning for industrial
            and power sector applications.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our team has proven expertise in IBR piping, cooling water piping,
            compressed air and steam piping, oil piping, and gas piping systems. We
            follow strict adherence to engineering drawings, isometric interpretations,
            and safety parameters to maintain pressure and temperature integrity.
            Every joint, weld, and connection is checked using certified inspection
            methods and advanced NDT procedures to ensure long-term reliability.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            From pipe routing and material handling to hydro testing, pneumatic
            testing, flushing, and system handover, our piping division ensures
            zero leakage, accurate alignment, and compliance with quality standards.
            Whether it is a power plant, refinery, steel plant, or manufacturing
            industry, we deliver highly durable piping networks that support trouble-free
            plant performance and operational safety.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Piping
