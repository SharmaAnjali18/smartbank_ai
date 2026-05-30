export default function Navbar() {
  return (
    <div className="bg-white/70 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-5 flex justify-between items-center">

      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Customer Support Dashboard
        </h2>

        <p className="text-gray-500 mt-1">
          AI-powered banking analytics system
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/50"
          className="rounded-full"
          alt="admin"
        />

        <div>
          <h3 className="font-semibold">Admin</h3>
          <p className="text-sm text-gray-500">Support Manager</p>
        </div>
      </div>

    </div>
  );
}