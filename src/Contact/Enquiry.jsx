import React from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const Enquiry = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
      {/* Left Section */}
      <div className="space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          READY TO START <br /> YOUR NEXT PROJECT?
        </h1>

        <p className="text-gray-500 max-w-[430px]">
          Send us your requirements and our experts will get in touch with you
          within 24 hours. We’re always open to new collaborations and long-term
          partnerships.
        </p>

        <div className="flex items-start gap-3 text-gray-700">
          <FiMapPin className="text-yellow-500 text-xl mt-1" />
          <span>
            Based on India Khata no.-279/26, Mansada, alarpur, jajpur,
            odisha-755012.
          </span>
        </div>

        <div className="flex items-start gap-3 text-gray-700">
          <FiMail className="text-yellow-500 text-xl mt-1" />
          <span>contact@satyanarayaniepl@gmail.com</span>
        </div>

        <div className="flex items-start gap-3 text-gray-700">
          <FiPhone className="text-yellow-500 text-xl mt-1" />
          <span>+91 +91 73813 02181</span>
        </div>
      </div>

      {/* Right Section – Form */}
      <form className="space-y-6">
        {/* Name + Email */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-bold text-gray-600">NAME</label>
            <input
              type="text"
              className="w-full border-2 border-yellow-500 focus:border-yellow-600 outline-none px-4 py-3 rounded-sm text-gray-700"
              placeholder="Name"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-600">EMAIL</label>
            <input
              type="email"
              className="w-full border-[2px] border-gray-400 focus:border-yellow-600 outline-none px-4 py-3 rounded-sm text-gray-700"
              placeholder="Email"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="text-xs font-bold text-gray-600">SUBJECT</label>
          <select className="w-full border-[2px] border-gray-400 focus:border-yellow-600 outline-none px-4 py-3 rounded-sm text-gray-700">
            <option>Please Select</option>
            <option>Project Enquiry</option>
            <option>Service Request</option>
            <option>Partnership</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="text-xs font-bold text-gray-600">MESSAGE</label>
          <textarea
            rows="5"
            className="w-full border-[2px] border-gray-400 focus:border-yellow-600 outline-none px-4 py-3 rounded-sm text-gray-700 resize-none"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 transition text-gray-900 px-8 py-3 font-semibold rounded-sm"
        >
          Send Enquiry
        </button>
      </form>
    </div>
  );
};

export default Enquiry;
