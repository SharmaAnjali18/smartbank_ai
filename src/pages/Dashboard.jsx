import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import TicketForm from "../components/TicketForm";
import ChartsSection from "../components/ChartsSection";
import TicketTable from "../components/TicketTable";

export default function Dashboard() {

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
      <div className="flex-1 p-6 overflow-y-auto">

        {/* Navbar */}
        <Navbar />

        {/* Stats Cards */}
        <StatsCards />

        {/* AI Query Form */}
        <TicketForm />

        {/* Charts */}
        <ChartsSection />

        {/* Ticket Table */}
        <TicketTable />

      </div>

    </div>
  );
}