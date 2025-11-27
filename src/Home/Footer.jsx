import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 text-black pt-12">
      {/* MAIN FOOTER */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold uppercase">SNEPL Construction</h2>
          <p className="text-red-600 font-medium mt-1">
            “Engineering Excellence With Precision”
          </p>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            A trusted partner for industrial fabrication, erection and
            commissioning across India — delivering high-quality engineering,
            safety and on-time execution.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {["F", "T", "L", "W"].map((s, i) => (
              <span
                key={i}
                className="bg-gray-200 hover:bg-red-500 hover:text-white text-gray-700 px-3 py-2 rounded-full font-semibold cursor-pointer transition"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Google Map */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-sm w-full max-w-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3701.807300939698!2d83.404867!3d21.903495000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDU0JzEyLjYiTiA4M8KwMjQnMTcuNSJF!5e0!3m2!1sen!2sin!4v1764220913983!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4 text-lg uppercase">Contact Us</h3>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <FaPhone size={18} /> +91 99371 18943
            </li>
            <li className="flex items-center gap-3">
              <FaPhone size={18} /> +91 95832 64743
            </li>
            <li className="flex items-center gap-3">
              <FaPhone size={18} /> +91 73813 02181
            </li>
          </ul>

          <p className="text-gray-700 flex items-center gap-3 mt-4">
            <MdEmail size={20} /> satyanarayaniepl@gmail.com
          </p>

          <p className="text-gray-700 flex items-start gap-3 mt-4 leading-relaxed">
            <FaLocationDot size={24} />
            <span>
              AT – Dalimba Goradi, New Bus Stand, Beherasahi Road, <br />
              PO – Konark, PS – Konark, Puri – 752111
            </span>
          </p>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <p className="text-center bg-gray-800 p-4 text-white text-sm md:text-[15px] mt-4">
        © 2025 All Rights Reserved. Developed By{" "}
        <a
          href="https://zoranetworks.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-red-400 hover:text-red-500 transition"
        >
          Zora Networks
        </a>
      </p>
    </footer>
  );
};

export default Footer;
