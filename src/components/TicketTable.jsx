const tickets = [
  {
    id: 1,
    query: "My debit card is blocked",
    category: "Card Issue",
    sentiment: "Negative",
    confidence: 92
  },
  {
    id: 2,
    query: "Need loan details",
    category: "Loan",
    sentiment: "Neutral",
    confidence: 87
  }
]

export default function TicketTable() {
        return (
    <div className="bg-white/70 backdrop-blur-lg border border-white/30 p-6 rounded-3xl shadow-2xl mt-6 overflow-x-auto">

      <h2 className="text-2xl font-bold mb-6">
        Recent Tickets
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b text-left">
            <th className="p-4">Query</th>
            <th>Category</th>
            <th>Sentiment</th>
            <th>Confidence</th>
          </tr>
        </thead>

        <tbody>

          {tickets.map((ticket) => (
            <tr
              key={ticket.id}
              className="border-b hover:bg-gray-50 transition-all"
            >

              <td className="p-4">
                {ticket.query}
              </td>

              <td>
                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                  {ticket.category}
                </span>
              </td>

              <td>
                <span className={
                  ticket.sentiment === "Negative"
                  ? "text-red-500 font-semibold"
                  : "text-green-500 font-semibold"
                }>
                  {ticket.sentiment}
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
  );
}