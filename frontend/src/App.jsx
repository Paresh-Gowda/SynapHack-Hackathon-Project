import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SubmitProject from "./pages/SubmitProject";
import JudgePanel from "./pages/JudgePanel";
import Leaderboard from "./pages/Leaderboard";
import CreateEvent from "./pages/CreateEvent"; 
import EventDetail from "./pages/EventDetail"; 
import Contact from "./pages/Contact";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
        />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/submit/:eventId" element={<SubmitProject />} />
        <Route path="/judge/:eventId" element={<JudgePanel />} />
        <Route
          path="/create-event"
          element={
            isLoggedIn ? (
              <CreateEvent />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/leaderboard"
          element={
            isLoggedIn ? (
              <Leaderboard />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
