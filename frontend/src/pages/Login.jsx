import React from "react";
import { Link } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-700 flex flex-col text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">SynapHack</h1>
        <nav className="space-x-6">
          <Link to="/" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">🏠 Home</Link>
        </nav>
      </header>

      {/* Login Form */}
      <div className="flex justify-center items-center flex-1">
        <form
          onSubmit={handleLogin}
          className="bg-gray-900 p-8 rounded-xl shadow-lg w-96"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-700" />
          <input type="password" placeholder="Password" className="w-full p-3 mb-6 rounded bg-gray-800 border border-gray-700" />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">Login</button>
        </form>
      </div>
    </div>
  );
}
