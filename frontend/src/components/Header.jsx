import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ isLoggedIn, onLogout }) {
  const location = useLocation();

  // Only Home + Contact on all non-dashboard pages
  if (location.pathname === "/contact") {
    return (
      <header className="flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">SynapHack</h1>
        <nav className="space-x-6">
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition">
            🏠 Home
          </Link>
        </nav>
      </header>
    );
  }

  if (location.pathname === "/") {
    return (
      <header className="flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">SynapHack</h1>
        <nav className="space-x-6">
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition"
            >
              🚪 Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition"
            >
              🔑 Login
            </Link>
          )}
          <Link
            to="/contact"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition"
          >
            📩 Contact
          </Link>
        </nav>
      </header>
    );
  }

  // For other pages: show Home + Contact
  return (
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
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition"
        >
          📩 Contact
        </Link>
      </nav>
    </header>
  );
}
