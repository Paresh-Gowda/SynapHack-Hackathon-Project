import React from "react";
import Navbar from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-6 py-8">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
