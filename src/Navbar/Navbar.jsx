import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { assets } from "../assets/assets";

const Navbar = () => {
  const menus = [
    { name: "Home", link: "/" },

    {
      name: "About Us",
      sub: [
        { label: "Company Overview", link: "/about/company-overview" },
        { label: "Resources", link: "/about/resources" },
        { label: "Director Message", link: "/about/director-message" }
      ],
    },

    {
      name: "Services",
      sub: [
        { label: "Fabrication", link: "/services/products" },
        { label: "Eriction", link: "/services" },
        { label: "Comissioning", link: "/services/solutions" },
        { label: "Hydraulic Gas", link: "/services/solutions" },
        { label: "Oil & water lines", link: "/services/solutions" },
      ],
    },

    {
      name: "Our Customers",
      link:'/'
    },

    {
      name: "Gallery",
      sub: [
        { label: "Photos", link: "/gallery/photos" },
        { label: "Videos", link: "/gallery/videos" },
        { label: "Events", link: "/gallery/events" },
      ],
    },

    { name: "Enquiry", link: "/enquiry" },
    { name: "Contact Us", link: "/contact" },
  ];

  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <div className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">

        {/* Logo */}
        <img src={assets.logo} alt="logo" className="h-[80px] object-contain" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-12">
          {menus.map((m, i) => (
            <li
              key={i}
              className="relative group cursor-pointer"
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen(null)}
            >
              <a
                href={m.link ?? "#"}
                className="text-[15px] font-medium text-gray-800 hover:text-red-500 transition"
              >
                {m.name}
              </a>

              {m.sub && <FaChevronDown className="inline-block ml-1 text-[10px]" />}

              {/* Desktop Dropdown */}
              {m.sub && open === i && (
                <div className="absolute top-6 left-0 bg-white shadow-md py-2 w-52 rounded-md z-50">
                  {m.sub.map((s, j) => (
                    <a
                      key={j}
                      href={s.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-sm animate-fadeIn">
          {menus.map((m, i) => (
            <div key={i}>
              <button
                className="flex justify-between items-center w-full text-left py-2 text-gray-800 font-medium"
                onClick={() =>
                  m.sub ? setMobileDropdown(mobileDropdown === i ? null : i) : null
                }
              >
                {m.link ? (
                  <a href={m.link} className="w-full text-left">
                    {m.name}
                  </a>
                ) : (
                  <span>{m.name}</span>
                )}

                {m.sub && (
                  <FaChevronDown
                    className={`transition ${
                      mobileDropdown === i ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Mobile Dropdown */}
              {m.sub && mobileDropdown === i && (
                <div className="bg-gray-50 rounded-md mb-2">
                  {m.sub.map((s, j) => (
                    <a
                      key={j}
                      href={s.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
