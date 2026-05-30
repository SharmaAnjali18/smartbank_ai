import {
  FaHome,
  FaChartPie,
  FaTicketAlt,
  FaRobot
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Sidebar() {

  return (
    <div className="
      w-64
      min-h-screen
      bg-gray-900
      text-white
      p-6
    ">

      {/* Logo */}

      <div className="flex items-center gap-3 mb-10">

        <div className="bg-blue-600 p-3 rounded-xl">
          <FaRobot size={24} />
        </div>

        <div>
          <h1 className="text-2xl font-bold">
            SmartBank
          </h1>

          <p className="text-gray-400 text-sm">
            AI Dashboard
          </p>
        </div>

      </div>

      {/* Navigation */}

      <div className="space-y-4">

        <Link
          to="/"
          className="
          flex items-center gap-3
          bg-blue-600
          p-4 rounded-xl
          hover:scale-105
          transition-all duration-300
        "
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/tickets"
          className="
          flex items-center gap-3
          p-4 rounded-xl
          hover:bg-gray-800
          transition-all duration-300
        "
        >
          <FaTicketAlt />
          Tickets
        </Link>

        <Link
          to="/analytics"
          className="
          flex items-center gap-3
          p-4 rounded-xl
          hover:bg-gray-800
          transition-all duration-300
        "
        >
          <FaChartPie />
          Analytics
        </Link>

      </div>

    </div>
  );
}