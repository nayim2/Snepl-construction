import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 min-h-screen">
        {/* LEFT – Map with gradient overlay */}
        {/* LEFT – Contact info + map */}
        <div
          className="relative bg-cover bg-center text-white px-10 py-16 flex flex-col justify-between"
          style={{
            backgroundImage: `url('/map-bg.png')`,
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative space-y-4">
            <h1 className="text-5xl font-bold leading-tight">Contact Us</h1>
            <p className="text-gray-300 max-w-[420px] text-lg">
              Let’s talk about your project and find the best way to work
              together. We respond to all enquiries within 24 hours.
            </p>

            <div className="space-y-4 mt-8 text-gray-300 text-sm">
              <div className="flex items-center gap-3 leading-relaxed">
                <MdLocationOn  className="text-white text-lg" />
                <span>SNEPL Construction, Odisha, India</span>
              </div>

              <div className="flex items-center gap-3 leading-relaxed">
                <FaMessage className="text-white text-lg" />
                <span>contact@sneplconstruction.com</span>
              </div>

              <div className="flex items-center gap-3 leading-relaxed">
                <FaPhone className="text-white text-lg" />
                <span>+91 73813 02181</span>
              </div>
            </div>
          </div>

          {/* Map container */}
          <div className="relative rounded-xl overflow-hidden shadow-lg mt-10 w-full max-w-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3701.807300939698!2d83.404867!3d21.903495000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDU0JzEyLjYiTiA4M8KwMjQnMTcuNSJF!5e0!3m2!1sen!2sin!4v1764220913983!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT – Contact Form */}
        <div className="bg-white p-10 md:p-16 flex items-center justify-center shadow-lg">
          <form className="w-full max-w-[480px] space-y-10">
            <h3 className="text-sm font-semibold tracking-widest text-gray-600">
              CONTACT FORM
            </h3>

            {/* Inputs */}
            <div className="space-y-8">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  required
                  className="peer w-full border-b border-gray-300 focus:border-red-500 outline-none pb-2 transition bg-transparent"
                />
                <label className="absolute left-0 top-0 text-gray-400 text-sm peer-focus:text-xs peer-focus:-top-4 peer-focus:text-red-500 transition-all duration-200">
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  required
                  className="peer w-full border-b border-gray-300 focus:border-red-500 outline-none pb-2 transition bg-transparent"
                />
                <label className="absolute left-0 top-0 text-gray-400 text-sm peer-focus:text-xs peer-focus:-top-4 peer-focus:text-red-500 transition-all duration-200">
                  E-mail
                </label>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="text"
                  required
                  className="peer w-full border-b border-gray-300 focus:border-red-500 outline-none pb-2 transition bg-transparent"
                />
                <label className="absolute left-0 top-0 text-gray-400 text-sm peer-focus:text-xs peer-focus:-top-4 peer-focus:text-red-500 transition-all duration-200">
                  Phone
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  rows="4"
                  required
                  className="peer w-full border-b border-gray-300 focus:border-red-500 outline-none pb-2 transition bg-transparent resize-none"
                ></textarea>
                <label className="absolute left-0 top-0 text-gray-400 text-sm peer-focus:text-xs peer-focus:-top-4 peer-focus:text-red-500 transition-all duration-200">
                  Message
                </label>
              </div>
            </div>

            {/* Send Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="relative bg-red-500 text-white px-10 py-3 font-semibold tracking-widest text-sm rounded-sm shadow-md
        hover:bg-red-600 hover:shadow-xl transition-all duration-300 group"
              >
                <span className="pr-2 group-hover:pr-4 transition-all">
                  SEND MESSAGE
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-all">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
