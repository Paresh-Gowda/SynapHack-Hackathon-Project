import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-8">
      <p>
        © {new Date().getFullYear()} SynapHack Platform · Built for Hackathon 🚀
      </p>
    </footer>
  );
}
