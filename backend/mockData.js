// In-memory mock data
let users = [
  { id: "1", name: "Organizer", email: "org@example.com", password: "pass123", role: "organizer" },
  { id: "2", name: "Participant", email: "part@example.com", password: "pass123", role: "participant" },
  { id: "3", name: "Judge", email: "judge@example.com", password: "pass123", role: "judge" }
];

let events = [
  { id: "101", title: "Demo Hackathon", description: "Demo event for SynapHack", organizer: "1" }
];

let submissions = [];
let scores = [];

module.exports = { users, events, submissions, scores };
