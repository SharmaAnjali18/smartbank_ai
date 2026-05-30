import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

export default function ChartsSection() {

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

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

      <div className="bg-white/70 backdrop-blur-lg border border-white/30 p-6 rounded-3xl shadow-2xl hover:scale-[1.02] transition-all duration-300">

        <h2 className="text-xl font-bold mb-5">
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

      <div className="bg-white/70 backdrop-blur-lg border border-white/30 p-6 rounded-3xl shadow-2xl hover:scale-[1.02] transition-all duration-300">

        <h2 className="text-xl font-bold mb-5">
          Sentiment Analysis
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sentimentData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" radius={[10,10,0,0]} />
          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}