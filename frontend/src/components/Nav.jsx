import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-400">SynapHack</h1>

      {/* Simple Nav */}
      <nav className="space-x-6">
        <Link
          to="/"
          className="text-gray-300 hover:text-blue-400 font-medium transition"
        >
          Home
        </Link>
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
