import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const tickets = [
  {
    id: 1,
    query: "My debit card is blocked",
    category: "Card Issue",
    sentiment: "Negative",
    status: "Open",
    confidence: 92,
  },
  {
    id: 2,
    query: "Need home loan details",
    category: "Loan",
    sentiment: "Neutral",
    status: "Resolved",
    confidence: 88,
  },
  {
    id: 3,
    query: "Fraud transaction detected",
    category: "Fraud",
    sentiment: "Negative",
    status: "Open",
    confidence: 96,
  },
];

export default function Tickets() {
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

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Navbar */}
        <Navbar />

        {/* Page Heading */}
        <div className="mt-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Tickets Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage and monitor customer queries analyzed by AI
          </p>
        </div>

        {/* Search + Filter */}
        <div className="
          mt-6
          bg-white/70
          backdrop-blur-lg
          border border-white/30
          p-5
          rounded-3xl
          shadow-xl
          flex
          flex-col
          md:flex-row
          gap-4
        ">

          <input
            type="text"
            placeholder="Search tickets..."
            className="
              flex-1
              p-4
              rounded-2xl
              border border-gray-200
              outline-none
              focus:ring-4
              focus:ring-blue-200
            "
          />

          <select
            className="
              p-4
              rounded-2xl
              border border-gray-200
              outline-none
            "
          >
            <option>All Categories</option>
            <option>Card Issue</option>
            <option>Loan</option>
            <option>Fraud</option>
            <option>Account</option>
          </select>

        </div>

        {/* Ticket Table */}
        <div className="
          mt-6
          bg-white/70
          backdrop-blur-lg
          border border-white/30
          p-6
          rounded-3xl
          shadow-2xl
          overflow-x-auto
        ">

          <table className="w-full">

            <thead>
              <tr className="border-b text-left">
                <th className="p-4">Query</th>
                <th>Category</th>
                <th>Sentiment</th>
                <th>Status</th>
                <th>Confidence</th>
              </tr>
            </thead>

            <tbody>

              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="
                    border-b
                    hover:bg-gray-50
                    transition-all
                  "
                >

                  <td className="p-4">
                    {ticket.query}
                  </td>

                  <td>
                    <span className="
                      bg-blue-100
                      text-blue-700
                      px-4 py-1
                      rounded-full
                      text-sm
                      font-semibold
                    ">
                      {ticket.category}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        ticket.sentiment === "Negative"
                          ? "text-red-500 font-semibold"
                          : "text-yellow-500 font-semibold"
                      }
                    >
                      {ticket.sentiment}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        ticket.status === "Resolved"
                          ? "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                          : "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                      }
                    >
                      {ticket.status}
                    </span>
                  </td>

                  <td>
                    {ticket.confidence}%
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}