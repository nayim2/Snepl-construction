import React from "react";
import {
  FaUserTie,
  FaHardHat,
  FaShieldAlt,
  FaTools,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const teamData = [
  {
    title: "Head – HR & Finance",
    icon: <FaUserTie className="text-red-500 text-3xl mb-3" />,
    members: [
      "Mr. Srikant Sahoo – 15+ years of experience in SIGMA, Mother Dairy, HERO & ICICI Group. Expert in Finance, Client Relations & Project Coordination."
    ],
  },
  {
    title: "QC Engineers",
    icon: <FaTools className="text-red-500 text-3xl mb-3" />,
    members: [
      "A.K. Mohanty",
      "Niranjan Sahoo",
      "P.K. Barik",
      "Saheswar Sahoo"
    ],
  },
  {
    title: "Safety Officers",
    icon: <FaShieldAlt className="text-red-500 text-3xl mb-3" />,
    members: ["S. Sahu", "Rajesh Mohanty", "Prabina Sahu", "Biswajeet Sahoo"],
  },
  {
    title: "Senior Engineer",
    icon: <FaHardHat className="text-red-500 text-3xl mb-3" />,
    members: ["Sarbeswar Sahoo", "Satya Narayan Bhoi"],
  },
  {
    title: "Engineers",
    icon: <FaHardHat className="text-red-500 text-3xl mb-3" />,
    members: [
      "A. K. Rout",
      "D. Pradhan"
    ],
  },
  {
    title: "Assistant Engineer",
    icon: <FaHardHat className="text-red-500 text-3xl mb-3" />,
    members: ["M. K. Nayak"],
  },
  {
    title: "Supervisors",
    icon: <FaUsers className="text-red-500 text-3xl mb-3" />,
    members: [
      "Nrusingh Charan Das",
      "Birendra Narayan Patra",
      "Biswa Ranjan Sahoo",
      "Tankadhara Sahu",
      "Parbin Kumar Berman",
      // additional from manpower list
      "Radhakant Sahoo",
      "Santosh Das",
      "Keshav Biswal"
    ],
  },
];

const highlights = [
  "Strong industrial experience across multiple project domains",
  "Safety-focused execution with discipline and precision",
  "Dedication to timelines, client satisfaction and quality",
  "Culture of teamwork, accountability and continuous improvement",
];

const HumanResource = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900">
        Our Human Resource Strength
      </h2>
      <p className="text-center text-gray-600 mt-3 max-w-[850px] mx-auto">
        Our people are the backbone of our success — a skilled and dedicated workforce
        driving quality, safety and engineering excellence across India.
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {teamData.map((team, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-7 hover:-translate-y-2 transition-all duration-300 text-center"
          >
            {team.icon}
            <h3 className="font-semibold text-xl text-gray-800 mb-4">{team.title}</h3>
            <ul className="space-y-2 text-gray-600">
              {team.members.map((member, i) => (
                <li key={i} className="leading-relaxed">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Highlight Section */}
      <div className="bg-[#fff7f7] mt-20 p-10 rounded-xl shadow-inner border">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
          What Makes Our Team Exceptional
        </h3>
        <ul className="grid md:grid-cols-2 gap-4 max-w-[900px] mx-auto">
          {highlights.map((point, index) => (
            <li key={index} className="flex items-start text-gray-700 gap-2">
              <FaCheckCircle className="text-red-500 mt-1" />
              {point}
            </li>
          ))}
        </ul>

        <p className="text-center text-gray-700 mt-8 text-lg max-w-[850px] mx-auto leading-relaxed">
          <span className="font-semibold text-gray-900">
            Our team is more than a workforce —
          </span>{" "}
          it is a driving force of innovation, discipline and engineering excellence that
          empowers SNEPL Construction to deliver high-performance industrial solutions across India.
        </p>
      </div>

      <h3 className="text-center text-2xl font-semibold text-red-600 mt-14">
        “SNEPL – Excelling Everyday in Engineering”
      </h3>
    </div>
  );
};

export default HumanResource;
