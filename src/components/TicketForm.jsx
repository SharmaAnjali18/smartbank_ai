import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function TicketForm() {

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(
        "http://localhost:8000/api/tickets",
        { query }
      );

      setQuery("");
    }
    catch(err) {
      console.log(err);
    }

    setLoading(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/70 backdrop-blur-lg border border-white/30 p-6 rounded-3xl shadow-2xl mt-6"
    >

      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        AI Query Analyzer
      </h2>

      <form
        onSubmit={submit}
        className="flex flex-col md:flex-row gap-4"
      >

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter customer banking query..."
          className="flex-1 p-4 rounded-2xl border border-gray-200 outline-none focus:ring-4 focus:ring-blue-200"
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl"
        >
          {
            loading
            ? "Analyzing..."
            : "Analyze with AI"
          }
        </button>

      </form>

    </motion.div>
  );
}