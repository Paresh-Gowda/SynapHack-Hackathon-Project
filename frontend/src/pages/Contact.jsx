import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for reporting!\nYour message: ${message}`);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-700 text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">Contact Us</h1>
        <nav>
          <Link 
            to="/" 
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            🏠 Home
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-2xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>
          <p className="text-gray-300 mb-6 text-justify leading-relaxed">
            At <span className="font-semibold text-blue-400">SynapHack</span>, 
            we believe in fostering innovation and discovering hidden talent. 
            Our hackathons are designed to challenge, inspire, and connect bright minds 
            from across disciplines. Whether you are here to compete, learn, or collaborate, 
            we strive to provide a platform where creativity meets real-world impact.
            <br /><br />
            If you have questions, ideas, or face any issues, feel free to reach out to us. 
            Your feedback helps us improve and build better experiences for every participant.
          </p>

          {/* Contact Info */}
          <div className="mb-6">
            <p><strong>Name:</strong> Paresh R</p>
            <p><strong>Email:</strong> pareshgowda16@gmail.com</p>
            <p><strong>Phone:</strong> 6361727612</p>
          </div>

          {/* Report a Problem Form */}
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="mb-2 font-medium">Report a Problem:</label>
            <textarea
              placeholder="Describe the mistake or issue..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition"
            >
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
