import {
  FaTicketAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRobot
} from "react-icons/fa";

const cards = [
  {
    title: "Total Tickets",
    value: 124,
    icon: <FaTicketAlt size={24} />,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Negative Queries",
    value: 37,
    icon: <FaExclamationTriangle size={24} />,
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Resolved",
    value: 86,
    icon: <FaCheckCircle size={24} />,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "AI Processed",
    value: 98,
    icon: <FaRobot size={24} />,
    color: "from-purple-500 to-indigo-600"
  }
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className={`bg-gradient-to-r ${card.color} text-white p-6 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300`}
        >

          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">
                {card.title}
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {card.value}
              </h2>
            </div>

            <div>
              {card.icon}
            </div>
          </div>

        </div>
      ))}

    </div>
  );
}