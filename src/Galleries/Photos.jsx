import React from 'react'
import { assets } from '../assets/assets'

const Photos = () => {
  const photos = [
    assets.project1, assets.project2, assets.project3, assets.project4, assets.project5,
    assets.project6, assets.project7, assets.project8, assets.project9, assets.project10,
    assets.project11, assets.project12, assets.project13, assets.project14, assets.project15,
  ]

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-16">
      
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Project Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <img
              src={photo}
              alt={`Project ${index + 1}`}
              className="w-full h-[260px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Photos
