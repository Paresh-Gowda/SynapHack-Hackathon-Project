import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Event Created!\nTitle: ${title}\nDescription: ${description}`);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-700 text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">Create Event</h1>
        <nav>
          <Link 
            to="/" 
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            🏠 Home
          </Link>
        </nav>
      </header>

      {/* Form */}
      <div className="flex justify-center items-center flex-1">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-lg"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Create New Event</h2>
          
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}
