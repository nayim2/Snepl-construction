import React from 'react'
import { assets } from '../assets/assets'

const Video = () => {
  const videos = [
    assets.video1,
    assets.video2,
  ]

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-16">

      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Project Videos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {videos.map((video, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <video
              src={video}
              controls
              className="w-full h-[350px] object-cover"
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Video
