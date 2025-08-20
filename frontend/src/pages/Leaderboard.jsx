import React from "react";
import { Link } from "react-router-dom";

export default function Leaderboard() {
  // Fake submissions data
  const submissions = [
    { id: 1, team: "Alpha Coders", project: "Smart Crop Guard", score: 92 },
    { id: 2, team: "Hack Titans", project: "AI Tutor", score: 88 },
    { id: 3, team: "Web3 Ninjas", project: "Decentralized Voting", score: 85 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-700 text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">Submissions</h1>
        <nav>
          <Link 
            to="/" 
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            🏠 Home
          </Link>
        </nav>
      </header>

      {/* Submissions List */}
      <div className="flex flex-col items-center flex-1 py-10 px-6">
        <h2 className="text-3xl font-semibold mb-6">Project Submissions</h2>
        <div className="w-full max-w-3xl space-y-4">
          {submissions.map((sub) => (
            <div
              key={sub.id}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">{sub.team}</h3>
              <p className="text-gray-300">Project: {sub.project}</p>
              <p className="text-green-400 font-semibold">Score: {sub.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
