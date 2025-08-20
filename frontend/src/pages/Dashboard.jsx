import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard({ isLoggedIn, onLogout }) {
  const events = [
    { id: 1, title: "Demo Hackathon", description: "Demo event for SynapHack" },
    { id: 2, title: "AI Challenge", description: "Build something awesome with AI 🚀" },
    { id: 3, title: "Web3 Hack", description: "Explore blockchain & decentralized apps" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-700 text-white flex flex-col">
      {/* Navbar - only for home */}
      <header className="flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">SynapHack</h1>

        <nav className="space-x-6">
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition"
            >
              🔑 Login
            </Link>
          ) : (
            <>
              <Link
                to="/create-event"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-medium transition"
              >
                🎉 Create Event
              </Link>
              <Link
                to="/leaderboard"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition"
              >
                📊 Submissions
              </Link>
              <button
                onClick={onLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition"
              >
                🚪 Logout
              </button>
            </>
          )}
          <Link
            to="/contact"
            className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg font-medium transition"
          >
            📩 Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to SynapHack</h1>
        <p className="text-lg text-gray-200">
          Collaborate, Compete & Create Innovative Solutions
        </p>
      </section>

      {/* Events */}
      <section className="flex-1 container mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Ongoing Events</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <Link
                to={`/event/${event.id}`}  
                className="inline-block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-6 text-center text-gray-400 border-t border-gray-800">
        © {new Date().getFullYear()} SynapHack · Built for Hackathon 🚀
      </footer>
    </div>
  );
}
