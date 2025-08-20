import React from "react";
import { Link, useParams } from "react-router-dom";

export default function SubmitProject() {
  const { eventId } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col">
      
      {/* ✅ Header with Home + Contact only */}
      <header className="flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">SynapHack</h1>
        <nav className="space-x-6">
          <Link 
            to="/" 
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition"
          >
            🏠 Home
          </Link>
          <Link 
            to="/contact" 
            className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg font-medium transition"
          >
            📩 Contact
          </Link>
        </nav>
      </header>

      {/* Content */}
      <div className="flex-1 container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Submit Project for Event {eventId}</h2>

        <form className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Project Title"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-blue-500 focus:outline-none"
          />
          <textarea
            placeholder="Project Description"
            rows="6"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-blue-500 focus:outline-none"
          />
          <input
            type="url"
            placeholder="GitHub Repo / Deployment Link"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg font-medium transition"
          >
            🚀 Submit
          </button>
        </form>
      </div>
    </div>
  );
}
