import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid
} from "recharts";

const categoryData = [
  { name: "Card", value: 40 },
  { name: "Loan", value: 25 },
  { name: "Fraud", value: 15 },
  { name: "Account", value: 20 },
];

const sentimentData = [
  { name: "Positive", count: 35 },
  { name: "Neutral", count: 25 },
  { name: "Negative", count: 40 },
];

const monthlyData = [
  { month: "Jan", tickets: 20 },
  { month: "Feb", tickets: 35 },
  { month: "Mar", tickets: 28 },
  { month: "Apr", tickets: 50 },
  { month: "May", tickets: 45 },
];

export default function Analytics() {

  return (
    <div className="
      flex
      min-h-screen
      bg-gradient-to-br
      from-slate-100
      via-blue-50
      to-indigo-100
    ">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 p-6">

        {/* Navbar */}
        <Navbar />

        {/* Heading */}
        <div className="mt-6">
          <h1 className="text-4xl font-bold text-gray-800">
            AI Analytics Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Visual insights from customer banking queries
          </p>
        </div>

        {/* Top Cards */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          mt-6
        ">

          <div className="
            bg-gradient-to-r
            from-blue-500
            to-indigo-600
            text-white
            p-6
            rounded-3xl
            shadow-2xl
          ">
            <h3>Total Queries</h3>

            <p className="text-4xl font-bold mt-3">
              124
            </p>
          </div>

          <div className="
            bg-gradient-to-r
            from-red-500
            to-pink-500
            text-white
            p-6
            rounded-3xl
            shadow-2xl
          ">
            <h3>Negative Sentiment</h3>

            <p className="text-4xl font-bold mt-3">
              40
            </p>
          </div>

          <div className="
            bg-gradient-to-r
            from-green-500
            to-emerald-600
            text-white
            p-6
            rounded-3xl
            shadow-2xl
          ">
            <h3>Resolved Tickets</h3>

            <p className="text-4xl font-bold mt-3">
              86
            </p>
          </div>

          <div className="
            bg-gradient-to-r
            from-purple-500
            to-indigo-600
            text-white
            p-6
            rounded-3xl
            shadow-2xl
          ">
            <h3>AI Accuracy</h3>

            <p className="text-4xl font-bold mt-3">
              92%
            </p>
          </div>

        </div>

        {/* Charts */}
        <div className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
          mt-6
        ">

          {/* Pie Chart */}
          <div className="
            bg-white/70
            backdrop-blur-lg
            border border-white/30
            p-6
            rounded-3xl
            shadow-2xl
          ">

            <h2 className="text-2xl font-bold mb-5">
              Category Distribution
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  outerRadius={100}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

          </div>

          {/* Bar Chart */}
          <div className="
            bg-white/70
            backdrop-blur-lg
            border border-white/30
            p-6
            rounded-3xl
            shadow-2xl
          ">

            <h2 className="text-2xl font-bold mb-5">
              Sentiment Analysis
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sentimentData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="count"
                  radius={[10,10,0,0]}
                />
              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* Line Chart */}
        <div className="
          mt-6
          bg-white/70
          backdrop-blur-lg
          border border-white/30
          p-6
          rounded-3xl
          shadow-2xl
        ">

          <h2 className="text-2xl font-bold mb-5">
            Monthly Ticket Trends
          </h2>

          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="tickets"
                strokeWidth={4}
              />

            </LineChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}