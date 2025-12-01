import React from 'react'
import { assets } from '../assets/assets'

const Clientss = () => {
  const clientLogos = [
    assets.client1, assets.client2, assets.client3, assets.client4, assets.client5,
    assets.client6, assets.client7, assets.client8, assets.client9, assets.client10,
  ]

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Customers
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 h-[120px] w-[180px] flex items-center justify-center
          cursor-pointer"
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="object-contain h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clientss
