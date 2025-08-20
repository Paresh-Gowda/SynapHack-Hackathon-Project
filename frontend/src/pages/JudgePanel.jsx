import React from "react";

export default function JudgePanel() {
  const submissions = [
    { id: 1, team: "Alpha Coders", project: "AI Chatbot" },
    { id: 2, team: "Hack Masters", project: "Blockchain Voting System" },
    { id: 3, team: "Web Wizards", project: "Smart Healthcare App" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-700 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Judge Panel</h1>
      <p className="mb-6 text-gray-200">
        Here judges can review and score submissions.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {submissions.map((submission) => (
          <div
            key={submission.id}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold mb-2">{submission.team}</h2>
            <p className="text-gray-300 mb-4">{submission.project}</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
              Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
